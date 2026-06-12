import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, X } from 'lucide-react';
import { usePlayer } from '../../hooks/usePlayer';
import BadgeAoVivo from '../common/widgets/BadgeAoVivo';

export const Flutuantes: React.FC = () => {
  const { isPlaying, currentAudioUrl, audioTitle, isLive, volume, togglePlay, changeVolume, pauseAudio } = usePlayer();
  const [showPlayer, setShowPlayer] = useState(true);

  // Automatically show the player again if a new audio starts playing
  useEffect(() => {
    if (isPlaying) {
      setShowPlayer(true);
    }
  }, [isPlaying]);

  // Automatically show the player again if the audio URL changes
  useEffect(() => {
    if (currentAudioUrl) {
      setShowPlayer(true);
    }
  }, [currentAudioUrl]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeVolume(parseFloat(e.target.value));
  };

  const handleClosePlayer = (e: React.MouseEvent) => {
    e.preventDefault();
    pauseAudio();
    setShowPlayer(false);
  };

  const hasAudio = !!currentAudioUrl;
  const isPlayerVisible = hasAudio && showPlayer;

  return (
    <>
      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/5571999999999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className={`fixed right-6 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white p-4 rounded-full shadow-2xl hover:scale-115 active:scale-95 transition-all duration-300 flex items-center justify-center ${
          isPlayerVisible ? 'bottom-24' : 'bottom-6'
        }`}
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.488 5.275 1.49 5.485.001 9.948-4.437 9.951-9.886.002-2.64-1.019-5.123-2.877-6.986-1.858-1.862-4.332-2.888-6.974-2.889-5.49 0-9.953 4.437-9.956 9.886-.002 1.849.493 3.57 1.487 5.124L2.43 21.03l6.217-1.876zm7.25-10.457c-.24-.12-.142-.876-.622-1.353-.473-.472-.9-.374-1.14-.374-.24 0-.476-.035-.715.203-.24.238-.913.893-.913 2.181 0 1.288.937 2.531 1.069 2.709.13.178 1.805 2.755 4.372 3.864.61.264 1.086.42 1.458.539.614.195 1.173.167 1.614.101.492-.074 1.517-.619 1.73-1.22.213-.601.213-1.116.149-1.221-.064-.105-.233-.167-.472-.288z"/>
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
              <span className="hidden sm:inline-flex bg-brand-yellow text-brand-blue text-[10px] font-black uppercase px-2 py-0.5 rounded shrink-0">
                Reportagem
              </span>
            )}
            <div className="min-w-0">
              <span className="block text-[10px] text-gray-400 uppercase tracking-widest font-extrabold">
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
