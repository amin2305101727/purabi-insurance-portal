import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { HealthInsurance } from '../pages/HealthInsurance';
import { Contact } from '../pages/Contact';
import { UnderConstruction } from '../pages/UnderConstruction';
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
      {/* Unbuilt / In-progress feature routes */}
      <Route
        path="/services"
        element={<UnderConstruction onOpenQuote={openQuote} />}
      />
      <Route
        path="/services/:category"
        element={<UnderConstruction onOpenQuote={openQuote} />}
      />
      <Route
        path="/claims"
        element={<UnderConstruction onOpenQuote={openQuote} />}
      />
      <Route
        path="/claims/:action"
        element={<UnderConstruction onOpenQuote={openQuote} />}
      />
      <Route
        path="/blogs"
        element={<UnderConstruction onOpenQuote={openQuote} />}
      />
      <Route
        path="/contact"
        element={<Contact onOpenQuote={openQuote} />}
      />
      {/* Catch-all fallback for any other unbuilt page */}
      <Route
        path="*"
        element={<UnderConstruction onOpenQuote={openQuote} />}
      />
    </Routes>
  );
};

export default AppRoutes;
