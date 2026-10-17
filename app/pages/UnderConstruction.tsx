import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HardHat, ArrowLeft, ArrowUpRight, Phone, Clock, Sparkles, Shield, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface UnderConstructionProps {
  onOpenQuote?: (category?: string) => void;
}

const ROUTE_INFO: Record<string, { title: string; subtitle: string; description: string }> = {
  '/services': {
    title: 'Insurance Services',
    subtitle: 'Comprehensive Coverage Portfolio',
    description: 'We are currently compiling our full catalog of general insurance plans, policy terms, and enterprise underwriting packages.'
  },
  '/services/travel': {
    title: 'Travel Insurance',
    subtitle: 'Overseas Mediclaim & Luggage Protection',
    description: 'Our digital travel insurance application and instant policy issuance system is currently under active development.'
  },
  '/services/accident': {
    title: 'Personal Accident Insurance',
    subtitle: 'Financial Security for Unexpected Events',
    description: 'We are building an instant coverage calculator and self-service registration portal for personal accident policies.'
  },
  '/services/car': {
    title: 'Car Insurance',
    subtitle: 'Comprehensive Private Vehicle Protection',
    description: 'Our automotive risk assessment calculator and instant policy generator will be available soon.'
  },
  '/services/motor': {
    title: 'Motor Insurance',
    subtitle: 'Commercial & Fleet Vehicle Coverage',
    description: 'We are currently developing our digital fleet management and commercial motor insurance system.'
  },
  '/services/motorcycle': {
    title: 'Motorcycle Insurance',
    subtitle: 'Two-Wheeler Comprehensive & Third-Party Protection',
    description: 'Our quick motorcycle insurance quotation and renewal portal is under construction.'
  },
  '/services/life': {
    title: 'Life Insurance',
    subtitle: 'Future Security & Family Protection',
    description: 'We are preparing tailored term and endowment life assurance programs designed for modern policyholders.'
  },
  '/services/fire': {
    title: 'Fire & Property Insurance',
    subtitle: 'Industrial, Commercial & Residential Assets',
    description: 'We are building digital quotation tools for industrial all-risk, fire peril, and business interruption coverages.'
  },
  '/services/marine': {
    title: 'Marine Cargo & Hull Insurance',
    subtitle: 'Import, Export & Inland Transit Safeguards',
    description: 'Our automated marine cargo certificate generation system is currently being finalized.'
  },
  '/services/group': {
    title: 'Corporate Group Insurance',
    subtitle: 'Employee Health & Life Solutions',
    description: 'We are designing corporate portal onboarding tools for group hospitalization and accidental benefits.'
  },
  '/services/aviation': {
    title: 'Aviation Insurance',
    subtitle: 'Aircraft Hull & Liability Underwriting',
    description: 'Specialized aviation risk and cargo freight insurance modules are under development.'
  },
  '/services/engineering': {
    title: 'Engineering Insurance',
    subtitle: 'Machinery & Contractors All Risk (CAR)',
    description: 'Comprehensive risk management packages for infrastructure and industrial construction will launch shortly.'
  },
  '/services/miscellaneous': {
    title: 'Specialty & Miscellaneous Insurance',
    subtitle: 'Custom Commercial Protections',
    description: 'Specialized policies including fidelity guarantee, cash in transit, and liability protections are being integrated.'
  },
  '/claims': {
    title: 'Claims Portal',
    subtitle: 'Digital Claim Submission & Document Management',
    description: 'We are upgrading our claims portal to support direct digital intimation, surveyor appointments, and electronic settlement.'
  },
  '/claims/file-claim': {
    title: 'Online Claim Submission',
    subtitle: 'Fast-Track Digital Claim Filing',
    description: 'Our self-service claims submission form with document upload support is currently in development.'
  },
  '/claims/process': {
    title: 'Claims Settlement Process',
    subtitle: 'Step-by-Step Surveyor & Disbursement Guidelines',
    description: 'We are preparing interactive guides, required checklist documents, and FAQ resources for policyholders.'
  },
  '/blogs': {
    title: 'Insurance Insights & News',
    subtitle: 'Articles, Announcements & Financial Disclosures',
    description: 'Our corporate publications, regulatory updates, and insurance education articles will be published here soon.'
  },
  '/contact': {
    title: 'Contact & Branch Locator',
    subtitle: 'Nationwide Customer Support Network',
    description: 'We are building an interactive map of our 35+ branches alongside direct messaging and support ticket systems.'
  },
};

export const UnderConstruction: React.FC<UnderConstructionProps> = ({ onOpenQuote }) => {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase().replace(/\/$/, '') || '/';

  // Look up route info or format path cleanly
  const route = ROUTE_INFO[currentPath] || {
    title: currentPath.split('/').filter(Boolean).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ') || 'Under Construction',
    subtitle: 'Feature Under Active Development',
    description: 'We are currently designing and building this section. It will be available very soon with full digital self-service features.'
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-12 sm:py-16 bg-[#FDFBF9]">
      <div className="max-w-2xl w-full text-center">
        
        {/* Animated Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF1EE] border border-[#f0ded8] text-[#a83b24] text-xs sm:text-sm font-semibold mb-6 animate-pulse">
          <HardHat className="w-4 h-4 text-[#a83b24]" />
          <span>Work in Progress • Launching Soon</span>
          <Sparkles className="w-3.5 h-3.5 text-[#a83b24]" />
        </div>

        {/* Feature Icon Container */}
        <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-[#FAF1EE] to-[#F5E5E0] border border-[#EED7CE] shadow-sm flex items-center justify-center mb-6">
          <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-white shadow-xs flex items-center justify-center text-[#a83b24]">
            <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-[#a83b24] stroke-[1.8]" />
          </div>
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a83b24] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#a83b24]"></span>
          </span>
        </div>

        {/* Dynamic Page Header */}
        <h1 
          className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-2"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {route.title}
        </h1>
        <p className="text-base sm:text-lg font-semibold text-[#a83b24] mb-4">
          {route.subtitle}
        </p>

        {/* Informative Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-stone-200/80 mb-8 max-w-xl mx-auto">
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-3">
            {route.description}
          </p>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
            In the meantime, our underwriting desk and customer service team are fully operational to process your inquiries and issue policies offline.
          </p>

          {/* Progress bar */}
          <div className="mt-5 pt-5 border-t border-stone-100">
            <div className="flex justify-between items-center text-xs font-semibold text-slate-600 mb-1.5">
              <span>Development Progress</span>
              <span className="text-[#a83b24]">85% Completed</span>
            </div>
            <div className="w-full bg-stone-100 rounded-full h-2.5 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-[#c4533a] to-[#a83b24] h-2.5 rounded-full transition-all duration-1000"
                style={{ width: '85%' }}
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold shadow-xs hover:shadow-md transition-all active:scale-98"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          {onOpenQuote && (
            <button
              type="button"
              onClick={() => onOpenQuote()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#a83b24] hover:bg-[#8f2d18] text-white text-sm font-semibold shadow-xs hover:shadow-md transition-all active:scale-98 cursor-pointer"
            >
              <span>Get Instant Quote</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          )}

          <Link
            to="/health-insurance"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-stone-300 hover:bg-stone-50 text-slate-800 text-sm font-semibold shadow-2xs hover:shadow-xs transition-all active:scale-98"
          >
            <Shield className="w-4 h-4 text-[#a83b24]" />
            <span>Explore Health Insurance</span>
          </Link>
        </div>

        {/* Support Hotline Info */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-600 bg-[#FAF1EE]/70 px-5 py-3 rounded-2xl border border-[#f2ded8]">
          <span className="flex items-center gap-1.5 font-medium">
            <Phone className="w-4 h-4 text-[#a83b24]" />
            Hotline: <a href={`tel:${COMPANY_INFO.hotline}`} className="font-semibold text-slate-800 hover:text-[#a83b24]">{COMPANY_INFO.hotline}</a>
          </span>
          <span className="hidden sm:inline text-stone-300">•</span>
          <span className="flex items-center gap-1.5 font-medium">
            <Mail className="w-4 h-4 text-[#a83b24]" />
            Email: <a href={`mailto:${COMPANY_INFO.email}`} className="font-semibold text-slate-800 hover:text-[#a83b24]">{COMPANY_INFO.email}</a>
          </span>
        </div>

      </div>
    </div>
  );
};

export default UnderConstruction;
