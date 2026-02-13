import React from 'react';
import { VisitType } from '../types';

interface ProtocolBadgeProps {
  type: VisitType;
  size?: 'sm' | 'lg';
}

const getColorClass = (type: string): string => {
  const t = type.toUpperCase();
  
  // CIP protocols (Prioritize these)
  if (t.includes('CIP')) return 'bg-pink-50 text-pink-700 border-pink-200 shadow-[0_0_10px_rgba(236,72,153,0.2)]';
  if (t.includes('SPECIFICA')) return 'bg-slate-100 text-slate-700 border-slate-200 shadow-sm';

  // Group A - Low/Specific Risk
  if (t === 'A1') return 'bg-green-50 text-green-700 border-green-200 shadow-[0_0_10px_rgba(34,197,94,0.2)]';
  if (t === 'A2') return 'bg-emerald-50 text-emerald-700 border-emerald-200 shadow-[0_0_10px_rgba(16,185,129,0.2)]';
  if (t === 'A3') return 'bg-teal-50 text-teal-700 border-teal-200 shadow-[0_0_10px_rgba(20,184,166,0.2)]';
  if (t === 'A4') return 'bg-yellow-50 text-yellow-700 border-yellow-200 shadow-[0_0_10px_rgba(234,179,8,0.2)]';

  // Group B - High Cardiovascular Risk
  if (t === 'B1') return 'bg-blue-50 text-blue-700 border-blue-200 shadow-[0_0_10px_rgba(59,130,246,0.2)]';
  if (t.startsWith('B2')) return 'bg-indigo-50 text-indigo-700 border-indigo-200 shadow-[0_0_10px_rgba(99,102,241,0.2)]'; // Covers B2 and B2 EEG
  if (t === 'B3') return 'bg-violet-50 text-violet-700 border-violet-200 shadow-[0_0_10px_rgba(139,92,246,0.2)]';
  if (t.startsWith('B4')) return 'bg-orange-50 text-orange-700 border-orange-200 shadow-[0_0_10px_rgba(249,115,22,0.2)]'; // Covers B4 and B4bis
  if (t === 'B5') return 'bg-red-50 text-red-700 border-red-200 shadow-[0_0_10px_rgba(239,68,68,0.2)]';
  if (t === 'B6') return 'bg-cyan-50 text-cyan-700 border-cyan-200 shadow-[0_0_10px_rgba(6,182,212,0.2)]';

  // Fallback
  return 'bg-gray-100 text-gray-800 border-gray-200';
};

export const ProtocolBadge: React.FC<ProtocolBadgeProps> = ({ type, size = 'sm' }) => {
  const colorClass = getColorClass(type);
  const sizeClass = size === 'lg' ? 'px-4 py-2 text-xl font-bold rounded-xl' : 'px-2.5 py-0.5 text-xs font-bold rounded-lg';

  return (
    <span className={`inline-flex items-center border border-opacity-60 ${colorClass} ${sizeClass} backdrop-blur-sm transition-all duration-300`}>
      {type}
    </span>
  );
};