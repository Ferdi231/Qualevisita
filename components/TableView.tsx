import React from 'react';
import { Sport } from '../types';
import { ProtocolBadge } from './ProtocolBadge';
import { SPORTS_LIST } from '../services/data';
import { Accessibility, Trophy } from 'lucide-react';

interface TableViewProps {
  onSelect: (sport: Sport) => void;
}

export const TableView: React.FC<TableViewProps> = ({ onSelect }) => {
  const formatAgeRange = (min: number | null, max: number | null) => {
    if (min === null && max === null) return '-';
    const minStr = min ? min.toString() : '..';
    const maxStr = max ? max.toString() : 's.l.'; // s.l. = senza limiti
    if (min && !max) return `> ${min}`;
    return `${minStr} - ${maxStr}`;
  };

  const standardSports = SPORTS_LIST.filter(s => s.ageType !== 'CIP');
  const cipSports = SPORTS_LIST.filter(s => s.ageType === 'CIP');

  const SportTable = ({ data, title, icon: Icon, headerColor }: { data: Sport[], title: string, icon: any, headerColor: string }) => (
    <div className="mb-12">
        <div className={`flex items-center mb-4 pb-2 border-b-2 ${headerColor === 'blue' ? 'border-blue-500' : 'border-pink-500'}`}>
            <div className={`p-2 rounded-lg mr-3 ${headerColor === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-pink-100 text-pink-600'}`}>
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
                <tr>
                <th scope="col" className="px-6 py-4 text-left font-bold text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">Specialità</th>
                <th scope="col" className="px-6 py-4 text-left font-bold text-gray-500 uppercase tracking-wider">Tipo Visita</th>
                <th scope="col" className="px-6 py-4 text-center font-bold text-gray-500 uppercase tracking-wider">Validità (Anni)</th>
                <th scope="col" className="px-6 py-4 text-center font-bold text-gray-500 uppercase tracking-wider bg-blue-50/50">Età Maschi <br/><span className="text-xs font-normal lowercase">(min - max)</span></th>
                <th scope="col" className="px-6 py-4 text-center font-bold text-gray-500 uppercase tracking-wider bg-pink-50/50">Età Femmine <br/><span className="text-xs font-normal lowercase">(min - max)</span></th>
                <th scope="col" className="px-6 py-4 text-left font-bold text-gray-500 uppercase tracking-wider">Tipologia Età</th>
                <th scope="col" className="px-6 py-4 text-left font-bold text-gray-500 uppercase tracking-wider">Stagione</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {data.map((sport) => (
                <tr 
                  key={sport.id} 
                  onClick={() => onSelect(sport)}
                  className="hover:bg-blue-50 transition-colors group cursor-pointer border-b border-gray-100 last:border-0"
                >
                    <td className="px-6 py-4 whitespace-nowrap sticky left-0 bg-white group-hover:bg-blue-50 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                    <div className="font-bold text-blue-700 uppercase tracking-tight">{sport.category}</div>
                    <div className="text-sm font-medium text-gray-900">{sport.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <ProtocolBadge type={sport.visitType} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-gray-600">
                    {sport.validityYears}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-gray-600 bg-blue-50/10 group-hover:bg-blue-100/30">
                    {formatAgeRange(sport.minAgeM, sport.maxAgeM)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-gray-600 bg-pink-50/10 group-hover:bg-pink-100/30">
                    {formatAgeRange(sport.minAgeF, sport.maxAgeF)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {sport.ageType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {sport.seasonPeriod || '-'}
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    </div>
  );

  return (
    <div>
        <SportTable 
            data={standardSports} 
            title="Discipline Standard (Normodotati)" 
            icon={Trophy}
            headerColor="blue"
        />
        
        <SportTable 
            data={cipSports} 
            title="Discipline CIP (Comitato Italiano Paralimpico)" 
            icon={Accessibility}
            headerColor="pink"
        />
    </div>
  );
};