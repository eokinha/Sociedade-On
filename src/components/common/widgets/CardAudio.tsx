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
    <div className="group relative flex flex-col bg-white overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 border border-gray-100 w-full select-none rounded-none">
      
      {/* Image above */}
      <div className="h-28 w-full relative overflow-hidden bg-brand-blue shrink-0">
        <img
          src={capa || defaultCapa}
          alt={titulo}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
        />
        
        {/* Play/Pause hover overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handlePlayClick}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-brand-yellow text-brand-blue shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200"
            aria-label={isCurrentlyPlaying ? 'Pausar áudio' : 'Ouvir corte'}
          >
            {isCurrentlyPlaying ? (
              <Pause className="w-3.5 h-3.5 fill-current" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            )}
          </button>
        </div>
        
        {/* Duration badge */}
        <span className="absolute bottom-2 left-2 bg-black/80 text-white text-2xs font-black px-1.5 py-0.5 rounded tracking-wide">
          {duracao}
        </span>
      </div>

      {/* Text below */}
      <div className="p-3 flex flex-col justify-between flex-1 min-w-0 gap-2">
        <h4 className="font-extrabold text-xs text-brand-blue line-clamp-2 leading-snug group-hover:text-brand-yellow transition-colors duration-200">
          {titulo}
        </h4>
        <div className="flex justify-between items-center">
          <TempoPublicacao date={publicadoEm} className="text-xs font-semibold text-brand-gray" />
          
          {isCurrentlyPlaying ? (
            <span className="flex items-center gap-1 text-2xs font-black text-brand-red uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              <span>Tocando</span>
            </span>
          ) : (
            <button
              onClick={handlePlayClick}
              className="text-xs font-black text-brand-blue hover:text-brand-yellow uppercase tracking-wider flex items-center gap-1 transition-colors duration-200"
            >
              <Play className="w-2.5 h-2.5 fill-current" />
              Ouvir
            </button>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default CardAudio;
