import React from 'react';
import Link from 'next/link';
import { Noticia } from '../../../types/noticia';
import { getImageUrl } from '../../../lib/directus';

interface HeroDestaqueProps {
  noticia: Noticia;
}

export const HeroDestaque: React.FC<HeroDestaqueProps> = ({ noticia }) => {
  const imageUrl = getImageUrl(noticia.imagem);
  const href = `/${noticia.editoria.slug}/${noticia.slug}`;

  return (
    <div className="relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-[400px] md:h-[480px] lg:h-full group bg-brand-blue flex flex-col justify-end select-none">
      
      {/* Background Image with Zoom effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt={noticia.titulo}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
          onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&auto=format&fit=crop&q=80'; }}
        />
        {/* Dark vignette gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
      </div>


      {/* Bottom Section: Text Overlays & Controls */}
      <div className="p-6 md:p-8 relative z-10 w-full flex flex-col gap-3.5">
        <Link href={href} className="group/title">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-black text-white group-hover/title:text-brand-yellow transition-colors leading-tight tracking-tight drop-shadow-sm">
            {noticia.titulo}
          </h1>
        </Link>

        <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-medium max-w-2xl drop-shadow-xs">
          {noticia.subtitulo}
        </p>
      </div>
      
    </div>
  );
};

export default HeroDestaque;
