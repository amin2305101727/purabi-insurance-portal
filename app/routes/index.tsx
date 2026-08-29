import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { HealthInsurance } from '../pages/HealthInsurance';
import { useLayout } from '../layout/MainLayout';

export const AppRoutes: React.FC = () => {
  const { openQuote, openClaimTracker, openVideo } = useLayout();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            onOpenQuote={openQuote}
            onOpenClaimTracker={openClaimTracker}
            onOpenVideo={openVideo}
          />
        }
      />
      <Route
        path="/about"
        element={
          <About
            onOpenClaimTracker={openClaimTracker}
            onOpenVideo={openVideo}
            onOpenQuote={() => openQuote('health')}
          />
        }
      />
      <Route
        path="/health-insurance"
        element={
          <HealthInsurance
            onOpenQuote={openQuote}
          />
        }
      />
      <Route
        path="/services/health"
        element={
          <HealthInsurance
            onOpenQuote={openQuote}
          />
        }
      />
      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
