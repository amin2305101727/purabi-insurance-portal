import React from 'react';
import { X, Play, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-950 text-white w-full max-w-3xl rounded-2xl overflow-hidden border border-stone-800 shadow-2xl relative">
        <div className="p-4 bg-stone-900 flex justify-between items-center border-b border-stone-800">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-xs font-bold text-slate-200">
              {COMPANY_INFO.name} — Corporate Document & Solvency Overview
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 flex items-center justify-center text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        {/* Video Presentation View */}
        <div className="relative aspect-video bg-black flex flex-col items-center justify-center p-8 text-center bg-radial from-stone-900 to-black">
          <div className="w-20 h-20 rounded-full bg-[#a83b24]/90 border-2 border-white/40 flex items-center justify-center text-white shadow-xl mb-4 group cursor-pointer hover:scale-110 transition-transform">
            <Play className="w-8 h-8 fill-white ml-1 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white mb-2">
            Protecting Value Through Innovation Since 1988
          </h4>
          <p className="text-xs text-slate-400 max-w-lg">
            Discover how Purabi General Insurance delivers trust, lightning-fast digital claim settlement, and comprehensive corporate asset underwriting across Bangladesh.
          </p>
        </div>
      </div>
    </div>
  );
};
