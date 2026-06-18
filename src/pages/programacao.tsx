import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { getItems } from '@/lib/directus';
import { Programa } from '@/lib/directus';
import { Radio, Clock, ArrowLeft } from 'lucide-react';

interface ProgramacaoPageProps {
  programas: Programa[];
}

export default function ProgramacaoPage({ programas }: ProgramacaoPageProps) {
  return (
    <>
      <Head>
        <title>Programação & Apresentadores | Sociedade ON</title>
        <meta name="description" content="Conheça todos os programas, horários e apresentadores que fazem a história da Rádio Sociedade da Bahia." key="description" />
      </Head>

      <div className="flex flex-col gap-6 select-none">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-brand-gray">
          <Link href="/" className="hover:text-brand-yellow font-bold flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" />
            Home
          </Link>
          <span>/</span>
          <span className="text-brand-blue font-black">Programação</span>
        </div>

        {/* Header */}
        <div className="border-b border-gray-200 pb-4">
          <span className="inline-block w-8 h-1 mb-2 rounded bg-brand-red animate-pulse" />
          <h1 className="text-3xl font-black text-brand-blue uppercase tracking-tight">
            PROGRAMAÇÃO & APRESENTADORES
          </h1>
          <p className="text-xs text-brand-gray mt-1 uppercase tracking-wider font-semibold">
            Grade completa de horários, apresentadores e detalhes de todos os programas
          </p>
        </div>

        {/* Programs Grid */}
        {programas.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programas.map((programa) => (
              <div
                key={programa.id}
                className="group bg-white border border-gray-100 hover:border-brand-red/10 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Top: Presenter photo + info overlay */}
                <div className="relative h-48 overflow-hidden bg-brand-blue">
                  <img
                    src={programa.foto}
                    alt={programa.apresentador}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90"
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Time badge */}
                  <div className="absolute top-4 right-4 bg-brand-red text-white text-[9px] font-black uppercase px-2 py-1 rounded flex items-center gap-1 shadow-sm">
                    <Clock className="w-2.5 h-2.5" />
                    {programa.horario}
                  </div>

                  {/* Presenter name overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-black text-base sm:text-lg leading-tight drop-shadow-sm">
                      {programa.nome}
                    </h3>
                    <p className="text-white/80 text-xs font-semibold mt-0.5">
                      com {programa.apresentador}
                    </p>
                  </div>
                </div>

                {/* Bottom: Description + schedule */}
                <div className="p-4 flex flex-col gap-3 flex-grow">
                  <p className="text-xs text-brand-gray leading-relaxed font-medium flex-grow">
                    {programa.descricao}
                  </p>
                  <div className="flex justify-between items-center pt-2.5 border-t border-gray-50">
                    <span className="text-[10px] font-black text-brand-blue/60 uppercase tracking-wide">
                      {programa.dias}
                    </span>
                    <span className="text-[9px] font-bold text-brand-yellow uppercase tracking-wider flex items-center gap-1">
                      <Radio className="w-3 h-3 text-brand-yellow animate-pulse" />
                      Ao Vivo
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 text-center border border-gray-100 shadow-sm">
            <p className="text-brand-gray font-bold">Nenhum programa cadastrado ainda.</p>
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
  const programas = await getItems<Programa>('programacao');
  return {
    props: {
      programas,
    },
  };
};
