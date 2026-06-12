import React from 'react';
import Link from 'next/link';
import { Podcast } from '../../../types/podcast';

interface PodcastsDestaqueProps {
  podcasts: Podcast[];
}

export const PodcastsDestaque: React.FC<PodcastsDestaqueProps> = ({ podcasts }) => {
  // Mock standard podcasts matching the screenshot exactly
  const mockPodcasts = [
    {
      id: 'p1',
      titulo: 'Sociedade Entrevista',
      capa: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&auto=format&fit=crop&q=80',
    },
    {
      id: 'p2',
      titulo: 'Economia em Foco',
      capa: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&auto=format&fit=crop&q=80',
    },
    {
      id: 'p3',
      titulo: 'Papo Esportivo',
      capa: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&auto=format&fit=crop&q=80',
    },
    {
      id: 'p4',
      titulo: 'Bahia em Pauta',
      capa: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&auto=format&fit=crop&q=80',
    }
  ];

  return (
    <section id="podcasts" className="w-full py-6 select-none border-b border-gray-100 mb-2 flex flex-col h-full">
      {/* Header Row */}
      <div className="flex justify-between items-end mb-5 border-b border-gray-100 pb-3 h-[29px]">
        <h2 className="text-sm md:text-base font-black text-brand-blue uppercase tracking-tight leading-none">
          PODCASTS
        </h2>

        <Link
          href="/#podcasts"
          className="text-[10px] font-black text-brand-blue hover:text-brand-yellow transition-colors uppercase tracking-wider shrink-0 leading-none"
        >
          VER TODOS
        </Link>
      </div>

      {/* Grid of Podcasts covers (3 columns on mobile, vertical stack on desktop) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-col gap-4 lg:gap-3.5 max-w-2xl lg:max-w-none lg:flex-1">
        {mockPodcasts.map((podcast) => (
          <Link
            key={podcast.id}
            href="/#podcasts"
            className="group flex flex-col lg:flex-row items-center lg:items-center text-center lg:text-left gap-2.5 lg:gap-3.5 w-full"
          >
            {/* Square cover image */}
            <div className="aspect-square w-full max-w-[120px] sm:max-w-[150px] lg:w-14 lg:h-14 relative rounded-xl overflow-hidden shadow-xs bg-gray-50 border border-gray-100 shrink-0">
              <img
                src={podcast.capa}
                alt={podcast.titulo}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&auto=format&fit=crop&q=80'; }}
              />
            </div>
            
            {/* Title (centered on mobile, left-aligned on desktop) */}
            <h3 className="font-extrabold text-[10px] sm:text-[12px] lg:text-[13px] text-brand-blue group-hover:text-brand-yellow transition-colors leading-tight max-w-[120px] sm:max-w-[140px] lg:max-w-none">
              {podcast.titulo}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PodcastsDestaque;
