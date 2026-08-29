import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, ArrowUpRight, ShieldCheck, Clock, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface FooterProps {
  onOpenQuote: () => void;
  onOpenPayment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote, onOpenPayment }) => {
  return (
    <footer 
      className="w-full bg-[#FFFFFF] text-slate-800 border-t border-stone-100"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '50px',
        paddingBottom: '50px',
        paddingLeft: 'max(16px, min(40px, 3vw))',
        paddingRight: 'max(16px, min(40px, 3vw))',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center">
        
        {/* Frame 211: Pre-footer Call to Action */}
        <div className="w-full max-w-[950px] mx-auto text-center flex flex-col items-center mb-12">
          {/* Eyebrow */}
          <p 
            className="text-[#666] mb-1.5 text-center"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            Are you ready?
          </p>

          {/* Heading with exact specs */}
          <h2 
            className="text-center w-full"
            style={{
              color: '#000',
              textAlign: 'center',
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              letterSpacing: '-0.436px',
              marginBottom: '20px',
            }}
          >
            Get Your Insurance Now!
          </h2>

          {/* Buy Now Button (20px gap from heading) */}
          <div>
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2 bg-[#B8422B] hover:bg-[#9E3420] text-white transition-all transform active:scale-95 cursor-pointer shadow-md hover:shadow-lg rounded-[8px]"
              style={{
                fontFamily: "'Poppins', sans-serif",
                padding: '12px 28px',
                fontSize: '15px',
                fontWeight: 600,
              }}
            >
              <span>Buy Now</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Navbar Components */}
        <div 
          className="w-full flex flex-wrap justify-center items-center text-slate-800 mb-6"
          style={{
            display: 'flex',
            padding: '14px 20px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '14.5px',
            fontWeight: 500,
          }}
        >
          <Link to="/" className="px-3 py-1 hover:text-[#B8422B] transition-colors">Home</Link>
          <Link to="/about" className="px-3 py-1 hover:text-[#B8422B] transition-colors">About Us</Link>
          <div className="px-3 py-1 flex items-center gap-1 cursor-pointer hover:text-[#B8422B] transition-colors">
            <span>Services</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </div>
          <div className="px-3 py-1 flex items-center gap-1 cursor-pointer hover:text-[#B8422B] transition-colors">
            <span>Claims</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </div>
          <Link to="/blogs" className="px-3 py-1 hover:text-[#B8422B] transition-colors">Blogs</Link>
          <button 
            onClick={onOpenPayment} 
            className="px-3 py-1 hover:text-[#B8422B] transition-colors font-semibold text-[#B8422B] cursor-pointer"
          >
            Pay Premium
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-4 mb-5 text-slate-700">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:bg-[#B8422B] hover:text-white hover:border-[#B8422B] transition-all shadow-xs"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:bg-[#B8422B] hover:text-white hover:border-[#B8422B] transition-all shadow-xs"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:bg-[#B8422B] hover:text-white hover:border-[#B8422B] transition-all shadow-xs"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>

        {/* Working Hours */}
        <div 
          className="text-center text-slate-600 mb-8"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '13.5px',
            fontWeight: 500,
          }}
        >
          Sunday to Thursday : 10 AM to 6 PM
        </div>

          {/* Payment Channels Section */}
        <div className="w-full max-w-[1280px] mb-8 flex flex-col items-center">
          <div 
            className="text-slate-600 mb-3 text-center w-full"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '12px',
              lineHeight: '100%',
              letterSpacing: '-0.2px',
            }}
          >
            Payment Channels
          </div>
          
          {/* Channels Container: Centered responsive wrapping cards */}
          <div className="w-full flex flex-wrap items-center justify-center gap-[8px] sm:gap-[10px]">
            {[
              { id: 'visa', name: 'VISA', logo: '/images/payment-channels/Visa.png' },
              { id: 'mastercard', name: 'Mastercard', logo: '/images/payment-channels/MasterCard.png' },
              { id: 'nagad', name: 'Nagad', logo: '/images/payment-channels/nagad.png' },
              { id: 'bkash', name: 'bKash', logo: '/images/payment-channels/bkash.png' },
              { id: 'rocket', name: 'Rocket', logo: '/images/payment-channels/rocket.png' },
              { id: 'upay', name: 'Upay', logo: '/images/payment-channels/upay.jpg' },
              { id: 'surecash', name: 'SureCash', logo: '/images/payment-channels/surecash.jpg' },
              { id: 'taptapsend', name: 'Taptap Send', logo: '/images/payment-channels/taptapsend.png' },
              { id: 'cellfin', name: 'CellFin', logo: '/images/payment-channels/cellfin.png' },
              { id: 'nexuspay', name: 'NexusPay', logo: '/images/payment-channels/nexuspay.png' },
              { id: 'citybank', name: 'City Bank', logo: '/images/payment-channels/citybank.png' },
              { id: 'islamibank', name: 'Islami Bank', logo: '/images/payment-channels/islamibank.png' },
              { id: 'bracbank', name: 'BRAC Bank', logo: '/images/payment-channels/bracbank.png' },
              { id: 'ucb', name: 'UCB', logo: '/images/payment-channels/UCB.png' },
              { id: 'ebl', name: 'EBL', logo: '/images/payment-channels/ebl.png' },
            ].map((channel) => (
              <div
                key={channel.id}
                id={`payment-channel-${channel.id}`}
                className="bg-white border border-stone-200 shadow-xs flex items-center justify-center p-1.5 transition-all hover:shadow-sm hover:border-stone-300 select-none shrink-0"
                style={{
                  width: '96px',
                  height: '48px',
                  borderRadius: '10px',
                }}
                title={channel.name}
              >
                <img
                  src={channel.logo}
                  alt={channel.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Legal / Copyright Strip */}
        <div 
          className="w-full border-t border-stone-200/80 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500"
          style={{
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <div>
            Copyright © <span className="font-semibold text-slate-700">360D Soul Limited</span> 2025. All rights reserved.
          </div>
          <div className="flex items-center gap-6 font-normal">
            <Link to="/terms" className="hover:text-slate-800 transition-colors">Teams & Condition</Link>
            <Link to="/privacy" className="hover:text-slate-800 transition-colors">Privacy & Policy</Link>
            <Link to="/refund" className="hover:text-slate-800 transition-colors">Refund Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
