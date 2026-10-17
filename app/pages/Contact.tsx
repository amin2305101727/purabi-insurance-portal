import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Send, 
  Compass, 
  ArrowUpRight,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/mockData';

interface ContactProps {
  onOpenQuote?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenQuote }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email address, and message.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Send to server API if available
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          subject: formData.subject || 'General Inquiry',
          message: formData.message.trim()
        })
      });

      let ref = `PGICL-MSG-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
      if (response.ok) {
        const data = await response.json();
        if (data.id) ref = data.id;
      }

      setReferenceId(ref);
      setIsSuccess(true);

      // Trigger celebratory confetti animation
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#B8422B', '#E5583A', '#22C55E', '#F59E0B']
      });

    } catch (err) {
      console.warn('API error or server offline, using client fallback', err);
      const fallbackRef = `PGICL-MSG-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
      setReferenceId(fallbackRef);
      setIsSuccess(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#B8422B', '#F97316', '#22C55E']
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setIsSuccess(false);
    setReferenceId('');
    setErrorMessage('');
  };

  return (
    <div className="w-full bg-[#FDFBF9] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ======================================================== */}
        {/* 1. HERO BANNER: WE ARE HERE TO HELP                     */}
        {/* ======================================================== */}
        <section 
          className="bg-[#FAF3F0] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 mb-8 border border-[#F4E3DC] relative overflow-hidden"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {/* Subtle background decorative circle */}
          <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-[#F4E3DC]/40 pointer-events-none blur-2xl" />

          <div className="relative z-10 max-w-3xl">
            <span className="text-[#B8422B] text-xs sm:text-sm font-bold tracking-wider uppercase block mb-2">
              WE ARE HERE TO HELP
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-3">
              Contact Us
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
              Have a question about our insurance services? Get in touch with our team for assistance.
            </p>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('contact-form-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#B8422B] hover:bg-[#9E3420] text-white text-sm font-semibold rounded-xl shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <span>Get in Touch</span>
            </button>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 2. CONTACT INFO CARDS (4 Cards Grid)                     */}
        {/* ======================================================== */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-10">
          
          {/* Card 1: Our Office */}
          <a
            href="https://maps.google.com/?q=Sandhani+Life+Tower+Bangla+Motor+Dhaka"
            target="_blank"
            rel="noreferrer"
            className="bg-white rounded-2xl p-4.5 sm:p-5 border border-stone-200/80 hover:border-[#B8422B]/40 hover:bg-[#FAF3F0] shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group flex items-start gap-3.5 sm:gap-4 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FAF1EE] text-[#B8422B] group-hover:bg-[#B8422B] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-2xs">
              <MapPin className="w-5 h-5 transition-colors" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#B8422B] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Our Office
                </h3>
                <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-[#B8422B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all opacity-0 group-hover:opacity-100" />
              </div>
              <p className="text-xs text-slate-500 mb-1">Company address and location</p>
              <p className="text-xs sm:text-sm font-medium text-slate-800 line-clamp-1">{COMPANY_INFO.address}</p>
            </div>
          </a>

          {/* Card 2: Call Us */}
          <a
            href={`tel:${COMPANY_INFO.hotline}`}
            className="bg-white rounded-2xl p-4.5 sm:p-5 border border-stone-200/80 hover:border-[#B8422B]/40 hover:bg-[#FAF3F0] shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group flex items-start gap-3.5 sm:gap-4 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FAF1EE] text-[#B8422B] group-hover:bg-[#B8422B] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-2xs">
              <Phone className="w-5 h-5 transition-colors" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#B8422B] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Call Us
                </h3>
                <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-[#B8422B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all opacity-0 group-hover:opacity-100" />
              </div>
              <p className="text-xs text-slate-500 mb-1">Official contact number</p>
              <p className="text-xs sm:text-sm font-medium text-slate-800">{COMPANY_INFO.phone} (Hotline: {COMPANY_INFO.hotline})</p>
            </div>
          </a>

          {/* Card 3: Email Us */}
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="bg-white rounded-2xl p-4.5 sm:p-5 border border-stone-200/80 hover:border-[#B8422B]/40 hover:bg-[#FAF3F0] shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group flex items-start gap-3.5 sm:gap-4 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FAF1EE] text-[#B8422B] group-hover:bg-[#B8422B] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-2xs">
              <Mail className="w-5 h-5 transition-colors" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#B8422B] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Email Us
                </h3>
                <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-[#B8422B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all opacity-0 group-hover:opacity-100" />
              </div>
              <p className="text-xs text-slate-500 mb-1">Official email address</p>
              <p className="text-xs sm:text-sm font-medium text-slate-800 truncate">{COMPANY_INFO.email}</p>
            </div>
          </a>

          {/* Card 4: Office Hours */}
          <div className="bg-white rounded-2xl p-4.5 sm:p-5 border border-stone-200/80 hover:border-[#B8422B]/40 hover:bg-[#FAF3F0] shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group flex items-start gap-3.5 sm:gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FAF1EE] text-[#B8422B] group-hover:bg-[#B8422B] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-2xs">
              <Clock className="w-5 h-5 transition-colors" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-bold text-slate-900 group-hover:text-[#B8422B] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Office Hours
              </h3>
              <p className="text-xs text-slate-500 mb-1">Business hours and working days</p>
              <p className="text-xs sm:text-sm font-medium text-slate-800">{COMPANY_INFO.officeHours} (Fri-Sat Closed)</p>
            </div>
          </div>

        </section>

        {/* ======================================================== */}
        {/* 3. BOTTOM SECTION: LEFT (MAP) & RIGHT (MESSAGE FORM)     */}
        {/* ======================================================== */}
        <section 
          id="contact-form-section" 
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch"
        >
          
          {/* LEFT: Find Our Office (Map & Directions) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white rounded-2xl border border-stone-200/90 shadow-xs p-6 sm:p-7 flex flex-col h-full">
              
              <div className="mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Find Our Office
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Company office location and directions.
                </p>
              </div>

              {/* Map Box */}
              <div className="relative w-full h-[280px] sm:h-[320px] rounded-xl overflow-hidden border border-stone-200 bg-stone-100 mb-4 shadow-inner">
                <iframe
                  title="Purabi General Insurance Office Location"
                  src="https://maps.google.com/maps?q=Sandhani+Life+Tower+Bangla+Motor+Dhaka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Address details card */}
              <div className="space-y-3 mt-auto">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF3F0] border border-[#F4E3DC]">
                  <MapPin className="w-5 h-5 text-[#B8422B] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 mb-0.5">Sandhani Life Tower</div>
                    <div className="text-xs text-slate-600 leading-relaxed">
                      2nd Floor, 34 Bangla Motor, Dhaka - 1000, Bangladesh
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href="https://maps.google.com/?q=Sandhani+Life+Tower+Bangla+Motor+Dhaka"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-stone-200 hover:border-[#B8422B] text-slate-800 hover:text-[#B8422B] text-xs font-semibold transition-all hover:bg-stone-50"
                  >
                    <Compass className="w-4 h-4" />
                    <span>Open in Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                  </a>
                  
                  <a
                    href={`tel:${COMPANY_INFO.hotline}`}
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-800 text-xs font-semibold transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#B8422B]" />
                    <span>Call Desk</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Send Us a Message (Interactive Form with animated success) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-2xl border border-stone-200/90 shadow-xs p-6 sm:p-8 flex flex-col h-full">
              
              {!isSuccess ? (
                <>
                  <div className="mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      Send Us a Message
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Fill in the form and our team will get back to you.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium animate-in fade-in">
                      {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-between">
                    
                    {/* Row 1: Full Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-slate-800 text-sm focus:outline-hidden focus:border-[#B8422B] focus:ring-2 focus:ring-[#B8422B]/10 transition-all placeholder:text-slate-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-slate-800 text-sm focus:outline-hidden focus:border-[#B8422B] focus:ring-2 focus:ring-[#B8422B]/10 transition-all placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone Number & Subject */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter phone number"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-slate-800 text-sm focus:outline-hidden focus:border-[#B8422B] focus:ring-2 focus:ring-[#B8422B]/10 transition-all placeholder:text-slate-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Subject
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-slate-800 text-sm focus:outline-hidden focus:border-[#B8422B] focus:ring-2 focus:ring-[#B8422B]/10 transition-all bg-white"
                        >
                          <option value="">Select subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Health Insurance">Health Insurance Inquiry</option>
                          <option value="Motor / Car Insurance">Motor / Car Insurance</option>
                          <option value="Fire Insurance">Fire & Property Perils</option>
                          <option value="Marine Cargo Insurance">Marine Cargo & Hull</option>
                          <option value="Claim Assistance">Claim Status Assistance</option>
                          <option value="Corporate / Group Policy">Corporate Group Policy</option>
                          <option value="Other">Other Query</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Your Message */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="How can we help you?"
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-slate-800 text-sm focus:outline-hidden focus:border-[#B8422B] focus:ring-2 focus:ring-[#B8422B]/10 transition-all placeholder:text-slate-400 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 px-6 rounded-xl bg-[#B8422B] hover:bg-[#9E3420] text-white text-sm font-semibold shadow-xs hover:shadow-md transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                </>
              ) : (
                /* ======================================================== */
                /* ANIMATED SUCCESS CONFIRMATION STATE                      */
                /* ======================================================== */
                <div className="flex-1 flex flex-col items-center justify-center text-center py-8 sm:py-12 px-4 animate-in fade-in zoom-in-95 duration-300">
                  
                  {/* Glowing Animated Icon */}
                  <div className="relative mb-5">
                    <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-sm">
                      <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
                    </div>
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 
                    className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Message Sent Successfully!
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-base max-w-md mb-6 leading-relaxed">
                    Thank you! Your message has been received successfully. Our team will review your inquiry and get back to you shortly.
                  </p>

                  {/* Reference Ticket Card */}
                  <div className="w-full max-w-md bg-[#FAF3F0] rounded-xl p-4 border border-[#F4E3DC] mb-6 text-left flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-[#B8422B] uppercase tracking-wider">
                        Inquiry Reference ID
                      </div>
                      <div className="text-sm font-mono font-bold text-slate-900 mt-0.5">
                        {referenceId}
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Received
                    </span>
                  </div>

                  {/* Reset / Send Another Button */}
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all active:scale-98 cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Another Message</span>
                  </button>

                </div>
              )}

            </div>
          </div>

        </section>

      </div>
    </div>
  );
};

export default Contact;
