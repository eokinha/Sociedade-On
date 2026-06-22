import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { usePlayer } from '../../../hooks/usePlayer';

export const AgoraNaSociedade: React.FC = () => {
  const {
    playAudio,
    pauseAudio,
    isPlaying,
    currentAudioUrl,
    isVideoFloating,
    setIsVideoFloating,
    isVideoCollapsed,
    setIsVideoCollapsed,
    isAudioPlayerVisible,
  } = usePlayer();

  const [isFloating, setIsFloating] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isPlayerBarVisible = isAudioPlayerVisible && !!currentAudioUrl;
  const [isFloatingReady, setIsFloatingReady] = useState(false);

  useEffect(() => {
    if (isFloating) {
      const timer = setTimeout(() => {
        setIsFloatingReady(true);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setIsFloatingReady(false);
    }
  }, [isFloating]);

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
          setIsVideoCollapsed(false); // Reset collapsed state when inline
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
                  isPlayerBarVisible ? 'bottom-40' : 'bottom-22'
                } right-6 z-50 w-64 sm:w-80 md:w-96 aspect-video bg-black rounded-lg shadow-2xl border border-white/10 overflow-hidden ${
                  isVideoCollapsed ? 'pointer-events-none' : ''
                }`
              : "absolute inset-0 w-full h-full"
          }
          style={
            isFloating
              ? {
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: isVideoCollapsed
                    ? 'translateX(calc(100% + 32px)) scale(0.95)'
                    : isFloatingReady
                    ? 'translateX(0) scale(1)'
                    : 'translateX(0) scale(0.95)',
                  opacity: isVideoCollapsed ? 0 : isFloatingReady ? 1 : 0,
                }
              : undefined
          }
        >
          {isFloating && (
            <>
              <button
                onClick={() => setIsVideoCollapsed(true)}
                className="absolute top-2 right-10 z-50 bg-black/60 hover:bg-black/85 text-white rounded-full p-1.5 transition-colors cursor-pointer border border-white/10 flex items-center justify-center"
                aria-label="Recolher vídeo"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleCloseFloat}
                className="absolute top-2 right-2 z-50 bg-black/60 hover:bg-black/85 text-white rounded-full p-1.5 transition-colors cursor-pointer border border-white/10 flex items-center justify-center"
                aria-label="Fechar vídeo flutuante"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </>
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



      {/* Expand Button when Collapsed */}
      {isFloating && (
        <button
          onClick={() => setIsVideoCollapsed(false)}
          className={`fixed ${
            isPlayerBarVisible ? 'bottom-40' : 'bottom-22'
          } right-0 z-50 bg-brand-blue hover:bg-brand-blue/90 text-brand-yellow p-3 rounded-l-full shadow-2xl border-l border-y border-white/10 hover:pl-4 flex items-center justify-center cursor-pointer`}
          style={{
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isVideoCollapsed ? 'translateX(0)' : 'translateX(100%)',
            opacity: isVideoCollapsed ? 1 : 0,
            pointerEvents: isVideoCollapsed ? 'auto' : 'none',
          }}
          aria-label="Expandir vídeo"
        >
          <ChevronLeft className="w-5 h-5 animate-pulse-live" />
        </button>
      )}

    </div>
  );
};

export default AgoraNaSociedade;
