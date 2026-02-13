import React from 'react';
import { Sport } from '../types';
import { ProtocolBadge } from './ProtocolBadge';
import { ChevronRight } from 'lucide-react';

interface SportListProps {
  sports: Sport[];
  selectedSportId: string | null;
  onSelect: (sport: Sport) => void;
}

export const SportList: React.FC<SportListProps> = ({ sports, selectedSportId, onSelect }) => {
  if (sports.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-xl border border-gray-200 border-dashed max-w-2xl mx-auto">
        <p className="text-gray-500 text-lg">Nessuno sport trovato.</p>
        <p className="text-gray-400 text-sm mt-1">Prova a cercare un termine diverso.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
      {sports.map((sport) => {
        return (
          <button
            key={sport.id}
            onClick={() => onSelect(sport)}
            className="text-left group flex flex-col justify-between p-5 rounded-2xl transition-all duration-300 bg-white border border-gray-200 
            hover:border-blue-400 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] 
            active:scale-95"
          >
            <div>
              <div className="flex justify-between items-start mb-2">
                 <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{sport.category}</span>
                 <ProtocolBadge type={sport.visitType} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors">
                {sport.name}
              </h3>
            </div>
            
            <div className="mt-4 flex items-center text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
               Visualizza dettagli <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </button>
        );
      })}
    </div>
  );
};