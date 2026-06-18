import React from 'react';
import { usePlayer } from '../../hooks/usePlayer';
import WidgetClima from '../common/widgets/WidgetClima';
import WidgetCambio from '../common/widgets/WidgetCambio';

export const TopBar: React.FC = () => {
  const { playAudio, isPlaying, currentAudioUrl, pauseAudio } = usePlayer();

  const liveUrl = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

  const handleLivePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isPlaying && currentAudioUrl === liveUrl) {
      pauseAudio();
    } else {
      playAudio(liveUrl, 'Rádio Sociedade - 740 AM | 102.5 FM (Ao Vivo)', true);
    }
  };

  return (
    <div className="bg-brand-blue text-white text-xs font-sans font-medium border-b border-white/10 py-2.5 px-4 select-none">
      <div className="max-w-[1360px] mx-auto flex justify-between items-center gap-4">
        
        {/* Left Side: Live indicator & frequency text */}
        <div className="flex items-center gap-3">
          {/* Badge Ao Vivo in red, with yellow blinking bullet */}
          <button
            onClick={handleLivePlay}
            className="flex items-center gap-1.5 bg-brand-red text-white text-2xs font-black uppercase px-2 py-0.5 rounded focus:outline-none tracking-wider shrink-0 transition-transform active:scale-95"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] animate-pulse-live" />
            <span>AO VIVO</span>
          </button>
          
          <button
            onClick={handleLivePlay}
            className="hover:text-brand-yellow font-bold transition-colors duration-200 text-left text-white/90"
          >
            Ouça a Rádio Sociedade 740 AM | 102.5 FM
          </button>
        </div>

        {/* Right Side: Widgets + Social Vectors */}
        <div className="hidden md:flex items-center gap-5">

          {/* Clima Widget */}
          <WidgetClima />

          {/* Divider */}
          <span className="w-px h-3.5 bg-white/15" />

          {/* Câmbio Widget */}
          <WidgetCambio />

          {/* Divider */}
          <span className="w-px h-3.5 bg-white/15" />

          <div className="flex items-center gap-4 text-white/80">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors" aria-label="Facebook">
              <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors" aria-label="Instagram">
              <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors" aria-label="Youtube">
              <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3z"/></svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors" aria-label="TikTok">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.72-.01 2.92.01 5.84-.02 8.75-.1 1.6-.74 3.19-1.91 4.31-1.39 1.39-3.48 2.07-5.42 1.81-2.4-.26-4.63-1.92-5.32-4.28-.9-2.94.34-6.31 3.01-7.75.81-.44 1.72-.68 2.65-.73v4.01c-1.02.16-1.99.77-2.42 1.71-.56 1.15-.36 2.62.5 3.55.91.95 2.45 1.11 3.54.39.73-.48 1.12-1.33 1.11-2.2.02-4.24.01-8.49.02-12.73z"/></svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
