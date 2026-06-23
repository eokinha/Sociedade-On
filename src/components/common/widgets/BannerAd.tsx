import React from 'react';

interface BannerAdProps {
  formato: 'horizontal-lg' | 'horizontal-sm' | 'retangulo' | 'half-page' | 'retangulo-lg';
  className?: string;
}

const dimensoes = {
  'horizontal-lg': { desktop: '728×90', mobile: '320×100', desktopClass: 'h-[90px]', mobileClass: 'h-[100px]' },
  'horizontal-sm': { desktop: '728×90', mobile: '320×100', desktopClass: 'h-[90px]', mobileClass: 'h-[100px]' },
  'retangulo': { desktop: '300×250', mobile: '300×250', desktopClass: 'h-[250px] max-w-[300px]', mobileClass: 'h-[250px] max-w-[300px]' },
  'retangulo-lg': { desktop: '350×250', mobile: '300×250', desktopClass: 'h-[250px] max-w-[350px]', mobileClass: 'h-[250px] max-w-[300px]' },
  'half-page': { desktop: '300×600', mobile: '300×600', desktopClass: 'h-[600px] max-w-[300px]', mobileClass: 'h-[600px] max-w-[300px]' },
};

export const BannerAd: React.FC<BannerAdProps> = ({ formato, className = '' }) => {
  const dim = dimensoes[formato];

  return (
    <div className={`w-full flex justify-center select-none ${className}`}>
      {/* Desktop */}
      <div
        className={`hidden md:flex ${dim.desktopClass} w-full bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 border-2 border-dashed border-gray-300 items-center justify-center flex-col gap-1 rounded-none`}
      >
        <span className="text-2xs font-black uppercase tracking-[0.2em] text-gray-400">
          PUBLICIDADE
        </span>
        <span className="text-2xs text-gray-400 font-semibold">
          {dim.desktop}
        </span>
      </div>

      {/* Mobile */}
      <div
        className={`flex md:hidden ${dim.mobileClass} w-full bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 border-2 border-dashed border-gray-300 items-center justify-center flex-col gap-1 rounded-none`}
      >
        <span className="text-2xs font-black uppercase tracking-[0.2em] text-gray-400">
          PUBLICIDADE
        </span>
        <span className="text-2xs text-gray-400 font-semibold">
          {dim.mobile}
        </span>
      </div>
    </div>
  );
};

export default BannerAd;
