import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { ArrowLeft, Play, Pause, Calendar, Share2, Volume2, Settings } from 'lucide-react';
import { getItems, getItem } from '@/lib/directus';
import { Noticia } from '@/types/noticia';
import { Editoria } from '@/types/editoria';
import TagEditoria from '@/components/common/widgets/TagEditoria';
import TempoPublicacao from '@/components/common/widgets/TempoPublicacao';
import CardNoticia from '@/components/common/widgets/CardNoticia';
import ButtonPrimary from '@/components/common/buttons/ButtonPrimary';
import { usePlayer } from '@/hooks/usePlayer';
import { getImageUrl } from '@/lib/directus';
import BannerAd from '@/components/common/widgets/BannerAd';
import Paginacao from '@/components/common/widgets/Paginacao';

interface DynamicPageProps {
  type: 'category' | 'article';
  noticia?: Noticia | null;
  editoria?: Editoria | null;
  noticias?: Noticia[];
  relacionadas?: Noticia[];
  maisLidas?: Noticia[];
  ultimasNoticias?: Noticia[];
  currentUrl: string;
}

export default function DynamicPage({
  type,
  noticia,
  editoria,
  noticias = [],
  relacionadas = [],
  maisLidas = [],
  ultimasNoticias = [],
  currentUrl
}: DynamicPageProps) {
  const { playAudio, pauseAudio, isPlaying, currentAudioUrl } = usePlayer();
  const [currentPage, setCurrentPage] = useState(1);

  if (type === 'category' && editoria) {
    return (
      <>
        <Head>
          <title>{editoria.nome} | Sociedade ON</title>
          <meta name="description" content={`Acompanhe as últimas notícias sobre ${editoria.nome} no portal Sociedade ON.`} key="description" />
          <meta property="og:title" content={`${editoria.nome} | Sociedade ON`} key="og:title" />
          <meta property="og:description" content={`Acompanhe as últimas notícias sobre ${editoria.nome} no portal Sociedade ON.`} key="og:description" />
          <meta property="og:url" content={currentUrl} key="og:url" />
          <meta property="og:type" content="website" key="og:type" />
        </Head>

        <div>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-brand-gray mb-4">
            <Link href="/" className="hover:text-brand-yellow font-bold">Home</Link>
            <span>/</span>
            <span className="text-brand-blue font-black">{editoria.nome}</span>
          </div>

          {/* Banner 728x90 below Header */}
          <BannerAd formato="horizontal-lg" className="mb-6" />

          {/* Category Header */}
          <div className="border-b border-gray-200 pb-4 mb-8">
            <span
              className="inline-block w-8 h-1 mb-2 rounded"
              style={{ backgroundColor: editoria.cor || '#0D1B4B' }}
            />
            <h1 className="text-3xl font-black text-brand-blue uppercase tracking-tight">
              {editoria.nome}
            </h1>
            <p className="text-xs text-brand-gray mt-1 uppercase tracking-wider font-semibold">
              Cobertura completa de acontecimentos em {editoria.nome}
            </p>
          </div>

          {/* News List */}
          {(() => {
            const itemsPerPage = 15;
            const totalPages = Math.ceil(noticias.length / itemsPerPage);
            const startIndex = (currentPage - 1) * itemsPerPage;
            const paginatedNoticias = noticias.slice(startIndex, startIndex + itemsPerPage);

            const handlePageChange = (page: number) => {
              setCurrentPage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            };

            return paginatedNoticias.length > 0 ? (
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedNoticias.map((item) => (
                    <CardNoticia key={item.id} noticia={item} layout="vertical" showExcerpt={true} />
                  ))}
                </div>
                <Paginacao
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            ) : (
              <div className="bg-white p-12 text-center border border-gray-100 shadow-xs">
                <p className="text-brand-gray font-bold">Nenhuma notícia publicada nesta editoria ainda.</p>
                <Link href="/" className="mt-4 inline-block text-xs font-black text-brand-blue hover:text-brand-yellow uppercase tracking-wider">
                  Voltar para a Home
                </Link>
              </div>
            );
          })()}
        </div>
      </>
    );
  }

  if (type === 'article' && noticia) {
    const imageUrl = getImageUrl(noticia.imagem);
    const isCurrentAudio = currentAudioUrl === noticia.audioUrl;
    const isCurrentlyPlaying = isCurrentAudio && isPlaying;

    const handleAudioToggle = () => {
      if (!noticia.audioUrl) return;
      if (isCurrentlyPlaying) {
        pauseAudio();
      } else {
        playAudio(noticia.audioUrl, noticia.titulo, false);
      }
    };

    return (
      <>
        <Head>
          <title>{noticia.titulo} | Sociedade ON</title>
          <meta name="description" content={noticia.subtitulo} key="description" />
          <meta property="og:title" content={noticia.titulo} key="og:title" />
          <meta property="og:description" content={noticia.subtitulo} key="og:description" />
          {imageUrl && <meta property="og:image" content={imageUrl} key="og:image" />}
          <meta property="og:url" content={currentUrl} key="og:url" />
          <meta property="og:type" content="article" key="og:type" />
          {/* Twitter elements */}
          <meta name="twitter:title" content={noticia.titulo} key="twitter:title" />
          <meta name="twitter:description" content={noticia.subtitulo} key="twitter:description" />
          {imageUrl && <meta name="twitter:image" content={imageUrl} key="twitter:image" />}
        </Head>

        {/* Banner 728x90 below Header */}
        <BannerAd formato="horizontal-lg" className="mb-6" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content Column */}
          <article className="lg:col-span-8 flex flex-col gap-6">
            {/* Back link & breadcrumb */}
            <div className="flex justify-start items-center gap-6 text-xs text-brand-gray mb-2">
              <Link href="/" className="flex items-center gap-1.5 hover:text-brand-yellow font-extrabold transition-colors uppercase tracking-wider">
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar</span>
              </Link>
              <div className="flex items-center gap-2">
                <Link href="/" className="hover:text-brand-yellow font-bold">Home</Link>
                <span>/</span>
                <Link href={`/${noticia.editoria.slug}`} className="hover:text-brand-yellow font-bold">{noticia.editoria.nome}</Link>
                <span>/</span>
                <span className="text-brand-blue font-black truncate max-w-[120px]">{noticia.titulo}</span>
              </div>
            </div>

            {/* Heading details */}
            <div className="flex flex-col gap-4 mb-2">
              <div className="flex items-center gap-3">
                <TagEditoria editoria={noticia.editoria} />
                <TempoPublicacao date={noticia.publicadoEm} />
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-brand-blue leading-tight tracking-tight">
                {noticia.titulo}
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-brand-gray leading-relaxed font-normal border-l-2 border-brand-yellow pl-4">
                {noticia.subtitulo}
              </p>

              {/* Social engagement & Audio Player Section */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-b border-gray-100 py-4 uppercase tracking-wider">
                {/* Column 1: Date & Share */}
                <div className="flex flex-col gap-2 shrink-0">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-brand-gray">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Publicado {new Date(noticia.publicadoEm).toLocaleDateString('pt-BR')}</span>
                  </span>

                  <button
                    onClick={() => navigator.clipboard.writeText(window.location.href).then(() => alert('Link copiado!'))}
                    className="flex items-center gap-1.5 text-xs font-black text-brand-gray hover:text-brand-yellow transition-colors cursor-pointer w-fit text-left"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Compartilhar</span>
                  </button>
                </div>

                {/* Column 2: Audio Player (if exists) */}
                {noticia.audioUrl && (
                  <div className="flex items-center gap-3 px-3.5 py-1.5 bg-brand-blue text-white rounded-full select-none max-w-fit shadow-2xs h-10">
                    {/* Play/Pause Button */}
                    <button
                      onClick={handleAudioToggle}
                      className="flex items-center gap-2 text-white hover:text-brand-yellow font-extrabold text-xs transition-colors cursor-pointer select-none shrink-0"
                      aria-label={isCurrentlyPlaying ? 'Pausar áudio' : 'Ouvir notícia'}
                    >
                      {isCurrentlyPlaying ? (
                        <>
                          <Pause className="w-3.5 h-3.5 fill-white text-white" />
                          <span className="normal-case">Pausar</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 text-white fill-white/10" />
                          <span className="normal-case">Ouvir notícia</span>
                        </>
                      )}
                    </button>

                    {/* Settings Icon */}
                    <button 
                      className="text-white/80 hover:text-brand-yellow transition-colors cursor-pointer shrink-0"
                      title="Configurações de áudio"
                      aria-label="Configurações"
                    >
                      <Settings className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Main Visual Image */}
            {imageUrl && (
              <div className="aspect-[21/10] w-full relative overflow-hidden shadow-xs bg-gray-50">
                <img
                  src={imageUrl}
                  alt={noticia.titulo}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Article Body Content */}
            <div className="prose prose-lg max-w-none text-brand-blue font-serif leading-relaxed text-sm sm:text-base space-y-5">
              {noticia.conteudo ? (
                noticia.conteudo.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-800 antialiased font-sans">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-brand-gray">Nenhum detalhe adicional disponível para esta matéria.</p>
              )}
            </div>

            {/* Related News Section */}
            {relacionadas.length > 0 && (
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-black text-brand-blue uppercase tracking-wider mb-6">
                  Notícias Relacionadas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relacionadas.map((item) => (
                    <CardNoticia key={item.id} noticia={item} layout="vertical" showExcerpt={false} />
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar Column */}
          <aside className="lg:col-span-4 lg:border-l lg:border-gray-200 lg:pl-8 flex flex-col gap-8 self-stretch">
            {/* Últimas Notícias widget */}
            {ultimasNoticias.length > 0 && (
              <div className="flex flex-col gap-4">
                <div className="border-b border-gray-200 pb-2">
                  <h3 className="text-xs font-black text-brand-blue uppercase tracking-wider">
                    Últimas Notícias
                  </h3>
                </div>
                <div className="flex flex-col gap-4">
                  {ultimasNoticias.map((item) => {
                    const latestImageUrl = getImageUrl(item.imagem);
                    return (
                      <Link
                        key={item.id}
                        href={`/${item.editoria.slug}/${item.slug}`}
                        className="group flex gap-3 items-start text-left hover:opacity-95 transition-opacity"
                      >
                        {latestImageUrl && (
                          <div className="w-16 h-12 relative overflow-hidden shrink-0 bg-gray-50 border border-gray-100">
                            <img
                              src={latestImageUrl}
                              alt={item.titulo}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm text-brand-blue group-hover:text-brand-yellow transition-colors leading-tight line-clamp-2">
                            {item.titulo}
                          </h4>
                          <div className="flex items-center gap-1.5 mt-1">
                            <span className="text-2xs font-black text-brand-yellow uppercase tracking-wider">
                              {item.editoria.nome}
                            </span>
                            <span className="text-2xs font-bold text-brand-gray">
                              <TempoPublicacao date={item.publicadoEm} />
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Mais Lidas widget */}
            {maisLidas.length > 0 && (
              <div className="flex flex-col gap-4">
                <div className="border-b border-gray-200 pb-2">
                  <h3 className="text-xs font-black text-brand-blue uppercase tracking-wider">
                    Mais Lidas
                  </h3>
                </div>
                <div className="flex flex-col gap-4">
                  {maisLidas.map((item, index) => (
                    <Link
                      key={item.id}
                      href={`/${item.editoria.slug}/${item.slug}`}
                      className="group flex gap-3 items-center text-left"
                    >
                      <span className="w-6 h-6 bg-brand-blue text-white text-2xs font-black rounded-xs flex items-center justify-center shrink-0 shadow-sm font-mono">
                        {index + 1}
                      </span>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <h4 className="font-extrabold text-sm text-brand-blue group-hover:text-brand-yellow transition-colors leading-snug line-clamp-2">
                          {item.titulo}
                        </h4>
                        <span className="text-2xs text-brand-gray font-bold uppercase tracking-wider mt-0.5">
                          {item.editoria.nome}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Banner 350x250 below all sidebar items */}
            <BannerAd formato="retangulo-lg" className="mt-4" />
          </aside>
        </div>
      </>
    );
  }

  return (
    <div className="py-12 text-center">
      <h1 className="text-2xl font-black text-brand-blue mb-4">404 - Conteúdo Não Encontrado</h1>
      <Link href="/" className="text-xs font-black text-brand-yellow uppercase tracking-wider">
        Ir para o portal
      </Link>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params || {};
  const host = context.req.headers.host || 'sociedadeon.com.br';
  const protocol = context.req.headers['x-forwarded-proto'] || 'https';
  const currentUrl = `${protocol}://${host}${context.resolvedUrl}`;

  if (!slug || !Array.isArray(slug)) {
    return { notFound: true };
  }

  // Case 1: Just editoria slug, e.g. /salvador
  if (slug.length === 1) {
    const categorySlug = slug[0];
    const editoria = await getItem<Editoria>('editorias', categorySlug);

    if (!editoria) {
      return { notFound: true };
    }

    const noticias = await getItems<Noticia>('noticias', {
      filter: {
        editoria: {
          slug: {
            _eq: categorySlug,
          },
        },
      },
    });

    return {
      props: {
        type: 'category',
        editoria,
        noticias,
        currentUrl,
      },
    };
  }

  // Case 2: Editoria + news title slug, e.g. /salvador/revitalizacao-pelourinho
  if (slug.length === 2) {
    const articleSlug = slug[1];
    const noticia = await getItem<Noticia>('noticias', articleSlug);

    if (!noticia) {
      return { notFound: true };
    }

    // Fetch up to 4 articles from the same category to filter out the current one
    const relatedNoticiasRaw = await getItems<Noticia>('noticias', {
      filter: {
        editoria: {
          slug: {
            _eq: noticia.editoria.slug,
          },
        },
      },
      limit: 4,
    });

    let relacionadas = relatedNoticiasRaw
      .filter((item) => item.id !== noticia.id)
      .slice(0, 3);

    // Fallback: if we don't have 3 related articles from the same category, fill with latest general news
    if (relacionadas.length < 3) {
      const latestNoticias = await getItems<Noticia>('noticias', {
        limit: 10,
      });
      const extraNoticias = latestNoticias.filter(
        (item) => item.id !== noticia.id && !relacionadas.some((r) => r.id === item.id)
      );
      relacionadas = [...relacionadas, ...extraNoticias].slice(0, 3);
    }

    // Fetch latest news for the sidebar (up to 5 items)
    const ultimasNoticias = await getItems<Noticia>('noticias', {
      limit: 5,
    });

    // Fetch most read news for the sidebar (up to 5 items sorted by views)
    const maisLidas = await getItems<Noticia>('noticias', {
      sort: '-views',
      limit: 5,
    });

    return {
      props: {
        type: 'article',
        noticia,
        relacionadas,
        maisLidas,
        ultimasNoticias,
        currentUrl,
      },
    };
  }

  return { notFound: true };
};
