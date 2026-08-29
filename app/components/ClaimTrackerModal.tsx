import React, { useState } from 'react';
import { X, Search, CheckCircle2, Clock, ShieldCheck, AlertCircle, FileText, ArrowRight } from 'lucide-react';
import { SAMPLE_CLAIMS, COMPANY_INFO } from '../data/mockData';
import { ClaimRecord } from '../types';

interface ClaimTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClaimTrackerModal: React.FC<ClaimTrackerModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('CLM-2025-8841');
  const [activeClaim, setActiveClaim] = useState<ClaimRecord | null>(SAMPLE_CLAIMS[0]);
  const [searched, setSearched] = useState(true);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    const found = SAMPLE_CLAIMS.find(
      (c) =>
        c.claimId.toLowerCase().includes(query) ||
        c.policyNumber.toLowerCase().includes(query) ||
        c.claimantName.toLowerCase().includes(query)
    );
    setActiveClaim(found || null);
    setSearched(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#a83b24] text-white p-5 flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-wider font-semibold opacity-90">
              Purabi General Insurance Online Service
            </div>
            <h3 className="text-xl font-bold">Track Your Claim Status</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Search Box */}
          <form onSubmit={handleSearch} className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
              Enter Claim ID or Policy Number
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. CLM-2025-8841 or POL-HLT-99238"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#a83b24] focus:border-transparent font-medium"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#a83b24] hover:bg-[#8f2d18] text-white font-bold text-sm rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>Track</span>
              </button>
            </div>
            <div className="text-[11px] text-slate-500 flex items-center gap-2 pt-1">
              <span>Try demo:</span>
              <button
                type="button"
                onClick={() => { setSearchQuery('CLM-2025-8841'); setActiveClaim(SAMPLE_CLAIMS[0]); }}
                className="text-[#a83b24] hover:underline font-semibold"
              >
                CLM-2025-8841 (Health)
              </button>
              <span>|</span>
              <button
                type="button"
                onClick={() => { setSearchQuery('CLM-2025-9102'); setActiveClaim(SAMPLE_CLAIMS[1]); }}
                className="text-[#a83b24] hover:underline font-semibold"
              >
                CLM-2025-9102 (Fire)
              </button>
            </div>
          </form>

          {/* Claim Results */}
          {searched && activeClaim ? (
            <div className="border border-stone-200 rounded-xl p-5 bg-[#fbf9f8] space-y-5">
              
              {/* Claim Top Overview */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Claim Reference
                  </span>
                  <div className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                    {activeClaim.claimId}
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                      {activeClaim.status}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Claim Amount
                  </span>
                  <div className="text-base font-extrabold text-[#a83b24]">
                    {activeClaim.claimAmount}
                  </div>
                </div>
              </div>

              {/* Meta Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="text-slate-500">Policy Number:</span>
                  <div className="font-bold text-slate-800">{activeClaim.policyNumber}</div>
                </div>
                <div>
                  <span className="text-slate-500">Claimant:</span>
                  <div className="font-bold text-slate-800">{activeClaim.claimantName}</div>
                </div>
                <div>
                  <span className="text-slate-500">Insurance Type:</span>
                  <div className="font-bold text-slate-800">{activeClaim.insuranceType}</div>
                </div>
              </div>

              {/* Progress Timeline */}
              <div>
                <div className="text-xs font-bold text-slate-700 mb-3 uppercase tracking-wider">
                  Claim Processing Timeline
                </div>
                <div className="space-y-4 relative pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-stone-300">
                  {activeClaim.timeline.map((step, idx) => (
                    <div key={idx} className="relative">
                      <div
                        className={`absolute -left-6 top-0.5 w-4.5 h-4.5 rounded-full flex items-center justify-center text-white ${
                          step.completed ? 'bg-emerald-600' : 'bg-stone-300'
                        }`}
                      >
                        {step.completed ? (
                          <CheckCircle2 className="w-3 h-3" />
                        ) : (
                          <Clock className="w-3 h-3 text-stone-500" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center justify-between text-xs">
                          <span className={`font-bold ${step.completed ? 'text-slate-900' : 'text-slate-500'}`}>
                            {step.title}
                          </span>
                          <span className="text-[11px] text-slate-500 font-medium">{step.date}</span>
                        </div>
                        <p className="text-xs text-slate-600 mt-0.5">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support note */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-900 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  Need immediate claim assistance? Call our direct Claim Desk at{' '}
                  <span className="font-bold">{COMPANY_INFO.phone}</span> or email{' '}
                  <span className="font-bold">{COMPANY_INFO.email}</span>.
                </div>
              </div>

            </div>
          ) : searched ? (
            <div className="text-center py-8 text-slate-500 bg-stone-50 rounded-xl border border-stone-200 p-6">
              <FileText className="w-10 h-10 text-slate-400 mx-auto mb-2" />
              <p className="font-bold text-slate-800 text-sm">No Claim Found with this ID</p>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Please double-check your Claim Reference ID or contact our desk for assistance.
              </p>
            </div>
          ) : null}

        </div>

        {/* Footer */}
        <div className="bg-stone-50 px-6 py-4 border-t border-stone-200 flex justify-between items-center text-xs">
          <span className="text-slate-500">Purabi General Insurance 24/7 Claim Support</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-200 hover:bg-stone-300 text-slate-700 font-bold rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
