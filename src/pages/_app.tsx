import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { PlayerProvider } from "@/context/PlayerContext";
import Header from "@/components/layout/Header";
import NavMobile from "@/components/layout/NavMobile";
import Footer from "@/components/layout/Footer";
import Flutuantes from "@/components/layout/Flutuantes";
import { useMobileMenu } from "@/hooks/useMobileMenu";

export default function App({ Component, pageProps }: AppProps) {
  const mobileMenu = useMobileMenu();

  return (
    <PlayerProvider>
      <Head>
        <title>Sociedade ON | O Maior Portal de Notícias e Rádio da Bahia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Acompanhe as últimas notícias de Salvador, Bahia e do Brasil. Ouça a Rádio Sociedade 102.5 FM ao vivo, debates, podcasts, esportes e muito mais." key="description" />

        {/* OpenGraph Fallback */}
        <meta property="og:site_name" content="Sociedade ON" key="og:site_name" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:locale" content="pt_BR" key="og:locale" />
        <meta property="og:title" content="Sociedade ON | O Maior Portal de Notícias e Rádio da Bahia" key="og:title" />
        <meta property="og:description" content="Acompanhe as últimas notícias de Salvador, Bahia e do Brasil. Ouça a Rádio Sociedade 102.5 FM ao vivo." key="og:description" />
        <meta property="og:image" content="/placeholder.png" key="og:image" />

        {/* Twitter Fallback */}
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content="Sociedade ON | O Maior Portal de Notícias e Rádio da Bahia" key="twitter:title" />
        <meta name="twitter:description" content="Acompanhe as últimas notícias de Salvador, Bahia e do Brasil. Ouça a Rádio Sociedade 102.5 FM ao vivo." key="twitter:description" />
        <meta name="twitter:image" content="/placeholder.png" key="twitter:image" />
      </Head>
      <div className="flex flex-col min-h-screen bg-brand-light w-full">
        {/* Header (TopBar + Logo + Nav) */}
        <Header onMenuToggle={mobileMenu.toggle} />

        {/* Drawer Mobile Drawer */}
        <NavMobile isOpen={mobileMenu.isOpen} onClose={mobileMenu.close} />

        {/* Main Section */}
        <main className="flex-1 max-w-[1360px] mx-auto w-full px-4 py-6 md:py-8 pb-24">
          <Component {...pageProps} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Floating Player and WA Icon */}
        <Flutuantes />
      </div>
    </PlayerProvider>
  );
}
