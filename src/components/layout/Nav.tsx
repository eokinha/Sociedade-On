import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, Search, X } from 'lucide-react';
import { useScrollHeader } from '../../hooks/useScrollHeader';

interface NavProps {
  onMenuToggle: () => void;
}

export const Nav: React.FC<NavProps> = ({ onMenuToggle }) => {
  const isScrolled = useScrollHeader(120);
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isSearchOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node) &&
        searchButtonRef.current &&
        !searchButtonRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSearchOpen]);

  useEffect(() => {
    if (!isSearchOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    router.push(`/busca?q=${encodeURIComponent(searchQuery.trim())}`);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const menuItems = [
    { nome: 'Últimas Notícias', path: '/' },
    { nome: 'Salvador', path: '/salvador', hasDropdown: true },
    { nome: 'Bahia', path: '/bahia' },
    { nome: 'Brasil', path: '/brasil' },
    { nome: 'Política', path: '/politica' },
    { nome: 'Economia', path: '/economia' },
    { nome: 'Esportes', path: '/esportes' },
    { nome: 'Entretenimento', path: '/entretenimento', hasDropdown: true },
    { nome: 'Podcasts', path: '/#podcasts' },
    { nome: 'SociedadePlay', path: '/#sociedadeplay' },
  ];

  return (
    <div
      className={`w-full z-40 bg-white ${
        isScrolled
          ? 'fixed top-0 left-0 w-full shadow-md border-none animate-[slideDown_0.3s_ease-out] bg-white/95 backdrop-blur-md'
          : 'relative hidden md:block'
      }`}
    >
      <nav className="w-full border-b border-gray-200 select-none bg-white">
        <div className="max-w-[1360px] mx-auto px-4 flex items-center justify-center h-12 relative">
          {/* Left Hamburger Menu (visible on Desktop and Mobile) */}
          <div className="flex items-center absolute left-4 z-10">
            <button
              onClick={onMenuToggle}
              className="text-brand-blue hover:text-brand-yellow p-1 transition-colors duration-200"
              aria-label="Abrir Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Centered Desktop Links List */}
          <div className="hidden md:flex items-center gap-5.5 overflow-x-auto no-scrollbar scroll-smooth">
            {menuItems.map((item, idx) => {
              const isActive = item.path === '/' 
                ? router.asPath === '/'
                : router.asPath.startsWith(item.path);

              return (
                <Link
                  key={idx}
                  href={item.path}
                  className={`text-[11px] uppercase font-black tracking-wider whitespace-nowrap transition-colors py-3.5 flex items-center gap-1.5 relative group ${
                    isActive ? 'text-brand-yellow' : 'text-brand-blue hover:text-brand-yellow'
                  }`}
                >
                  <span>{item.nome}</span>
                  {item.hasDropdown && (
                    <svg className="w-2.5 h-2.5 fill-none stroke-current" strokeWidth="3" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
                  )}
                  {/* Underline indicators */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-brand-yellow transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Centered Mobile Logo */}
          <div className="md:hidden flex items-center justify-center">
            <Link href="/" className="flex items-center select-none">
              <span className="text-lg font-black tracking-tighter text-brand-blue font-sans leading-none">
                Sociedade
              </span>
              <span className="text-lg font-black tracking-tighter text-brand-yellow font-sans leading-none flex items-center ml-0.5">
                <span className="w-4 h-4 rounded-full bg-brand-yellow flex items-center justify-center mx-0.5 shadow-xs">
                  <span className="w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[5px] border-l-white ml-0.5" />
                </span>
                <span>N</span>
              </span>
            </Link>
          </div>

          {/* Right Search Button (Desktop & Mobile) */}
          <div className="flex items-center absolute right-4 z-10">
            <button
              ref={searchButtonRef}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-brand-blue hover:text-brand-yellow p-1 transition-colors duration-200"
              aria-label="Pesquisar"
            >
              {isSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
            </button>
          </div>

          {/* Floating Search Dropdown Container */}
          {isSearchOpen && (
            <div
              ref={searchRef}
              className="absolute right-4 top-[calc(100%+8px)] z-50 w-72 sm:w-80 bg-white border border-gray-100 rounded-2xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] p-3 animate-float-in select-text"
            >
              <form onSubmit={handleSearchSubmit} className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Digite sua busca..."
                    className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200/85 focus:border-brand-yellow focus:bg-white rounded-xl text-xs text-brand-blue placeholder-gray-400 outline-none transition-all duration-200 select-text"
                    autoFocus
                  />
                  <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
                <button
                  type="submit"
                  className="bg-brand-blue hover:bg-brand-yellow hover:text-brand-blue text-white px-3.5 py-2 rounded-xl font-bold text-[11px] uppercase tracking-wider transition-all duration-200 cursor-pointer shrink-0"
                >
                  Buscar
                </button>
              </form>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
