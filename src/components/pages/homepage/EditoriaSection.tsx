import React from 'react';
import Link from 'next/link';
import { Noticia } from '../../../types/noticia';
import { Editoria } from '../../../types/editoria';
import CardNoticia from '../../common/widgets/CardNoticia';

interface EditoriaSectionProps {
  editoria: Editoria;
  noticias: Noticia[];
}

export const EditoriaSection: React.FC<EditoriaSectionProps> = ({ editoria, noticias }) => {
  if (noticias.length === 0) return null;

  const [principal, ...restantes] = noticias;

  return (
    <section className="w-full py-6 select-none border-b border-gray-100">
      {/* Header Row */}
      <div className="flex justify-between items-end mb-5 border-b border-gray-100 pb-3">
        <div className="flex items-center gap-2.5">
          <span
            className="w-1 h-5 rounded-full shrink-0"
            style={{ backgroundColor: editoria.cor || '#0D1B4B' }}
          />
          <h2 className="text-sm md:text-base font-black text-brand-blue uppercase tracking-tight leading-none">
            {editoria.nome}
          </h2>
        </div>
        <Link
          href={`/${editoria.slug}`}
          className="text-xs font-black text-brand-blue hover:text-brand-yellow transition-colors uppercase tracking-wider shrink-0"
        >
          VER MAIS
        </Link>
      </div>

      {/* Grid: Large card left + stacked horizontal cards right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Left Column: Featured card */}
        <div className="self-center">
          <CardNoticia noticia={principal} layout="vertical" showExcerpt lineClamp={3} />
        </div>

        {/* Right Column: Stacked horizontal cards */}
        <div className="grid grid-rows-4 gap-3 h-full">
          {restantes.slice(0, 4).map((noticia) => (
            <div key={noticia.id} className="w-full">
              <CardNoticia noticia={noticia} layout="horizontal" showExcerpt={false} lineClamp={2} className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditoriaSection;
