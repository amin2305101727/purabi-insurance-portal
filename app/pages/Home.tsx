import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Play, 
  Flame, 
  HeartHandshake, 
  Car, 
  Ship, 
  Luggage, 
  Users, 
  HardHat, 
  MoreHorizontal,
  ChevronRight,
  ShieldCheck,
  Smartphone,
  ExternalLink,
  Calendar,
  Clock,
  Mail,
  CheckCircle2,
  Download,
  Loader2
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  INSURANCE_CATEGORIES, 
  CLIENT_PARTNERS, 
  WORKING_STEPS, 
  NEWS_ITEMS 
} from '../data/mockData';
import { NewsItem } from '../types';
import { InsuranceCategoriesSlider } from '../components/InsuranceCategoriesSlider';
import { PartnersMarquee } from '../components/PartnersMarquee';
import startTrackingImg from '/public/images/StartTracking.png';
import imageHorizontalBorder from '/public/images/Image+HorizontalBorder.png';

interface HomePageProps {
  onOpenQuote: (cat?: string) => void;
  onOpenClaimTracker: () => void;
  onOpenVideo: () => void;
}

export const Home: React.FC<HomePageProps> = ({ 
  onOpenQuote, 
  onOpenClaimTracker, 
  onOpenVideo 
}) => {
  const navigate = useNavigate();
  const [selectedQuickCat, setSelectedQuickCat] = useState('health');
  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickErrors, setQuickErrors] = useState<{ name?: string; phone?: string }>({});
  const [isSubmittingQuick, setIsSubmittingQuick] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  // BD Phone Number validation (e.g., 01XXXXXXXXX, +8801XXXXXXXXX, with spaces/hyphens)
  const isValidBdPhone = (phone: string) => {
    const cleanNumber = phone.replace(/[\s\-\(\)\.]/g, '');
    const bdPhoneRegex = /^(?:\+?8801|8801|01)[1-9]\d{7,9}$/;
    return bdPhoneRegex.test(cleanNumber);
  };

  const handleQuickPriceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isNameEmpty = !quickName.trim();
    const isPhoneEmpty = !quickPhone.trim();
    const errors: { name?: string; phone?: string } = {};

    if (isNameEmpty) {
      errors.name = 'Please enter your full name';
    }

    if (isPhoneEmpty) {
      errors.phone = 'Please enter your mobile number';
    } else if (!isValidBdPhone(quickPhone.trim())) {
      errors.phone = 'Please enter a valid 11-digit number (e.g. 01712345678)';
    }

    if (Object.keys(errors).length > 0) {
      setQuickErrors(errors);
      return;
    }

    setQuickErrors({});
    setIsSubmittingQuick(true);

    setTimeout(() => {
      setIsSubmittingQuick(false);
      if (selectedQuickCat === 'health') {
        navigate('/health-insurance', {
          state: {
            name: quickName.trim(),
            phone: quickPhone.trim()
          }
        });
      } else {
        onOpenQuote(selectedQuickCat);
      }
    }, 450);
  };

  const quickIcons = [
    { 
      id: 'health', 
      name: 'Health', 
      renderIcon: (isSelected: boolean) => (
        <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 36 36" fill="none">
          {/* Heart path */}
          <path 
            d="M18 30.5L15.82 28.52C8.1 21.52 3 16.9 3 11.2C3 6.58 6.58 3 11.2 3C13.81 3 16.31 4.21 18 6.13C19.69 4.21 22.19 3 24.8 3C29.42 3 33 6.58 33 11.2C33 14.5 31.4 17.5 28.9 19.6" 
            fill={isSelected ? '#ffffff' : '#a83b24'} 
          />
          {/* Small check badge */}
          <circle cx="26" cy="24" r="6" fill={isSelected ? '#a83b24' : '#F2DFD8'} />
          <circle cx="26" cy="24" r="5" fill={isSelected ? '#ffffff' : '#a83b24'} />
          <path d="M23.8 24L25.3 25.5L28.2 22.5" stroke={isSelected ? '#a83b24' : '#F2DFD8'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    { 
      id: 'car', 
      name: 'Car', 
      renderIcon: (isSelected: boolean) => (
        <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 36 36" fill="none">
          {/* Car body */}
          <path 
            d="M27.5 10.5C27.2 9.6 26.3 9 25.3 9H10.7C9.7 9 8.8 9.6 8.5 10.5L5 20.5V30C5 30.8 5.7 31.5 6.5 31.5H8C8.8 31.5 9.5 30.8 9.5 30V28.5H26.5V30C26.5 30.8 27.2 31.5 28 31.5H29.5C30.3 31.5 31 30.8 31 30V20.5L27.5 10.5ZM9.5 24.5C8.4 24.5 7.5 23.6 7.5 22.5C7.5 21.4 8.4 20.5 9.5 20.5C10.6 20.5 11.5 21.4 11.5 22.5C11.5 23.6 10.6 24.5 9.5 24.5ZM26.5 24.5C25.4 24.5 24.5 23.6 24.5 22.5C24.5 21.4 25.4 20.5 26.5 20.5C27.6 20.5 28.5 21.4 28.5 22.5C28.5 23.6 27.6 24.5 26.5 24.5ZM7.5 18L10 10.5H26L28.5 18H7.5Z" 
            fill={isSelected ? '#ffffff' : '#a83b24'} 
          />
          {/* Plus badge */}
          <circle cx="27" cy="24" r="6" fill={isSelected ? '#a83b24' : '#F2DFD8'} />
          <circle cx="27" cy="24" r="5" fill={isSelected ? '#ffffff' : '#a83b24'} />
          <path d="M27 21.5V26.5M24.5 24H29.5" stroke={isSelected ? '#a83b24' : '#F2DFD8'} strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    },
    { 
      id: 'travel', 
      name: 'Travel', 
      renderIcon: (isSelected: boolean) => (
        <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 36 36" fill="none">
          {/* Suitcase */}
          <path 
            d="M27 10.5H22.5V9C22.5 6.5 20.5 4.5 18 4.5C15.5 4.5 13.5 6.5 13.5 9V10.5H9C7.3 10.5 6 11.8 6 13.5V27C6 28.7 7.3 30 9 30H27C28.7 30 30 28.7 30 27V13.5C30 11.8 28.7 10.5 27 10.5ZM15 9C15 7.3 16.3 6 18 6C19.7 6 21 7.3 21 9V10.5H15V9ZM12 16.5H15V27H12V16.5ZM24 27H21V16.5H24V27Z" 
            fill={isSelected ? '#ffffff' : '#a83b24'} 
          />
          {/* Shield badge */}
          <circle cx="26" cy="23" r="6" fill={isSelected ? '#a83b24' : '#F2DFD8'} />
          <circle cx="26" cy="23" r="5" fill={isSelected ? '#ffffff' : '#a83b24'} />
          <path d="M26 20.5L23.8 21.7V23.8C23.8 25.2 25.2 26.2 26 26.5C26.8 26.2 28.2 25.2 28.2 23.8V21.7L26 20.5Z" fill={isSelected ? '#a83b24' : '#F2DFD8'} />
        </svg>
      )
    },
    { 
      id: 'life', 
      name: 'Life', 
      renderIcon: (isSelected: boolean) => (
        <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 36 36" fill={isSelected ? '#ffffff' : '#a83b24'}>
          {/* Father */}
          <circle cx="10" cy="9" r="3" />
          <path d="M13 13.5H7C5.9 13.5 5 14.4 5 15.5V24H7.5V30H12.5V24H15V15.5C15 14.4 14.1 13.5 13 13.5Z" />
          {/* Mother */}
          <circle cx="26" cy="9" r="3" />
          <path d="M29 13.5H23C21.9 13.5 21 14.4 21 15.5V24H23.5V30H28.5V24H31V15.5C31 14.4 30.1 13.5 29 13.5Z" />
          {/* Child */}
          <circle cx="18" cy="16" r="2.2" />
          <path d="M20 19.5H16C15.2 19.5 14.5 20.2 14.5 21V27H16.2V31H19.8V27H21.5V21C21.5 20.2 20.8 19.5 20 19.5Z" />
        </svg>
      )
    },
    { 
      id: 'marine', 
      name: 'Marine', 
      renderIcon: (isSelected: boolean) => (
        <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 36 36" fill={isSelected ? '#ffffff' : '#a83b24'}>
          <path d="M29 23.5L27 15H23V11L18 7L13 11V15H9L7 23.5H29ZM15 13.5H21V15H15V13.5ZM15 17H21V18.5H15V17Z" />
          <path d="M4 26.5H32V29.5H4V26.5Z" />
        </svg>
      )
    },
    { 
      id: 'engineering', 
      name: 'Engineering', 
      renderIcon: (isSelected: boolean) => (
        <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 36 36" fill={isSelected ? '#ffffff' : '#a83b24'}>
          <path d="M18 5C11.9 5 7 9.9 7 16V18H29V16C29 9.9 24.1 5 18 5ZM5 20H31V22.5H5V20Z" />
          <circle cx="18" cy="27" r="4.5" />
          <circle cx="18" cy="27" r="2" fill={isSelected ? '#a83b24' : '#F2DFD8'} />
        </svg>
      )
    },
    { 
      id: 'more', 
      name: 'More', 
      renderIcon: (isSelected: boolean) => (
        <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 36 36" fill={isSelected ? '#ffffff' : '#a83b24'}>
          <circle cx="9" cy="18" r="3.2" />
          <circle cx="18" cy="18" r="3.2" />
          <circle cx="27" cy="18" r="3.2" />
        </svg>
      )
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdfbf9]">
      
      {/* ----------------- 1. HERO SECTION ----------------- */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center bg-slate-900 overflow-hidden">
        
        {/* Background Image Layer (Without black shadow) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/insurance-advisor-consultation.png"
            alt="Insurance banner"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000"
            onError={(e) => {
              // Fallback if png or jpg fails
              const target = e.currentTarget;
              if (!target.src.includes('insurance-advisor-consultation.jpg')) {
                target.src = '/images/insurance-advisor-consultation.jpg';
              }
            }}
          />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-white w-full">
          <div className="max-w-3xl">
            {/* Tagline / Subtitle (Image 3: Poppins, 600 SemiBold, 20px, line-height 19.84px, color #FFFFFF) */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-[2px] bg-[#d9664f]"></span>
              <span 
                className="font-poppins font-semibold text-sm sm:text-base lg:text-[20px] text-[#FFFFFF] tracking-normal"
                style={{ lineHeight: '19.84px' }}
              >
                Protecting Value Through Innovation
              </span>
            </div>

            {/* Headline / Main Title (Image 1: Poppins, 500 Medium, 60px, line-height 100%, color #FFFFFF) */}
            <h1 
              className="font-poppins font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-[#FFFFFF] tracking-normal mb-6"
              style={{ lineHeight: '100%' }}
            >
              Leading Insurance Solutions for Your Peace of Mind
            </h1>

            {/* Description / Paragraph (Image 2: Poppins, 400 Regular, 20px, line-height 100% / relaxed, color #FFFFFF) */}
            <p 
              className="font-poppins font-normal text-sm sm:text-base lg:text-[20px] text-[#FFFFFF] leading-relaxed lg:leading-[130%] tracking-normal mb-8 max-w-2xl"
            >
              Purabi General Insurance Company Limited (PGICL), established in 1988, is a leading insurer in Bangladesh, providing comprehensive asset protection for corporate organizations.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                to="/about"
                className="px-7 py-3.5 bg-[#a83b24] hover:bg-[#8f2d18] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl transition-all transform active:scale-95 inline-flex items-center gap-2"
              >
                <span>DISCOVER MORE</span>
              </Link>

              <button
                type="button"
                onClick={onOpenVideo}
                className="flex items-center gap-3 text-white font-bold text-xs uppercase tracking-wider hover:text-orange-200 transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full border-2 border-white/80 group-hover:border-orange-200 flex items-center justify-center bg-white/10 backdrop-blur-xs transition-all group-hover:scale-110">
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </div>
                <span>WATCH VIDEO</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 2. QUICK CATEGORY SELECTOR & PRICE FORM ----------------- */}
      <section 
        className="w-full bg-[#FAF1EE] flex items-center justify-center border-b border-[#ebd8cc]/50"
        style={{
          paddingTop: '100px',
          paddingBottom: '100px',
          paddingLeft: 'clamp(16px, 5vw, 80px)',
          paddingRight: 'clamp(16px, 5vw, 80px)',
          opacity: 1,
          transform: 'rotate(0deg)'
        }}
      >
        <div 
          className="w-full max-w-[1440px] mx-auto flex flex-col justify-between"
          style={{
            gap: '50px',
            opacity: 1,
          }}
        >
          {/* Circular Category Buttons */}
          <div 
            className="w-full max-w-[948px] mx-auto flex items-center justify-between gap-4 sm:gap-[40px] overflow-x-auto no-scrollbar py-1"
            style={{ opacity: 1 }}
          >
            {quickIcons.map((item) => {
              const isSelected = selectedQuickCat === item.id;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setSelectedQuickCat(item.id)}
                  className="flex flex-col items-center justify-center shrink-0 gap-2.5 group cursor-pointer focus:outline-hidden select-none"
                >
                  <div
                    className={`w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] rounded-full shrink-0 aspect-square flex items-center justify-center transition-colors duration-200 ${
                      isSelected
                        ? 'bg-[#a83b24] text-white shadow-sm'
                        : 'bg-[#F2DFD8] text-[#a83b24] hover:bg-[#ebd1c7]'
                    }`}
                  >
                    {item.renderIcon(isSelected)}
                  </div>
                  <span
                    className={`text-xs sm:text-sm font-medium tracking-tight transition-colors ${
                      isSelected ? 'text-[#a83b24] font-semibold' : 'text-[#7e716d] group-hover:text-slate-900'
                    }`}
                  >
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Inline Quote Input Form */}
          <form onSubmit={handleQuickPriceSubmit} className="w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 items-end">
            
            {/* Name Input */}
            <div className="lg:col-span-5">
              <label className="block text-sm sm:text-base font-bold text-slate-950 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={quickName}
                onChange={(e) => {
                  setQuickName(e.target.value);
                  if (quickErrors.name && e.target.value.trim()) {
                    setQuickErrors((prev) => ({ ...prev, name: undefined }));
                  }
                }}
                placeholder="Enter Your Full Name"
                className={`w-full h-12 sm:h-[54px] px-5 sm:px-6 bg-white rounded-md border text-sm sm:text-base text-slate-900 placeholder:italic placeholder:text-stone-400 focus:outline-hidden transition-all shadow-xs ${
                  quickErrors.name
                    ? 'border-red-500 focus:ring-2 focus:ring-red-500'
                    : 'border-stone-200 focus:ring-2 focus:ring-[#a83b24] focus:border-transparent'
                }`}
              />
              {quickErrors.name && (
                <p className="mt-1.5 text-xs text-red-600 font-semibold">{quickErrors.name}</p>
              )}
            </div>

            {/* Mobile Number Input */}
            <div className="lg:col-span-5">
              <label className="block text-sm sm:text-base font-bold text-slate-950 mb-2">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={quickPhone}
                onChange={(e) => {
                  setQuickPhone(e.target.value);
                  if (quickErrors.phone && e.target.value.trim()) {
                    setQuickErrors((prev) => ({ ...prev, phone: undefined }));
                  }
                }}
                placeholder="01712-345678"
                className={`w-full h-12 sm:h-[54px] px-5 sm:px-6 bg-white rounded-md border text-sm sm:text-base text-slate-900 placeholder:italic placeholder:text-stone-400 focus:outline-hidden transition-all shadow-xs ${
                  quickErrors.phone
                    ? 'border-red-500 focus:ring-2 focus:ring-red-500'
                    : 'border-stone-200 focus:ring-2 focus:ring-[#a83b24] focus:border-transparent'
                }`}
              />
              {quickErrors.phone && (
                <p className="mt-1.5 text-xs text-red-600 font-semibold">{quickErrors.phone}</p>
              )}
            </div>

            {/* Get Price Button */}
            <div className="lg:col-span-2">
              <button
                type="submit"
                disabled={isSubmittingQuick}
                className="w-full h-12 sm:h-[54px] px-6 bg-[#a83b24] hover:bg-[#8f2d18] disabled:bg-[#a83b24]/70 text-white font-medium text-sm sm:text-base rounded-md shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer transform active:scale-98"
              >
                {isSubmittingQuick ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Getting...</span>
                  </>
                ) : (
                  <>
                    <span>Get Price</span>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                  </>
                )}
              </button>
            </div>

          </form>
        </div>
      </section>

      {/* ----------------- 3. CATEGORIES OF INSURANCE ----------------- */}
      <section 
        className="w-full bg-white flex flex-col justify-center items-center"
        style={{
          paddingTop: '50px',
          paddingBottom: '50px',
          paddingLeft: 'clamp(16px, 5vw, 80px)',
          paddingRight: 'clamp(16px, 5vw, 80px)',
        }}
      >
        <div 
          className="w-full max-w-[1440px] mx-auto flex flex-col items-center"
          style={{ 
            rowGap: '60px',
          }}
        >
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center w-full max-w-[1280px] mx-auto">
            {/* Title (Figma: Poppins, 600 SemiBold, 45px, 100% line height, 0% letter spacing, Uppercase) */}
            <h2 
              className="text-slate-950 uppercase mb-3 tracking-normal"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(28px, 3.2vw, 45px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                maxWidth: '617px',
              }}
            >
              CATEGORIES OF INSURANCE
            </h2>

            {/* Subtitle (Figma: Poppins, 400 Regular, 14px, 100% line height, 0% letter spacing, Center, 1280px width) */}
            <p 
              className="text-slate-600 text-center font-normal tracking-normal max-w-[1280px]"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '150%',
                letterSpacing: '0%',
              }}
            >
              At SIPLC, we exceed customer expectations by being available both physically and virtually on their preferred channels. As a leading general insurer in Bangladesh, we are committed to continuous development and improvement, ensuring every citizen can access insurance benefits without hindrance
            </p>
          </div>

          {/* Draggable Cards Carousel */}
          <div className="w-full">
            <InsuranceCategoriesSlider 
              onOpenQuote={(catId) => {
                if (catId === 'health') {
                  navigate('/health-insurance');
                } else {
                  onOpenQuote(catId);
                }
              }} 
            />
          </div>

          {/* See More Button */}
          <div className="w-full flex justify-center items-center">
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#a83b24] hover:bg-[#8f2d18] text-white rounded-[8px] font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:scale-102 active:scale-98"
              style={{
                fontFamily: "'Poppins', sans-serif",
                minWidth: '160px',
                height: '48px',
              }}
            >
              <span>See More</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>

        </div>
      </section>

      {/* ----------------- 4. START TRACKING YOUR CLAIMS BANNER ----------------- */}
      <section 
        className="w-full bg-white flex justify-center items-center font-poppins"
        style={{
          paddingTop: '50px',
          paddingBottom: '50px',
          paddingLeft: 'clamp(16px, 5vw, 80px)',
          paddingRight: 'clamp(16px, 5vw, 80px)',
        }}
      >
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Family Image with Image+HorizontalBorder Backdrop */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[460px] flex items-end justify-center pt-8">
              {/* Background Horizontal Border Graphic (Image+HorizontalBorder.png) */}
              <img
                src={imageHorizontalBorder}
                alt=""
                aria-hidden="true"
                referrerPolicy="no-referrer"
                className="absolute object-contain select-none pointer-events-none -z-0"
                style={{
                  width: '56%',
                  maxHeight: '410px',
                  top: '-35px',
                  left: '13%',
                }}
              />
              <img
                src={startTrackingImg}
                alt="Start tracking your claims with Purabi General Insurance"
                referrerPolicy="no-referrer"
                className="relative z-10 w-full h-auto max-h-[380px] object-contain select-none pointer-events-none drop-shadow-sm"
              />
            </div>
          </div>

          {/* Right Content Card (Blueprint: Top 50px, Bottom 50px, Left 40px, Right 40px, Gap 25px) */}
          <div 
            className="lg:col-span-7 bg-[#FAF1EE] rounded-[24px] flex flex-col justify-center"
            style={{
              paddingTop: '50px',
              paddingBottom: '50px',
              paddingLeft: '40px',
              paddingRight: '40px',
            }}
          >
            {/* Upper text block */}
            <div className="w-full flex flex-col">
              <div 
                className="text-slate-800 uppercase tracking-normal mb-2"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '13px',
                  lineHeight: '120%',
                }}
              >
                BE HAPPY TO GET INSURANCE
              </div>
              <h2 
                className="text-slate-900 tracking-tight mb-3"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(26px, 3.2vw, 38px)',
                  lineHeight: '115%',
                }}
              >
                Start Tracking Your Claims
              </h2>
              <p 
                className="text-slate-600 font-normal leading-relaxed max-w-[580px]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '14px',
                  lineHeight: '160%',
                }}
              >
                Enjoy peace of mind with hassle-free insurance. Track your claims effortlessly and stay informed every step of the way.
              </p>
            </div>

            {/* Gap of exactly 25px as shown in blueprint */}
            <div style={{ height: '25px' }} className="shrink-0" />

            {/* Action Bottom Bar */}
            <div className="w-full flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={onOpenClaimTracker}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#a83b24] hover:bg-[#8f2d18] text-white rounded-[8px] font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:scale-102 active:scale-98 cursor-pointer"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span>Claim Coverage</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <div className="flex items-center gap-3 text-xs sm:text-[13px]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                <div className="w-6 sm:w-10 h-[1px] bg-[#d9beaf]" />
                <span className="font-semibold text-slate-800 tracking-wide uppercase">OR</span>
                <div className="w-6 sm:w-10 h-[1px] bg-[#d9beaf]" />

                <div className="flex items-center gap-1.5 text-slate-600 whitespace-nowrap pl-1">
                  <span className="text-[12px] sm:text-[13px] font-normal text-slate-500">Mail Us Anytime:</span>
                  <a
                    href="mailto:purabiinsurance@gmail.com"
                    className="font-bold text-slate-900 hover:text-[#a83b24] transition-colors"
                  >
                    purabiinsurance@gmail.com
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ----------------- 5. GENUINE TRUSTED PARTNERS & CLIENTS ----------------- */}
      <PartnersMarquee />

      {/* ----------------- 6. OUR WORKING PROCESS (INSURANCE SIMPLIFIED) ----------------- */}
      <section 
        className="w-full relative flex items-center justify-center overflow-hidden text-white bg-slate-900"
        style={{
          fontFamily: "'Poppins', sans-serif",
          paddingTop: '80px',
          paddingBottom: '80px',
          paddingLeft: 'max(20px, min(80px, 5vw))',
          paddingRight: 'max(20px, min(80px, 5vw))',
        }}
      >
        {/* Background Image: Background2 */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/images/Background2.jpg"
            alt="Background2 - Our Working Process Consultation"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-90 scale-105"
          />
          {/* Soft dark overlay */}
          <div className="absolute inset-0 bg-black/25"></div>
        </div>

        {/* Outer Frame / Glass Card Container (Blueprint Frame 124: 80px padding all around) */}
        <div 
          className="relative z-10 w-full max-w-[1440px] mx-auto glass-panel rounded-[24px] shadow-2xl flex flex-col items-center"
          style={{
            paddingTop: '80px',
            paddingBottom: '80px',
            paddingLeft: 'max(24px, min(80px, 5vw))',
            paddingRight: 'max(24px, min(80px, 5vw))',
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {/* Header Block */}
          <div className="w-full flex flex-col items-center text-center">
            {/* Top Eyebrow: —— INSURANCE SIMPLIFIED —— */}
            <div className="flex items-center justify-center gap-3 mb-2.5">
              <div className="w-8 sm:w-10 h-[1.5px] bg-white/80"></div>
              <span 
                className="text-white uppercase tracking-[0.2em]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  lineHeight: 'normal',
                }}
              >
                INSURANCE SIMPLIFIED
              </span>
              <div className="w-8 sm:w-10 h-[1.5px] bg-white/80"></div>
            </div>

            {/* Title: OUR WORKING PROCESS (Blueprint: W Hug 548px, H Hug 68px) */}
            <h2 
              className="text-white uppercase text-center max-w-[548px] w-full"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                fontWeight: 700,
                lineHeight: '1.2',
                marginBottom: '16px',
              }}
            >
              OUR WORKING PROCESS
            </h2>

            {/* Subtitle Description (Blueprint: W Fixed 825px, H Hug 48px) */}
            <p 
              className="text-white/90 text-center max-w-[825px] w-full"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '14.5px',
                fontWeight: 400,
                lineHeight: '1.6',
              }}
            >
              Our process makes insurance simple and stress-free, from personalized consultations and tailored solutions to swift activation and ongoing support. We ensure reliable protection and hassle-free claims every step of the way.
            </p>
          </div>

          {/* Gap of 50px as shown in Blueprint Frame 124 */}
          <div style={{ height: '50px' }} className="w-full shrink-0" />

          {/* 3 Step Process Items (Blueprint Frame 178: Gap 80px between cards) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-[80px] justify-items-center items-start max-w-[1100px] mx-auto">
            
            {/* Step 01: Get A Quotetation */}
            <div className="flex flex-col items-center text-center w-full max-w-[276px] group">
              {/* Outer Border / Circle Image (Blueprint: 21px padding, Inner 166.8px x 166.8px) */}
              <div className="relative mb-5 flex flex-col items-center">
                {/* Outer Ring with 21px padding */}
                <div 
                  className="rounded-full border border-white/40 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:border-white/70"
                  style={{
                    width: '208.8px',
                    height: '208.8px',
                    padding: '21px',
                  }}
                >
                  {/* Inner Circular Image (W Fixed 166.8px, H Fixed 166.8px) */}
                  <div 
                    className="rounded-full overflow-hidden w-full h-full bg-slate-800 shadow-inner"
                    style={{
                      width: '166.8px',
                      height: '166.8px',
                    }}
                  >
                    <img
                      src="/images/process-profile/process-1.jpg"
                      alt="Get A Quotetation"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Downward triangle arrow */}
                <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[8px] border-t-white -mt-1 z-20"></div>

                {/* Terracotta Badge: 01 */}
                <div 
                  className="w-11 h-11 rounded-full bg-[#B8422B] text-white flex items-center justify-center shadow-lg mt-2 font-bold"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '15px',
                  }}
                >
                  01
                </div>
              </div>

              {/* Title (Blueprint: W Fixed 200px, H Fixed 27px) */}
              <h3 
                className="text-white text-center mb-2"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '18px',
                  fontWeight: 600,
                  width: '200px',
                  lineHeight: '27px',
                }}
              >
                Get A Quotetation
              </h3>

              {/* Subtitle (Blueprint: W Hug 276px, H Hug 48px) */}
              <p 
                className="text-white/85 text-center"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '13px',
                  fontWeight: 400,
                  lineHeight: '1.5',
                  width: '276px',
                }}
              >
                Answer a couple of questions, we'll provide accurate live quotes.
              </p>
            </div>

            {/* Step 02: Complete The Aplication */}
            <div className="flex flex-col items-center text-center w-full max-w-[276px] group">
              {/* Outer Border / Circle Image (Blueprint: 21px padding, Inner 166.8px x 166.8px) */}
              <div className="relative mb-5 flex flex-col items-center">
                {/* Outer Ring with 21px padding */}
                <div 
                  className="rounded-full border border-white/40 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:border-white/70"
                  style={{
                    width: '208.8px',
                    height: '208.8px',
                    padding: '21px',
                  }}
                >
                  {/* Inner Circular Image (W Fixed 166.8px, H Fixed 166.8px) */}
                  <div 
                    className="rounded-full overflow-hidden w-full h-full bg-slate-800 shadow-inner"
                    style={{
                      width: '166.8px',
                      height: '166.8px',
                    }}
                  >
                    <img
                      src="/images/process-profile/process-2.jpg"
                      alt="Complete The Aplication"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Downward triangle arrow */}
                <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[8px] border-t-white -mt-1 z-20"></div>

                {/* Terracotta Badge: 02 */}
                <div 
                  className="w-11 h-11 rounded-full bg-[#B8422B] text-white flex items-center justify-center shadow-lg mt-2 font-bold"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '15px',
                  }}
                >
                  02
                </div>
              </div>

              {/* Title (Blueprint: W Fixed 200px, H Fixed 27px) */}
              <h3 
                className="text-white text-center mb-2"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '18px',
                  fontWeight: 600,
                  width: '200px',
                  lineHeight: '27px',
                }}
              >
                Complete The Aplication
              </h3>

              {/* Subtitle (Blueprint: W Hug 276px, H Hug 48px) */}
              <p 
                className="text-white/85 text-center"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '13px',
                  fontWeight: 400,
                  lineHeight: '1.5',
                  width: '276px',
                }}
              >
                Answer a couple of questions, we'll provide accurate live quotes.
              </p>
            </div>

            {/* Step 03: Get your Insurance */}
            <div className="flex flex-col items-center text-center w-full max-w-[276px] group">
              {/* Outer Border / Circle Image (Blueprint: 21px padding, Inner 166.8px x 166.8px) */}
              <div className="relative mb-5 flex flex-col items-center">
                {/* Outer Ring with 21px padding */}
                <div 
                  className="rounded-full border border-white/40 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:border-white/70"
                  style={{
                    width: '208.8px',
                    height: '208.8px',
                    padding: '21px',
                  }}
                >
                  {/* Inner Circular Image (W Fixed 166.8px, H Fixed 166.8px) */}
                  <div 
                    className="rounded-full overflow-hidden w-full h-full bg-slate-800 shadow-inner"
                    style={{
                      width: '166.8px',
                      height: '166.8px',
                    }}
                  >
                    <img
                      src="/images/process-profile/process-3.jpg"
                      alt="Get your Insurance"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Downward triangle arrow */}
                <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[8px] border-t-white -mt-1 z-20"></div>

                {/* Terracotta Badge: 03 */}
                <div 
                  className="w-11 h-11 rounded-full bg-[#B8422B] text-white flex items-center justify-center shadow-lg mt-2 font-bold"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '15px',
                  }}
                >
                  03
                </div>
              </div>

              {/* Title (Blueprint: W Fixed 200px, H Fixed 27px) */}
              <h3 
                className="text-white text-center mb-2"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '18px',
                  fontWeight: 600,
                  width: '200px',
                  lineHeight: '27px',
                }}
              >
                Get your Insurance
              </h3>

              {/* Subtitle (Blueprint: W Hug 276px, H Hug 48px) */}
              <p 
                className="text-white/85 text-center"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '13px',
                  fontWeight: 400,
                  lineHeight: '1.5',
                  width: '276px',
                }}
              >
                Answer a couple of questions, we'll provide accurate live quotes.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ----------------- 7. NEWS & EVENTS (STAY UPDATED) ----------------- */}
      <section 
        className="w-full bg-white flex justify-center items-center"
        style={{
          paddingTop: '100px',
          paddingBottom: '100px',
          paddingLeft: 'max(20px, min(80px, 5vw))',
          paddingRight: 'max(20px, min(80px, 5vw))',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center">
          
          {/* Section Header */}
          <div className="text-center w-full max-w-[1050px] mx-auto flex flex-col items-center">
            {/* Eyebrow: —— NEWS & EVENTS —— */}
            <div className="flex items-center justify-center gap-2.5 mb-2">
              <div className="w-7 sm:w-9 h-[1.5px] bg-[#B8422B]"></div>
              <span 
                className="text-[#B8422B] uppercase tracking-[0.2em]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  lineHeight: 'normal',
                }}
              >
                NEWS & EVENTS
              </span>
              <div className="w-7 sm:w-9 h-[1.5px] bg-[#B8422B]"></div>
            </div>

            {/* Main Heading: 1 line (Blueprint W Hug 1028px, H Hug 68px, 45px font) */}
            <h2 
              className="text-center uppercase whitespace-normal lg:whitespace-nowrap w-full max-w-[1028px]"
              style={{
                color: '#000',
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(22px, 3.15vw, 45px)',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              STAY UPDATED WITH THE LATEST HAPPENINGS
            </h2>

            {/* Description */}
            <p 
              className="text-[#555] text-center max-w-[750px] leading-relaxed"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '14px',
                fontWeight: 400,
              }}
            >
              Stay updated with our latest news, events, and initiatives at Purabi General Insurance. Join us in protecting your future!
            </p>
          </div>

          {/* Gap of 30px between Header and Cards as shown in Blueprint Frame */}
          <div style={{ height: '30px' }} className="w-full shrink-0" />

          {/* 3 News Cards Container: 3 Cards each 413.33334px wide x 505px high */}
          <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] justify-items-center items-stretch">
            {[
              {
                id: 'news-1',
                title: 'শোক সংবাদ',
                bengaliTitle: 'শোক সংবাদ',
                date: '21 June 2025',
                summary: 'Praesent viverra augue assumenda mauris molestie sed vitae, rutrum inventore ullamcor..',
                image: '/images/shok_songbad.jpg',
                category: 'Corporate News'
              },
              {
                id: 'news-2',
                title: 'শোক সংবাদ',
                bengaliTitle: 'শোক সংবাদ',
                date: '21 June 2025',
                summary: 'Praesent viverra augue assumenda mauris molestie sed vitae, rutrum inventore ullamcor..',
                image: '/images/shok_songbad.jpg',
                category: 'Corporate News'
              },
              {
                id: 'news-3',
                title: 'Notice (28 March, 2022)',
                bengaliTitle: 'Notice (28 March, 2022)',
                date: '21 June 2025',
                summary: 'Praesent viverra augue assumenda mauris molestie sed vitae, rutrum inventore ullamcor..',
                image: '/images/notice.jpg',
                category: 'Notice'
              }
            ].map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#E5E7EB] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group w-full"
                style={{
                  maxWidth: '413.33334px',
                  padding: '12px',
                  borderRadius: '16px',
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                <div className="flex flex-col">
                  {/* Top Image Container */}
                  <div className="relative w-full h-[220px] rounded-[12px] overflow-hidden bg-stone-100 shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Text & Meta Details */}
                  <div className="px-1.5 pt-3.5 flex flex-col">
                    {/* Clock + Date */}
                    <div className="flex items-center gap-1.5 text-[11px] text-stone-500 font-medium mb-1.5">
                      <Clock className="w-3.5 h-3.5 text-stone-500 stroke-[1.75]" />
                      <span>{item.date}</span>
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-[17px] font-bold text-slate-900 leading-snug group-hover:text-[#B8422B] transition-colors line-clamp-1"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {item.bengaliTitle}
                    </h3>

                    {/* Thin Divider Line */}
                    <div className="w-full h-[1px] bg-[#E5E7EB] my-2.5"></div>

                    {/* Description */}
                    <p 
                      className="text-[13px] text-[#555] leading-relaxed line-clamp-3 mb-3.5"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      {item.summary}
                    </p>
                  </div>
                </div>

                {/* Left-Aligned Read More Action Button (reduced space above button) */}
                <div className="px-1.5 pb-1 pt-0 flex justify-start">
                  <button
                    type="button"
                    onClick={() => setSelectedNews({ 
                      id: item.id,
                      title: item.title,
                      bengaliTitle: item.bengaliTitle,
                      date: item.date,
                      category: item.category,
                      summary: item.summary,
                      content: item.summary,
                      imageUrl: item.image
                    })}
                    className="px-6 py-2.5 bg-[#B8422B] hover:bg-[#9E3420] text-white text-[13px] rounded-[8px] transition-colors cursor-pointer text-center shadow-xs"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------- 8. EXPERIENCED OUR MOBILE APP ----------------- */}
      <section 
        className="w-full bg-white flex justify-center items-center overflow-hidden"
        style={{
          paddingTop: '50px',
          paddingBottom: '50px',
          paddingLeft: 'max(20px, min(80px, 5vw))',
          paddingRight: 'max(20px, min(80px, 5vw))',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div 
          className="w-full max-w-[1280px] mx-auto bg-[#FDF8F5] border border-[#F3E5DC] rounded-[24px] overflow-hidden shadow-sm flex flex-col items-center relative"
          style={{
            minHeight: '554.34px',
            paddingTop: '50px',
            paddingLeft: 'max(20px, min(60px, 4vw))',
            paddingRight: 'max(20px, min(60px, 4vw))',
          }}
        >
          
          {/* Header Content */}
          <div className="text-center w-full max-w-[980px] mx-auto flex flex-col items-center">
            {/* Eyebrow: —— GET OUR MOBILE APP —— */}
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <div className="w-7 sm:w-9 h-[1.5px] bg-[#B8422B]"></div>
              <span 
                className="text-[#B8422B] uppercase tracking-[0.2em]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  lineHeight: 'normal',
                }}
              >
                GET OUR MOBILE APP
              </span>
              <div className="w-7 sm:w-9 h-[1.5px] bg-[#B8422B]"></div>
            </div>

            {/* Main Heading (Exact CSS Specs) */}
            <h2 
              className="text-center w-full uppercase mb-3"
              style={{
                color: '#000',
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(24px, 3.5vw, 45px)',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 'normal',
                textTransform: 'uppercase',
              }}
            >
              EXPERIENCED OUR MOBILE APP
            </h2>

            {/* Description */}
            <p 
              className="text-[#555] text-center max-w-[850px] leading-relaxed"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '1.6',
              }}
            >
              Simplify your insurance experience with our mobile app. Access your policy details, track claims, and receive instant updates anytime, anywhere. Stay in control of your coverage with just a few taps. Download now for convenience and peace of mind!
            </p>
          </div>

          {/* Gap of 30px between Header and Badges */}
          <div style={{ height: '30px' }} className="w-full shrink-0" />

          {/* App Store Badges */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            {/* Google Play */}
            <a
              href={COMPANY_INFO.playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="h-[46px] px-5 bg-black hover:bg-neutral-900 text-white rounded-[10px] flex items-center gap-3 transition-transform hover:scale-105 shadow-md"
            >
              <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.793 12 3.61 22.186c-.36-.312-.61-.796-.61-1.39V3.204c0-.594.25-1.078.61-1.39zm11.242 11.244l2.586 2.586-12.828 7.407 10.242-9.993zm0-2.116L4.609.95l12.828 7.407-2.586 2.585zm1.488 1.488l3.654 2.11a1.442 1.442 0 000-2.496l-3.654 2.11z" fill="currentColor"/>
              </svg>
              <div className="text-left">
                <div className="text-[9px] uppercase tracking-wider text-neutral-400 font-medium leading-none">GET IT ON</div>
                <div className="text-[14px] font-bold leading-tight font-sans">Google Play</div>
              </div>
            </a>

            {/* App Store */}
            <a
              href={COMPANY_INFO.appStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="h-[46px] px-5 bg-black hover:bg-neutral-900 text-white rounded-[10px] flex items-center gap-3 transition-transform hover:scale-105 shadow-md"
            >
              <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.66-.8 1.11-1.92.99-3.04-1 .04-2.15.66-2.82 1.45-.58.67-1.1 1.76-.96 2.85 1.11.09 2.19-.57 2.79-1.26z"/>
              </svg>
              <div className="text-left">
                <div className="text-[9px] uppercase tracking-wider text-neutral-400 font-medium leading-none">Download on the</div>
                <div className="text-[14px] font-bold leading-tight font-sans">App Store</div>
              </div>
            </a>
          </div>

          {/* Gap of 30px between Badges and Smartphone mockups */}
          <div style={{ height: '30px' }} className="w-full shrink-0" />

          {/* Smartphone Mockup Visual from /images/phone.png anchored to the bottom */}
          <div className="w-full flex justify-center items-end relative -mb-1 pointer-events-none select-none">
            <img 
              src="/images/phone.png" 
              alt="Purabi Insurance Mobile App Mockup" 
              className="w-auto h-[260px] sm:h-[320px] md:h-[360px] max-w-full object-contain object-bottom drop-shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </section>

      {/* News Article Detail Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95">
            <div className="relative h-60">
              <img src={selectedNews.imageUrl} alt={selectedNews.title} className="w-full h-full object-cover" />
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-md">
                {selectedNews.date}
              </div>
            </div>
            <div className="p-6 overflow-y-auto space-y-4 font-bengali">
              <div className="text-xs font-bold text-[#a83b24] uppercase tracking-wider">
                {selectedNews.category}
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {selectedNews.bengaliTitle || selectedNews.title}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedNews.content}
              </p>
              <div className="pt-4 border-t border-stone-200 flex justify-end">
                <button
                  onClick={() => setSelectedNews(null)}
                  className="px-5 py-2 bg-[#a83b24] text-white font-bold text-xs rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export const HomePage = Home;
export default Home;
