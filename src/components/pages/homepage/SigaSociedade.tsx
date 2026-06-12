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
      icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.488 5.275 1.49 5.485.001 9.948-4.437 9.951-9.886.002-2.64-1.019-5.123-2.877-6.986-1.858-1.862-4.332-2.888-6.974-2.889-5.49 0-9.953 4.437-9.956 9.886-.002 1.849.493 3.57 1.487 5.124L2.43 21.03l6.217-1.876zm7.25-10.457c-.24-.12-.142-.876-.622-1.353-.473-.472-.9-.374-1.14-.374-.24 0-.476-.035-.715.203-.24.238-.913.893-.913 2.181 0 1.288.937 2.531 1.069 2.709.13.178 1.805 2.755 4.372 3.864.61.264 1.086.42 1.458.539.614.195 1.173.167 1.614.101.492-.074 1.517-.619 1.73-1.22.213-.601.213-1.116.149-1.221-.064-.105-.233-.167-.472-.288z"/></svg>,
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
          <span className="text-[10px] text-brand-gray font-semibold block mt-0.5">
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
