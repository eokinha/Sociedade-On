import React from 'react';
import Link from 'next/link';
import { Noticia } from '../../../types/noticia';

interface MaisLidasProps {
  noticias: Noticia[];
}

export const MaisLidas: React.FC<MaisLidasProps> = ({ noticias }) => {
  // Hardcoded items representing the exact screenshot titles & metadata
  const mockTitles = [
    { id: 'ml1', titulo: 'Trânsito em Salvador: confira os pontos de maior retenção hoje' },
    { id: 'ml2', titulo: 'Bahia registra mais de 80 mil empregos formais em 2024' },
    { id: 'ml3', titulo: 'Ivete Sangalo anuncia novidades para o Carnaval 2025' },
    { id: 'ml4', titulo: 'Comércio anuncia novidades para o Carnaval 2025' },
    { id: 'ml5', titulo: 'Chuvas: Defesa Civil emite alerta para 37 cidades da Bahia' },
    { id: 'ml6', titulo: 'Bahia vence e volta ao G4 da Série A do Brasileirão' }
  ];

  return (
    <div className="w-full py-4 select-none text-left flex flex-col">
      {/* Header Title */}
      <div className="mb-5 border-b border-gray-100 pb-3">
        <h2 className="text-sm md:text-base font-black text-brand-blue uppercase tracking-tight leading-none">
          MAIS LIDAS
        </h2>
      </div>

      {/* List: 2 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
        {/* Left column (items 1, 2, 3) */}
        <div className="flex flex-col gap-2.5">
          {mockTitles.slice(0, 3).map((item, idx) => {
            const badgeNum = idx + 1;

            return (
              <Link
                key={item.id}
                href="/#"
                className="group flex items-start text-left"
              >
                {/* Dark blue square number badge */}
                <span className="w-6 h-6 bg-brand-blue text-white text-[10px] font-black rounded-xs flex items-center justify-center shrink-0 mr-3 mt-0.5 shadow-sm font-mono">
                  {badgeNum}
                </span>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <h3 className="font-extrabold text-[11px] md:text-[12px] text-brand-blue group-hover:text-brand-yellow transition-colors leading-snug line-clamp-3">
                    {item.titulo}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Right column (items 4, 5, 6) */}
        <div className="flex flex-col gap-2.5">
          {mockTitles.slice(3, 6).map((item, idx) => {
            const badgeNum = idx + 4;

            return (
              <Link
                key={item.id}
                href="/#"
                className="group flex items-start text-left"
              >
                {/* Dark blue square number badge */}
                <span className="w-6 h-6 bg-brand-blue text-white text-[10px] font-black rounded-xs flex items-center justify-center shrink-0 mr-3 mt-0.5 shadow-sm font-mono">
                  {badgeNum}
                </span>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <h3 className="font-extrabold text-[11px] md:text-[12px] text-brand-blue group-hover:text-brand-yellow transition-colors leading-snug line-clamp-3">
                    {item.titulo}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MaisLidas;
