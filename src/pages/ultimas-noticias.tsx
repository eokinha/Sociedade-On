import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { getItems } from '@/lib/directus';
import { Noticia } from '@/types/noticia';
import CardNoticia from '@/components/common/widgets/CardNoticia';
import { ArrowLeft } from 'lucide-react';

interface UltimasNoticiasPageProps {
  noticias: Noticia[];
}

export default function UltimasNoticiasPage({ noticias }: UltimasNoticiasPageProps) {
  return (
    <>
      <Head>
        <title>Últimas Notícias | Sociedade ON</title>
        <meta name="description" content="Acompanhe todas as últimas notícias e reportagens de Salvador, Bahia e do Brasil no portal Sociedade ON." key="description" />
      </Head>

      <div className="flex flex-col gap-6 select-none">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-brand-gray">
          <Link href="/" className="hover:text-brand-yellow font-bold flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" />
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-blue font-black">Últimas Notícias</span>
        </div>

        {/* Header */}
        <div className="border-b border-gray-200 pb-4">
          <span className="inline-block w-8 h-1 mb-2 rounded bg-brand-red animate-pulse" />
          <h1 className="text-3xl font-black text-brand-blue uppercase tracking-tight">
            ÚLTIMAS NOTÍCIAS
          </h1>
          <p className="text-xs text-brand-gray mt-1 uppercase tracking-wider font-semibold">
            Confira em tempo real todas as publicações do nosso portal
          </p>
        </div>

        {/* News Grid */}
        {noticias.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {noticias.map((item) => (
              <CardNoticia key={item.id} noticia={item} layout="vertical" showExcerpt={true} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 text-center border border-gray-100 shadow-sm">
            <p className="text-brand-gray font-bold">Nenhuma notícia publicada ainda.</p>
            <Link href="/" className="mt-4 inline-block text-xs font-black text-brand-blue hover:text-brand-yellow uppercase tracking-wider">
              Voltar para a Home
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const noticias = await getItems<Noticia>('noticias');
  return {
    props: {
      noticias,
    },
  };
};
