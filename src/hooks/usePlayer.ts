import { usePlayer as usePlayerContext } from '../context/PlayerContext';

export const usePlayer = () => {
  return usePlayerContext();
};
