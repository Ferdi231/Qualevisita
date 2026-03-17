import React, { useState } from 'react';
import { SPORTS_DATA, PROTOCOL_DESCRIPTIONS, SportData } from '../services/sportsData';
import { Search, Filter, Info } from 'lucide-react';

const SportsProtocols: React.FC = () => {
    const [search, setSearch] = useState("");
    const [filterProtocol, setFilterProtocol] = useState("all");
    const [filterCategory, setFilterCategory] = useState("all");

    const categoriesList = [...new Set(SPORTS_DATA.map(s => s.category))].sort();

    const filteredSports = SPORTS_DATA.filter(sport => {
        const matchesSearch = sport.name.toLowerCase().includes(search.toLowerCase());
        const matchesProtocol = filterProtocol === "all" || sport.protocol === filterProtocol;
        const matchesCategory = filterCategory === "all" || sport.category === filterCategory;
        return matchesSearch && matchesProtocol && matchesCategory;
    }).sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mt-6">
            <div className="px-6 py-4 border-bottom border-slate-100 bg-slate-50/50 flex items-center gap-2">
                <Info size={18} className="text-blue-600" />
                <h2 className="text-lg font-bold text-slate-800">Tabelle Consultazione Protocolli</h2>
            </div>

            <div className="p-6">
                <div className="mb-6">
                    <div className="text-sm font-semibold text-slate-500 mb-3 flex items-center gap-2">
                        Legenda Protocolli
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {Object.keys(PROTOCOL_DESCRIPTIONS).map(p => (
                            <div 
                                key={p} 
                                className={`p-3 rounded-lg border-l-4 ${
                                    p.startsWith('B') ? 'bg-blue-50 border-blue-500' : 'bg-emerald-50 border-emerald-500'
                                }`}
                            >
                                <div className={`font-extrabold text-sm ${
                                    p.startsWith('B') ? 'text-blue-700' : 'text-emerald-700'
                                }`}>
                                    {p}
                                </div>
                                <div 
                                    className="text-xs text-slate-600 leading-relaxed mt-1" 
                                    dangerouslySetInnerHTML={{ __html: PROTOCOL_DESCRIPTIONS[p] }} 
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-6">
                    <div className="flex flex-wrap gap-3 mb-4">
                        <div className="flex-1 min-w-[240px] relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Cerca sport o disciplina..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                            />
                        </div>
                        <div className="relative group">
                             <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                            <select
                                value={filterCategory}
                                onChange={(e) => setFilterCategory(e.target.value)}
                                className="pl-9 pr-8 py-2 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm appearance-none min-w-[180px]"
                            >
                                <option value="all">Tutte le categorie</option>
                                {categoriesList.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                        <div className="relative">
                            <select
                                value={filterProtocol}
                                onChange={(e) => setFilterProtocol(e.target.value)}
                                className="px-4 py-2 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm appearance-none"
                            >
                                <option value="all">Tutti i protocolli</option>
                                {Object.keys(PROTOCOL_DESCRIPTIONS).map(p => <option key={p} value={p}>{p}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="rounded-lg border border-slate-200 overflow-hidden scrollbar-thin">
                        <div className="max-h-[400px] overflow-y-auto">
                            <table className="w-full text-left border-collapse text-sm">
                                <thead className="sticky top-0 bg-slate-50 border-b border-slate-200 z-10">
                                    <tr>
                                        <th className="px-4 py-3 font-semibold text-slate-700">Sport / Disciplina</th>
                                        <th className="px-4 py-3 font-semibold text-slate-700">Categoria</th>
                                        <th className="px-4 py-3 font-semibold text-slate-700 text-center">Tipo</th>
                                        <th className="px-4 py-3 font-semibold text-slate-700 text-center">Validità</th>
                                        <th className="px-4 py-3 font-semibold text-slate-700">Normativa</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {filteredSports.map((sport: SportData) => (
                                        <tr key={sport.name} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="px-4 py-3 text-slate-500 italic text-xs">{sport.name}</td>
                                            <td className="px-4 py-3 font-bold text-blue-700 uppercase tracking-tight">{sport.category}</td>
                                            <td className="px-4 py-3 text-center">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase transition-colors ${
                                                    sport.protocol.startsWith('B') 
                                                    ? 'bg-blue-100 text-blue-700' 
                                                    : 'bg-emerald-100 text-emerald-700'
                                                }`}>
                                                    {sport.protocol}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-center text-slate-600 whitespace-nowrap">
                                                {sport.validity_years === 2 ? '2 Anni' : '1 Anno'}
                                            </td>
                                            <td className="px-4 py-3 text-slate-400 text-xs italic">
                                                {sport.normativa || '-'}
                                            </td>
                                        </tr>
                                    ))}
                                    {filteredSports.length === 0 && (
                                        <tr>
                                            <td colSpan={5} className="px-6 py-12 text-center text-slate-400">
                                                <div className="flex flex-col items-center gap-2">
                                                    <Search size={24} className="opacity-20" />
                                                    <span>Nessuno sport trovato con i filtri attuali</span>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SportsProtocols;
