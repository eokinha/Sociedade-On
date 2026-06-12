import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { X, Phone } from 'lucide-react';
import SearchInput from '../common/inputs/SearchInput';

interface NavMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavMobile: React.FC<NavMobileProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  const menuItems = [
    { nome: 'Últimas Notícias', path: '/' },
    { nome: 'Salvador', path: '/salvador' },
    { nome: 'Bahia', path: '/bahia' },
    { nome: 'Brasil', path: '/brasil' },
    { nome: 'Política', path: '/politica' },
    { nome: 'Economia', path: '/economia' },
    { nome: 'Esportes', path: '/esportes' },
    { nome: 'Entretenimento', path: '/entretenimento' },
    { nome: 'Podcasts', path: '/#podcasts' },
    { nome: 'SociedadePlay', path: '/#sociedadeplay' },
  ];

  const handleSearch = (value: string) => {
    // Perform search redirect or logs
    console.log('Pesquisando por:', value);
    onClose();
  };

  return (
    <>
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-50 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer Body */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] max-w-[85vw] bg-brand-blue text-white shadow-2xl z-55 flex flex-col justify-between p-6 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Header Area */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-black tracking-tighter">
              SOCIEDADE<span className="text-brand-yellow">ON</span>
            </span>
            <button
              onClick={onClose}
              className="text-gray-300 hover:text-brand-yellow p-1"
              aria-label="Fechar Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search Input inside Mobile Menu */}
          <div className="mb-6">
            <SearchInput onSearch={handleSearch} placeholder="Pesquisar notícias..." />
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-4">
            {menuItems.map((item, idx) => {
              const isActive = item.path === '/' 
                ? router.asPath === '/'
                : router.asPath.startsWith(item.path);

              return (
                <Link
                  key={idx}
                  href={item.path}
                  onClick={onClose}
                  className={`text-sm uppercase font-extrabold tracking-wide py-1.5 transition-colors border-b border-white/5 hover:text-brand-yellow ${
                    isActive ? 'text-brand-yellow' : 'text-gray-200'
                  }`}
                >
                  {item.nome}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer info & socials inside drawer */}
        <div className="flex flex-col gap-4 border-t border-white/10 pt-4 mt-6">
          <a
            href="https://wa.me/5571999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-brand-yellow text-sm font-semibold transition-colors"
          >
            <Phone className="w-4 h-4 text-brand-yellow" />
            <span>(71) 99999-9999</span>
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-4 text-gray-300">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow" aria-label="Facebook">
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow" aria-label="Instagram">
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow" aria-label="Twitter">
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow" aria-label="Youtube">
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMobile;
