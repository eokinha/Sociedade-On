import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue text-white select-none pt-12 pb-6 border-t-2 border-brand-yellow">
      <div className="max-w-[1360px] mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8 mb-10 text-left">
        
        {/* Column 1: Brand Logo & Tagline */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
          <Link href="/" className="inline-block">
            <Image
              src="/logo-sociedade.png"
              alt="Sociedade ON"
              width={170}
              height={46}
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </Link>
        </div>

        {/* Column 2: Institucional */}
        <div className="flex flex-col gap-3">
          <h3 className="font-extrabold text-xs uppercase text-brand-yellow tracking-wider">
            Institucional
          </h3>
          <ul className="flex flex-col gap-1.5 text-xs text-gray-300">
            <li><Link href="/sobre" className="hover:text-brand-yellow transition-colors">Sobre a Rádio</Link></li>
            <li><Link href="/expediente" className="hover:text-brand-yellow transition-colors">Expediente</Link></li>
            <li><Link href="/contato" className="hover:text-brand-yellow transition-colors">Fale Conosco</Link></li>
          </ul>
        </div>

        {/* Column 3: Editorias */}
        <div className="flex flex-col gap-3">
          <h3 className="font-extrabold text-xs uppercase text-brand-yellow tracking-wider">
            Editorias
          </h3>
          <ul className="flex flex-col gap-1.5 text-xs text-gray-300">
            <li><Link href="/politica" className="hover:text-brand-yellow transition-colors">Política</Link></li>
            <li><Link href="/economia" className="hover:text-brand-yellow transition-colors">Economia</Link></li>
            <li><Link href="/esportes" className="hover:text-brand-yellow transition-colors">Esportes</Link></li>
          </ul>
        </div>

        {/* Column 4: Serviços */}
        <div className="flex flex-col gap-3">
          <h3 className="font-extrabold text-xs uppercase text-brand-yellow tracking-wider">
            Serviços
          </h3>
          <ul className="flex flex-col gap-1.5 text-xs text-gray-300">
            <li><Link href="/comercial" className="hover:text-brand-yellow transition-colors">Comercial</Link></li>
            <li><Link href="/programacao" className="hover:text-brand-yellow transition-colors">Programação</Link></li>
            <li><Link href="/#ao-vivo" className="hover:text-brand-yellow transition-colors">Ao Vivo</Link></li>
          </ul>
        </div>

        {/* Column 5: Legal */}
        <div className="flex flex-col gap-3">
          <h3 className="font-extrabold text-xs uppercase text-brand-yellow tracking-wider">
            Legal
          </h3>
          <ul className="flex flex-col gap-1.5 text-xs text-gray-300">
            <li><Link href="/termos" className="hover:text-brand-yellow transition-colors">Termos de Uso</Link></li>
            <li><Link href="/privacidade" className="hover:text-brand-yellow transition-colors">Política de Privacidade</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright alignment */}
      <div className="max-w-[1360px] mx-auto px-4 border-t border-white/5 pt-5 flex flex-col md:flex-row justify-between items-center gap-2 text-2xs text-gray-400 font-bold uppercase tracking-wider">
        <div />
        <p>© 2025 Rádio Sociedade da Bahia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
