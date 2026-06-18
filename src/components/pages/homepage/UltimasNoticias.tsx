import React from 'react';
import Link from 'next/link';
import { Noticia } from '../../../types/noticia';
import CardNoticia from '../../common/widgets/CardNoticia';

interface UltimasNoticiasProps {
  noticias: Noticia[];
}

export const UltimasNoticias: React.FC<UltimasNoticiasProps> = ({ noticias }) => {
  if (noticias.length === 0) return null;

  const [principal, ...restantes] = noticias;

  return (
    <section className="w-full select-none">
      {/* Header Row */}
      <div className="flex justify-between items-end mb-5 border-b border-gray-100 pb-3">
        <h2 className="text-sm md:text-base font-black text-brand-blue uppercase tracking-tight leading-none">
          ÚLTIMAS NOTÍCIAS
        </h2>
        <Link
          href="/ultimas-noticias"
          className="text-xs font-black text-brand-blue hover:text-brand-yellow transition-colors uppercase tracking-wider shrink-0"
        >
          VER TODAS
        </Link>
      </div>

      {/* Grid: Large card left + stacked cards right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Left: Featured card */}
        <div className="flex flex-col">
          <CardNoticia noticia={principal} layout="vertical" showExcerpt lineClamp={3} />
        </div>

        {/* Right: Stacked horizontal cards */}
        <div className="flex flex-col gap-2.5">
          {restantes.slice(0, 4).map((noticia) => (
            <div key={noticia.id} className="flex-1 flex">
              <CardNoticia noticia={noticia} layout="horizontal" showExcerpt={false} lineClamp={2} className="h-full w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UltimasNoticias;
