import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

interface PlayerContextType {
  isPlaying: boolean;
  currentAudioUrl: string | null;
  audioTitle: string;
  isLive: boolean;
  volume: number;
  playAudio: (url: string, title: string, isLive?: boolean) => void;
  pauseAudio: () => void;
  togglePlay: () => void;
  changeVolume: (vol: number) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudioUrl, setCurrentAudioUrl] = useState<string | null>(null);
  const [audioTitle, setAudioTitle] = useState<string>('');
  const [isLive, setIsLive] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Instantiate audio object on client side
    audioRef.current = new Audio();
    audioRef.current.volume = volume;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setIsLive(false);
    };

    const audio = audioRef.current;
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, []);

  const playAudio = (url: string, title: string, live: boolean = false) => {
    if (!audioRef.current) return;

    if (currentAudioUrl !== url) {
      audioRef.current.src = url;
      setCurrentAudioUrl(url);
    }
    
    setAudioTitle(title);
    setIsLive(live);
    
    audioRef.current.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        console.error('Audio playback failed:', err);
      });
  };

  const pauseAudio = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseAudio();
    } else if (currentAudioUrl) {
      audioRef.current?.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.error('Audio playback failed:', err));
    } else {
      // Default to live radio stream if nothing is loaded
      playAudio(
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Standard demo stream
        'Rádio Sociedade - 102.5 FM',
        true
      );
    }
  };

  const changeVolume = (vol: number) => {
    const safeVolume = Math.max(0, Math.min(1, vol));
    setVolume(safeVolume);
    if (audioRef.current) {
      audioRef.current.volume = safeVolume;
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        isPlaying,
        currentAudioUrl,
        audioTitle,
        isLive,
        volume,
        playAudio,
        pauseAudio,
        togglePlay,
        changeVolume,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};
