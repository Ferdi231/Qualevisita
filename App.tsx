import React, { useState, useMemo } from 'react';
import { SPORTS_LIST, PROTOCOLS } from './services/data';
import { Sport } from './types';
import { SearchBar } from './components/SearchBar';
import { SportList } from './components/SportList';
import { DetailPanel } from './components/DetailPanel';
import { TableView } from './components/TableView';
import { Activity, Stethoscope, Table2, Search as SearchIcon, X, Accessibility, Trophy } from 'lucide-react';

type ViewState = 'search' | 'table';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('search');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSportId, setSelectedSportId] = useState<string | null>(null);

  // Derived state for filtered list
  const filteredSports = useMemo(() => {
    if (!searchTerm) return []; // Empty search shows nothing initially for cleaner look
    const lowerTerm = searchTerm.toLowerCase();
    return SPORTS_LIST.filter(s => 
      s.name.toLowerCase().includes(lowerTerm) || 
      s.category.toLowerCase().includes(lowerTerm)
    );
  }, [searchTerm]);

  // Split results into Standard and CIP
  const standardResults = useMemo(() => 
    filteredSports.filter(s => s.ageType !== 'CIP'),
  [filteredSports]);

  const cipResults = useMemo(() => 
    filteredSports.filter(s => s.ageType === 'CIP'),
  [filteredSports]);

  // Derived state for selected details
  const selectedSport = useMemo(() => 
    SPORTS_LIST.find(s => s.id === selectedSportId) || null
  , [selectedSportId]);

  const selectedProtocol = useMemo(() => 
    selectedSport ? PROTOCOLS[selectedSport.visitType] : null
  , [selectedSport]);

  const handleSelectSport = (sport: Sport) => {
    setSelectedSportId(sport.id);
  };

  const closeDetail = () => {
    setSelectedSportId(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans pb-12">
      {/* Navigation Bar */}
      <header className="bg-transparent sticky top-0 z-30 backdrop-blur-md border-b border-gray-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentView('search')}>
            <div className="bg-blue-600 p-1.5 rounded-lg text-white shadow-lg shadow-blue-500/30">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-500 leading-none drop-shadow-sm">
                Ad ogni sport la sua visita
              </h1>
            </div>
          </div>
          
          <nav className="flex items-center space-x-1 sm:space-x-4">
            <button 
              onClick={() => setCurrentView('search')}
              className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all ${currentView === 'search' ? 'bg-white/50 text-blue-700 shadow-sm' : 'text-gray-500 hover:bg-white/30'}`}
            >
              <SearchIcon className="w-4 h-4 mr-2" />
              Cerca Sport
            </button>
            <button 
              onClick={() => setCurrentView('table')}
              className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all ${currentView === 'table' ? 'bg-white/50 text-blue-700 shadow-sm' : 'text-gray-500 hover:bg-white/30'}`}
            >
              <Table2 className="w-4 h-4 mr-2" />
              Consulta Tabella
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* VIEW: SEARCH */}
        {currentView === 'search' && (
          <div className="animate-fade-in">
            <div className="flex flex-col items-center justify-center pt-24 pb-12">
               <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-500 mb-6 text-center tracking-tight drop-shadow-sm pb-2">
                Ad ogni sport la sua visita
              </h2>
              <p className="text-lg text-gray-500 mb-8 max-w-xl text-center">
                Digita il tuo sport per visualizzare immediatamente i protocolli di visita richiesti dalle normative vigenti.
              </p>
              <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            </div>

            {/* Results Area */}
            {searchTerm.length > 0 && (
              <div className="animate-fade-in-up space-y-12">
                 
                 {/* STANDARD RESULTS */}
                 {standardResults.length > 0 && (
                   <div>
                     <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-2">
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Risultati Standard ({standardResults.length})</span>
                     </div>
                     <SportList 
                       sports={standardResults} 
                       selectedSportId={selectedSportId} 
                       onSelect={handleSelectSport} 
                     />
                   </div>
                 )}

                 {/* CIP RESULTS */}
                 {cipResults.length > 0 && (
                   <div>
                     <div className="flex items-center justify-start mb-6 border-b border-pink-200 pb-2">
                        <Accessibility className="w-5 h-5 text-pink-600 mr-2" />
                        <span className="text-sm font-semibold text-pink-600 uppercase tracking-wider">Risultati CIP - Paralimpici ({cipResults.length})</span>
                     </div>
                     <SportList 
                       sports={cipResults} 
                       selectedSportId={selectedSportId} 
                       onSelect={handleSelectSport} 
                     />
                   </div>
                 )}

                 {/* NO RESULTS AT ALL */}
                 {standardResults.length === 0 && cipResults.length === 0 && (
                    <div className="text-center py-12 bg-white rounded-xl border border-gray-200 border-dashed max-w-2xl mx-auto">
                      <p className="text-gray-500 text-lg">Nessuno sport trovato.</p>
                      <p className="text-gray-400 text-sm mt-1">Prova a cercare un termine diverso.</p>
                    </div>
                 )}
              </div>
            )}
            
          
          </div>
        )}

        {/* VIEW: TABLE */}
        {currentView === 'table' && (
          <div className="animate-fade-in">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Tabella Completa Protocolli</h2>
              <p className="text-gray-500 mt-1">Elenco completo delle visite per tutte le discipline censite, suddivise per categoria.</p>
            </div>
            <TableView onSelect={handleSelectSport} />
          </div>
        )}

      </main>

      {/* Detail Modal Overlay */}
      {selectedSport && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" aria-hidden="true" onClick={closeDetail}></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="relative inline-block align-bottom bg-transparent rounded-2xl text-left overflow-hidden sm:my-8 sm:align-middle sm:max-w-3xl w-full transform transition-all">
              <div className="absolute top-4 right-4 z-10">
                <button 
                  onClick={closeDetail}
                  className="bg-white/90 backdrop-blur rounded-full p-2 text-gray-500 hover:text-gray-800 shadow-lg border border-gray-100 transition-all hover:scale-110"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <DetailPanel sport={selectedSport} protocol={selectedProtocol} />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;