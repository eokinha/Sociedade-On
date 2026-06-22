import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getItems } from '@/lib/directus';
import { Noticia } from '@/types/noticia';
import { Editoria } from '@/types/editoria';
import { Programa } from '@/lib/directus';
import HeroDestaque from '@/components/pages/homepage/HeroDestaque';
import AgoraNaSociedade from '@/components/pages/homepage/AgoraNaSociedade';
import NoticiasCarrossel from '@/components/pages/homepage/NoticiasCarrossel';
import UltimasNoticias from '@/components/pages/homepage/UltimasNoticias';
import EditoriaSection from '@/components/pages/homepage/EditoriaSection';
import CortesRadio from '@/components/pages/homepage/CortesRadio';
import MaisLidas from '@/components/pages/homepage/MaisLidas';
import SigaSociedade from '@/components/pages/homepage/SigaSociedade';
import Programacao from '@/components/pages/homepage/Programacao';
import BannerAd from '@/components/common/widgets/BannerAd';
import WidgetClima from '@/components/common/widgets/WidgetClima';
import EspeciaisSidebar from '@/components/common/widgets/EspeciaisSidebar';

interface HomeProps {
  noticias: Noticia[];
  editorias: Editoria[];
  programas: Programa[];
  currentUrl: string;
}

export default function Home({ noticias, editorias, programas, currentUrl }: HomeProps) {
  const highlightNews = noticias[0];
  const otherNews = noticias.slice(1);

  // Group news by editoria slug
  const noticiasPorEditoria: Record<string, Noticia[]> = {};
  noticias.forEach((n) => {
    const slug = n.editoria.slug;
    if (!noticiasPorEditoria[slug]) noticiasPorEditoria[slug] = [];
    noticiasPorEditoria[slug].push(n);
  });

  // Editorias to display as sections (only those with content, excluding economy and entertainment)
  const editoriasComConteudo = editorias.filter(
    (e) => noticiasPorEditoria[e.slug] && 
           noticiasPorEditoria[e.slug].length > 0 &&
           e.slug !== 'economia' &&
           e.slug !== 'entretenimento'
  );

  return (
    <>
      <Head>
        <title>Sociedade ON | O Maior Portal de Notícias e Rádio da Bahia</title>
        <meta name="description" content="Acompanhe as últimas notícias de Salvador, Bahia e do Brasil. Ouça a Rádio Sociedade 102.5 FM ao vivo, debates, podcasts, esportes e muito mais." key="description" />
        <meta property="og:title" content="Sociedade ON | O Maior Portal de Notícias e Rádio da Bahia" key="og:title" />
        <meta property="og:description" content="Acompanhe as últimas notícias de Salvador, Bahia e do Brasil. Ouça a Rádio Sociedade ao vivo." key="og:description" />
        <meta property="og:url" content={currentUrl} key="og:url" />
        <meta property="og:type" content="website" key="og:type" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex flex-col gap-6">
        {/* 1. Hero: Destaque principal + Agora na Sociedade */}
        {highlightNews && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            <div className="lg:col-span-2 flex flex-col">
              <HeroDestaque noticia={highlightNews} />
            </div>
            <div className="lg:col-span-1 flex flex-col gap-6">
              <AgoraNaSociedade />
              <NoticiasCarrossel noticias={otherNews} />
            </div>
          </div>
        )}

        {/* 2. Banner publicitário horizontal */}
        <BannerAd formato="horizontal-lg" />

        {/* 3. Grid: Main Content (8/12) + Sidebar (4/12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main content */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <UltimasNoticias noticias={otherNews} />

            {/* Banner publicitário horizontal */}
            <BannerAd formato="horizontal-lg" className="my-2" />

            {/* Seções de Editorias — cada editoria como seção comercial */}
            <div className="flex flex-col gap-8">
              {editoriasComConteudo.map((editoria, idx) => (
                <div key={editoria.id} className="flex flex-col gap-6">
                  <EditoriaSection
                    editoria={editoria}
                    noticias={noticiasPorEditoria[editoria.slug]}
                  />
                  {/* Banner between some editoria sections */}
                  {idx === 2 && <BannerAd formato="horizontal-lg" className="mt-4" />}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-6 lg:border-l lg:border-gray-100 lg:pl-8">
            <MaisLidas noticias={noticias} />
            <BannerAd formato="retangulo" />
            <WidgetClima variant="sidebar" />
            <EspeciaisSidebar noticias={noticias} />
            <BannerAd formato="half-page" />
            <SigaSociedade />
          </aside>
        </div>

        {/* 4. Cortes da Rádio */}
        <CortesRadio noticias={noticias} />

        {/* 5. Banner publicitário horizontal */}
        <BannerAd formato="horizontal-lg" className="my-2" />

        {/* 6. Programação & Apresentadores */}
        <Programacao programas={programas} />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const host = context.req.headers.host || 'sociedadeon.com.br';
  const protocol = context.req.headers['x-forwarded-proto'] || 'https';
  const currentUrl = `${protocol}://${host}${context.resolvedUrl}`;

  const [noticias, editorias, programas] = await Promise.all([
    getItems<Noticia>('noticias'),
    getItems<Editoria>('editorias'),
    getItems<Programa>('programacao'),
  ]);

  return {
    props: {
      noticias,
      editorias,
      programas,
      currentUrl,
    },
  };
};

