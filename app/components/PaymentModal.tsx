import React, { useState } from 'react';
import { X, CreditCard, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  const [policyNo, setPolicyNo] = useState('');
  const [amount, setAmount] = useState('5500');
  const [method, setMethod] = useState<'bkash' | 'nagad' | 'card' | 'bank'>('bkash');
  const [paid, setPaid] = useState(false);

  if (!isOpen) return null;

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!policyNo) return;
    setPaid(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-stone-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#a83b24] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            <h3 className="text-lg font-bold">Online Premium Payment</h3>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6">
          {!paid ? (
            <form onSubmit={handlePay} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Policy Number / Cover Note No.
                </label>
                <input
                  type="text"
                  required
                  value={policyNo}
                  onChange={(e) => setPolicyNo(e.target.value)}
                  placeholder="e.g. POL-HLT-99238"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#a83b24]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Premium Amount (৳ BDT)
                </label>
                <input
                  type="number"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="5500"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#a83b24]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Select Payment Gateway
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setMethod('bkash')}
                    className={`p-3 rounded-lg border flex items-center justify-center gap-2 ${
                      method === 'bkash' ? 'border-pink-600 bg-pink-50 text-pink-700 ring-2 ring-pink-600/30' : 'border-stone-200'
                    }`}
                  >
                    <span>bKash Payment</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMethod('nagad')}
                    className={`p-3 rounded-lg border flex items-center justify-center gap-2 ${
                      method === 'nagad' ? 'border-orange-600 bg-orange-50 text-orange-700 ring-2 ring-orange-600/30' : 'border-stone-200'
                    }`}
                  >
                    <span>Nagad Instant</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMethod('card')}
                    className={`p-3 rounded-lg border flex items-center justify-center gap-2 ${
                      method === 'card' ? 'border-blue-600 bg-blue-50 text-blue-700 ring-2 ring-blue-600/30' : 'border-stone-200'
                    }`}
                  >
                    <span>Debit/Credit Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMethod('bank')}
                    className={`p-3 rounded-lg border flex items-center justify-center gap-2 ${
                      method === 'bank' ? 'border-emerald-600 bg-emerald-50 text-emerald-700 ring-2 ring-emerald-600/30' : 'border-stone-200'
                    }`}
                  >
                    <span>Internet Banking</span>
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#a83b24] hover:bg-[#8f2d18] text-white font-bold text-sm rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Proceed to Pay ৳ {Number(amount).toLocaleString()}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Payment Successful!</h4>
              <p className="text-xs text-slate-600">
                Receipt #TRX-994820 issued for Policy <span className="font-bold text-slate-900">{policyNo}</span>. An SMS confirmation and official Money Receipt has been sent.
              </p>
              <button
                onClick={() => { setPaid(false); onClose(); }}
                className="px-6 py-2.5 bg-[#a83b24] text-white font-bold text-xs rounded-lg"
              >
                Close Receipt
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
