import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { X } from 'lucide-react';
import SearchInput from '../common/inputs/SearchInput';

interface NavMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavMobile: React.FC<NavMobileProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { nome: 'Últimas Notícias', path: '/ultimas-noticias' },
    { nome: 'Salvador', path: '/salvador' },
    { nome: 'Bahia', path: '/bahia' },
    { nome: 'Brasil', path: '/brasil' },
    { nome: 'Política', path: '/politica' },
    { nome: 'Economia', path: '/economia' },
    { nome: 'Esportes', path: '/esportes' },
    { nome: 'Entretenimento', path: '/entretenimento' },
    { nome: 'Comercial', path: '/comercial' },
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
              const isActive = mounted && router.asPath.startsWith(item.path);

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
            <svg className="w-4 h-4 fill-current text-brand-yellow" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
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
