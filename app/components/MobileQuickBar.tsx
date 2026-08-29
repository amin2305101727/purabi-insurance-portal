import React from 'react';
import { Phone, FileText, Sparkles } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface MobileQuickBarProps {
  onOpenQuote: (category?: string) => void;
  onOpenClaimTracker: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  onOpenQuote,
  onOpenClaimTracker,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHealthPage = location.pathname.includes('health-insurance');

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-3 py-2 shadow-2xl safe-area-bottom">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* Phone Call Support Button */}
        <a
          href="tel:+8801714044146"
          className="flex-1 h-11 bg-stone-100 active:bg-stone-200 text-slate-800 font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors border border-stone-200"
        >
          <Phone className="w-4 h-4 text-[#a83b24]" />
          <span>Call 24/7</span>
        </a>

        {/* Claim Tracker */}
        <button
          type="button"
          onClick={onOpenClaimTracker}
          className="h-11 px-3 bg-stone-100 active:bg-stone-200 text-slate-700 font-medium text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors border border-stone-200"
          title="Track Claim Status"
        >
          <FileText className="w-4 h-4 text-slate-600" />
          <span>Track</span>
        </button>

        {/* Primary CTA: Get Quote / See Plans */}
        <button
          type="button"
          onClick={() => {
            if (isHealthPage) {
              const el = document.getElementById('health-insurance-form-card');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                onOpenQuote('health');
              }
            } else {
              navigate('/health-insurance');
            }
          }}
          className="flex-[1.4] h-11 bg-[#a83b24] active:bg-[#8f2d18] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-[#a83b24]/20 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isHealthPage ? 'Get Health Plan' : 'Get Live Quote'}</span>
        </button>

      </div>
    </div>
  );
};
