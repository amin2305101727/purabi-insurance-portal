import 'dotenv/config';
import express from 'express';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, 'dist');

const app = express();
const port = Number(process.env.PORT || 4000);

app.use(express.json());

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
}

const quotes = new Map();
const applications = new Map();

const rates = {
  health: 0.025,
  fire: 0.008,
  motor: 0.015,
  marine: 0.006,
  travel: 0.003,
  engineering: 0.012,
};

const isValidPhone = (phone) => /^(?:\+?8801|8801|01)[1-9]\d{7,9}$/.test(phone.replace(/[\s\-().]/g, ''));

const calculateQuote = (category, coverage) => {
  const rate = rates[category] || 0.02;
  const premium = Math.max(1200, Math.round(coverage * rate));
  const vat = Math.round(premium * 0.15);

  return { premium, vat, total: premium + vat };
};

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'Purabi General Insurance API' });
});

app.post('/api/quotes', (request, response) => {
  const { category, name, phone, email = '', coverage } = request.body;
  const numericCoverage = Number(coverage);

  if (!category || !name?.trim() || !isValidPhone(phone || '') || !Number.isFinite(numericCoverage) || numericCoverage <= 0) {
    return response.status(400).json({ message: 'Please provide valid quote details.' });
  }

  const quote = {
    id: `PGICL-QUO-${crypto.randomUUID().slice(0, 8).toUpperCase()}`,
    category,
    name: name.trim(),
    phone: phone.trim(),
    email: email.trim(),
    coverage: numericCoverage,
    ...calculateQuote(category, numericCoverage),
    createdAt: new Date().toISOString(),
  };

  quotes.set(quote.id, quote);
  return response.status(201).json(quote);
});

app.post('/api/applications', (request, response) => {
  const { quoteId } = request.body;
  const quote = quotes.get(quoteId);

  if (!quote) {
    return response.status(404).json({ message: 'Quote not found or expired.' });
  }

  const application = {
    id: `PGICL-APP-${crypto.randomUUID().slice(0, 8).toUpperCase()}`,
    quoteId,
    status: 'received',
    createdAt: new Date().toISOString(),
  };

  applications.set(application.id, application);
  return response.status(201).json(application);
});

app.get('/api/claims/:reference', (request, response) => {
  const reference = request.params.reference.toUpperCase();

  const claimStatuses = {
    'CLM-2025-8841': 'Approved',
    'CLM-2025-9102': 'Surveyor Assigned',
    'CLM-2024-8891': 'Approval & Processing',
  };

  if (!claimStatuses[reference]) {
    return response.status(404).json({ message: 'No claim was found for this reference.' });
  }

  return response.json({
    reference,
    status: claimStatuses[reference],
    updatedAt: new Date().toISOString(),
  });
});

// SPA fallback for client-side routing
if (fs.existsSync(distPath)) {
  app.get('*', (request, response, next) => {
    if (request.path.startsWith('/api')) {
      return next();
    }
    response.sendFile(path.join(distPath, 'index.html'));
  });
}

app.use((error, _request, response, _next) => {
  console.error(error);
  response.status(500).json({ message: 'Something went wrong on the server.' });
});

app.listen(port, () => {
  console.log(`Purabi API running at http://localhost:${port}`);
});