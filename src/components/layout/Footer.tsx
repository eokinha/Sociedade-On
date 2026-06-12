import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue text-white select-none pt-12 pb-6 border-t-2 border-brand-yellow">
      <div className="max-w-[1360px] mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8 mb-10 text-left">
        
        {/* Column 1: Brand Logo & Tagline */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
          <Link href="/" className="inline-block">
            <div className="flex items-center">
              <span className="text-xl sm:text-2xl font-black tracking-tighter text-white font-sans leading-none">
                Sociedade
              </span>
              <span className="text-xl sm:text-2xl font-black tracking-tighter text-brand-yellow font-sans leading-none flex items-center ml-0.5">
                <span className="w-5 h-5 rounded-full bg-brand-yellow flex items-center justify-center mx-0.5 shadow-sm">
                  <span className="w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[5px] border-l-brand-blue ml-0.5" />
                </span>
                <span>N</span>
              </span>
            </div>
            <span className="text-[7.5px] tracking-[0.2em] text-gray-400 font-extrabold uppercase mt-1.5 block">
              A Bahia conectada em tempo real
            </span>
          </Link>
        </div>

        {/* Column 2: Institucional */}
        <div className="flex flex-col gap-3">
          <h3 className="font-extrabold text-[11px] uppercase text-brand-yellow tracking-wider">
            Institucional
          </h3>
          <ul className="flex flex-col gap-1.5 text-[10.5px] text-gray-300">
            <li><Link href="/sobre" className="hover:text-brand-yellow transition-colors">Sobre a Rádio</Link></li>
            <li><Link href="/expediente" className="hover:text-brand-yellow transition-colors">Expediente</Link></li>
            <li><Link href="/fale-conosco" className="hover:text-brand-yellow transition-colors">Fale Conosco</Link></li>
          </ul>
        </div>

        {/* Column 3: Editorias */}
        <div className="flex flex-col gap-3">
          <h3 className="font-extrabold text-[11px] uppercase text-brand-yellow tracking-wider">
            Editorias
          </h3>
          <ul className="flex flex-col gap-1.5 text-[10.5px] text-gray-300">
            <li><Link href="/politica" className="hover:text-brand-yellow transition-colors">Política</Link></li>
            <li><Link href="/economia" className="hover:text-brand-yellow transition-colors">Economia</Link></li>
            <li><Link href="/esportes" className="hover:text-brand-yellow transition-colors">Esportes</Link></li>
          </ul>
        </div>

        {/* Column 4: Serviços */}
        <div className="flex flex-col gap-3">
          <h3 className="font-extrabold text-[11px] uppercase text-brand-yellow tracking-wider">
            Serviços
          </h3>
          <ul className="flex flex-col gap-1.5 text-[10.5px] text-gray-300">
            <li><Link href="/#sociedadeplay" className="hover:text-brand-yellow transition-colors">SociedadePlay</Link></li>
            <li><Link href="/#podcasts" className="hover:text-brand-yellow transition-colors">Podcasts</Link></li>
            <li><Link href="/#ao-vivo" className="hover:text-brand-yellow transition-colors">Ao Vivo</Link></li>
          </ul>
        </div>

        {/* Column 5: Legal */}
        <div className="flex flex-col gap-3">
          <h3 className="font-extrabold text-[11px] uppercase text-brand-yellow tracking-wider">
            Legal
          </h3>
          <ul className="flex flex-col gap-1.5 text-[10.5px] text-gray-300">
            <li><Link href="/termos" className="hover:text-brand-yellow transition-colors">Termos de Uso</Link></li>
            <li><Link href="/privacidade" className="hover:text-brand-yellow transition-colors">Política de Privacidade</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright alignment */}
      <div className="max-w-[1360px] mx-auto px-4 border-t border-white/5 pt-5 flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
        <div />
        <p>© 2025 Rádio Sociedade da Bahia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
