import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { getItems } from '@/lib/directus';
import { Promocao } from '@/types/promocao';
import { Calendar, Gift, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import Paginacao from '@/components/common/widgets/Paginacao';

interface PromocoesPageProps {
  promocoes: Promocao[];
}

export default function PromocoesPage({ promocoes }: PromocoesPageProps) {
  const [filter, setFilter] = useState<'todas' | 'ativas' | 'encerradas'>('todas');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPromocoes = promocoes.filter((promo) => {
    if (filter === 'ativas') return promo.status === 'ativa';
    if (filter === 'encerradas') return promo.status === 'encerrada';
    return true;
  });

  const itemsPerPage = 15;
  const totalPages = Math.ceil(filteredPromocoes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPromocoes = filteredPromocoes.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterChange = (newFilter: 'todas' | 'ativas' | 'encerradas') => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  return (
    <>
      <Head>
        <title>Promoções & Sorteios | Sociedade ON</title>
        <meta name="description" content="Participe das melhores promoções e concorra a prêmios incríveis na rádio mais tradicional da Bahia." key="description" />
      </Head>

      <div className="flex flex-col gap-6 select-none">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-brand-gray">
          <Link href="/" className="hover:text-brand-yellow font-bold flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" />
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-blue font-black">Promoções</span>
        </div>

        {/* Header */}
        <div className="border-b border-gray-200 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="inline-block w-8 h-1 mb-2 rounded bg-brand-yellow" />
            <h1 className="text-3xl font-black text-brand-blue uppercase tracking-tight">
              PROMOÇÕES & SORTEIOS
            </h1>
            <p className="text-xs text-brand-gray mt-1 uppercase tracking-wider font-semibold">
              Participe, preencha os formulários e concorra a prêmios especiais da Rádio Sociedade
            </p>
          </div>

          {/* Filters */}
          <div className="flex gap-2">
            {(['todas', 'ativas', 'encerradas'] as const).map((type) => (
              <button
                key={type}
                onClick={() => handleFilterChange(type)}
                className={`text-[10px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  filter === type
                    ? 'bg-brand-blue text-white shadow-xs'
                    : 'bg-white text-brand-blue border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {type === 'todas' ? 'Todas' : type === 'ativas' ? 'Ativas' : 'Encerradas'}
              </button>
            ))}
          </div>
        </div>

        {/* Grid List */}
        {paginatedPromocoes.length > 0 ? (
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedPromocoes.map((promo) => {
                const isActive = promo.status === 'ativa';

                return (
                <div
                  key={promo.id}
                  className={`group bg-white border border-gray-100 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${
                    !isActive ? 'opacity-85' : ''
                  }`}
                >
                  {/* Visual Top */}
                  <div className="relative h-48 overflow-hidden bg-brand-blue shrink-0">
                    <img
                      src={promo.imagem}
                      alt={promo.titulo}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1545128485-c400e7702796?w=800&auto=format&fit=crop&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                    {/* Status badge */}
                    <div
                      className={`absolute top-4 left-4 text-[9px] font-black uppercase px-2.5 py-1 rounded shadow-xs flex items-center gap-1 text-white ${
                        isActive ? 'bg-emerald-600' : 'bg-gray-600'
                      }`}
                    >
                      {isActive ? (
                        <>
                          <CheckCircle2 className="w-3 h-3" />
                          Ativa
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-3 h-3" />
                          Encerrada
                        </>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex flex-col flex-1 gap-3">
                    <h3 className="font-black text-brand-blue text-lg group-hover:text-brand-yellow transition-colors leading-tight">
                      {promo.titulo}
                    </h3>
                    <p className="text-xs text-brand-gray leading-relaxed font-medium flex-1 line-clamp-3">
                      {promo.descricao}
                    </p>

                    {/* Meta info */}
                    <div className="flex flex-col gap-1.5 pt-3 border-t border-gray-100 text-3xs font-black text-brand-blue/60 uppercase tracking-wider">
                      <div className="flex items-center gap-1.5">
                        <Gift className="w-3.5 h-3.5 text-brand-yellow" />
                        <span>Prêmio: {promo.premio}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>
                          Período: {new Date(promo.dataInicio).toLocaleDateString('pt-BR')} até{' '}
                          {new Date(promo.dataFim).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="p-5 pt-0 shrink-0">
                    <Link
                      href={`/promocoes/${promo.slug}`}
                      className={`w-full flex items-center justify-center h-10 font-black text-xs uppercase tracking-wider transition-all duration-200 ${
                        isActive
                          ? 'bg-brand-blue hover:bg-brand-yellow hover:text-brand-blue text-white cursor-pointer'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-500 cursor-pointer'
                      }`}
                    >
                      {isActive ? 'Participar' : 'Ver Ganhador'}
                    </Link>
                  </div>
                </div>
              );
            })}
            </div>
            <Paginacao
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        ) : (
          <div className="bg-white p-12 text-center border border-gray-100 shadow-xs">
            <p className="text-brand-gray font-bold">Nenhuma promoção encontrada.</p>
            <button
              onClick={() => handleFilterChange('todas')}
              className="mt-4 inline-block text-xs font-black text-brand-blue hover:text-brand-yellow uppercase tracking-wider cursor-pointer"
            >
              Ver todas
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const promocoes = await getItems<Promocao>('promocoes');
  return {
    props: {
      promocoes,
    },
  };
};
