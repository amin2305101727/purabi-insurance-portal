import React, { useState, createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { TopHeader } from '../components/TopHeader';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ClaimTrackerModal } from '../components/ClaimTrackerModal';
import { GetQuoteModal } from '../components/GetQuoteModal';
import { PortalLoginModal } from '../components/PortalLoginModal';
import { VideoModal } from '../components/VideoModal';
import { PaymentModal } from '../components/PaymentModal';

interface LayoutContextType {
  openQuote: (category?: string) => void;
  openClaimTracker: () => void;
  openVideo: () => void;
  openPayment: () => void;
  openPortal: (type: 'client' | 'agent') => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a MainLayout');
  }
  return context;
};

interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  // Modal state management
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedQuoteCat, setSelectedQuoteCat] = useState<string>('health');
  const [isClaimTrackerOpen, setIsClaimTrackerOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [portalModal, setPortalModal] = useState<{ isOpen: boolean; type: 'client' | 'agent' }>({
    isOpen: false,
    type: 'client',
  });

  const openQuote = (category = 'health') => {
    setSelectedQuoteCat(category);
    setIsQuoteOpen(true);
  };

  const openClaimTracker = () => setIsClaimTrackerOpen(true);
  const openVideo = () => setIsVideoOpen(true);
  const openPayment = () => setIsPaymentOpen(true);
  const openPortal = (type: 'client' | 'agent') => {
    setPortalModal({ isOpen: true, type });
  };

  const contextValue: LayoutContextType = {
    openQuote,
    openClaimTracker,
    openVideo,
    openPayment,
    openPortal,
  };

  return (
    <LayoutContext.Provider value={contextValue}>
      <div className="min-h-screen flex flex-col bg-[#fdfbf9] text-slate-900 selection:bg-[#a83b24] selection:text-white">
        
        {/* Top Header Contact & Portal bar */}
        <TopHeader onOpenPortal={openPortal} />

        {/* Main Sticky Navigation Bar */}
        <Navbar onOpenQuote={() => openQuote('health')} />

        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Global Footer */}
        <Footer
          onOpenQuote={() => openQuote('health')}
          onOpenPayment={openPayment}
        />

        {/* Global Interactive Modals */}
        <ClaimTrackerModal
          isOpen={isClaimTrackerOpen}
          onClose={() => setIsClaimTrackerOpen(false)}
        />

        <GetQuoteModal
          isOpen={isQuoteOpen}
          onClose={() => setIsQuoteOpen(false)}
          initialCategory={selectedQuoteCat}
        />

        <PortalLoginModal
          isOpen={portalModal.isOpen}
          type={portalModal.type}
          onClose={() => setPortalModal({ isOpen: false, type: 'client' })}
        />

        <VideoModal
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
        />

        <PaymentModal
          isOpen={isPaymentOpen}
          onClose={() => setIsPaymentOpen(false)}
        />
      </div>
    </LayoutContext.Provider>
  );
};

export default MainLayout;
