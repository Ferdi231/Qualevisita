import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative w-full max-w-xl mx-auto mb-8 group z-0">
      {/* Moving Neon Gradient Shadow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur opacity-40 group-focus-within:opacity-100 group-hover:opacity-80 transition duration-500 animate-gradient-xy"></div>
      
      <div className="relative bg-white rounded-xl shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-300">
          <Search className={`h-5 w-5 ${searchTerm ? 'text-blue-500' : 'text-gray-400 group-focus-within:text-blue-500'}`} />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-4 border border-transparent rounded-xl leading-5 bg-white placeholder-gray-400 
          focus:outline-none focus:bg-white
          transition-all duration-300 ease-out text-lg"
          placeholder="Cerca il tuo sport (es. Calcio, Nuoto...)"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
};