import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Noticia } from '../../../types/noticia';
import TagEditoria from '../../common/widgets/TagEditoria';
import TempoPublicacao from '../../common/widgets/TempoPublicacao';
import { getImageUrl } from '../../../lib/directus';

interface NoticiasCarrosselProps {
  noticias: Noticia[];
}

export const NoticiasCarrossel: React.FC<NoticiasCarrosselProps> = ({ noticias }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animate, setAnimate] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Take up to 6 news items for the carousel
  const carouselNews = noticias.slice(0, 6);

  useEffect(() => {
    if (carouselNews.length <= 1 || isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused, carouselNews.length]);

  if (carouselNews.length === 0) return null;

  const handlePrev = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? carouselNews.length - 1 : prev - 1));
      setAnimate(true);
    }, 200);
  };

  const handleNext = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === carouselNews.length - 1 ? 0 : prev + 1));
      setAnimate(true);
    }, 200);
  };

  const currentNoticia = carouselNews[currentIndex];
  const imageUrl = getImageUrl(currentNoticia.imagem);
  const href = `/${currentNoticia.editoria.slug}/${currentNoticia.slug}`;

  return (
    <div
      className="relative overflow-hidden shadow-md group bg-brand-blue flex flex-col justify-end select-none flex-1 h-full min-h-[260px] border border-white/5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image with Zoom effect */}
      <div className="absolute inset-0 z-0">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={currentNoticia.titulo}
            className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out ${
              animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop&q=80';
            }}
          />
        )}
        {/* Dark vignette gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10 z-10" />
      </div>

      {/* Slide Content Overlay */}
      <Link
        href={href}
        className={`relative z-20 p-5 pt-8 pb-14 w-full flex flex-col gap-2 transition-all duration-300 ${
          animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
        }`}
      >
        <h3 className="text-sm sm:text-base font-black text-white group-hover:text-brand-yellow transition-colors leading-snug tracking-tight drop-shadow-sm line-clamp-3">
          {currentNoticia.titulo}
        </h3>
      </Link>

      {/* Progress controls (dots and buttons) at absolute bottom */}
      <div className="absolute bottom-3.5 inset-x-0 flex items-center justify-center gap-4 z-20">
        <button
          onClick={handlePrev}
          className="p-1 text-white/80 hover:text-brand-yellow hover:border-brand-yellow/30 transition-all bg-black/30 hover:bg-black/50 border border-white/10 rounded-none cursor-pointer flex items-center justify-center active:scale-95"
          aria-label="Notícia anterior"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        <div className="flex justify-center gap-1.5">
          {carouselNews.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAnimate(false);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setAnimate(true);
                }, 200);
              }}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                index === currentIndex ? 'w-5 bg-brand-yellow' : 'w-1.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-1 text-white/80 hover:text-brand-yellow hover:border-brand-yellow/30 transition-all bg-black/30 hover:bg-black/50 border border-white/10 rounded-none cursor-pointer flex items-center justify-center active:scale-95"
          aria-label="Próxima notícia"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default NoticiasCarrossel;
