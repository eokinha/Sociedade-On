import React from 'react';
import Link from 'next/link';
import { Volume2, Pause } from 'lucide-react';
import { Noticia } from '../../../types/noticia';
import TagEditoria from '../../common/widgets/TagEditoria';
import TempoPublicacao from '../../common/widgets/TempoPublicacao';
import { usePlayer } from '../../../hooks/usePlayer';
import { getImageUrl } from '../../../lib/directus';

interface HeroDestaqueProps {
  noticia: Noticia;
}

export const HeroDestaque: React.FC<HeroDestaqueProps> = ({ noticia }) => {
  const { playAudio, pauseAudio, isPlaying, currentAudioUrl } = usePlayer();
  const imageUrl = getImageUrl(noticia.imagem);
  const href = `/${noticia.editoria.slug}/${noticia.slug}`;

  const isCurrentAudio = currentAudioUrl === noticia.audioUrl;
  const isCurrentlyPlaying = isCurrentAudio && isPlaying;

  const handleAudioPlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!noticia.audioUrl) return;

    if (isCurrentlyPlaying) {
      pauseAudio();
    } else {
      playAudio(noticia.audioUrl, noticia.titulo, false);
    }
  };

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-[400px] md:h-[480px] lg:h-full group bg-brand-blue flex flex-col justify-between select-none">
      
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

      {/* Top Section: Category Tag */}
      <div className="p-5 relative z-10">
        <TagEditoria
          editoria={{
            ...noticia.editoria,
            cor: '#0D1B4B'
          }}
          className="shadow-md text-[10px] font-black"
        />
      </div>

      {/* Bottom Section: Text Overlays & Controls */}
      <div className="p-6 md:p-8 relative z-10 w-full flex flex-col gap-3.5">
        <Link href={href} className="group/title">
          <h1 className="text-xl sm:text-2xl md:text-[34px] font-black text-white group-hover/title:text-brand-yellow transition-colors leading-tight tracking-tight drop-shadow-sm">
            {noticia.titulo}
          </h1>
        </Link>

        <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-medium max-w-2xl drop-shadow-xs">
          {noticia.subtitulo}
        </p>

        {/* Audio trigger & Relative Time Row */}
        <div className="flex justify-between items-center mt-2.5 pt-4 border-t border-white/10 w-full">
          {noticia.audioUrl ? (
            <button
              onClick={handleAudioPlay}
              className="flex items-center gap-2 border border-white/30 bg-black/40 hover:bg-white hover:text-brand-blue text-white rounded font-black tracking-wider uppercase text-[10px] py-2.5 px-4.5 transition-all duration-300 transform active:scale-95 cursor-pointer"
            >
              {isCurrentlyPlaying ? (
                <Pause className="w-3.5 h-3.5 fill-current" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 fill-current" />
              )}
              <span>{isCurrentlyPlaying ? 'PAUSAR REPORTAGEM' : 'OUÇA A REPORTAGEM'}</span>
            </button>
          ) : (
            <div />
          )}

          <span className="text-[11px] font-bold text-white/70 tracking-wide">
            há 25 minutos
          </span>
        </div>
      </div>
      
    </div>
  );
};

export default HeroDestaque;
