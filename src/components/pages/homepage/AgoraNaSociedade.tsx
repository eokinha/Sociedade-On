import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, X } from 'lucide-react';
import { usePlayer } from '../../../hooks/usePlayer';

export const AgoraNaSociedade: React.FC = () => {
  const {
    playAudio,
    pauseAudio,
    isPlaying,
    currentAudioUrl,
    isVideoFloating,
    setIsVideoFloating,
    isAudioPlayerVisible,
  } = usePlayer();

  const [isFloating, setIsFloating] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const liveUrl = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
  const isCurrentLive = currentAudioUrl === liveUrl;
  const isCurrentlyPlaying = isCurrentLive && isPlaying;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          if (!isDismissed) {
            setIsFloating(true);
            setIsVideoFloating(true);
          }
        } else {
          setIsFloating(false);
          setIsVideoFloating(false);
          setIsDismissed(false); // Reset dismissed state when it comes back into view
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isDismissed, setIsVideoFloating]);

  useEffect(() => {
    return () => {
      setIsVideoFloating(false);
    };
  }, [setIsVideoFloating]);

  const handleLiveToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isCurrentlyPlaying) {
      pauseAudio();
    } else {
      playAudio(liveUrl, 'Rádio Sociedade - 740 AM | 102.5 FM (Ao Vivo)', true);
    }
  };

  const handleCloseFloat = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDismissed(true);
    setIsFloating(false);
    setIsVideoFloating(false);
  };

  const currentProgram = {
    titulo: 'Sociedade Urgente',
    apresentador: 'com Adelson Carvalho',
    descricao: 'O jornalismo que você confia, agora ao vivo.',
  };

  return (
    <div className="bg-brand-blue text-white overflow-hidden shadow-md flex flex-col h-full border border-white/5 select-none">

      {/* Top Header Row of the Card */}
      <div className="bg-[#050B1E] px-5 py-3.5 border-b border-white/5 flex justify-between items-center shrink-0">
        <h3 className="text-xs font-black uppercase tracking-wider text-white">
          AGORA NA SOCIEDADE
        </h3>
        {/* Red pill badge with white text */}
        <span className="flex items-center bg-brand-red text-white text-2xs font-black uppercase px-2 py-0.5 rounded tracking-wide shrink-0">
          AO VIVO
        </span>
      </div>

      {/* Embedded Video Player */}
      <div ref={containerRef} className="relative w-full bg-black overflow-visible" style={{ aspectRatio: '16/9' }}>
        <div
          className={
            isFloating
              ? `fixed ${
                  isAudioPlayerVisible ? 'bottom-24' : 'bottom-6'
                } right-6 z-50 w-64 sm:w-80 md:w-96 aspect-video bg-black rounded-lg shadow-2xl border border-white/10 overflow-hidden animate-float-in`
              : "absolute inset-0 w-full h-full"
          }
        >
          {isFloating && (
            <button
              onClick={handleCloseFloat}
              className="absolute top-2 right-2 z-50 bg-black/60 hover:bg-black/85 text-white rounded-full p-1.5 transition-colors cursor-pointer border border-white/10 flex items-center justify-center"
              aria-label="Fechar vídeo flutuante"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <iframe
            src="https://www.sociedadeonline.com/Streaming/Video/index.html"
            title="Sociedade Online - Ao Vivo"
            className="w-full h-full border-0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            scrolling="no"
          />
        </div>
      </div>

      {/* Main card details */}
      <div className="p-5 flex flex-col justify-between flex-1 gap-4">

        {/* Presenter Texts */}
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-black text-white leading-tight">
            {currentProgram.titulo}
          </h2>
          <p className="text-xs text-gray-300 font-semibold">
            {currentProgram.apresentador}
          </p>
          <p className="text-xs text-white/80 leading-relaxed font-normal mt-1.5">
            {currentProgram.descricao}
          </p>
        </div>

        {/* Card Specific Action Buttons */}
        <div className="flex flex-col gap-2.5 pt-1.5">
          <button
            onClick={handleLiveToggle}
            className="w-full bg-brand-yellow hover:bg-[#C0001A] text-white font-black py-2.5 px-4 flex items-center justify-center gap-2 transition-colors duration-200 active:scale-95 cursor-pointer text-xs uppercase tracking-wide"
          >
            {isCurrentlyPlaying ? (
              <Pause className="w-3.5 h-3.5 fill-current" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            )}
            <span>{isCurrentlyPlaying ? 'PAUSAR RÁDIO' : 'OUÇA A RÁDIO AO VIVO'}</span>
          </button>
        </div>

      </div>

    </div>
  );
};

export default AgoraNaSociedade;
