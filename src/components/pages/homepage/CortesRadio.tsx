import React, { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Noticia } from '../../../types/noticia';
import CardAudio from '../../common/widgets/CardAudio';

interface CortesRadioProps {
  noticias: Noticia[];
}

export const CortesRadio: React.FC<CortesRadioProps> = ({ noticias }) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const audioCuts = noticias.filter((n) => !!n.audioUrl);

  if (audioCuts.length === 0) return null;

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -160, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 160, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-6 select-none relative group/carousel">
      {/* Header Row */}
      <div className="flex justify-between items-end mb-5 border-b border-gray-100 pb-3">
        <div>
          <h2 className="text-sm md:text-base font-black text-brand-blue uppercase tracking-tight leading-none">
            CORTES DA RÁDIO
          </h2>
        </div>

        {/* VER TODOS - uppercase text, small */}
        <Link
          href="/#cortes"
          className="text-[10px] font-black text-brand-blue hover:text-brand-yellow transition-colors uppercase tracking-wider shrink-0"
        >
          VER TODOS
        </Link>
      </div>

      {/* Slider Wrapper */}
      <div className="relative">
        {/* Left Arrow Trigger */}
        <button
          onClick={handleScrollLeft}
          className="absolute left-[-18px] top-1/2 -translate-y-1/2 z-20 bg-white text-brand-blue border border-gray-100 shadow-md rounded-full w-9 h-9 flex items-center justify-center cursor-pointer transition-all hover:scale-105 active:scale-95 opacity-0 group-hover/carousel:opacity-100 hidden md:flex"
          aria-label="Voltar cortes"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Horizontal scroll lists */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-3 pt-0.5 px-0.5 scroll-smooth snap-x scrollbar-none"
        >
          {audioCuts.map((cut, index) => {
            const mockDurations = ['1:28', '0:58', '1:12', '1:05', '1:03'];
            const duration = mockDurations[index % mockDurations.length];

            return (
              <div key={cut.id} className="snap-start shrink-0">
                <CardAudio
                  id={cut.id}
                  titulo={cut.titulo}
                  duracao={duration}
                  publicadoEm={cut.publicadoEm}
                  audioUrl={cut.audioUrl!}
                  capa={cut.imagem}
                />
              </div>
            );
          })}
        </div>

        {/* Right Arrow Trigger */}
        <button
          onClick={handleScrollRight}
          className="absolute right-[-18px] top-1/2 -translate-y-1/2 z-20 bg-white text-brand-blue border border-gray-100 shadow-md rounded-full w-9 h-9 flex items-center justify-center cursor-pointer transition-all hover:scale-105 active:scale-95 opacity-0 group-hover/carousel:opacity-100 hidden md:flex"
          aria-label="Avançar cortes"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default CortesRadio;
