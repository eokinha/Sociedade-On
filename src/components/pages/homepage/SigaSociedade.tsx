import React from 'react';

export const SigaSociedade: React.FC = () => {
  const socials = [
    {
      nome: 'Instagram',
      cor: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
      icon: <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
      url: 'https://instagram.com'
    },
    {
      nome: 'YouTube',
      cor: 'bg-[#FF0000]',
      icon: <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3z"/></svg>,
      url: 'https://youtube.com'
    },
    {
      nome: 'Facebook',
      cor: 'bg-[#1877F2]',
      icon: <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
      url: 'https://facebook.com'
    },
    {
      nome: 'TikTok',
      cor: 'bg-[#000000]',
      icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.72-.01 2.92.01 5.84-.02 8.75-.1 1.6-.74 3.19-1.91 4.31-1.39 1.39-3.48 2.07-5.42 1.81-2.4-.26-4.63-1.92-5.32-4.28-.9-2.94.34-6.31 3.01-7.75.81-.44 1.72-.68 2.65-.73v4.01c-1.02.16-1.99.77-2.42 1.71-.56 1.15-.36 2.62.5 3.55.91.95 2.45 1.11 3.54.39.73-.48 1.12-1.33 1.11-2.2.02-4.24.01-8.49.02-12.73z"/></svg>,
      url: 'https://tiktok.com'
    },
    {
      nome: 'WhatsApp',
      cor: 'bg-[#25D366]',
      icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>,
      url: 'https://wa.me/5571999999999'
    }
  ];

  return (
    <section className="w-full pt-4 pb-4 select-none border-t border-gray-100">
      <div className="flex flex-col gap-3.5">
        
        {/* Title */}
        <div>
          <h2 className="text-xs font-black text-brand-blue uppercase tracking-wider">
            SIGA A SOCIEDADE
          </h2>
          <span className="text-xs text-brand-gray font-semibold block mt-0.5">
            Acompanhe nossas redes sociais
          </span>
        </div>

        {/* Social circular links row */}
        <div className="flex items-center gap-2.5 flex-wrap">
          {socials.map((social) => (
            <a
              key={social.nome}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${social.cor} shadow-xs hover:scale-108 active:scale-95 transition-all duration-300`}
              aria-label={social.nome}
            >
              {social.icon}
            </a>
          ))}
        </div>


      </div>
    </section>
  );
};

export default SigaSociedade;
