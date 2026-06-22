import React from 'react';
import Link from 'next/link';
import { Noticia } from '../../../types/noticia';
import { getImageUrl } from '../../../lib/directus';
import TempoPublicacao from './TempoPublicacao';

interface EspeciaisSidebarProps {
  noticias: Noticia[];
}

export const EspeciaisSidebar: React.FC<EspeciaisSidebarProps> = ({ noticias }) => {
  // Filter news for São João 2026
  const saoJoaoNews = noticias
    .filter((item) => {
      const title = item.titulo.toLowerCase();
      const content = (item.conteudo || '').toLowerCase();
      return (
        title.includes('são joão') ||
        title.includes('forró') ||
        title.includes('arraiá') ||
        content.includes('são joão') ||
        content.includes('forró')
      );
    })
    .slice(0, 4);

  // Filter news for Eleições 2026
  const eleicoesNews = noticias
    .filter((item) => {
      const title = item.titulo.toLowerCase();
      const content = (item.conteudo || '').toLowerCase();
      return (
        title.includes('eleiç') ||
        title.includes('candidat') ||
        title.includes('voto') ||
        title.includes('senado') ||
        title.includes('câmara') ||
        title.includes('prefeito') ||
        content.includes('eleiç') ||
        content.includes('candidat')
      );
    })
    .slice(0, 4);

  const getSpecialTag = (noticia: Noticia, categoryType: 'sao-joao' | 'eleicoes') => {
    if (categoryType === 'sao-joao') {
      return { nome: 'SÃO JOÃO 2026', cor: '#E25C05' }; // Orange
    }
    return { nome: 'ELEIÇÕES 2026', cor: '#0D3E9B' }; // Deep Blue
  };

  const renderNewsList = (newsList: Noticia[], type: 'sao-joao' | 'eleicoes') => {
    return (
      <div className="flex flex-col gap-3.5">
        {newsList.map((item) => {
          const imageUrl = getImageUrl(item.imagem);
          const href = `/${item.editoria.slug}/${item.slug}`;
          const tag = getSpecialTag(item, type);

          return (
            <Link
              key={item.id}
              href={href}
              className="group flex gap-3 items-center hover:bg-gray-50/50 p-1.5 transition-all duration-200 border-b border-gray-100/50 pb-3.5 last:border-b-0 last:pb-0"
            >
              {imageUrl && (
                <div className="aspect-[16/10] w-20 relative overflow-hidden shrink-0 bg-gray-50 shadow-3xs">
                  <img
                    src={imageUrl}
                    alt={item.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&auto=format&fit=crop&q=80';
                    }}
                  />
                </div>
              )}
              <div className="flex flex-col gap-1 min-w-0 flex-1">
                <div className="flex gap-2 items-center flex-wrap">
                  <span
                    className="inline-block text-3xs font-extrabold tracking-wide uppercase px-1.5 py-0.5 rounded-sm text-white shrink-0"
                    style={{ backgroundColor: tag.cor }}
                  >
                    {tag.nome}
                  </span>
                  <TempoPublicacao date={item.publicadoEm} className="text-xs font-semibold text-brand-gray" />
                </div>
                <h3 className="font-extrabold text-xs sm:text-sm text-brand-blue group-hover:text-brand-yellow transition-colors leading-snug line-clamp-2">
                  {item.titulo}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    );
  };

  if (saoJoaoNews.length === 0 && eleicoesNews.length === 0) return null;

  return (
    <div className="w-full select-none text-left flex flex-col gap-8">
      {/* 1. São João 2026 Section */}
      {saoJoaoNews.length > 0 && (
        <div className="flex flex-col">
          <div className="mb-5 border-b border-gray-100 pb-3">
            <h2 className="text-sm md:text-base font-black text-brand-blue uppercase tracking-tight leading-none">
              SÃO JOÃO 2026
            </h2>
          </div>
          {renderNewsList(saoJoaoNews, 'sao-joao')}
        </div>
      )}

      {/* 2. Eleições 2026 Section */}
      {eleicoesNews.length > 0 && (
        <div className="flex flex-col">
          <div className="mb-5 border-b border-gray-100 pb-3">
            <h2 className="text-sm md:text-base font-black text-brand-blue uppercase tracking-tight leading-none">
              ELEIÇÕES 2026
            </h2>
          </div>
          {renderNewsList(eleicoesNews, 'eleicoes')}
        </div>
      )}
    </div>
  );
};

export default EspeciaisSidebar;
