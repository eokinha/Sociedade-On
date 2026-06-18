import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, X } from 'lucide-react';
import { usePlayer } from '../../hooks/usePlayer';
import BadgeAoVivo from '../common/widgets/BadgeAoVivo';

export const Flutuantes: React.FC = () => {
  const {
    isPlaying,
    currentAudioUrl,
    audioTitle,
    isLive,
    volume,
    togglePlay,
    changeVolume,
    pauseAudio,
    isVideoFloating,
    isAudioPlayerVisible,
    setIsAudioPlayerVisible,
  } = usePlayer();

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeVolume(parseFloat(e.target.value));
  };

  const handleClosePlayer = (e: React.MouseEvent) => {
    e.preventDefault();
    pauseAudio();
    setIsAudioPlayerVisible(false);
  };

  const hasAudio = !!currentAudioUrl;
  const isPlayerVisible = hasAudio && isAudioPlayerVisible;

  const getWhatsAppBottomClass = () => {
    if (isVideoFloating) {
      if (isPlayerVisible) {
        return 'bottom-[260px] md:bottom-[330px]';
      } else {
        return 'bottom-[180px] md:bottom-[250px]';
      }
    } else {
      return isPlayerVisible ? 'bottom-24' : 'bottom-6';
    }
  };

  return (
    <>
      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/5571999999999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className={`fixed right-6 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white p-4 rounded-full shadow-2xl hover:scale-115 active:scale-95 transition-all duration-300 flex items-center justify-center ${
          getWhatsAppBottomClass()
        }`}
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Floating Global Radio Player Bar */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-brand-blue/95 border-t-2 border-brand-yellow text-white px-4 py-3.5 shadow-2xl flex items-center justify-between transition-transform duration-500 z-50 backdrop-blur-md ${
          isPlayerVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
          
          {/* Info Side */}
          <div className="flex items-center gap-3 min-w-0">
            {isLive ? (
              <BadgeAoVivo className="hidden sm:inline-flex shrink-0" />
            ) : (
              <span className="hidden sm:inline-flex bg-brand-yellow text-brand-blue text-2xs font-black uppercase px-2 py-0.5 rounded shrink-0">
                Reportagem
              </span>
            )}
            <div className="min-w-0">
              <span className="block text-2xs text-gray-400 uppercase tracking-widest font-extrabold">
                {isLive ? 'Transmissão Ao Vivo' : 'Ouvindo'}
              </span>
              <h5 className="font-extrabold text-xs sm:text-sm text-white truncate line-clamp-1 leading-snug">
                {audioTitle || 'Rádio Sociedade da Bahia'}
              </h5>
            </div>
          </div>

          {/* Controls Side */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            
            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-yellow text-brand-blue hover:scale-105 active:scale-95 transition-transform shadow-md"
              aria-label={isPlaying ? 'Pausar áudio' : 'Tocar áudio'}
            >
              {isPlaying ? (
                <Pause className="w-4.5 h-4.5 fill-current" />
              ) : (
                <Play className="w-4.5 h-4.5 fill-current ml-0.5" />
              )}
            </button>

            {/* Volume Control */}
            <div className="hidden sm:flex items-center gap-2">
              <Volume2 className="w-4.5 h-4.5 text-gray-400" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                className="w-16 sm:w-20 md:w-24 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-brand-yellow"
                aria-label="Volume"
              />
            </div>

            {/* Close Button */}
            <button
              onClick={handleClosePlayer}
              className="text-gray-400 hover:text-brand-red p-1 transition-colors"
              aria-label="Fechar player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Flutuantes;
