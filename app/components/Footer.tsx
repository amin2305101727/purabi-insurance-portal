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
        <div className="w-full max-w-[950px] mx-auto text-center flex flex-col items-center mb-0">
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
            }}
          >
            Get Your Insurance Now!
          </h2>

          {/* Buy Now Button (20px gap from heading above, and 20px gap to navbar below) */}
          <div style={{ marginTop: '20px', marginBottom: '20px' }}>
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
          className="w-full flex flex-wrap justify-center items-center mb-6"
          style={{
            display: 'flex',
            padding: '0px 20px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            color: '#000',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            textTransform: 'capitalize',
          }}
        >
          <Link to="/" className="px-3 py-1 text-black hover:text-[#B8422B] transition-colors" style={{ color: '#000', textTransform: 'capitalize' }}>Home</Link>
          <Link to="/about" className="px-3 py-1 text-black hover:text-[#B8422B] transition-colors" style={{ color: '#000', textTransform: 'capitalize' }}>About Us</Link>
          <div className="px-3 py-1 flex items-center gap-1 cursor-pointer text-black hover:text-[#B8422B] transition-colors" style={{ color: '#000', textTransform: 'capitalize' }}>
            <span>Services</span>
            <ChevronDown className="w-4 h-4 opacity-70" />
          </div>
          <div className="px-3 py-1 flex items-center gap-1 cursor-pointer text-black hover:text-[#B8422B] transition-colors" style={{ color: '#000', textTransform: 'capitalize' }}>
            <span>Claims</span>
            <ChevronDown className="w-4 h-4 opacity-70" />
          </div>
          <Link to="/blogs" className="px-3 py-1 text-black hover:text-[#B8422B] transition-colors" style={{ color: '#000', textTransform: 'capitalize' }}>Blogs</Link>
          <button 
            onClick={onOpenPayment} 
            className="px-3 py-1 text-black hover:text-[#B8422B] transition-colors cursor-pointer"
            style={{ color: '#000', textTransform: 'capitalize' }}
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
          className="text-center mb-8"
          style={{
            color: '#000',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '24px',
          }}
        >
          Sunday to Thursday : 10 AM to 6 PM
        </div>

        {/* Payment Channels Section */}
        <div className="w-full max-w-[1280px] mb-8 flex flex-col items-start">
          <div 
            className="text-slate-600 mb-3 text-left w-full"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '13px',
              lineHeight: '100%',
              letterSpacing: '-0.2px',
              textAlign: 'left',
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
          className="w-full border-t border-stone-200/80 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{
            color: '#444',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '15px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            letterSpacing: '-0.205px',
          }}
        >
          <div>
            Copyright © <span style={{ color: '#AC3E25', fontWeight: 700, fontFamily: "'Poppins', sans-serif", fontSize: '15px', letterSpacing: '-0.205px' }}>360D Soul Limited</span> 2025. All rights reserved.
          </div>
          <div className="flex items-center gap-6 font-normal">
            <Link to="/terms" className="hover:text-slate-800 transition-colors" style={{ color: '#444' }}>Terms & Condition</Link>
            <Link to="/privacy" className="hover:text-slate-800 transition-colors" style={{ color: '#444' }}>Privacy & Policy</Link>
            <Link to="/refund" className="hover:text-slate-800 transition-colors" style={{ color: '#444' }}>Refund Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
