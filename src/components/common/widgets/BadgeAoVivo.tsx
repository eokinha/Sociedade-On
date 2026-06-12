import React from 'react';

export const BadgeAoVivo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <span className={`inline-flex items-center gap-1.5 bg-brand-red text-white text-[10px] md:text-xs font-black tracking-wider uppercase px-2 py-0.5 rounded shadow-sm ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse-live" />
      <span>Ao Vivo</span>
    </span>
  );
};

export default BadgeAoVivo;
