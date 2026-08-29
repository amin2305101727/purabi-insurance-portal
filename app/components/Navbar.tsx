import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, Activity, FileText, Shield, ArrowUpRight as ArrowIcon, X, Menu, MapPin, Phone } from 'lucide-react';
import logoImg from '/public/images/logo.png';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [claimsOpen, setClaimsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const servicesRef = useRef<HTMLDivElement>(null);
  const claimsRef = useRef<HTMLDivElement>(null);

  const insuranceServices = [
    'Health Insurance',
    'Travel Insurance',
    'Accident Insurance',
    'Car Insurance',
    'Motorcycle Insurance',
    'Life Insurance',
    'Fire Insurance',
    'Marine Insurance',
    'Group Insurance For Employees'
  ];

  const claimsItems = [
    { title: 'Track Active Claim Status', desc: 'Instant status checking with policy / claim ID', icon: Activity },
    { title: 'File an Online Claim', desc: 'Quick digital claim intimation and document upload', icon: FileText },
    { title: 'Claims Settlement Process', desc: 'Step-by-step survey and disbursement guidelines', icon: Shield }
  ];

  // Close dropdowns on outside click or escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
      if (claimsRef.current && !claimsRef.current.contains(event.target as Node)) {
        setClaimsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesOpen(false);
        setClaimsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header 
      className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-stone-200 h-[68px] sm:h-[76px] lg:h-[83px]"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center focus:outline-hidden group shrink-0"
          >
            <img 
              src={logoImg} 
              alt="Purabi General Insurance Co. Ltd." 
              className="object-contain transition-transform group-hover:scale-102 w-[135px] h-[34px] sm:w-[160px] sm:h-[40px] lg:w-[184.35px] lg:h-[46.224px]"
              style={{
                transform: 'rotate(0deg)',
                opacity: 1,
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav 
            className="hidden lg:flex items-center gap-5 xl:gap-7"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '18px',
              fontWeight: 400,
              fontStyle: 'normal',
              lineHeight: 'normal',
              textTransform: 'capitalize',
            }}
          >
            
            {/* Home */}
            <NavLink
              to="/"
              end
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: 'normal',
                textTransform: 'capitalize',
              }}
              className={({ isActive }) =>
                `transition-colors py-2 relative text-black ${
                  isActive ? 'font-medium' : 'hover:text-[#a83b24]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Home
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#a83b24] rounded-full" />
                  )}
                </>
              )}
            </NavLink>

            {/* About Us */}
            <NavLink
              to="/about"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: 'normal',
                textTransform: 'capitalize',
              }}
              className={({ isActive }) =>
                `transition-colors py-2 relative text-black ${
                  isActive ? 'font-medium' : 'hover:text-[#a83b24]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  About Us
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#a83b24] rounded-full" />
                  )}
                </>
              )}
            </NavLink>

            {/* Services with Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                type="button"
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setClaimsOpen(false);
                }}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  textTransform: 'capitalize',
                }}
                className={`flex items-center gap-1.5 py-2 transition-colors cursor-pointer text-black ${
                  servicesOpen ? 'text-[#a83b24]' : 'hover:text-[#a83b24]'
                }`}
                aria-expanded={servicesOpen}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-[#a83b24]' : 'text-slate-600'}`} />
              </button>

              {/* Services Dropdown Panel */}
              {servicesOpen && (
                <div 
                  className="absolute left-0 mt-2 w-80 sm:w-96 rounded-2xl overflow-hidden shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150 border border-white/20"
                  style={{
                    backgroundColor: 'rgba(50, 40, 38, 0.88)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)'
                  }}
                >
                  <div className="p-3">
                    <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 mb-1">
                      <span className="text-[11px] font-bold text-white/70 uppercase tracking-wider">
                        Insurance Solutions
                      </span>
                      <button 
                        onClick={() => setServicesOpen(false)}
                        className="text-white/60 hover:text-white transition-colors cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="divide-y divide-white/5">
                      {insuranceServices.map((item, index) => {
                        const isHealth = item === 'Health Insurance';
                        return isHealth ? (
                          <Link
                            key={index}
                            to="/health-insurance"
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center justify-between px-4 py-2.5 text-white text-sm font-medium rounded-xl hover:bg-white/10 transition-colors group cursor-pointer"
                          >
                            <span className="text-white/95 group-hover:text-white font-semibold text-[#FFDE7D]">
                              {item}
                            </span>
                            <ArrowIcon className="w-4 h-4 text-white/80 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </Link>
                        ) : (
                          <div
                            key={index}
                            className="flex items-center justify-between px-4 py-2.5 text-white text-sm font-medium rounded-xl hover:bg-white/10 transition-colors group cursor-default"
                          >
                            <span className="text-white/95 group-hover:text-white">
                              {item}
                            </span>
                            <ArrowIcon className="w-4 h-4 text-white/80 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Claims with Dropdown */}
            <div className="relative" ref={claimsRef}>
              <button
                type="button"
                onClick={() => {
                  setClaimsOpen(!claimsOpen);
                  setServicesOpen(false);
                }}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  textTransform: 'capitalize',
                }}
                className={`flex items-center gap-1.5 py-2 transition-colors cursor-pointer text-black ${
                  claimsOpen ? 'text-[#a83b24]' : 'hover:text-[#a83b24]'
                }`}
                aria-expanded={claimsOpen}
              >
                <span>Claims</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${claimsOpen ? 'rotate-180 text-[#a83b24]' : 'text-slate-600'}`} />
              </button>

              {/* Claims Dropdown Panel */}
              {claimsOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-stone-200 p-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-stone-100 mb-2">
                    Claims Management
                  </div>
                  <div className="space-y-1">
                    {claimsItems.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#fcf5f3] transition-colors cursor-default group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#a83b24]/10 text-[#a83b24] flex items-center justify-center shrink-0 mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-800 group-hover:text-[#a83b24] transition-colors">
                              {item.title}
                            </div>
                            <div className="text-[10px] text-slate-500 font-normal leading-tight mt-0.5">
                              {item.desc}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Blogs - Plain text label */}
            <span 
              className="text-black cursor-default select-none py-2"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: 'normal',
                textTransform: 'capitalize',
              }}
            >
              Blogs
            </span>

            {/* Contact Us - Plain text label */}
            <span 
              className="text-black cursor-default select-none py-2"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: 'normal',
                textTransform: 'capitalize',
              }}
            >
              Contact Us
            </span>
          </nav>

          {/* Right Action: Get A Quote Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 bg-[#a83b24] hover:bg-[#8f2d18] text-white text-[11.5px] sm:text-sm font-bold rounded-lg shadow-sm hover:shadow-md transition-all transform active:scale-98 cursor-pointer whitespace-nowrap"
            >
              <span>Get A Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-lg text-slate-700 hover:text-[#a83b24] hover:bg-stone-100 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-4 duration-150">
          <NavLink
            to="/"
            end
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-lg text-sm font-semibold ${
                isActive ? 'bg-[#fcf5f3] text-[#a83b24]' : 'text-slate-700 hover:bg-stone-50'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-lg text-sm font-semibold ${
                isActive ? 'bg-[#fcf5f3] text-[#a83b24]' : 'text-slate-700 hover:bg-stone-50'
              }`
            }
          >
            About Us
          </NavLink>
          
          <div className="px-3 py-1">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Services</div>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-700">
              {insuranceServices.map((item, idx) => {
                const isHealth = item === 'Health Insurance';
                return isHealth ? (
                  <Link
                    key={idx}
                    to="/health-insurance"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1.5 px-2.5 rounded-md bg-[#FAF1EE] text-[#a83b24] font-semibold border border-[#ebd8cc] block"
                  >
                    {item}
                  </Link>
                ) : (
                  <div key={idx} className="py-1 px-2 rounded-md bg-stone-50 text-slate-800">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="px-3 py-1">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Claims</div>
            <div className="space-y-1.5 text-xs text-slate-700">
              {claimsItems.map((item, idx) => (
                <div key={idx} className="p-2 rounded-md bg-stone-50 font-medium">
                  {item.title}
                </div>
              ))}
            </div>
          </div>

          <div className="px-3 py-1 text-sm font-semibold text-slate-600">
            Blogs
          </div>
          <div className="px-3 py-1 text-sm font-semibold text-slate-600">
            Contact Us
          </div>

          {/* Location & Contact info in mobile drawer */}
          <div className="pt-3 border-t border-stone-100 px-3 text-xs text-slate-500 space-y-1.5">
            <div className="flex items-start gap-2 text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-[#a83b24] shrink-0 mt-0.5" />
              <span>Sandhani Life Tower (2nd Floor), 34 Bangla Motor, Dhaka - 1000</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Phone className="w-3.5 h-3.5 text-[#a83b24] shrink-0" />
              <a href="tel:+8801714044146" className="hover:text-[#a83b24] font-medium">+880 1714-044146</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

