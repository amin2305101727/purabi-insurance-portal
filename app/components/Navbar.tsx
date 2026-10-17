import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, Activity, FileText, Shield, ArrowUpRight as ArrowIcon, X, Menu, MapPin, Phone } from 'lucide-react';
import logoImg from '/public/images/logo.png';

interface NavbarProps {
  onOpenQuote: () => void;
  onOpenClaimTracker?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, onOpenClaimTracker }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [claimsOpen, setClaimsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileClaimsOpen, setMobileClaimsOpen] = useState(false);
  const location = useLocation();

  const servicesRef = useRef<HTMLDivElement>(null);
  const claimsRef = useRef<HTMLDivElement>(null);

  const insuranceServices = [
    { title: 'Health Insurance', path: '/health-insurance', isLive: true },
    { title: 'Travel Insurance', path: '/services/travel' },
    { title: 'Accident Insurance', path: '/services/accident' },
    { title: 'Car Insurance', path: '/services/car' },
    { title: 'Motorcycle Insurance', path: '/services/motorcycle' },
    { title: 'Life Insurance', path: '/services/life' },
    { title: 'Fire Insurance', path: '/services/fire' },
    { title: 'Marine Insurance', path: '/services/marine' },
    { title: 'Group Insurance For Employees', path: '/services/group' }
  ];

  const claimsItems = [
    { title: 'Track Active Claim Status', desc: 'Instant status checking with policy / claim ID', icon: Activity, isTracker: true },
    { title: 'File an Online Claim', desc: 'Quick digital claim intimation and document upload', icon: FileText, path: '/claims/file-claim' },
    { title: 'Claims Settlement Process', desc: 'Step-by-step survey and disbursement guidelines', icon: Shield, path: '/claims/process' }
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
                      {insuranceServices.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center justify-between px-4 py-2.5 text-white text-sm font-medium rounded-xl hover:bg-white/10 transition-colors group cursor-pointer"
                        >
                          <span className={`text-white/95 group-hover:text-white ${item.isLive ? 'font-semibold text-[#FFDE7D]' : ''}`}>
                            {item.title}
                          </span>
                          <ArrowIcon className="w-4 h-4 text-white/80 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      ))}
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
                      if (item.isTracker) {
                        return (
                          <button
                            key={index}
                            type="button"
                            onClick={() => {
                              setClaimsOpen(false);
                              if (onOpenClaimTracker) onOpenClaimTracker();
                            }}
                            className="w-full text-left flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#fcf5f3] transition-colors cursor-pointer group"
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
                          </button>
                        );
                      }
                      return (
                        <Link
                          key={index}
                          to={item.path!}
                          onClick={() => setClaimsOpen(false)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#fcf5f3] transition-colors cursor-pointer group"
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
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Blogs */}
            <NavLink 
              to="/blogs"
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
                  Blogs
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#a83b24] rounded-full" />
                  )}
                </>
              )}
            </NavLink>

            {/* Contact Us */}
            <NavLink 
              to="/contact"
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
                  Contact Us
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#a83b24] rounded-full" />
                  )}
                </>
              )}
            </NavLink>
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
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-1.5 shadow-lg animate-in slide-in-from-top-4 duration-150">
          <NavLink
            to="/"
            end
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                isActive ? 'bg-[#fcf5f3] text-[#a83b24]' : 'text-slate-800 hover:bg-stone-50'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                isActive ? 'bg-[#fcf5f3] text-[#a83b24]' : 'text-slate-800 hover:bg-stone-50'
              }`
            }
          >
            About Us
          </NavLink>
          
          {/* Services Accordion Toggle */}
          <div className="rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => {
                setMobileServicesOpen(!mobileServicesOpen);
                setMobileClaimsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                mobileServicesOpen ? 'bg-[#fcf5f3] text-[#a83b24]' : 'text-slate-800 hover:bg-stone-50'
              }`}
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-[#a83b24]' : 'text-slate-400'}`} />
            </button>

            {mobileServicesOpen && (
              <div className="pl-3 pr-1 py-2 space-y-1 bg-stone-50/70 rounded-lg mt-1 border border-stone-100 animate-in slide-in-from-top-2 duration-150">
                {insuranceServices.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-2 px-3 rounded-md text-xs transition-colors ${
                      item.isLive
                        ? 'bg-[#FAF1EE] text-[#a83b24] font-bold border border-[#ebd8cc]'
                        : 'text-slate-700 font-medium hover:bg-stone-100'
                    }`}
                  >
                    <span>{item.title}</span>
                    <ArrowIcon className="w-3.5 h-3.5 opacity-70" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Claims Accordion Toggle */}
          <div className="rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => {
                setMobileClaimsOpen(!mobileClaimsOpen);
                setMobileServicesOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                mobileClaimsOpen ? 'bg-[#fcf5f3] text-[#a83b24]' : 'text-slate-800 hover:bg-stone-50'
              }`}
            >
              <span>Claims</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileClaimsOpen ? 'rotate-180 text-[#a83b24]' : 'text-slate-400'}`} />
            </button>

            {mobileClaimsOpen && (
              <div className="pl-3 pr-1 py-2 space-y-1.5 bg-stone-50/70 rounded-lg mt-1 border border-stone-100 animate-in slide-in-from-top-2 duration-150">
                {claimsItems.map((item, idx) => {
                  const Icon = item.icon;
                  if (item.isTracker) {
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          if (onOpenClaimTracker) onOpenClaimTracker();
                        }}
                        className="w-full text-left p-2.5 rounded-md bg-white border border-stone-100 text-xs text-slate-800 hover:border-stone-200 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2 font-semibold text-slate-900">
                          <Icon className="w-3.5 h-3.5 text-[#a83b24]" />
                          <span>{item.title}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 pl-5.5 leading-tight">{item.desc}</p>
                      </button>
                    );
                  }
                  return (
                    <Link
                      key={idx}
                      to={item.path!}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block p-2.5 rounded-md bg-white border border-stone-100 text-xs text-slate-800 hover:border-stone-200 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2 font-semibold text-slate-900">
                        <Icon className="w-3.5 h-3.5 text-[#a83b24]" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 pl-5.5 leading-tight">{item.desc}</p>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <NavLink
            to="/blogs"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                isActive ? 'bg-[#fcf5f3] text-[#a83b24]' : 'text-slate-800 hover:bg-stone-50'
              }`
            }
          >
            Blogs
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                isActive ? 'bg-[#fcf5f3] text-[#a83b24]' : 'text-slate-800 hover:bg-stone-50'
              }`
            }
          >
            Contact Us
          </NavLink>

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

