import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Noticia } from '../../../types/noticia';
import { getImageUrl } from '../../../lib/directus';

interface HeroDestaqueProps {
  noticias: Noticia[];
}

export const HeroDestaque: React.FC<HeroDestaqueProps> = ({ noticias }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animate, setAnimate] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!noticias || noticias.length <= 1 || isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      handleNext();
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused, noticias]);

  if (!noticias || noticias.length === 0) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAnimate(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? noticias.length - 1 : prev - 1));
      setAnimate(true);
    }, 200);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setAnimate(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === noticias.length - 1 ? 0 : prev + 1));
      setAnimate(true);
    }, 200);
  };

  const currentNoticia = noticias[currentIndex];
  const imageUrl = getImageUrl(currentNoticia.imagem);
  const href = `/${currentNoticia.editoria.slug}/${currentNoticia.slug}`;

  return (
    <div
      className="relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-[400px] md:h-[480px] lg:h-full group bg-brand-blue flex flex-col justify-end select-none w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image with Zoom effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt={currentNoticia.titulo}
          className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out ${
            animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&auto=format&fit=crop&q=80';
          }}
        />
        {/* Dark vignette gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10" />
      </div>

      {/* Navigation Arrows */}
      {noticias.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/45 hover:bg-brand-yellow hover:text-black text-white transition-all cursor-pointer opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 duration-300"
            aria-label="Notícia anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/45 hover:bg-brand-yellow hover:text-black text-white transition-all cursor-pointer opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 duration-300"
            aria-label="Próxima notícia"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Bottom Section: Text Overlays & Controls */}
      <div
        className={`p-6 md:p-8 pb-14 relative z-10 w-full flex flex-col gap-3.5 transition-all duration-300 ${
          animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <Link href={href} className="group/title">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-black text-white group-hover/title:text-brand-yellow transition-colors leading-tight tracking-tight drop-shadow-sm">
            {currentNoticia.titulo}
          </h1>
        </Link>
      </div>

      {/* Indicators */}
      {noticias.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {noticias.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                setAnimate(false);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setAnimate(true);
                }, 200);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex ? 'w-8 bg-brand-yellow' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Ir para notícia ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroDestaque;
