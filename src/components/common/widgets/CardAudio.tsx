import React from 'react';
import { Play, Pause } from 'lucide-react';
import { usePlayer } from '../../../hooks/usePlayer';
import TempoPublicacao from './TempoPublicacao';

interface CardAudioProps {
  id: string;
  titulo: string;
  duracao: string;
  publicadoEm: string | Date;
  audioUrl: string;
  capa?: string;
}

export const CardAudio: React.FC<CardAudioProps> = ({ id, titulo, duracao, publicadoEm, audioUrl, capa }) => {
  const { isPlaying, currentAudioUrl, playAudio, pauseAudio } = usePlayer();

  const isCurrentAudio = currentAudioUrl === audioUrl;
  const isCurrentlyPlaying = isCurrentAudio && isPlaying;

  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isCurrentlyPlaying) {
      pauseAudio();
    } else {
      playAudio(audioUrl, titulo, false);
    }
  };

  const defaultCapa = 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&auto=format&fit=crop&q=80';

  return (
    <div className="group relative flex flex-col bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 border border-gray-100 flex-none w-[140px] md:w-[160px] select-none">
      
      {/* Visual Frame */}
      <div className="aspect-[16/10] w-full relative overflow-hidden bg-brand-blue">
        <img
          src={capa || defaultCapa}
          alt={titulo}
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 opacity-95"
        />
        
        {/* Play/Pause Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handlePlayClick}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-yellow text-brand-blue shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200"
            aria-label={isCurrentlyPlaying ? 'Pausar áudio' : 'Ouvir corte'}
          >
            {isCurrentlyPlaying ? (
              <Pause className="w-4 h-4 fill-current" />
            ) : (
              <Play className="w-4 h-4 fill-current ml-0.5" />
            )}
          </button>
        </div>
        
        {/* Duration badge positioned at bottom-left overlay */}
        <span className="absolute bottom-2 left-2 bg-black/80 text-white text-[9px] font-black px-1.5 py-0.5 rounded tracking-wide">
          {duracao}
        </span>
      </div>

      {/* Details Box */}
      <div className="p-3 flex flex-col justify-between flex-1 gap-1.5">
        <h4 className="font-extrabold text-[11px] md:text-[12px] text-brand-blue line-clamp-3 leading-snug group-hover:text-brand-yellow transition-colors duration-200">
          {titulo}
        </h4>
        <div className="flex justify-between items-center mt-0.5">
          <TempoPublicacao date={publicadoEm} className="text-[9px] font-semibold text-brand-gray" />
          
          {isCurrentlyPlaying && (
            <span className="flex items-center gap-1 text-[9px] font-black text-brand-red uppercase tracking-wider">
              <span className="w-1 h-1 rounded-full bg-brand-red animate-pulse" />
              <span>Tocando</span>
            </span>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default CardAudio;
