import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ArrowUpRight, 
  ChevronDown, 
  ChevronRight, 
  Plus, 
  X, 
  Check, 
  Hospital, 
  CheckCircle2,
  Scale,
  Loader2,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { HEALTH_PLANS } from '../data/mockData';
import { HealthPlan } from '../types';
import { PlanComparisonModal } from '../components/PlanComparisonModal';

interface HealthInsuranceProps {
  onOpenQuote?: (category?: string) => void;
}

export const HealthInsurance: React.FC<HealthInsuranceProps> = ({ onOpenQuote }) => {
  const location = useLocation();
  const passedState = location.state as { name?: string; phone?: string } | null;

  // Form State
  const [targetType, setTargetType] = useState<'self' | 'couple' | 'family' | 'parents'>('self');
  const [fullName, setFullName] = useState(passedState?.name || '');
  const [mobileNumber, setMobileNumber] = useState(passedState?.phone || '');
  const [ageGroup, setAgeGroup] = useState('');
  const [coverageFilter, setCoverageFilter] = useState<'all' | '1lac' | '1to5' | '5to10'>('all');
  const [agreedTerms, setAgreedTerms] = useState(true);
  const [formErrors, setFormErrors] = useState<{ name?: string; phone?: string }>({});
  const [isSearchingPlans, setIsSearchingPlans] = useState(false);

  // UI States & Compare Feature
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [showPlansSection, setShowPlansSection] = useState(false);
  const [selectedPlanForPurchase, setSelectedPlanForPurchase] = useState<HealthPlan | null>(null);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [comparedPlanIds, setComparedPlanIds] = useState<string[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  useEffect(() => {
    if (passedState?.name) setFullName(passedState.name);
    if (passedState?.phone) setMobileNumber(passedState.phone);
  }, [passedState]);

  // BD Phone Number validation
  const isValidBdPhone = (phone: string) => {
    const cleanNumber = phone.replace(/[\s\-\(\)\.]/g, '');
    const bdPhoneRegex = /^(?:\+?8801|8801|01)[1-9]\d{7,9}$/;
    return bdPhoneRegex.test(cleanNumber);
  };

  // Target Profile Selector Buttons
  const targetProfiles = [
    {
      id: 'self' as const,
      label: 'For Self',
      renderIcon: (active: boolean) => {
        const stroke = active ? '#ffffff' : '#a83b24';
        return (
          <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 48 48" fill="none">
            {/* Hair & Head outline */}
            <path d="M19 14.5C19 11 21 8.5 24 8.5C27 8.5 29 11 29 14.5C29 18 27 20.5 24 20.5C21 20.5 19 18 19 14.5Z" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <path d="M18.5 13C17.5 11 19 9 21.5 9C23 7.5 25.5 7.5 27 9C29 9 30.5 11 29.5 13" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            {/* Collar & Tie */}
            <path d="M21.5 20.5L24 23.5L26.5 20.5" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24 23.5V37" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
            {/* Torso */}
            <path d="M15 37V27C15 24 17.5 22 20.5 22H27.5C30.5 22 33 24 33 27V37" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {/* Sleeve pocket/cuff lines */}
            <path d="M15 30.5H19" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
            <path d="M29 30.5H33" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
            <path d="M15 37H33" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      }
    },
    {
      id: 'couple' as const,
      label: 'For Couple',
      renderIcon: (active: boolean) => {
        const stroke = active ? '#ffffff' : '#a83b24';
        return (
          <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 48 48" fill="none">
            {/* Woman (Left) with hair bun */}
            <circle cx="16.5" cy="8.5" r="2.2" stroke={stroke} strokeWidth="1.8" />
            <path d="M13 14C13 11 14.5 9.5 16.5 9.5C18.5 9.5 20 11 20 14C20 17 18.5 19 16.5 19C14.5 19 13 17 13 14Z" stroke={stroke} strokeWidth="1.8" />
            <path d="M14.5 19L16.5 21.5L18.5 19" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.5 21.5V36" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
            <path d="M10 36V26C10 23.5 12 21.5 14.5 21.5L18.5 21.5" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
            <path d="M10 30.5H13.5" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />

            {/* Man (Right) */}
            <path d="M28 13.5C28 10.5 29.5 9 32 9C34.5 9 36 10.5 36 13.5C36 16.5 34.5 19 32 19C29.5 19 28 16.5 28 13.5Z" stroke={stroke} strokeWidth="1.8" />
            <path d="M28 11.5C29.5 10 31 10.5 33 9.5C34.5 10.5 36 11.5 36 11.5" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
            <path d="M30 19L32 21.5L34 19" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M32 21.5V36" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
            <path d="M30 21.5L34 21.5C36.5 21.5 38.5 23.5 38.5 26V36" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
            <path d="M35 30.5H38.5" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />

            {/* Center Separation & Base */}
            <path d="M24.2 24V36" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
            <path d="M10 36H38.5" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      }
    },
    {
      id: 'family' as const,
      label: 'For Family',
      renderIcon: (active: boolean) => {
        const stroke = active ? '#ffffff' : '#a83b24';
        return (
          <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 48 48" fill="none">
            {/* Father (Left) */}
            <path d="M12.5 13C12.5 9.5 14.5 8 17 8C19.5 8 21.5 9.5 21.5 13C21.5 16 19.5 18 17 18C14.5 18 12.5 16 12.5 13Z" stroke={stroke} strokeWidth="1.7" />
            <path d="M12.5 11C14.5 9.5 16.5 9.5 18.5 9C20 9.5 21.5 11 21.5 11" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
            <path d="M9 36V24C9 21.5 11 20 13.5 20L18.5 20" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
            
            {/* Mother (Right) */}
            <path d="M26.5 13C26.5 9.5 28.5 8 31 8C33.5 8 35.5 9.5 35.5 13C35.5 16 33.5 18 31 18C28.5 18 26.5 16 26.5 13Z" stroke={stroke} strokeWidth="1.7" />
            <path d="M25.5 14C25.5 10 27.5 8 31 8C34.5 8 36.5 10 36.5 14V17" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
            <path d="M29.5 20L34.5 20C37 20 39 21.5 39 24V36" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
            
            {/* Child (Center Front) */}
            <circle cx="24" cy="23.5" r="3.2" stroke={stroke} strokeWidth="1.7" />
            <path d="M21.5 22.5C22.5 21 25.5 21 26.5 22.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M18.5 36V30C18.5 28.5 20 27.5 21.5 27.5H26.5C28 27.5 29.5 28.5 29.5 30V36" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22.5 28L24 29.8L25.5 28" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24 29.8V36" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Base line */}
            <path d="M9 36H39" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        );
      }
    },
    {
      id: 'parents' as const,
      label: 'For Parents',
      renderIcon: (active: boolean) => {
        const stroke = active ? '#ffffff' : '#a83b24';
        return (
          <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 48 48" fill="none">
            {/* Father (Left) */}
            <path d="M12 14C12 10.5 14 9 16.5 9C19 9 21 10.5 21 14C21 17 19 19 16.5 19C14 19 12 17 12 14Z" stroke={stroke} strokeWidth="1.8" />
            <path d="M12 11.5C13.5 10 16 10 18 9.5C19.5 10 21 11.5 21 11.5" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
            <path d="M14.5 19.5L16.5 21.5L18.5 19.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.5 21.5V36" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
            <path d="M9 36V26C9 23.5 11 21.5 13.5 21.5H19" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
            <path d="M9 30.5H13" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Mother (Right with bob hair) */}
            <path d="M27 14C27 10.5 29 9 31.5 9C34 9 36 10.5 36 14C36 17 34 19 31.5 19C29 19 27 17 27 14Z" stroke={stroke} strokeWidth="1.8" />
            <path d="M26 14.5C26 10 28 8.5 31.5 8.5C35 8.5 37 10 37 14.5C37 17 36 18.5 35 18.5" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
            <path d="M29.5 19.5L31.5 21.5L33.5 19.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M31.5 21.5V36" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
            <path d="M29 21.5H34.5C37 21.5 39 23.5 39 26V36" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
            <path d="M35 30.5H39" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Center divider & base line */}
            <path d="M24 24V36" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
            <path d="M9 36H39" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      }
    },
  ];

  // FAQs exact list with relevant, appropriate answers tailored to each heading
  const faqs = [
    {
      q: 'What is Health Insurance?',
      a: 'Health insurance is a financial agreement that covers medical and surgical expenses incurred by the insured. It protects individuals and families from high healthcare costs by paying directly to hospitals or reimbursing expenses for treatments, surgeries, diagnostic tests, consultations, and medications.',
    },
    {
      q: 'Why do you need a Health Insurance?',
      a: 'Medical emergencies and rising healthcare expenses can quickly exhaust family savings. Having a reliable health insurance policy ensures financial security, stress-free access to top-tier network hospitals, cashless hospital admissions, and comprehensive coverage for critical illnesses, ICU care, and surgical procedures.',
    },
    {
      q: 'Which Health Insurance policies are available now?',
      a: 'We offer a wide range of customized health plans including Individual Health Plans, Couple Health Coverage, Family Floater Plans (shared sum insured for spouse and children), Senior Citizen Parents Care Packages, and Corporate Group Health Solutions with customizable sum insured limits from ৳1 Lac up to ৳10 Lac.',
    },
    {
      q: 'Individual Plan vs Family Floater Plan, what is the difference?',
      a: 'An Individual Plan provides a dedicated sum insured exclusively for one person. In contrast, a Family Floater Plan allows the entire family (self, spouse, and children) to share a single pooled sum insured under one consolidated policy, offering higher overall coverage at a significantly more affordable annual premium.',
    },
    {
      q: 'How to claim for Health Insurance coverage?',
      a: 'You can claim coverage through two convenient methods: 1) Cashless Hospitalization: Present your Purabi / Bimafy digital health card at any accredited network hospital for direct approval and settlement. 2) Reimbursement Claim: Pay initial medical bills, submit your discharge summary, prescriptions, and official receipts online or at our branch, and receive settlement within 3 to 5 business days.',
    },
    {
      q: 'What happens after claiming Health Insurance coverage?',
      a: 'Once a claim is initiated, our medical claims assessment team verifies your submitted medical records and bills. For cashless admissions, pre-authorization is typically processed in under 45 minutes. For reimbursement claims, verified funds are credited directly to your bank account or MFS (bKash/Nagad) with real-time SMS tracking updates.',
    },
    {
      q: 'Why is Bimafy the best place to buy Health Insurance policies?',
      a: 'Bimafy provides a trusted, 100% digital platform partnering with leading insurers like Purabi General Insurance. You benefit from instant transparent plan comparisons, guaranteed lowest premiums, digital policy issuance in minutes, and a 24/7 dedicated claims concierge team to support you during medical emergencies.',
    },
    {
      q: 'How to contact Bimafy?',
      a: 'You can contact Bimafy and Purabi General Insurance 24/7 through our direct hotline at +880 1714-044146, central helpline +880 024-8314448, or by emailing purabiinsurance@gmail.com. You can also visit our Head Office at Sandhani Life Tower (2nd Floor), 34 Bangla Motor, Dhaka.',
    },
  ];

  // Dynamic plan filter based on user inputs
  const filteredPlans = HEALTH_PLANS.filter(plan => {
    // Filter by coverage amount
    if (coverageFilter === '1lac' && plan.coverageAmount > 100000) return false;
    if (coverageFilter === '1to5' && (plan.coverageAmount <= 100000 || plan.coverageAmount > 500000)) return false;
    if (coverageFilter === '5to10' && plan.coverageAmount <= 500000) return false;
    
    // Filter by target profile type
    if (plan.type !== targetType) {
      // If 'self' is chosen, also allow single/basic starter floater if no pure self
      if (targetType === 'self' && plan.type === 'family' && plan.coverageAmount <= 200000) {
        return true;
      }
      return false;
    }
    return true;
  });

  const handleToggleCompare = (planId: string) => {
    if (comparedPlanIds.includes(planId)) {
      setComparedPlanIds(comparedPlanIds.filter(id => id !== planId));
    } else {
      if (comparedPlanIds.length >= 3) {
        return;
      }
      setComparedPlanIds([...comparedPlanIds, planId]);
    }
  };

  const comparedPlansList = HEALTH_PLANS.filter(p => comparedPlanIds.includes(p.id));

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isNameEmpty = !fullName.trim();
    const isPhoneEmpty = !mobileNumber.trim();
    const errors: { name?: string; phone?: string } = {};

    if (isNameEmpty) {
      errors.name = 'Please enter your full name';
    }

    if (isPhoneEmpty) {
      errors.phone = 'Please enter your phone number';
    } else if (!isValidBdPhone(mobileNumber.trim())) {
      errors.phone = 'Please enter a valid 11-digit mobile number (e.g. 01712345678)';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSearchingPlans(true);

    setTimeout(() => {
      setIsSearchingPlans(false);
      setShowPlansSection(true);
      setTimeout(() => {
        const el = document.getElementById('available-plans-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }, 450);
  };

  const handleSelectPlan = (plan: HealthPlan) => {
    setSelectedPlanForPurchase(plan);
  };

  const handleConfirmPurchase = () => {
    setPurchaseSuccess(true);
    setTimeout(() => {
      setPurchaseSuccess(false);
      setSelectedPlanForPurchase(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-white font-poppins text-slate-800">
      
      {/* ---------------- 1. HERO BANNER ---------------- */}
      <section className="relative w-full overflow-hidden bg-[#1E2024]">
        
        {/* Background Image Layer (Banner.png) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Banner.png" 
            alt="Health Insurance Banner" 
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              const target = e.currentTarget;
              target.src = '/images/insurance-advisor-consultation.png';
            }}
          />
        </div>

        {/* Content Container (Outer padding: 50px top/bottom, 80px left/right) */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px] py-[50px]">
          
          {/* Transparent Glassmorphic Card (W: 100% max 1280px, padding: 30px top/bottom, 20px left/right) */}
          <div 
            className="w-full max-w-[1280px] mx-auto px-5 sm:px-6 md:px-[20px] py-[30px]"
            style={{
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.10)',
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)',
            }}
          >
            {/* Breadcrumb (Home > Health Insurance) */}
            <div className="inline-flex items-center gap-1.5 text-white/90 text-xs sm:text-sm font-medium mb-[20px]">
              <Link to="/" className="text-white/90 hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/70" />
              <span className="text-white font-medium">Health Insurance</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal text-white leading-tight sm:leading-[1.25] tracking-tight">
              Choose The Best <strong className="font-bold text-white">Health Insurance</strong> Plan For Yourself And Your Family
            </h1>
          </div>

        </div>
      </section>


      {/* ---------------- 2. MAIN FORM & VECTOR ILLUSTRATION SECTION ---------------- */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Health Insurance Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center lg:pt-8">
              <div className="relative w-full max-w-[560px] flex items-center justify-center p-1 sm:p-2">
                <img 
                  id="health-insurance-banner-illustration"
                  src="/images/health-insurance.png" 
                  alt="Health Insurance Illustration" 
                  className="w-full h-auto max-h-[540px] object-contain drop-shadow-sm transition-transform duration-300 hover:scale-[1.02]"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = '/images/health.png';
                  }}
                />
              </div>
            </div>

            {/* Right Column: Health Insurance Selection Form Card (Image 2) */}
            <div className="lg:col-span-7">
              <div 
                id="health-insurance-form-card"
                className="bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10 border border-stone-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
              >
                {/* 1. Target Profile Circular Buttons */}
                <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-8">
                  {targetProfiles.map((item) => {
                    const isActive = targetType === item.id;
                    return (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setTargetType(item.id)}
                        className="flex flex-col items-center justify-center group cursor-pointer focus:outline-hidden"
                      >
                        <div
                          className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-[70px] lg:h-[70px] rounded-full flex items-center justify-center transition-all duration-200 ${
                            isActive
                              ? 'bg-[#a83b24] text-white shadow-md scale-105 ring-4 ring-[#a83b24]/15'
                              : 'bg-[#F6ECE7] text-[#a83b24] hover:bg-[#eddcd5]'
                          }`}
                        >
                          {item.renderIcon(isActive)}
                        </div>
                        <span 
                          className={`mt-2.5 text-xs sm:text-sm font-semibold transition-colors text-center ${
                            isActive ? 'text-[#a83b24]' : 'text-[#7e716d] group-hover:text-slate-900'
                          }`}
                        >
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* 2. Interactive Form Inputs */}
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  
                  {/* Name & Mobile Number (2 Columns on tablet/desktop) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    
                    {/* Name */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (formErrors.name && e.target.value.trim()) {
                            setFormErrors(prev => ({ ...prev, name: undefined }));
                          }
                        }}
                        placeholder="Enter Your Full Name"
                        className={`w-full h-11 sm:h-12 px-4 bg-[#FAF9F8] rounded-lg border text-sm text-slate-900 placeholder:italic placeholder:text-stone-400 focus:bg-white focus:outline-hidden transition-all ${
                          formErrors.name 
                            ? 'border-red-500 ring-1 ring-red-500' 
                            : 'border-stone-200 focus:ring-2 focus:ring-[#a83b24] focus:border-transparent'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-xs text-red-600 font-medium">{formErrors.name}</p>
                      )}
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={mobileNumber}
                        onChange={(e) => {
                          setMobileNumber(e.target.value);
                          if (formErrors.phone && e.target.value.trim()) {
                            setFormErrors(prev => ({ ...prev, phone: undefined }));
                          }
                        }}
                        placeholder="01712-345678"
                        className={`w-full h-11 sm:h-12 px-4 bg-[#FAF9F8] rounded-lg border text-sm text-slate-900 placeholder:italic placeholder:text-stone-400 focus:bg-white focus:outline-hidden transition-all ${
                          formErrors.phone 
                            ? 'border-red-500 ring-1 ring-red-500' 
                            : 'border-stone-200 focus:ring-2 focus:ring-[#a83b24] focus:border-transparent'
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-xs text-red-600 font-medium">{formErrors.phone}</p>
                      )}
                    </div>

                  </div>

                  {/* Your Age Dropdown */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5">
                      Your Age
                    </label>
                    <div className="relative">
                      <select
                        value={ageGroup}
                        onChange={(e) => setAgeGroup(e.target.value)}
                        className="w-full h-11 sm:h-12 px-4 pr-10 bg-[#FAF9F8] rounded-lg border border-stone-200 text-sm text-slate-800 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#a83b24] focus:border-transparent appearance-none transition-all cursor-pointer"
                      >
                        <option value="">Select Age Group</option>
                        <option value="18-25">18 - 25 Years</option>
                        <option value="26-35">26 - 35 Years</option>
                        <option value="36-45">36 - 45 Years</option>
                        <option value="46-60">46 - 60 Years</option>
                        <option value="60+">Above 60 Years (Senior Citizen)</option>
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Health Coverage Amount (৳) */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                      Health Coverage Amount (৳)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      
                      {/* Chip 1: Show all plan */}
                      <button
                        type="button"
                        onClick={() => setCoverageFilter('all')}
                        className={`h-11 px-3 text-xs sm:text-sm font-medium rounded-lg border transition-all cursor-pointer flex items-center justify-center text-center ${
                          coverageFilter === 'all'
                            ? 'bg-[#F2DFD8] border-[#a83b24] text-[#a83b24] font-semibold shadow-2xs'
                            : 'bg-[#FAF9F8] border-stone-200 text-slate-700 hover:bg-stone-100'
                        }`}
                      >
                        Show all plan
                      </button>

                      {/* Chip 2: Up to 1 lac */}
                      <button
                        type="button"
                        onClick={() => setCoverageFilter('1lac')}
                        className={`h-11 px-3 text-xs sm:text-sm font-medium rounded-lg border transition-all cursor-pointer flex items-center justify-center text-center ${
                          coverageFilter === '1lac'
                            ? 'bg-[#F2DFD8] border-[#a83b24] text-[#a83b24] font-semibold shadow-2xs'
                            : 'bg-[#FAF9F8] border-stone-200 text-slate-700 hover:bg-stone-100'
                        }`}
                      >
                        Up to 1 lac
                      </button>

                      {/* Chip 3: 1 Lac to 5 Lac */}
                      <button
                        type="button"
                        onClick={() => setCoverageFilter('1to5')}
                        className={`h-11 px-3 text-xs sm:text-sm font-medium rounded-lg border transition-all cursor-pointer flex items-center justify-center text-center ${
                          coverageFilter === '1to5'
                            ? 'bg-[#F2DFD8] border-[#a83b24] text-[#a83b24] font-semibold shadow-2xs'
                            : 'bg-[#FAF9F8] border-stone-200 text-slate-700 hover:bg-stone-100'
                        }`}
                      >
                        1 Lac to 5 Lac
                      </button>

                      {/* Chip 4: 5 lac to 10 lac */}
                      <button
                        type="button"
                        onClick={() => setCoverageFilter('5to10')}
                        className={`h-11 px-3 text-xs sm:text-sm font-medium rounded-lg border transition-all cursor-pointer flex items-center justify-center text-center ${
                          coverageFilter === '5to10'
                            ? 'bg-[#F2DFD8] border-[#a83b24] text-[#a83b24] font-semibold shadow-2xs'
                            : 'bg-[#FAF9F8] border-stone-200 text-slate-700 hover:bg-stone-100'
                        }`}
                      >
                        5 lac to 10 lac
                      </button>

                    </div>
                  </div>

                  {/* Terms Checkbox */}
                  <div className="flex items-center gap-2.5 pt-1">
                    <button
                      type="button"
                      onClick={() => setAgreedTerms(!agreedTerms)}
                      className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
                        agreedTerms ? 'bg-[#a83b24] text-white' : 'border border-stone-300 bg-white'
                      }`}
                    >
                      {agreedTerms && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </button>
                    <label 
                      onClick={() => setAgreedTerms(!agreedTerms)}
                      className="text-xs sm:text-sm text-slate-700 select-none cursor-pointer"
                    >
                      I agree with the <span className="font-semibold text-[#a83b24] underline hover:text-[#8f2d18]">Terms of Service</span>
                    </label>
                  </div>

                  {/* See Plans Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={!agreedTerms || isSearchingPlans}
                      className="w-full h-12 sm:h-[52px] bg-[#a83b24] hover:bg-[#8f2d18] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm sm:text-base rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer transform active:scale-99"
                    >
                      {isSearchingPlans ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Searching available plans...</span>
                        </>
                      ) : (
                        <>
                          <span>See Plans</span>
                          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                        </>
                      )}
                    </button>
                  </div>

                </form>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ---------------- 3. AVAILABLE PLANS POPUP / COMPARISON (Triggered on 'See Plans') ---------------- */}
      {showPlansSection && (
        <section id="available-plans-section" className="w-full bg-[#FAF7F5] py-14 border-y border-stone-200/80 animate-in fade-in duration-300">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#a83b24]">
                  Personalized Recommendations
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                  Matching Health Insurance Plans ({filteredPlans.length})
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Target: <span className="font-semibold text-slate-800 capitalize">{targetType}</span> • Age: <span className="font-semibold text-slate-800">{ageGroup || 'All Ages'}</span> • Coverage: <span className="font-semibold text-slate-800">{coverageFilter === 'all' ? 'All ranges' : coverageFilter}</span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                {comparedPlanIds.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setIsCompareModalOpen(true)}
                    className="px-4 py-2 text-xs font-bold bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-1.5 shadow-xs"
                  >
                    <Scale className="w-3.5 h-3.5 text-[#F2DFD8]" />
                    <span>Compare Selected ({comparedPlanIds.length})</span>
                  </button>
                )}
                <button
                  onClick={() => setShowPlansSection(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-stone-300 rounded-lg hover:bg-white transition-colors"
                >
                  Hide Plans
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlans.map((plan) => {
                const isCompared = comparedPlanIds.includes(plan.id);
                return (
                  <div
                    key={plan.id}
                    className={`bg-white rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-lg ${
                      plan.featured ? 'border-[#a83b24] ring-2 ring-[#a83b24]/10 relative' : isCompared ? 'border-slate-800 ring-2 ring-slate-800/10' : 'border-stone-200'
                    }`}
                  >
                    {plan.featured && (
                      <div className="absolute -top-3 right-6 bg-[#a83b24] text-white text-[11px] font-extrabold uppercase px-3 py-0.5 rounded-full tracking-wider shadow-xs">
                        Best Value
                      </div>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-stone-100 px-2.5 py-1 rounded-md">
                          {plan.type}
                        </span>
                        <div className="flex items-center gap-1 text-[#a83b24] text-xs font-semibold">
                          <Hospital className="w-3.5 h-3.5" />
                          <span>{plan.cashlessHospitals}+ Hospitals</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        {plan.name}
                      </h3>
                      
                      <div className="my-4 p-3.5 bg-[#FAF7F5] rounded-xl border border-[#F0ECE8]">
                        <span className="text-xs text-slate-500 block">Total Health Coverage</span>
                        <span className="text-xl font-extrabold text-[#a83b24]">
                          {plan.coverageFormatted}
                        </span>
                      </div>

                      <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#a83b24] shrink-0" />
                          <span>Cabin limit: <strong>{plan.hospitalizationLimit}</strong></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#a83b24] shrink-0" />
                          <span>ICU Coverage: <strong>{plan.icuLimit}</strong></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#a83b24] shrink-0" />
                          <span>Claim Settlement Rate: <strong>{plan.claimSettlementRate || '98.5%'}</strong></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#a83b24] shrink-0" />
                          <span>Ambulance: <strong>{plan.ambulanceCover || '৳ 5,000 / event'}</strong></span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-stone-100 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[11px] text-slate-400 block">Annual Premium</span>
                          <span className="text-base font-bold text-slate-900">
                            ৳ {plan.annualPremium.toLocaleString()} <span className="text-xs font-normal text-slate-500">/ yr</span>
                          </span>
                        </div>
                        
                        <button
                          type="button"
                          onClick={() => handleSelectPlan(plan)}
                          className="px-4 py-2.5 bg-[#a83b24] hover:bg-[#8f2d18] text-white text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
                        >
                          <span>Choose Plan</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Compare Checkbox Button */}
                      <button
                        type="button"
                        onClick={() => handleToggleCompare(plan.id)}
                        className={`w-full py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                          isCompared
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-stone-50 text-slate-600 border-stone-200 hover:bg-stone-100 hover:text-slate-900'
                        }`}
                      >
                        <Scale className="w-3.5 h-3.5" />
                        <span>{isCompared ? 'Added to Compare ✓' : '+ Add to Compare'}</span>
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}


      {/* ---------------- 4. FREQUENTLY ASKED QUESTIONS SECTION (Blueprint Image 3) ---------------- */}
      <section 
        className="w-full bg-white flex flex-col justify-center items-center"
        style={{
          paddingTop: '50px',
          paddingBottom: '50px',
          paddingLeft: 'clamp(16px, 5vw, 80px)',
          paddingRight: 'clamp(16px, 5vw, 80px)',
        }}
      >
        <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center">
          
          {/* Title with exact 50px gap below */}
          <h2 
            className="text-center font-bold text-slate-950 tracking-tight"
            style={{
              fontSize: 'clamp(24px, 4vw, 36px)',
              lineHeight: '1.2',
              marginBottom: '50px',
            }}
          >
            Frequently asked questions
          </h2>

          {/* Accordion Questions List (Matching Uploaded Screenshots) */}
          <div className="w-full max-w-[960px] mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl transition-all duration-200 bg-[#F6F7F8] hover:bg-[#F1F3F5] border border-stone-200/50"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-hidden"
                  >
                    <span 
                      style={{
                        color: '#151515',
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '24px',
                        letterSpacing: '-0.128px',
                      }}
                    >
                      {faq.q}
                    </span>
                    <div className="text-slate-800 shrink-0 p-1">
                      {isOpen ? (
                        <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
                      ) : (
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-6 pt-0 text-xs sm:text-sm md:text-[14.5px] text-[#606770] font-normal leading-[1.65]">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>





      {/* Purchase Plan Confirmation Modal */}
      {selectedPlanForPurchase && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-150">
            {purchaseSuccess ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Policy Application Received!</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Thank you <strong>{fullName || 'Customer'}</strong>. Your request for <strong>{selectedPlanForPurchase.name}</strong> is initiated. Our health underwriting advisor will reach out to <strong>{mobileNumber || 'your phone number'}</strong> shortly.
                </p>
                <div className="p-3 bg-stone-50 rounded-xl text-xs text-slate-500">
                  Ref Code: POL-REQ-{Math.floor(100000 + Math.random() * 900000)}
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Confirm Health Policy Selection</h3>
                <p className="text-xs text-slate-500 mb-5">Review your coverage summary before proceeding</p>

                <div className="p-4 bg-[#FAF7F5] rounded-xl border border-stone-200 mb-5 space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Selected Plan:</span>
                    <span className="font-bold text-slate-900">{selectedPlanForPurchase.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Sum Insured:</span>
                    <span className="font-bold text-[#a83b24]">{selectedPlanForPurchase.coverageFormatted}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Applicant:</span>
                    <span className="font-semibold text-slate-800">{fullName || 'Not specified'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Phone:</span>
                    <span className="font-semibold text-slate-800">{mobileNumber || 'Not specified'}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-stone-200 text-sm">
                    <span className="font-bold text-slate-800">Annual Premium:</span>
                    <span className="font-extrabold text-[#a83b24]">৳ {selectedPlanForPurchase.annualPremium.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedPlanForPurchase(null)}
                    className="flex-1 py-3 border border-stone-300 text-slate-700 text-xs sm:text-sm font-semibold rounded-lg hover:bg-stone-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleConfirmPurchase}
                    className="flex-1 py-3 bg-[#a83b24] hover:bg-[#8f2d18] text-white text-xs sm:text-sm font-bold rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    Confirm & Apply
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Comparison Quick Bar when plans are selected */}
      {comparedPlanIds.length > 0 && (
        <div className="fixed bottom-16 md:bottom-6 left-1/2 -translate-x-1/2 z-40 bg-slate-950/95 text-white px-4 sm:px-6 py-3 rounded-2xl shadow-2xl backdrop-blur-md border border-stone-800 flex items-center justify-between gap-3 sm:gap-6 animate-in slide-in-from-bottom-5 duration-200 w-[92vw] max-w-xl">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-8 h-8 rounded-full bg-[#a83b24] flex items-center justify-center shrink-0">
              <Scale className="w-4 h-4 text-white" />
            </div>
            <div className="min-w-0">
              <span className="text-xs sm:text-sm font-bold text-white block truncate">
                {comparedPlanIds.length} / 3 Plans Selected
              </span>
              <span className="text-[11px] text-stone-400 hidden sm:inline truncate">
                Side-by-side coverage comparison
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setComparedPlanIds([])}
              className="text-xs text-stone-400 hover:text-white px-2 py-1.5 transition-colors cursor-pointer"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={() => setIsCompareModalOpen(true)}
              className="px-4 py-2 bg-[#a83b24] hover:bg-[#8f2d18] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer transform active:scale-98"
            >
              <span>Compare Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Side-by-Side Plan Comparison Modal */}
      <PlanComparisonModal
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        plans={comparedPlansList}
        onSelectPlan={(p) => {
          setIsCompareModalOpen(false);
          handleSelectPlan(p);
        }}
        onRemovePlan={(id) => setComparedPlanIds(comparedPlanIds.filter(pid => pid !== id))}
      />

    </div>
  );
};

export default HealthInsurance;
