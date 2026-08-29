import React from 'react';
import { X, Check, ArrowUpRight, Hospital, ShieldCheck, Scale } from 'lucide-react';
import { HealthPlan } from '../types';

interface PlanComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  plans: HealthPlan[];
  onSelectPlan: (plan: HealthPlan) => void;
  onRemovePlan: (planId: string) => void;
}

export const PlanComparisonModal: React.FC<PlanComparisonModalProps> = ({
  isOpen,
  onClose,
  plans,
  onSelectPlan,
  onRemovePlan,
}) => {
  if (!isOpen || plans.length === 0) return null;

  const comparisonRows = [
    {
      label: 'Target Category',
      getValue: (plan: HealthPlan) => (
        <span className="capitalize font-semibold text-slate-800 bg-stone-100 px-2.5 py-1 rounded-md text-xs">
          For {plan.type}
        </span>
      ),
    },
    {
      label: 'Annual Premium',
      getValue: (plan: HealthPlan) => (
        <div>
          <span className="text-lg sm:text-xl font-extrabold text-[#a83b24]">
            ৳ {plan.annualPremium.toLocaleString()}
          </span>
          <span className="text-xs text-slate-500 block">per year (incl. VAT)</span>
        </div>
      ),
    },
    {
      label: 'Sum Insured Coverage',
      getValue: (plan: HealthPlan) => (
        <span className="font-bold text-slate-900 text-sm sm:text-base">
          {plan.coverageFormatted}
        </span>
      ),
    },
    {
      label: 'Cabin / Room Rent Limit',
      getValue: (plan: HealthPlan) => (
        <span className="text-xs sm:text-sm text-slate-700">
          {plan.hospitalizationLimit}
        </span>
      ),
    },
    {
      label: 'ICU / CCU Coverage',
      getValue: (plan: HealthPlan) => (
        <span className="text-xs sm:text-sm text-slate-700 font-medium">
          {plan.icuLimit}
        </span>
      ),
    },
    {
      label: 'Cashless Network Hospitals',
      getValue: (plan: HealthPlan) => (
        <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#a83b24]">
          <Hospital className="w-4 h-4 shrink-0" />
          <span>{plan.cashlessHospitals}+ Partner Hospitals</span>
        </div>
      ),
    },
    {
      label: 'Pre & Post Hospitalization',
      getValue: (plan: HealthPlan) => (
        <span className="text-xs sm:text-sm text-slate-700">
          {plan.prePostHospitalization || '30 Days Pre / 60 Days Post'}
        </span>
      ),
    },
    {
      label: 'Emergency Ambulance Cover',
      getValue: (plan: HealthPlan) => (
        <span className="text-xs sm:text-sm text-slate-700">
          {plan.ambulanceCover || '৳ 3,000 per incident'}
        </span>
      ),
    },
    {
      label: 'Outpatient / OPD Limit',
      getValue: (plan: HealthPlan) => (
        <span className="text-xs sm:text-sm text-slate-700">
          {plan.opdLimit || 'Included in Sum Insured'}
        </span>
      ),
    },
    {
      label: 'Claim Settlement Ratio',
      getValue: (plan: HealthPlan) => (
        <div className="flex items-center gap-1 text-xs sm:text-sm font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md w-fit">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>{plan.claimSettlementRate || '94.5%'} Speed</span>
        </div>
      ),
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="px-5 sm:px-8 py-5 bg-[#FAF7F5] border-b border-stone-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F2DFD8] text-[#a83b24] flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Compare Health Insurance Plans
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Comparing {plans.length} selected policy options side-by-side
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-stone-100 text-slate-500 hover:text-slate-900 border border-stone-200 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Scrollable Comparison Table */}
        <div className="p-4 sm:p-8 overflow-y-auto flex-1">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              
              {/* Table Head: Plan Names and Actions */}
              <thead>
                <tr className="border-b-2 border-stone-200">
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400 w-1/4">
                    Features & Benefits
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.id} className="p-4 align-top w-1/3 bg-stone-50/70 rounded-t-xl">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-sm sm:text-base font-bold text-slate-900">
                          {plan.name}
                        </span>
                        <button
                          type="button"
                          onClick={() => onRemovePlan(plan.id)}
                          className="text-stone-400 hover:text-red-500 transition-colors p-1"
                          title="Remove from comparison"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          onSelectPlan(plan);
                        }}
                        className="w-full py-2 px-3 bg-[#a83b24] hover:bg-[#8f2d18] text-white text-xs font-bold rounded-lg shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Choose Plan</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-stone-100">
                {comparisonRows.map((row, index) => (
                  <tr key={index} className="hover:bg-[#FAF9F8] transition-colors">
                    <td className="p-4 text-xs sm:text-sm font-medium text-slate-600 bg-white">
                      {row.label}
                    </td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="p-4 text-xs sm:text-sm text-slate-800 bg-stone-50/30">
                        {row.getValue(plan)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#FAF7F5] border-t border-stone-200 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span>* All policy benefits are subject to standard policy conditions and medical underwriting.</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-white hover:bg-stone-100 text-slate-700 font-semibold rounded-lg border border-stone-300 transition-colors"
          >
            Close Comparison
          </button>
        </div>

      </div>
    </div>
  );
};
