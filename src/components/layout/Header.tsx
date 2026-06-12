import React from 'react';
import Link from 'next/link';
import TopBar from './TopBar';
import Nav from './Nav';
import { Menu } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="w-full flex flex-col z-50 relative bg-white">
      {/* Layer 1: TopBar (remains dark blue) */}
      <TopBar />

      {/* Layer 2: White Background Logo Area */}
      <div className="bg-white py-5 px-4 flex justify-between md:justify-center items-center relative select-none border-b border-gray-100">
        {/* Mobile menu trigger */}
        <button
          onClick={onMenuToggle}
          className="md:hidden text-brand-blue hover:text-brand-yellow p-1.5 transition-colors duration-200"
          aria-label="Abrir Menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Centered Premium Typographic Logo */}
        <Link href="/" className="flex flex-col items-center">
          <div className="flex items-center">
            {/* Sociedade - Dark Blue */}
            <span className="text-3xl sm:text-4xl md:text-[45px] font-black tracking-tighter text-brand-blue font-sans leading-none">
              Sociedade
            </span>
            {/* ON - Yellow/Gold with play icon embedded in O */}
            <span className="text-3xl sm:text-4xl md:text-[45px] font-black tracking-tighter text-brand-yellow font-sans leading-none flex items-center ml-0.5">
              {/* O as circle play icon */}
              <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-brand-yellow flex items-center justify-center mx-0.5 shadow-sm">
                <span className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-white ml-0.5" />
              </span>
              <span>N</span>
            </span>
          </div>
          <span className="text-[8px] md:text-[9px] tracking-[0.25em] text-brand-blue font-black uppercase mt-1">
            A Bahia conectada em tempo real
          </span>
        </Link>

        {/* Spacer for mobile layout alignment */}
        <div className="w-9 md:hidden" />
      </div>

      {/* Layer 3: Nav */}
      <Nav onMenuToggle={onMenuToggle} />
    </header>
  );
};

export default Header;
