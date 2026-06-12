import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getItems } from '@/lib/directus';
import { Noticia } from '@/types/noticia';
import { Editoria } from '@/types/editoria';
import { Podcast } from '@/types/podcast';
import HeroDestaque from '@/components/pages/homepage/HeroDestaque';
import AgoraNaSociedade from '@/components/pages/homepage/AgoraNaSociedade';
import CortesRadio from '@/components/pages/homepage/CortesRadio';
import MaisLidas from '@/components/pages/homepage/MaisLidas';
import Destaques from '@/components/pages/homepage/Destaques';
import SociedadePlay from '@/components/pages/homepage/SociedadePlay';
import PodcastsDestaque from '@/components/pages/homepage/PodcastsDestaque';
import SigaSociedade from '@/components/pages/homepage/SigaSociedade';

interface HomeProps {
  noticias: Noticia[];
  editorias: Editoria[];
  podcasts: Podcast[];
  currentUrl: string;
}

export default function Home({ noticias, editorias, podcasts, currentUrl }: HomeProps) {
  const highlightNews = noticias[0];
  const otherNews = noticias.slice(1);

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
        {/* Grid de 2 colunas no hero (Destaque principal + Agora na Sociedade) */}
        {highlightNews && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            <div className="lg:col-span-2 flex flex-col">
              <HeroDestaque noticia={highlightNews} />
            </div>
            <div className="lg:col-span-1 flex flex-col">
              <AgoraNaSociedade />
            </div>
          </div>
        )}

        {/* Seção "Cortes da Rádio" e "Mais Lidas" lado a lado */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-b border-gray-100 py-3.5 my-2">
          <div className="lg:col-span-8">
            <CortesRadio noticias={noticias} />
          </div>
          <div className="lg:col-span-4 lg:border-l lg:border-gray-100 lg:pl-8 self-stretch">
            <MaisLidas noticias={noticias} />
          </div>
        </div>

        {/* Seção Destaques, Sociedade Play e Podcasts + Siga Sociedade lado a lado no desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border-b border-gray-100 pb-6 my-2">
          <div className="lg:col-span-6 flex flex-col">
            <Destaques noticias={otherNews} tituloSecao="Destaques" />
          </div>
          <div className="lg:col-span-3 flex flex-col">
            <SociedadePlay />
          </div>
          {/* Coluna direita: Podcasts + Siga Sociedade empilhados, preenchendo a altura total */}
          <div className="lg:col-span-3 flex flex-col gap-0">
            <div className="flex-1 flex flex-col">
              <PodcastsDestaque podcasts={podcasts} />
            </div>
            <div className="flex-shrink-0">
              <SigaSociedade />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const host = context.req.headers.host || 'sociedadeon.com.br';
  const protocol = context.req.headers['x-forwarded-proto'] || 'https';
  const currentUrl = `${protocol}://${host}${context.resolvedUrl}`;

  const [noticias, editorias, podcasts] = await Promise.all([
    getItems<Noticia>('noticias'),
    getItems<Editoria>('editorias'),
    getItems<Podcast>('podcasts'),
  ]);

  return {
    props: {
      noticias,
      editorias,
      podcasts,
      currentUrl,
    },
  };
};
