import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchInputProps {
  onSearch?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ onSearch, placeholder = 'Buscar no portal...', className = '' }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative flex items-center w-full ${className}`}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-brand-light/10 text-white placeholder-gray-400 focus:placeholder-transparent border border-white/20 focus:border-brand-yellow px-4 py-2 pr-10 rounded-full text-sm outline-none transition-all duration-300 focus:bg-brand-light/15"
      />
      <button type="submit" className="absolute right-3 text-gray-400 hover:text-brand-yellow transition-colors duration-200" aria-label="Buscar">
        <Search className="w-4 h-4" />
      </button>
    </form>
  );
};

export default SearchInput;
