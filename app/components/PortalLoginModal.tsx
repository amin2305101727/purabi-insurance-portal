import React, { useState } from 'react';
import { X, ArrowUpRight, CheckCircle2, ShieldCheck, UserPlus } from 'lucide-react';

interface PortalLoginModalProps {
  isOpen: boolean;
  type: 'client' | 'agent';
  onClose: () => void;
}

export const PortalLoginModal: React.FC<PortalLoginModalProps> = ({ isOpen, type, onClose }) => {
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);

  if (!isOpen) return null;

  const isClient = type === 'client';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier || !password) return;
    setLoggedIn(true);
  };

  const handleDemoFill = () => {
    if (isClient) {
      setIdentifier('client@purabiinsurance.com');
      setPassword('client123');
    } else {
      setIdentifier('AGT-8841 (PGICL)');
      setPassword('agent123');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Outer Card with Soft Peach/Cream Frame */}
      <div 
        className="relative bg-[#F6ECE6] w-full max-w-[940px] rounded-[28px] sm:rounded-[36px] p-3.5 sm:p-4 md:p-5 shadow-2xl border border-stone-300/40 my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute -top-3 -right-3 sm:top-3 sm:right-3 z-30 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-stone-700 hover:text-black shadow-md flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>

        {/* Inner Two-Column Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-4 md:gap-5 items-stretch">
          
          {/* ================= LEFT SIDE: Hero Image Card ================= */}
          <div className="relative rounded-[22px] sm:rounded-[26px] overflow-hidden min-h-[300px] sm:min-h-[380px] lg:min-h-[530px] flex flex-col justify-between p-5 sm:p-6 text-white bg-slate-900 shadow-md">
            {/* Background Image */}
            <img
              src="/images/agent_portal_hero.jpg"
              alt="Purabi Insurance Consultation"
              className="absolute inset-0 w-full h-full object-cover object-center brightness-90"
            />
            {/* Soft Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/70 pointer-events-none" />

            {/* Top Bar on Image: Brand Logo & Navigation */}
            <div className="relative z-10 flex items-center justify-between gap-3">
              {/* Purabi Logo */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-md border-2 border-white flex items-center justify-center font-black text-sm tracking-tight text-white bg-black/20 backdrop-blur-xs">
                  P
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[12px] font-black tracking-wider uppercase text-white font-sans">
                    PURABI GENERAL
                  </span>
                  <span className="text-[9.5px] font-bold tracking-widest text-white/90 uppercase font-sans mt-0.5">
                    INSURANCE CO. LTD.
                  </span>
                </div>
              </div>

              {/* Header Links: Login / Sign Up */}
              <div className="flex items-center gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => setAuthMode('login')}
                  className={`font-semibold transition-colors cursor-pointer ${
                    authMode === 'login' ? 'text-white underline underline-offset-4' : 'text-white/80 hover:text-white'
                  }`}
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => setAuthMode('signup')}
                  className={`px-3.5 py-1 rounded-full border border-white/70 font-semibold text-xs transition-all cursor-pointer ${
                    authMode === 'signup' ? 'bg-white text-[#A83B24]' : 'text-white hover:bg-white/20'
                  }`}
                >
                  Sign Up
                </button>
              </div>
            </div>

            {/* Bottom Slider Dots */}
            <div className="relative z-10 flex items-center gap-1.5 pt-6">
              {[0, 1, 2, 3, 4].map((idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSlide === idx ? 'w-7 bg-[#B8422B]' : 'w-4 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ================= RIGHT SIDE: Login / Sign Up Form ================= */}
          <div className="bg-white rounded-[22px] sm:rounded-[26px] p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-xs">
            {!loggedIn ? (
              <div className="flex flex-col justify-between h-full">
                
                {/* Header */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#222222] tracking-tight mb-1 font-sans">
                    {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
                  </h2>
                  <p className="text-xs sm:text-[13.5px] text-[#666666] font-normal">
                    {authMode === 'login' 
                      ? "Don't Share Your Login Credential" 
                      : "Register as an Authorized PGICL Agent / Client"}
                  </p>
                </div>

                {/* Form Elements */}
                <form onSubmit={handleLogin} className="space-y-4">
                  {authMode === 'signup' && (
                    <>
                      <div>
                        <label className="block text-[13px] font-medium text-[#222222] mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Enter Your Full Name"
                          className="w-full bg-[#F6F7F9] border border-stone-200/90 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#B8422B] focus:bg-white transition-all placeholder:text-stone-400"
                        />
                      </div>

                      <div>
                        <label className="block text-[13px] font-medium text-[#222222] mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+880 1XXX-XXXXXX"
                          className="w-full bg-[#F6F7F9] border border-stone-200/90 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#B8422B] focus:bg-white transition-all placeholder:text-stone-400"
                        />
                      </div>
                    </>
                  )}

                  {/* Username Or Agent ID Field */}
                  <div>
                    <label className="block text-[13px] font-medium text-[#222222] mb-1.5">
                      {isClient ? 'Username Or Policy ID' : 'Username Or Agent ID'}
                    </label>
                    <input
                      type="text"
                      required
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      placeholder={isClient ? 'Enter Your Username Or Policy ID' : 'Enter Your Username Or Agent ID'}
                      className="w-full bg-[#F6F7F9] border border-stone-200/90 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#B8422B] focus:bg-white transition-all placeholder:text-stone-400"
                    />
                  </div>

                  {/* Password Field */}
                  <div>
                    <label className="block text-[13px] font-medium text-[#222222] mb-1.5">
                      Password
                    </label>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter Your Password"
                      className="w-full bg-[#F6F7F9] border border-stone-200/90 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#B8422B] focus:bg-white transition-all placeholder:text-stone-400"
                    />
                  </div>

                  {/* Demo fill shortcut */}
                  <div className="flex items-center justify-between text-xs pt-0.5">
                    <button
                      type="button"
                      onClick={handleDemoFill}
                      className="text-[#B8422B] hover:underline font-semibold cursor-pointer"
                    >
                      Fill Demo Credentials
                    </button>
                    <a
                      href="#forgot"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Password reset verification code sent to your registered mobile number.');
                      }}
                      className="text-stone-500 hover:text-stone-800"
                    >
                      Forgot Password?
                    </a>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#A83B24] hover:bg-[#8F2D18] text-white font-bold text-sm rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer mt-2 group"
                  >
                    <span>{authMode === 'login' ? 'Log In' : 'Sign Up Now'}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </form>

                {/* Bottom Social Media & Legal Links */}
                <div className="mt-6 pt-4 text-center">
                  {/* Social Icons */}
                  <div className="flex items-center justify-center gap-5 text-stone-800 mb-4">
                    {/* Facebook */}
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-[#A83B24] transition-colors p-1"
                      aria-label="Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>

                    {/* Twitter / X */}
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-[#A83B24] transition-colors p-1"
                      aria-label="Twitter"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/>
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-[#A83B24] transition-colors p-1"
                      aria-label="Instagram"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </div>

                  {/* Terms text */}
                  <p className="text-[11.5px] sm:text-[12px] text-stone-600 leading-relaxed">
                    By Creating An Account Or Logging In, You Agree To{' '}
                    <a href="#terms" onClick={(e) => e.preventDefault()} className="text-[#B8422B] font-bold underline hover:opacity-80">
                      Our Terms Of Service
                    </a>{' '}
                    And{' '}
                    <a href="#privacy" onClick={(e) => e.preventDefault()} className="text-[#B8422B] font-bold underline hover:opacity-80">
                      Privacy Policy.
                    </a>
                  </p>
                </div>
              </div>
            ) : (
              /* Success Logged-in State */
              <div className="text-center py-8 space-y-4 my-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#222222]">
                    Welcome, {identifier}!
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Successfully authenticated to {isClient ? 'PGICL Client Portal' : 'PGICL Agent Workspace'}.
                  </p>
                </div>
                
                <div className="p-4 bg-[#F6ECE6]/60 border border-stone-200 rounded-xl text-xs text-stone-800 text-left space-y-1.5 max-w-sm mx-auto">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Agent / ID Status:</span>
                    <span className="font-bold text-emerald-700">Verified & Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Assigned Branch:</span>
                    <span className="font-bold text-stone-800">Bangla Motor Head Office</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Active Policies:</span>
                    <span className="font-bold text-stone-800">24 Active Portfolios</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setLoggedIn(false);
                      onClose();
                    }}
                    className="px-8 py-3 bg-[#A83B24] text-white font-bold text-xs sm:text-sm rounded-xl hover:bg-[#8F2D18] transition-colors cursor-pointer shadow-xs"
                  >
                    Go To Workspace
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
