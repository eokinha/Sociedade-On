import React from 'react';
import Link from 'next/link';
import { Noticia } from '../../../types/noticia';
import TagEditoria from './TagEditoria';
import TempoPublicacao from './TempoPublicacao';
import { getImageUrl } from '../../../lib/directus';

interface CardNoticiaProps {
  noticia: Noticia;
  layout?: 'vertical' | 'horizontal' | 'compact';
  showExcerpt?: boolean;
  lineClamp?: number;
  className?: string;
}

export const CardNoticia: React.FC<CardNoticiaProps> = ({ noticia, layout = 'vertical', showExcerpt = false, lineClamp = 2, className = '' }) => {
  const imageUrl = getImageUrl(noticia.imagem);
  const href = `/${noticia.editoria.slug}/${noticia.slug}`;

  const clampClass = 
    lineClamp === 1 ? 'line-clamp-1' :
    lineClamp === 3 ? 'line-clamp-3' :
    lineClamp === 4 ? 'line-clamp-4' : 'line-clamp-2';

  if (layout === 'compact') {
    return (
      <Link href={href} className="group flex flex-col gap-1.5 border-b border-gray-100 pb-3 hover:border-brand-yellow/30 transition-all duration-300">
        <div className="flex gap-2 items-center">
          <TagEditoria editoria={noticia.editoria} />
          <TempoPublicacao date={noticia.publicadoEm} />
        </div>
        <h4 className={`font-bold text-sm md:text-base text-brand-blue group-hover:text-brand-yellow transition-colors duration-300 ${clampClass} leading-tight`}>
          {noticia.titulo}
        </h4>
      </Link>
    );
  }

  if (layout === 'horizontal') {
    return (
      <Link href={href} className={`group flex gap-3 items-center bg-white p-2.5 rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-brand-yellow/10 ${className}`}>
        {imageUrl && (
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-20 relative rounded-lg overflow-hidden shrink-0 bg-gray-50">
            <img
              src={imageUrl}
              alt={noticia.titulo}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&auto=format&fit=crop&q=80'; }}
            />
          </div>
        )}
        <div className="flex flex-col gap-1 justify-center min-w-0">
          <div className="flex gap-2 items-center">
            <TagEditoria editoria={noticia.editoria} />
            <TempoPublicacao date={noticia.publicadoEm} />
          </div>
          <h3 className={`font-bold text-xs sm:text-sm md:text-base text-brand-blue group-hover:text-brand-yellow transition-colors duration-300 ${clampClass} leading-snug`}>
            {noticia.titulo}
          </h3>
          {showExcerpt && noticia.subtitulo && (
            <p className="text-[11px] md:text-xs text-brand-gray line-clamp-2 leading-relaxed hidden sm:block">
              {noticia.subtitulo}
            </p>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link href={href} className="group flex flex-col gap-3 bg-white p-4 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-brand-yellow/10">
      {imageUrl && (
        <div className="aspect-[16/10] w-full relative rounded-xl overflow-hidden shadow-sm bg-gray-50">
          <img
            src={imageUrl}
            alt={noticia.titulo}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop&q=80'; }}
          />
        </div>
      )}
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <TagEditoria editoria={noticia.editoria} />
          <TempoPublicacao date={noticia.publicadoEm} />
        </div>
        <h3 className={`font-bold text-sm sm:text-base md:text-lg text-brand-blue group-hover:text-brand-yellow transition-colors duration-300 ${clampClass} leading-snug`}>
          {noticia.titulo}
        </h3>
        {showExcerpt && noticia.subtitulo && (
          <p className="text-xs md:text-sm text-brand-gray line-clamp-2 leading-relaxed">
            {noticia.subtitulo}
          </p>
        )}
      </div>
    </Link>
  );
};

export default CardNoticia;
