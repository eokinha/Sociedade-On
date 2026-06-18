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

      {/* List: 1 Column (one below the other) */}
      <div className="flex flex-col gap-3.5">
        {mockTitles.map((item, idx) => {
          const badgeNum = idx + 1;

          return (
            <Link
              key={item.id}
              href="/#"
              className="group flex items-center text-left"
            >
              {/* Dark blue square number badge */}
              <span className="w-6 h-6 bg-brand-blue text-white text-2xs font-black rounded-xs flex items-center justify-center shrink-0 mr-3 shadow-sm font-mono">
                {badgeNum}
              </span>
              <div className="flex flex-col gap-0.5 min-w-0">
                <h3 className="font-extrabold text-sm text-brand-blue group-hover:text-brand-yellow transition-colors leading-snug line-clamp-3">
                  {item.titulo.trim()}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MaisLidas;
