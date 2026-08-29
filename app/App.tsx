import React, { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { AppRoutes } from './routes/index';

/**
 * Automatically scrolls window to top on route change
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </BrowserRouter>
  );
}
