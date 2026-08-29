import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, User, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface TopHeaderProps {
  onOpenPortal: (type: 'client' | 'agent') => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ onOpenPortal }) => {
  return (
    <div 
      className="bg-[#a83b24] text-white text-[11px] sm:text-[12.5px] md:text-[13px] px-3 sm:px-4 md:px-8 border-b border-[#92301c] font-normal tracking-normal shadow-xs flex items-center justify-center h-[38px] sm:h-[42px] md:h-[50px]"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-row items-center justify-between gap-2">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-7 min-w-0">
          {/* Location - Hidden on mobile, visible on desktop/xl */}
          <div className="hidden xl:flex items-center gap-1.5 hover:text-orange-100 transition-colors shrink-0">
            <MapPin className="w-3.5 h-3.5 fill-white text-[#a83b24] shrink-0" />
            <span className="font-sans font-medium text-white/95 text-[12px] md:text-[13px] truncate">
              Sandhani Life Tower (2nd Floor), 34 Bangla Motor, Dhaka - 1000
            </span>
          </div>

          {/* Email - Hidden on mobile, visible on lg+ */}
          <div className="hidden lg:flex items-center gap-1.5 hover:text-orange-100 transition-colors shrink-0">
            <Mail className="w-3.5 h-3.5 text-white shrink-0 stroke-[2]" />
            <a href="mailto:purabiinsurance@gmail.com" className="font-sans font-medium text-white/95 hover:underline text-[12px] md:text-[13px]">
              purabiinsurance@gmail.com
            </a>
          </div>

          {/* Phone - Always visible on mobile and all devices */}
          <div className="flex items-center gap-1 sm:gap-1.5 hover:text-orange-100 transition-colors shrink-0">
            <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white text-[#a83b24] shrink-0" />
            <a href="tel:+8801714044146" className="font-sans font-semibold sm:font-medium text-white/95 hover:underline whitespace-nowrap text-[11px] sm:text-[12px] md:text-[13px]">
              +880 1714-044146
            </a>
          </div>
        </div>

        {/* Right: Quick Portals (Client & Agent) & Socials */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <div className="flex items-center gap-1.5 sm:gap-3 pr-0 md:pr-3 md:border-r md:border-white/20">
            <button
              onClick={() => onOpenPortal('client')}
              className="flex items-center gap-1 hover:text-orange-100 transition-colors uppercase tracking-wider font-semibold cursor-pointer text-[10px] sm:text-[11px] whitespace-nowrap"
            >
              <User className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>CLIENT PORTAL</span>
            </button>
            <span className="text-white/40 text-[10px] sm:text-xs">|</span>
            <button
              onClick={() => onOpenPortal('agent')}
              className="flex items-center gap-1 hover:text-orange-100 transition-colors uppercase tracking-wider font-semibold cursor-pointer text-[10px] sm:text-[11px] whitespace-nowrap"
            >
              <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>AGENT PORTAL</span>
            </button>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-5 h-5 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-all text-white"
            >
              <Facebook className="w-3 h-3" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="w-5 h-5 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-all text-white"
            >
              <Twitter className="w-3 h-3" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-5 h-5 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-all text-white"
            >
              <Linkedin className="w-3 h-3" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-5 h-5 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-all text-white"
            >
              <Instagram className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
