import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { Radio, Clock, ChevronRight, ChevronLeft } from 'lucide-react';
import { Programa } from '../../../lib/directus';

interface ProgramacaoProps {
  programas: Programa[];
}

export const Programacao: React.FC<ProgramacaoProps> = ({ programas }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      // Use small threshold for floating point rounding issues
      setCanScrollLeft(scrollLeft > 2);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScroll();
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [programas]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      // Scroll by approximately 75% of the visible container width for a smooth transition
      const scrollAmount = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full py-8 select-none">
      {/* Header Row */}
      <div className="flex justify-between items-end mb-6 border-b border-gray-100 pb-3">
        <div className="flex items-center gap-2.5">
          <Radio className="w-4 h-4 text-brand-red animate-pulse" />
          <h2 className="text-sm md:text-base font-black text-brand-blue uppercase tracking-tight leading-none">
            PROGRAMAÇÃO & APRESENTADORES
          </h2>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Carousel Controls */}
          {programas.length > 0 && (
            <div className="flex items-center gap-1.5 mr-2">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Programa anterior"
                className={`p-1.5 rounded-full border border-gray-200 transition-all duration-200 ${
                  canScrollLeft 
                    ? 'text-brand-blue hover:bg-brand-blue hover:text-white hover:border-brand-blue cursor-pointer' 
                    : 'text-gray-300 border-gray-100 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Próximo programa"
                className={`p-1.5 rounded-full border border-gray-200 transition-all duration-200 ${
                  canScrollRight 
                    ? 'text-brand-blue hover:bg-brand-blue hover:text-white hover:border-brand-blue cursor-pointer' 
                    : 'text-gray-300 border-gray-100 cursor-not-allowed'
                }`}
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
          
          <Link
            href="/programacao"
            className="text-xs font-black text-brand-blue hover:text-brand-yellow transition-colors uppercase tracking-wider shrink-0"
          >
            VER COMPLETA
          </Link>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 no-scrollbar"
      >
        {programas.map((programa) => (
          <div
            key={programa.id}
            className="group bg-white border border-gray-100 hover:border-brand-red/10 hover:shadow-lg transition-all duration-300 overflow-hidden w-[260px] sm:w-[290px] shrink-0 snap-start"
          >
            {/* Top: Presenter photo + info overlay */}
            <div className="relative h-36 overflow-hidden bg-brand-blue">
              <img
                src={programa.foto}
                alt={programa.apresentador}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Time badge */}
              <div className="absolute top-3 right-3 bg-brand-red text-white text-2xs font-black uppercase px-2 py-1 rounded flex items-center gap-1">
                <Clock className="w-2.5 h-2.5" />
                {programa.horario}
              </div>

              {/* Presenter name overlay */}
              <div className="absolute bottom-3 left-4 right-4">
                <h3 className="text-white font-black text-sm sm:text-base leading-tight drop-shadow-sm line-clamp-1">
                  {programa.nome}
                </h3>
                <p className="text-white/80 text-xs font-semibold mt-0.5 line-clamp-1">
                  com {programa.apresentador}
                </p>
              </div>
            </div>

            {/* Bottom: Description + schedule */}
            <div className="p-3.5 flex flex-col gap-2">
              <p className="text-xs text-brand-gray leading-relaxed line-clamp-2 h-8 sm:h-9">
                {programa.descricao}
              </p>
              <div className="flex justify-between items-center pt-1 border-t border-gray-50">
                <span className="text-2xs font-bold text-brand-blue/60 uppercase tracking-wide">
                  {programa.dias}
                </span>
                <Link
                  href="/programacao"
                  className="flex items-center gap-0.5 text-2xs font-black text-brand-blue hover:text-brand-yellow transition-colors uppercase tracking-wider"
                >
                  SAIBA MAIS
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programacao;

