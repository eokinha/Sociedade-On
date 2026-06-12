import React from 'react';
import { Noticia } from '../../../types/noticia';
import CardNoticia from '../../common/widgets/CardNoticia';

interface DestaquesProps {
  noticias: Noticia[];
  tituloSecao?: string;
}

export const Destaques: React.FC<DestaquesProps> = ({ noticias, tituloSecao = 'DESTAQUES' }) => {
  // Mock data representing the exact items in the screenshot to make it high-fidelity
  const mockDestaqueEsquerda: Noticia = {
    id: 'de1',
    titulo: 'Câmara de Salvador aprova projetos importantes para a cidade',
    subtitulo: 'Sessão plenária votou propostas relativas ao desenvolvimento urbano e incentivo fiscal.',
    conteudo: '',
    slug: 'camara-de-salvador-aprova-projetos-importantes',
    imagem: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&auto=format&fit=crop&q=80',
    editoria: { id: 'd4', nome: 'POLÍTICA', slug: 'politica', cor: '#5B21B6' },
    publicadoEm: new Date(Date.now() - 1000 * 60 * 30).toISOString() // há 30 minutos
  };

  const mockDestaquesDireita: Noticia[] = [
    {
      id: 'dd1',
      titulo: 'Litoral Norte da Bahia ganha novo complexo turístico',
      subtitulo: '',
      conteudo: '',
      slug: 'litoral-norte-ganha-novo-complexo',
      imagem: 'https://images.unsplash.com/photo-1582236315579-3e3e7f4cae09?w=400&auto=format&fit=crop&q=80',
      editoria: { id: 'd2', nome: 'BAHIA', slug: 'bahia', cor: '#1D4ED8' },
      publicadoEm: new Date(Date.now() - 1000 * 60 * 60).toISOString() // há 1 hora
    },
    {
      id: 'dd2',
      titulo: 'Comércio baiano deve crescer 5% em 2025, aponta pesquisa',
      subtitulo: '',
      conteudo: '',
      slug: 'comercio-baiano-deve-crescer-cinco-porcent',
      imagem: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&auto=format&fit=crop&q=80',
      editoria: { id: 'd5', nome: 'ECONOMIA', slug: 'economia', cor: '#F5A800' },
      publicadoEm: new Date(Date.now() - 1000 * 60 * 120).toISOString() // há 2 horas
    },
    {
      id: 'dd3',
      titulo: 'Polícia apreende aparelhos roubados avaliados em mais de R$ 1 milhão',
      subtitulo: '',
      conteudo: '',
      slug: 'policia-apreende-aparelhos-roubados',
      imagem: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&auto=format&fit=crop&q=80',
      editoria: { id: 'd6', nome: 'SEGURANÇA', slug: 'seguranca', cor: '#DC2626' },
      publicadoEm: new Date(Date.now() - 1000 * 60 * 180).toISOString() // há 3 horas
    }
  ];

  return (
    <section className="w-full py-6 select-none border-b border-gray-100">
      {/* Title Header */}
      <div className="mb-5 border-b border-gray-100 pb-3 h-[29px] flex items-end">
        <h2 className="text-sm md:text-base font-black text-brand-blue uppercase tracking-tight leading-none">
          {tituloSecao}
        </h2>
      </div>

      {/* Grid: Left Large Card, Right Horizontal cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* Left Column */}
        <div className="w-full flex flex-col">
          <CardNoticia noticia={mockDestaqueEsquerda} layout="vertical" showExcerpt={false} lineClamp={3} />
        </div>

        {/* Right Column — distributes 3 cards to fill same height as left */}
        <div className="w-full flex flex-col gap-2.5">
          {mockDestaquesDireita.map((noticia) => (
            <div key={noticia.id} className="flex-1 flex">
              <CardNoticia noticia={noticia} layout="horizontal" showExcerpt={false} lineClamp={3} className="h-full w-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Destaques;
