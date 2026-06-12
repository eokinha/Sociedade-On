import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { ArrowLeft, Search } from 'lucide-react';
import { getItems } from '@/lib/directus';
import { Noticia } from '@/types/noticia';
import CardNoticia from '@/components/common/widgets/CardNoticia';

interface BuscaPageProps {
  query: string;
  noticias: Noticia[];
  currentUrl: string;
}

export default function BuscaPage({ query, noticias = [], currentUrl }: BuscaPageProps) {
  const router = useRouter();
  const [inputValue, setInputValue] = useState(query);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    router.push(`/busca?q=${encodeURIComponent(inputValue.trim())}`);
  };

  return (
    <>
      <Head>
        <title>Pesquisa por: "{query}" | Sociedade ON</title>
        <meta name="description" content={`Resultados da busca para a pesquisa: ${query}`} key="description" />
        <meta property="og:title" content={`Pesquisa: ${query} | Sociedade ON`} key="og:title" />
        <meta property="og:description" content={`Resultados da busca para a pesquisa: ${query}`} key="og:description" />
        <meta property="og:url" content={currentUrl} key="og:url" />
        <meta property="og:type" content="website" key="og:type" />
      </Head>

      <div className="max-w-5xl mx-auto w-full py-4 select-none">
        {/* Breadcrumb / Back button */}
        <div className="flex items-center gap-2 text-xs text-brand-gray mb-6">
          <Link href="/" className="flex items-center gap-1.5 hover:text-brand-yellow font-extrabold transition-colors uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao portal</span>
          </Link>
        </div>

        {/* Section Header */}
        <div className="border-b border-gray-200 pb-5 mb-8 text-left">
          <span className="inline-block w-8 h-1 mb-2 rounded bg-brand-yellow" />
          <h1 className="text-2xl sm:text-3xl font-black text-brand-blue uppercase tracking-tight leading-none">
            Resultado da Busca
          </h1>
          <p className="text-xs text-brand-gray mt-1.5 font-semibold uppercase tracking-wider">
            Você pesquisou por: <span className="text-brand-blue font-extrabold">"{query}"</span>
          </p>
        </div>

        {/* Inline Search Bar on Search Page */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs mb-10">
          <form onSubmit={handleSearchSubmit} className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Pesquisar novas notícias..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:border-brand-yellow rounded-xl text-sm text-brand-blue placeholder-gray-400 outline-none transition-colors"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-4.5 top-1/2 -translate-y-1/2" />
            </div>
            <button
              type="submit"
              className="bg-brand-blue hover:bg-[#070e28] text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
            >
              Buscar
            </button>
          </form>
        </div>

        {/* Results Showcase */}
        {noticias.length > 0 ? (
          <div className="flex flex-col gap-6">
            <p className="text-[11px] font-bold text-brand-gray uppercase tracking-widest text-left">
              Foram encontradas <span className="text-brand-blue font-black">{noticias.length}</span> notícias relacionadas:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {noticias.map((item) => (
                <CardNoticia key={item.id} noticia={item} layout="vertical" showExcerpt={true} />
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-16 text-center border border-gray-100 shadow-xs flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow mb-2">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-brand-blue uppercase tracking-tight">
              Nenhum resultado encontrado
            </h3>
            <p className="text-xs sm:text-sm text-brand-gray max-w-md leading-relaxed font-semibold">
              Não encontramos nenhuma notícia correspondente à sua busca por "{query}". Experimente verificar a grafia ou tentar termos diferentes.
            </p>
            <Link
              href="/"
              className="mt-2 bg-brand-blue hover:bg-[#070e28] text-white px-5 py-3 rounded-lg font-black text-[10px] uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              Voltar para a Home
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = (context.query.q as string) || '';
  const host = context.req.headers.host || 'sociedadeon.com.br';
  const protocol = context.req.headers['x-forwarded-proto'] || 'https';
  const currentUrl = `${protocol}://${host}${context.resolvedUrl}`;

  const noticias = await getItems<Noticia>('noticias', {
    search: query,
  });

  return {
    props: {
      query,
      noticias,
      currentUrl,
    },
  };
};
