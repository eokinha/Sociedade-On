import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Radio, Play, ArrowLeft, Heart, Send, Eye, Music, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface VideoCut {
  id: string;
  titulo: string;
  programa: string;
  youtubeId: string;
  duracao: string;
  data: string;
}

export default function CortesPage() {
  // Reels States
  const [activeModalCutId, setActiveModalCutId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [likes, setLikes] = useState<Record<string, { count: number; active: boolean }>>({
    cut1: { count: 342, active: false },
    cut2: { count: 189, active: false },
    cut3: { count: 95, active: false },
    cut4: { count: 512, active: false },
    cut5: { count: 218, active: false },
    cut6: { count: 167, active: false },
  });
  const [views, setViews] = useState<Record<string, string>>({
    cut1: '12.4K',
    cut2: '8.1K',
    cut3: '4.5K',
    cut4: '22.8K',
    cut5: '9.3K',
    cut6: '6.2K',
  });

  const videoCuts: VideoCut[] = [
    {
      id: 'cut1',
      titulo: 'Adelson Carvalho cobra segurança nos ônibus após assaltos em Salvador',
      programa: 'Sociedade Urgente',
      youtubeId: 'dQw4w9WgXcQ',
      duracao: '05:12',
      data: 'Hoje'
    },
    {
      id: 'cut2',
      titulo: 'Patrícia Almeida entrevista Bell Marques sobre os bastidores do Carnaval',
      programa: 'Manhã Sociedade',
      youtubeId: 'dQw4w9WgXcQ',
      duracao: '12:45',
      data: 'Ontem'
    },
    {
      id: 'cut3',
      titulo: 'Debate acirrado sobre mobilidade urbana e as novas linhas do BRT',
      programa: 'Sociedade Debate',
      youtubeId: 'dQw4w9WgXcQ',
      duracao: '08:30',
      data: 'Há 2 dias'
    },
    {
      id: 'cut4',
      titulo: 'Comentários sobre a vitória do Bahia no clássico Ba-Vi de ontem',
      programa: 'Sociedade Esportes',
      youtubeId: 'dQw4w9WgXcQ',
      duracao: '10:15',
      data: 'Há 3 dias'
    },
    {
      id: 'cut5',
      titulo: 'Roberto Mendes faz balanço do comércio em Salvador após festas juninas',
      programa: 'Alvorada Sociedade',
      youtubeId: 'dQw4w9WgXcQ',
      duracao: '06:40',
      data: 'Há 4 dias'
    },
    {
      id: 'cut6',
      titulo: 'Entrevista especial com a nova atração do Festival de Inverno',
      programa: 'Entretenimento',
      youtubeId: 'dQw4w9WgXcQ',
      duracao: '15:20',
      data: 'Há 5 dias'
    }
  ];

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLikes(prev => {
      const item = prev[id] || { count: 0, active: false };
      return {
        ...prev,
        [id]: {
          count: item.active ? item.count - 1 : item.count + 1,
          active: !item.active
        }
      };
    });
  };

  const handleShare = (cut: VideoCut, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const shareUrl = `${window.location.origin}/cortes?id=${cut.id}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopiedId(cut.id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const getProgramAvatar = (programa: string) => {
    const initials = programa.split(' ').map(n => n[0]).join('').substring(0, 2);
    const colors: Record<string, string> = {
      'Sociedade Urgente': 'bg-brand-red',
      'Manhã Sociedade': 'bg-orange-500',
      'Sociedade Debate': 'bg-blue-600',
      'Sociedade Esportes': 'bg-emerald-600',
      'Alvorada Sociedade': 'bg-amber-500',
      'Entretenimento': 'bg-purple-600',
    };
    const colorClass = colors[programa] || 'bg-brand-blue';
    return (
      <div className={`w-6 h-6 rounded-full ${colorClass} flex items-center justify-center text-[9px] font-black text-white border border-white/20 uppercase shrink-0`}>
        {initials}
      </div>
    );
  };

  const activeModalCutIndex = videoCuts.findIndex(c => c.id === activeModalCutId);
  const modalCut = activeModalCutIndex !== -1 ? videoCuts[activeModalCutIndex] : null;

  const navigateModal = (direction: 'prev' | 'next') => {
    if (activeModalCutIndex === -1) return;
    if (direction === 'prev' && activeModalCutIndex > 0) {
      setActiveModalCutId(videoCuts[activeModalCutIndex - 1].id);
    } else if (direction === 'next' && activeModalCutIndex < videoCuts.length - 1) {
      setActiveModalCutId(videoCuts[activeModalCutIndex + 1].id);
    }
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeModalCutId) return;
      if (e.key === 'Escape') setActiveModalCutId(null);
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') navigateModal('prev');
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') navigateModal('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalCutId, activeModalCutIndex]);

  // Support direct linking to cuts (optional visual focus on load)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const cutId = params.get('id');
      if (cutId && videoCuts.some(c => c.id === cutId)) {
        setActiveModalCutId(cutId);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>Cortes da Rádio | Sociedade ON</title>
        <meta name="description" content="Assista aos melhores momentos, debates e entrevistas em vídeo dos programas da Rádio Sociedade." key="description" />
      </Head>

      <div className="flex flex-col gap-6 select-none">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-brand-gray">
          <Link href="/" className="hover:text-brand-yellow font-bold flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" />
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-blue font-black">Cortes da Rádio</span>
        </div>

        {/* Header */}
        <div className="border-b border-gray-200 pb-4">
          <span className="inline-block w-8 h-1 mb-2 rounded bg-brand-red animate-pulse" />
          <h1 className="text-3xl font-black text-brand-blue uppercase tracking-tight">
            CORTES DA RÁDIO
          </h1>
          <p className="text-xs text-brand-gray mt-1 uppercase tracking-wider font-semibold">
            Melhores momentos e entrevistas dos programas no formato Instagram Reels
          </p>
        </div>

        {/* Instagram Reels Grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {videoCuts.map((cut) => {
            const likedState = likes[cut.id] || { count: 0, active: false };
            const viewCount = views[cut.id] || '0';
            const isCopied = copiedId === cut.id;

            return (
              <div 
                key={cut.id} 
                onClick={() => setActiveModalCutId(cut.id)}
                className="group relative aspect-[9/16] w-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-black cursor-pointer border border-white/5"
              >
                {/* Cover Thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${cut.youtubeId}/hqdefault.jpg`}
                  alt={cut.titulo}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-85"
                  loading="lazy"
                />

                {/* Dark Overlay Gradient (Reels Style) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/10 z-10" />

                {/* Central Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-5.5 h-5.5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Floating Instagram Action Buttons (Right-aligned) */}
                <div className="absolute right-2 bottom-12 flex flex-col gap-3 items-center z-20">
                  {/* Heart Button */}
                  <button
                    onClick={(e) => handleLike(cut.id, e)}
                    className="flex flex-col items-center gap-0.5 group/btn"
                    aria-label="Curtir corte"
                  >
                    <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center border border-white/10 hover:bg-black/60 transition-colors transform active:scale-125 duration-200">
                      <Heart 
                        className={`w-4 h-4 transition-colors ${
                          likedState.active 
                            ? 'fill-brand-red text-brand-red' 
                            : 'text-white group-hover/btn:text-brand-red/80'
                        }`} 
                      />
                    </div>
                    <span className="text-[8px] font-bold text-white tracking-tight text-shadow-sm">
                      {likedState.count}
                    </span>
                  </button>

                  {/* Share Button */}
                  <div className="relative flex flex-col items-center gap-0.5 group/btn">
                    <button
                      onClick={(e) => handleShare(cut, e)}
                      className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center border border-white/10 hover:bg-black/60 transition-colors transform active:scale-110 duration-200"
                      aria-label="Compartilhar corte"
                    >
                      <Send className="w-4 h-4 text-white -rotate-12 translate-x-px" />
                    </button>
                    <span className="text-[8px] font-bold text-white tracking-tight text-shadow-sm">
                      Enviar
                    </span>
                    {/* Share Tooltip */}
                    {isCopied && (
                      <div className="absolute bottom-10 right-0 bg-brand-blue text-white text-[9px] font-black px-2 py-1 rounded shadow-md whitespace-nowrap animate-float-in">
                        Copiado!
                      </div>
                    )}
                  </div>

                  {/* Views Info */}
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center border border-white/10">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[8px] font-bold text-white tracking-tight text-shadow-sm">
                      {viewCount}
                    </span>
                  </div>
                </div>

                {/* Bottom Details (Instagram Style) */}
                <div className="absolute bottom-2 left-2 right-12 flex flex-col gap-1.5 z-20 pointer-events-none">
                  {/* Profile Header */}
                  <div className="flex items-center gap-1">
                    {getProgramAvatar(cut.programa)}
                    <span className="text-[9px] font-bold text-white tracking-wide truncate max-w-[50px] sm:max-w-[80px]">
                      @{cut.programa.toLowerCase().replace(/\s+/g, '')}
                    </span>
                    <span className="text-[8px] text-white/50">•</span>
                    <span className="text-[8px] text-white/70 font-semibold">{cut.data}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-extrabold text-[10px] sm:text-xs text-white leading-tight line-clamp-2 pr-1 text-shadow">
                    {cut.titulo}
                  </h3>

                  {/* Music Loop */}
                  <div className="flex items-center gap-0.5 text-[8px] text-white/60 overflow-hidden w-full mt-0.5">
                    <Music className="w-2.5 h-2.5 shrink-0" />
                    <div className="overflow-hidden relative w-full h-3">
                      <div className="animate-marquee absolute whitespace-nowrap flex gap-4">
                        <span>Som Original - {cut.programa}</span>
                        <span>Som Original - {cut.programa}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Immersive Vertical Reels Modal */}
      {modalCut && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-xs animate-fade-in"
          onClick={() => setActiveModalCutId(null)}
        >
          {/* Main Reels Video Container */}
          <div 
            className="relative aspect-[9/16] w-full max-w-[340px] sm:max-w-[380px] bg-black rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Embed Video */}
            <div className="w-full h-full flex items-center justify-center relative bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${modalCut.youtubeId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3`}
                title={modalCut.titulo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full aspect-video scale-110 sm:scale-100"
              />
            </div>

            {/* Modal Bottom Overlay Details (Instagram Style) */}
            <div className="absolute bottom-4 left-4 right-14 flex flex-col gap-2 z-20 pointer-events-none text-white">
              <div className="flex items-center gap-2">
                {getProgramAvatar(modalCut.programa)}
                <span className="text-xs font-black">
                  @{modalCut.programa.toLowerCase().replace(/\s+/g, '')}
                </span>
                <span className="text-[10px] text-white/50">•</span>
                <span className="text-[10px] text-white/70 font-semibold">{modalCut.data}</span>
              </div>
              <h4 className="font-bold text-xs sm:text-sm leading-tight line-clamp-3 text-shadow-lg">
                {modalCut.titulo}
              </h4>
              <div className="flex items-center gap-1.5 text-[10px] text-white/60 overflow-hidden w-full mt-1">
                <Music className="w-3.5 h-3.5 shrink-0" />
                <div className="overflow-hidden relative w-full h-4">
                  <div className="animate-marquee absolute whitespace-nowrap flex gap-4">
                    <span>Som Original - {modalCut.programa}</span>
                    <span>Som Original - {modalCut.programa}</span>
                    <span>Som Original - {modalCut.programa}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Right Bar Inside Modal */}
            <div className="absolute right-3 bottom-20 flex flex-col gap-4 items-center z-20">
              <button
                onClick={(e) => handleLike(modalCut.id, e)}
                className="flex flex-col items-center gap-0.5 group/btn"
              >
                <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-xs flex items-center justify-center border border-white/10 hover:bg-black/80 transition-colors transform active:scale-125 duration-200">
                  <Heart 
                    className={`w-5 h-5 transition-colors ${
                      likes[modalCut.id]?.active 
                        ? 'fill-brand-red text-brand-red' 
                        : 'text-white group-hover/btn:text-brand-red/80'
                    }`} 
                  />
                </div>
                <span className="text-[10px] font-bold text-white text-shadow-md">
                  {likes[modalCut.id]?.count || 0}
                </span>
              </button>

              <div className="relative flex flex-col items-center gap-0.5">
                <button
                  onClick={(e) => handleShare(modalCut, e)}
                  className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-xs flex items-center justify-center border border-white/10 hover:bg-black/80 transition-colors"
                >
                  <Send className="w-5 h-5 text-white -rotate-12 translate-x-px" />
                </button>
                <span className="text-[10px] font-bold text-white text-shadow-md">
                  Enviar
                </span>
                {copiedId === modalCut.id && (
                  <div className="absolute bottom-12 right-0 bg-brand-blue text-white text-[9px] font-black px-2 py-1 rounded shadow-md whitespace-nowrap animate-float-in">
                    Copiado!
                  </div>
                )}
              </div>

              <div className="flex flex-col items-center gap-0.5">
                <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-xs flex items-center justify-center border border-white/10">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <span className="text-[10px] font-bold text-white text-shadow-md">
                  {views[modalCut.id] || '0'}
                </span>
              </div>
            </div>

            {/* Close Modal Button */}
            <button
              onClick={() => setActiveModalCutId(null)}
              className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/60 hover:bg-black/80 border border-white/15 text-white transition-colors cursor-pointer"
              aria-label="Fechar player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Carousel Nav Controls (Desktop/Sidebar Sides) */}
          <div className="absolute left-4 sm:left-10 md:left-24 lg:left-32 top-1/2 -translate-y-1/2 hidden md:block">
            <button
              onClick={(e) => { e.stopPropagation(); navigateModal('prev'); }}
              disabled={activeModalCutIndex === 0}
              className={`p-3 rounded-full border bg-black/60 backdrop-blur-md transition-all ${
                activeModalCutIndex > 0
                  ? 'text-white border-white/20 hover:bg-white hover:text-brand-blue cursor-pointer'
                  : 'text-white/20 border-white/5 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute right-4 sm:right-10 md:right-24 lg:right-32 top-1/2 -translate-y-1/2 hidden md:block">
            <button
              onClick={(e) => { e.stopPropagation(); navigateModal('next'); }}
              disabled={activeModalCutIndex === videoCuts.length - 1}
              className={`p-3 rounded-full border bg-black/60 backdrop-blur-md transition-all ${
                activeModalCutIndex < videoCuts.length - 1
                  ? 'text-white border-white/20 hover:bg-white hover:text-brand-blue cursor-pointer'
                  : 'text-white/20 border-white/5 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
