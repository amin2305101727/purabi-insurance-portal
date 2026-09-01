import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle, Calculator, ShieldCheck, Sparkles, PhoneCall, Download } from 'lucide-react';
import confetti from 'canvas-confetti';
import { INSURANCE_CATEGORIES, COMPANY_INFO } from '../data/mockData';

interface GetQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export const GetQuoteModal: React.FC<GetQuoteModalProps> = ({ isOpen, onClose, initialCategory = 'health' }) => {
  const [category, setCategory] = useState(initialCategory);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [coverageVal, setCoverageVal] = useState('500000');
  const [submitted, setSubmitted] = useState(false);
  const [isActivated, setIsActivated] = useState(false);
  const [calculatedQuote, setCalculatedQuote] = useState<{ premium: number; vat: number; total: number } | null>(null);

  useEffect(() => {
    if (isOpen) {
      if (initialCategory) setCategory(initialCategory);
      setIsActivated(false);
    }
  }, [isOpen, initialCategory]);

  if (!isOpen) return null;

  const calculateEstimate = (cat: string, coverage: number) => {
    let rate = 0.02; // default
    if (cat === 'health') rate = 0.025;
    if (cat === 'fire') rate = 0.008;
    if (cat === 'motor') rate = 0.015;
    if (cat === 'marine') rate = 0.006;
    if (cat === 'travel') rate = 0.003;
    if (cat === 'engineering') rate = 0.012;

    const base = Math.max(1200, Math.round(coverage * rate));
    const vat = Math.round(base * 0.15); // 15% VAT in Bangladesh
    return {
      premium: base,
      vat,
      total: base + vat,
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    const numCoverage = parseInt(coverageVal, 10) || 500000;
    const quote = calculateEstimate(category, numCoverage);
    setCalculatedQuote(quote);
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#a83b24', '#f97316', '#22c55e']
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    setIsActivated(false);
    setCalculatedQuote(null);
  };

  const handleActivate = () => {
    setIsActivated(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.5 },
      colors: ['#a83b24', '#f97316', '#10b981']
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-[#a83b24] text-white p-5 flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-wider font-semibold opacity-90 flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5" />
              <span>Instant Premium Calculator</span>
            </div>
            <h3 className="text-xl font-bold">Get Your Official Insurance Quote</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Category selector chips */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                  Select Insurance Category
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {INSURANCE_CATEGORIES.map((cat) => (
                    <button
                      type="button"
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`p-2 rounded-lg text-xs font-semibold border text-center transition-all cursor-pointer ${
                        category === cat.id
                          ? 'bg-[#a83b24] text-white border-[#a83b24] shadow-xs'
                          : 'bg-stone-50 text-slate-700 border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#a83b24]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="017XXXXXXXX"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#a83b24]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. name@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#a83b24]"
                />
              </div>

              {/* Coverage Sum Insured */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Coverage Sum Insured (৳ BDT)
                </label>
                <select
                  value={coverageVal}
                  onChange={(e) => setCoverageVal(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#a83b24] bg-white font-medium text-slate-800"
                >
                  <option value="100000">৳ 1,00,000 (1 Lac)</option>
                  <option value="300000">৳ 3,00,000 (3 Lac)</option>
                  <option value="500000">৳ 5,00,000 (5 Lac)</option>
                  <option value="1000000">৳ 10,00,000 (10 Lac)</option>
                  <option value="2500000">৳ 25,00,000 (25 Lac)</option>
                  <option value="5000000">৳ 50,00,000 (50 Lac)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#a83b24] hover:bg-[#8f2d18] text-white font-bold text-sm rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Calculate Instant Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-5 animate-in fade-in zoom-in-95 duration-200">
              <div className="text-center py-2">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-2">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-extrabold text-slate-900">Your Quote is Ready!</h4>
                <p className="text-xs text-slate-500">
                  Thank you, <span className="font-semibold text-slate-800">{name}</span>. Here is your customized premium quote.
                </p>
              </div>

              {/* Quote Breakdown Card */}
              <div className="bg-[#faf4ef] border border-[#ecd5c9] rounded-xl p-5 space-y-3">
                <div className="flex justify-between items-center text-xs pb-2 border-b border-stone-200">
                  <span className="text-slate-600">Insurance Plan:</span>
                  <span className="font-bold text-slate-900 uppercase">
                    {INSURANCE_CATEGORIES.find(c => c.id === category)?.name || category}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600">Sum Insured:</span>
                  <span className="font-bold text-slate-900">
                    ৳ {parseInt(coverageVal).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600">Net Annual Premium:</span>
                  <span className="font-bold text-slate-900">
                    ৳ {calculatedQuote?.premium.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600">Govt. VAT (15%):</span>
                  <span className="font-bold text-slate-900">
                    ৳ {calculatedQuote?.vat.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center text-base pt-3 border-t border-[#ecd5c9] font-extrabold">
                  <span className="text-slate-900">Total Payable:</span>
                  <span className="text-[#a83b24]">
                    ৳ {calculatedQuote?.total.toLocaleString()} / year
                  </span>
                </div>
              </div>

              {/* Next steps buttons */}
              {isActivated ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 space-y-3 text-center animate-in fade-in duration-200">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Application Received!</h4>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                    Application ID: <span className="font-mono font-bold text-slate-900">PGICL-QUO-2025-7821</span>.<br />
                    Our underwriting desk will call you at <span className="font-bold text-slate-900">{phone}</span> within 30 minutes to complete verification and issue your policy certificate.
                  </p>
                  <div className="flex gap-2 pt-2 justify-center">
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 bg-[#a83b24] hover:bg-[#8f2d18] text-white font-bold text-xs rounded-lg transition-colors cursor-pointer"
                    >
                      Done
                    </button>
                    <button
                      onClick={handleReset}
                      className="px-4 py-2.5 bg-white border border-stone-200 hover:bg-stone-50 text-slate-700 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                    >
                      New Calculation
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  <button
                    onClick={handleActivate}
                    className="flex-1 py-3 bg-[#a83b24] hover:bg-[#8f2d18] text-white font-bold text-xs rounded-lg transition-colors cursor-pointer text-center"
                  >
                    Proceed to Policy Activation
                  </button>
                  <button
                    onClick={handleReset}
                    className="px-4 py-3 bg-stone-100 hover:bg-stone-200 text-slate-700 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                  >
                    Recalculate
                  </button>
                </div>
              )}

            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="bg-stone-50 px-6 py-3 border-t border-stone-200 text-[11px] text-slate-500 text-center">
          Underwritten by Purabi General Insurance Co. Ltd. (Govt. Reg. #1988)
        </div>

      </div>
    </div>
  );
};
