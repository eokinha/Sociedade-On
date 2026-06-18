import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

        {/* Centered Logo Image */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-sociedade.png"
            alt="Sociedade ON"
            width={260}
            height={70}
            className="h-12 md:h-14 w-auto object-contain"
            priority
          />
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
