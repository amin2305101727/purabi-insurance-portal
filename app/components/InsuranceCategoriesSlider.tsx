import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Import images directly so Vite bundles and serves them reliably
import fireImg from '/public/images/fire.png';
import healthImg from '/public/images/health.png';
import motorImg from '/public/images/motor.png';
import marineImg from '/public/images/marine.png';
import travelImg from '/public/images/travel.png';
import engineeringImg from '/public/images/engineering.png';
import aviationImg from '/public/images/aviation.png';
import miscellaneousImg from '/public/images/miscellaneous.png';
import nibeditaImg from '/public/images/nibedita.png';

interface InsuranceCategoryCard {
  id: string;
  title: string;
  description: string;
  iconType: string;
  imageSrc: string;
}

const INSURANCE_CATEGORIES: InsuranceCategoryCard[] = [
  {
    id: 'fire',
    title: 'FIRE INSURANCE',
    description: 'With our Fire insurance policies, you can choose from various coverage options that protect your property, equipment,',
    iconType: 'fire',
    imageSrc: fireImg,
  },
  {
    id: 'health',
    title: 'HEALTH INSURANCE',
    description: 'With our Health insurance policies, you can choose from various coverage options that protect your property, equipment,',
    iconType: 'health',
    imageSrc: healthImg,
  },
  {
    id: 'motor',
    title: 'MOTOR INSURANCE',
    description: 'Motor Car insurance provides comprehensive protection for your vehicles, covering accidents, theft.',
    iconType: 'motor',
    imageSrc: motorImg,
  },
  {
    id: 'marine',
    title: 'MARINE INSURANCE',
    description: 'We offer comprehensive and flexible coverage for your vessels, protecting against physical damage,',
    iconType: 'marine',
    imageSrc: marineImg,
  },
  {
    id: 'travel',
    title: 'TRAVEL INSURANCE',
    description: 'Our Travel Insurance (Overseas Mediclaim Insurance) ensures comprehensive coverage for medical emergencies.',
    iconType: 'travel',
    imageSrc: travelImg,
  },
  {
    id: 'engineering',
    title: 'ENGINEERING INSURANCE',
    description: 'Engineering insurance refers to the insurance that provides',
    iconType: 'engineering',
    imageSrc: engineeringImg,
  },
  {
    id: 'aviation',
    title: 'AVIATION INSURANCE',
    description: 'Aviation insurance is insurance coverage geared specifically to the operation',
    iconType: 'aviation',
    imageSrc: aviationImg,
  },
  {
    id: 'miscellaneous',
    title: 'MISCELLANEOUS INSURANCE',
    description: 'Accidents shatter people emotionally, physically and financially,',
    iconType: 'miscellaneous',
    imageSrc: miscellaneousImg,
  },
  {
    id: 'nibedita',
    title: 'NIBEDITA INSURANCE',
    description: 'A comprehensive insurance scheme for women is a one stop service.',
    iconType: 'nibedita',
    imageSrc: nibeditaImg,
  },
];

// Helper to render the colorful, vector illustrations matching the exact screenshots
const renderCardIllustration = (type: string) => {
  switch (type) {
    case 'fire':
      return (
        <svg className="w-24 h-24 sm:w-28 sm:h-28" viewBox="0 0 100 100" fill="none">
          {/* Main Fire Flame */}
          <path
            d="M50 8C50 8 62 25 62 38C62 44.5 59 50.5 54 54.5C57.5 52 61 48 62.5 43C65.5 51 68 62 64 72C60 82 50 88 50 88C50 88 40 82 36 72C32 62 34.5 51 37.5 43C39 48 42.5 52 46 54.5C41 50.5 38 44.5 38 38C38 25 50 8 50 8Z"
            fill="url(#fireGradient)"
          />
          {/* Yellow Inner Flame */}
          <path
            d="M50 35C50 35 57 46 57 55C57 60 55 64 52 66.5C54 65 56 62.5 56.5 59C58.5 64 59 70 56 75C53 80 50 82 50 82C50 82 47 80 44 75C41 70 41.5 64 43.5 59C44 62.5 46 65 48 66.5C45 64 43 60 43 55C43 46 50 35 50 35Z"
            fill="#FFD23F"
          />
          {/* Blue Shield in Front */}
          <path
            d="M50 50L64 56V67C64 76.5 58 84 50 87C42 84 36 76.5 36 67V56L50 50Z"
            fill="#70BFFF"
          />
          <path
            d="M50 53L61.5 58V66.5C61.5 74.5 56.5 81 50 83.5C43.5 81 38.5 74.5 38.5 66.5V58L50 53Z"
            fill="#BEE3FF"
          />
          {/* White Checkmark inside shield */}
          <path
            d="M45.5 68L48.5 71L55 64.5"
            stroke="#ffffff"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="fireGradient" x1="50" y1="8" x2="50" y2="88" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF4D4D" />
              <stop offset="1" stopColor="#FF3366" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'health':
      return (
        <svg className="w-24 h-24 sm:w-28 sm:h-28" viewBox="0 0 100 100" fill="none">
          {/* Soft Coral/Pink Heart */}
          <path
            d="M50 78L45.5 73.8C25.5 55.4 12 43 12 28.5C12 16.8 21.2 7.5 32.5 7.5C38.9 7.5 45 10.5 50 15.3C55 10.5 61.1 7.5 67.5 7.5C78.8 7.5 88 16.8 88 28.5C88 43 74.5 55.4 54.5 73.8L50 78Z"
            fill="#FF6584"
          />
          {/* Heartbeat ECG line */}
          <path
            d="M26 36H36L42 24L48 46L54 32L58 38H72"
            stroke="#ffffff"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Supportive Caring Hand */}
          <path
            d="M20 62H35L42 58C44 56.8 47 57.5 49 59.5L62 70C65 72.5 68 74 72 74H84V84H68C63 84 58.5 81.5 55 78L45 68H20V62Z"
            fill="#FFCE94"
          />
          {/* Blue Cuff */}
          <rect x="14" y="60" width="10" height="26" rx="3" fill="#70D6FF" />
          {/* Plus Cross Circle Badge on Top Right */}
          <circle cx="76" cy="22" r="11" fill="#E2F0D9" />
          <path d="M76 16V28M70 22H82" stroke="#FF6584" strokeWidth="2.8" strokeLinecap="round" />
        </svg>
      );

    case 'motor':
      return (
        <svg className="w-24 h-24 sm:w-28 sm:h-28" viewBox="0 0 100 100" fill="none">
          {/* Modern Teal/Green Car */}
          {/* Mirrors */}
          <circle cx="21" cy="46" r="4.5" fill="#00A878" />
          <circle cx="79" cy="46" r="4.5" fill="#00A878" />
          {/* Roof and Window Cabin */}
          <path
            d="M28 47L34 26H66L72 47H28Z"
            fill="#A7F3D0"
          />
          {/* Window Glass Divider */}
          <path d="M49 27V45M37 42L40 31M63 42L60 31" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          {/* Main Car Body */}
          <path
            d="M20 48C20 46.5 21.5 45 23.5 45H76.5C78.5 45 80 46.5 80 48L83 67C83 69.5 81 71.5 78.5 71.5H21.5C19 71.5 17 69.5 17 67L20 48Z"
            fill="#059669"
          />
          {/* Car Headlights */}
          <rect x="22" y="52" width="10" height="6" rx="3" fill="#FEF08A" />
          <rect x="68" y="52" width="10" height="6" rx="3" fill="#FEF08A" />
          {/* Radiator Grille */}
          <path d="M38 56H62M38 60H62M38 64H62" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          {/* Wheels */}
          <rect x="22" y="69" width="11" height="12" rx="3" fill="#1E293B" />
          <rect x="67" y="69" width="11" height="12" rx="3" fill="#1E293B" />
          {/* Front Blue Shield Overlay */}
          <path
            d="M75 52L87 57V68C87 76 81.5 82.5 75 85C68.5 82.5 63 76 63 68V57L75 52Z"
            fill="#3B82F6"
          />
          <path
            d="M70.5 68.5L73.5 71.5L79.5 65.5"
            stroke="#ffffff"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'marine':
      return (
        <svg className="w-24 h-24 sm:w-28 sm:h-28" viewBox="0 0 100 100" fill="none">
          {/* Sea Ocean Waves */}
          <path
            d="M12 76C18 73 24 73 30 76C36 79 42 79 48 76C54 73 60 73 66 76C72 79 78 79 84 76C87 74.5 90 75 92 76"
            stroke="#3B82F6"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M14 83C20 80 26 80 32 83C38 86 44 86 50 83C56 80 62 80 68 83C74 86 80 86 86 83"
            stroke="#60A5FA"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Ship Bridge / Cabin */}
          <rect x="42" y="28" width="16" height="24" rx="2" fill="#E2E8F0" />
          <rect x="45" y="32" width="10" height="6" rx="1" fill="#38BDF8" />
          {/* Ship Funnel / Chimney */}
          <rect x="48" y="20" width="4" height="8" fill="#EF4444" />
          {/* Ship Hull */}
          <path
            d="M16 58H84L76 72H24L16 58Z"
            fill="#FBBF24"
          />
          <rect x="22" y="52" width="56" height="6" fill="#F87171" />
          {/* Red/Coral Protective Shield */}
          <path
            d="M74 40L86 45V55C86 62.5 81 68 74 70.5C67 68 62 62.5 62 55V45L74 40Z"
            fill="#EF4444"
          />
          <path
            d="M69.5 55L72.5 58L78.5 52"
            stroke="#ffffff"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'travel':
      return (
        <svg className="w-24 h-24 sm:w-28 sm:h-28" viewBox="0 0 100 100" fill="none">
          {/* Flight dotted trail */}
          <path
            d="M32 20C48 10 70 18 78 35C82 44 80 56 70 66"
            stroke="#94A3B8"
            strokeWidth="2.5"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
          {/* Globe World Earth */}
          <circle cx="48" cy="50" r="28" fill="#93C5FD" />
          {/* Continents (Green) */}
          <path
            d="M38 34C40 32 46 32 48 36C50 40 46 45 44 48C42 51 38 53 34 50C30 47 32 38 38 34ZM56 46C60 44 65 48 67 53C69 58 64 64 58 66C52 68 50 62 52 56C54 50 52 48 56 46Z"
            fill="#86EFAC"
          />
          {/* Flying Airplane Top Left */}
          <path
            d="M28 20L34 22L36 17L38 18L36 23L42 25L43 23L44 24L43 26L45 27L43 28L40 27L34 32L32 31L35 27L29 25L28 20Z"
            fill="#64748B"
          />
          {/* Yellow Map Pin */}
          <path
            d="M72 26C72 22.7 69.3 20 66 20C62.7 20 60 22.7 60 26C60 30.5 66 38 66 38C66 38 72 30.5 72 26Z"
            fill="#FBBF24"
          />
          <circle cx="66" cy="26" r="2.5" fill="#ffffff" />
          {/* Silver/Charcoal Shield with Green Check */}
          <path
            d="M70 56L82 60.5V70C82 77.5 77 83 70 85.5C63 83 58 77.5 58 70V60.5L70 56Z"
            fill="#475569"
          />
          <path
            d="M66 70.5L68.5 73L74 67.5"
            stroke="#22C55E"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'engineering':
      return (
        <svg className="w-24 h-24 sm:w-28 sm:h-28" viewBox="0 0 100 100" fill="none">
          {/* Large Engineering Gear in Background */}
          <path
            d="M66 28L69 24L74 26L74 31L78 33L82 29L86 33L83 37L85 41L90 42L90 47L85 49L83 53L86 57L82 61L78 57L74 59L74 64L69 66L66 62L62 62L60 66L55 64L55 59L51 57L47 61L43 57L46 53L44 49L39 47L39 42L44 41L46 37L43 33L47 29L51 33L55 31L55 26L60 24L62 28H66Z"
            fill="#94A3B8"
          />
          <circle cx="64" cy="45" r="12" fill="#FAF1EE" />
          {/* Lightning Energy symbol on gear */}
          <path d="M66 38L60 46H66L62 53" stroke="#FBBF24" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />

          {/* Engineer Avatar (Yellow Safety Hat & Blue Vest) */}
          <circle cx="38" cy="50" r="10" fill="#FFD1A4" />
          {/* Yellow Hardhat */}
          <path
            d="M26 44C26 37.4 31.4 32 38 32C44.6 32 50 37.4 50 44H26Z"
            fill="#FBBF24"
          />
          <rect x="23" y="43" width="30" height="4" rx="2" fill="#F59E0B" />
          <path d="M38 32V42" stroke="#F59E0B" strokeWidth="3" />
          {/* Blue Body / Vest */}
          <path
            d="M24 72C24 64 30 60 38 60C46 60 52 64 52 72V80H24V72Z"
            fill="#38BDF8"
          />
          {/* Yellow Safety Straps */}
          <path d="M32 60V80M44 60V80" stroke="#FBBF24" strokeWidth="3.5" />
        </svg>
      );

    case 'aviation':
      return (
        <svg className="w-24 h-24 sm:w-28 sm:h-28" viewBox="0 0 100 100" fill="none">
          {/* Sky Blue Jet Climbing */}
          {/* Main Fuselage & Tail */}
          <path
            d="M32 68L22 74V68L28 62L28 50L14 58V50L28 38L28 26C28 21.6 31.6 18 36 18C40.4 18 44 21.6 44 26L44 38L58 50V58L44 50L44 62L50 68V74L40 68H32Z"
            transform="rotate(35 40 45)"
            fill="#38BDF8"
          />
          {/* Cockpit Window */}
          <circle cx="56" cy="28" r="3" fill="#ffffff" />
          {/* Wing Engine */}
          <rect x="25" y="48" width="6" height="12" rx="3" fill="#0284C7" />
          <rect x="58" y="32" width="6" height="12" rx="3" fill="#0284C7" />

          {/* Deep Blue Security Shield Overlay */}
          <path
            d="M68 46L80 50.5V60C80 68 74.5 74 68 76.5C61.5 74 56 68 56 60V50.5L68 46Z"
            fill="#1D4ED8"
          />
          <path
            d="M63.5 60.5L66.5 63.5L72.5 57.5"
            stroke="#ffffff"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'miscellaneous':
      return (
        <svg className="w-24 h-24 sm:w-28 sm:h-28" viewBox="0 0 100 100" fill="none">
          {/* Office Archive Cardboard Box */}
          {/* Back flaps */}
          <path d="M22 46L30 38H70L78 46H22Z" fill="#D97706" />
          {/* Contents inside box: Clock, File folder, Ruler */}
          {/* Teal Folder */}
          <rect x="56" y="28" width="14" height="22" rx="2" fill="#0D9488" />
          <circle cx="63" cy="34" r="2" fill="#ffffff" />
          {/* Cyan Desk Clock */}
          <circle cx="42" cy="38" r="11" fill="#38BDF8" />
          <circle cx="42" cy="38" r="8" fill="#ffffff" />
          <path d="M42 34V38L45 40" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
          {/* Ruler/Pen */}
          <rect x="30" y="26" width="6" height="24" rx="1" fill="#FBBF24" />

          {/* Cardboard Box Body */}
          <rect x="20" y="44" width="60" height="36" rx="4" fill="#A16207" />
          <path d="M16 44H84V50H16V44Z" fill="#B45309" />
          {/* White Box Label */}
          <rect x="34" y="58" width="32" height="12" rx="2" fill="#ffffff" />
          <path d="M40 64H60" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'nibedita':
      return (
        <svg className="w-24 h-24 sm:w-28 sm:h-28" viewBox="0 0 100 100" fill="none">
          {/* Elegant Woman Silhouette Hair & Face profile */}
          <path
            d="M48 20C36 20 28 32 30 48C31 56 36 63 42 66C38 68 34 71 30 76C42 76 52 70 56 62C64 62 70 56 70 46C70 32 60 20 48 20Z"
            fill="#1E293B"
          />
          {/* Flowing hair waves */}
          <path
            d="M32 32C42 22 58 24 64 34C68 40 68 50 62 56C58 60 52 64 44 64C48 58 50 50 48 44C46 36 40 32 32 32Z"
            fill="#0F172A"
          />
          {/* Graceful eyelash and face contour */}
          <path
            d="M56 46C54 48 50 48 48 46"
            stroke="#1E293B"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Red/Coral subtle lips */}
          <path
            d="M52 54C54 55 56 55 58 54C56 56 54 56 52 54Z"
            fill="#E11D48"
          />
          {/* Stylized hair strands */}
          <path
            d="M26 42C34 38 42 42 46 48"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M28 54C34 52 40 56 42 62"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    default:
      return null;
  }
};

interface InsuranceCategoriesSliderProps {
  onOpenQuote: (categoryId: string) => void;
}

export const InsuranceCategoriesSlider: React.FC<InsuranceCategoriesSliderProps> = ({
  onOpenQuote,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollBounds = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScrollBounds();
    const handleResize = () => checkScrollBounds();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mouse drag handlers for drag-to-scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsMouseDown(true);
    setHasMoved(false);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const distance = (x - startX) * 1.5;
    if (Math.abs(distance) > 5) {
      setHasMoved(true);
    }
    sliderRef.current.scrollLeft = scrollLeft - distance;
    checkScrollBounds();
  };

  const handleMouseUpOrLeave = () => {
    setIsMouseDown(false);
  };

  const scrollByAmount = (amount: number) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: amount,
      behavior: 'smooth',
    });
    setTimeout(checkScrollBounds, 350);
  };

  return (
    <div className="relative w-full">
      {/* Navigation Arrows for Accessibility */}
      {canScrollLeft && (
        <button
          type="button"
          onClick={() => scrollByAmount(-380)}
          className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 shadow-lg border border-stone-200 text-slate-800 flex items-center justify-center hover:bg-white hover:scale-110 active:scale-95 transition-all cursor-pointer hidden md:flex"
          aria-label="Scroll previous categories"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {canScrollRight && (
        <button
          type="button"
          onClick={() => scrollByAmount(380)}
          className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 shadow-lg border border-stone-200 text-slate-800 flex items-center justify-center hover:bg-white hover:scale-110 active:scale-95 transition-all cursor-pointer hidden md:flex"
          aria-label="Scroll next categories"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Horizontal Draggable & Swipeable Carousel Container */}
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onScroll={checkScrollBounds}
        className={`w-full flex items-stretch gap-6 overflow-x-auto no-scrollbar pt-1 pb-6 px-1 select-none touch-pan-x overscroll-x-contain ${
          isMouseDown ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{
          scrollBehavior: isMouseDown ? 'auto' : 'smooth',
        }}
      >
        {INSURANCE_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="w-[350px] min-w-[350px] max-w-[350px] shrink-0 bg-[#FAF1EE] rounded-[24px] pt-4 pb-7 flex flex-col justify-start items-center text-center relative shadow-xs hover:shadow-md transition-all duration-300 group"
            style={{ 
              width: '350px', 
              height: '252.29167px',
              minHeight: '252.29167px',
              maxHeight: '252.29167px'
            }}
          >
            {/* Top Vector Illustration / Logo */}
            <div className="w-full flex justify-center items-center h-[72px] shrink-0 group-hover:scale-105 transition-transform duration-300">
              <div className="w-[72px] h-[72px] flex items-center justify-center">
                <img
                  src={cat.imageSrc}
                  alt={cat.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[72px] max-w-[80px] w-auto h-auto object-contain select-none pointer-events-none"
                  onError={(e) => {
                    // Fallback to SVG illustration if PNG not found
                    e.currentTarget.style.display = 'none';
                    const fallbackEl = e.currentTarget.parentElement?.querySelector('.svg-fallback');
                    if (fallbackEl) {
                      (fallbackEl as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                <div className="svg-fallback hidden w-full h-full items-center justify-center">
                  {renderCardIllustration(cat.iconType)}
                </div>
              </div>
            </div>

            {/* Gap 7.29px between Icon and Title */}
            <div style={{ height: '7.29px' }} className="shrink-0" />

            {/* Title (Blueprint: W Fixed 168.4375px, H Hug 27px, Uppercase) */}
            <div 
              className="flex items-center justify-center text-center shrink-0"
              style={{
                width: '168.4375px',
                height: '27px',
              }}
            >
              <h3 
                className="text-slate-950 uppercase tracking-normal line-clamp-1"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              >
                {cat.title}
              </h3>
            </div>

            {/* Gap 7.29px between Title and Description */}
            <div style={{ height: '7.29px' }} className="shrink-0" />

            {/* Description (Blueprint: Left & Right padding 49.95px) */}
            <div 
              className="w-full flex justify-center items-start px-[49.95px]"
              style={{
                maxWidth: '350px',
              }}
            >
              <p 
                className="text-slate-600 text-center font-normal line-clamp-3"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                  fontSize: '11.5px',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                  maxWidth: '250.1px',
                }}
              >
                {cat.description}
              </p>
            </div>

            {/* Bottom Circular Terracotta Action Button with White Cutout Pod */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
              {/* White scallop ring cutout */}
              <div className="w-[58px] h-[58px] rounded-full bg-white flex items-center justify-center p-1 shadow-xs">
                <button
                  type="button"
                  onClick={(e) => {
                    if (!hasMoved) {
                      e.stopPropagation();
                      onOpenQuote(cat.id);
                    }
                  }}
                  className="w-11 h-11 rounded-full bg-[#a83b24] hover:bg-[#8f2d18] text-white flex items-center justify-center shadow-md group-hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                  aria-label={`View ${cat.title}`}
                >
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
