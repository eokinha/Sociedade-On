import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { ArrowLeft, Send, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

interface ContatoPageProps {
  currentUrl: string;
}

export default function ContatoPage({ currentUrl }: ContatoPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) return;
    
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    }, 1200);
  };

  return (
    <>
      <Head>
        <title>Fale Conosco | Sociedade ON</title>
        <meta name="description" content="Entre em contato com a equipe do portal Sociedade ON e Rádio Sociedade. Envie sugestões de pauta, anuncie ou mande sua mensagem." key="description" />
        <meta property="og:title" content="Fale Conosco | Sociedade ON" key="og:title" />
        <meta property="og:description" content="Entre em contato com a equipe do portal Sociedade ON e Rádio Sociedade." key="og:description" />
        <meta property="og:url" content={currentUrl} key="og:url" />
        <meta property="og:type" content="website" key="og:type" />
      </Head>

      <div className="max-w-6xl mx-auto w-full py-4 select-none">
        {/* Breadcrumb / Back button */}
        <div className="flex items-center gap-2 text-xs text-brand-gray mb-6">
          <Link href="/" className="flex items-center gap-1.5 hover:text-brand-yellow font-extrabold transition-colors uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao portal</span>
          </Link>
        </div>

        {/* Section Header */}
        <div className="border-b border-gray-200 pb-5 mb-8 text-left">
          <span className="inline-block w-8 h-1 mb-2 bg-brand-red rounded-none" />
          <h1 className="text-2xl sm:text-3xl font-black text-brand-blue uppercase tracking-tight leading-none">
            Fale Conosco
          </h1>
          <p className="text-xs text-brand-gray mt-1.5 font-semibold uppercase tracking-wider">
            Fale com o jornalismo, comercial ou equipe de programação da Rádio Sociedade
          </p>
        </div>

        {/* Main Grid: Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Wrapper (7/12) */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 border border-gray-100 shadow-xs rounded-none">
            {status === 'success' ? (
              <div className="py-12 flex flex-col items-center text-center gap-4 animate-float-in">
                <div className="w-16 h-16 rounded-none bg-emerald-50 text-emerald-500 border border-emerald-100 flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-brand-blue uppercase tracking-tight">
                  Mensagem Enviada!
                </h3>
                <p className="text-sm text-brand-gray max-w-md leading-relaxed font-semibold">
                  Sua mensagem foi entregue com sucesso à nossa equipe. Agradecemos o seu contato e responderemos o mais rápido possível.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 bg-brand-blue hover:bg-[#070e28] text-white px-6 py-3 font-black text-xs uppercase tracking-wider transition-colors rounded-none cursor-pointer"
                >
                  Enviar Outra Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h2 className="text-lg font-black text-brand-blue uppercase tracking-tight mb-2 border-b border-gray-50 pb-2">
                  Envie uma Mensagem
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      disabled={status === 'loading'}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: João Silva"
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-brand-red text-sm text-brand-blue placeholder-gray-400 outline-none transition-colors rounded-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                      Seu E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      disabled={status === 'loading'}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ex: joao@email.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-brand-red text-sm text-brand-blue placeholder-gray-400 outline-none transition-colors rounded-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      disabled={status === 'loading'}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ex: (71) 99999-9999"
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-brand-red text-sm text-brand-blue placeholder-gray-400 outline-none transition-colors rounded-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                      Assunto *
                    </label>
                    <input
                      type="text"
                      required
                      disabled={status === 'loading'}
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Ex: Sugestão de Pauta"
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-brand-red text-sm text-brand-blue placeholder-gray-400 outline-none transition-colors rounded-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                    Mensagem *
                  </label>
                  <textarea
                    required
                    rows={5}
                    disabled={status === 'loading'}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escreva sua mensagem aqui..."
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-brand-red text-sm text-brand-blue placeholder-gray-400 outline-none transition-colors resize-none rounded-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="mt-2 bg-brand-red hover:bg-[#c00017] text-white px-6 py-4 font-black text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 rounded-none cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Info + Contacts (5/12) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* WhatsApp CTA Card */}
            <a 
              href="https://wa.me/5571999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-emerald-500 hover:bg-emerald-600 text-white p-5 shadow-sm hover:shadow-md transition-all rounded-none group"
            >
              <div className="w-12 h-12 bg-white/20 flex items-center justify-center rounded-none group-hover:scale-105 transition-transform shrink-0">
                <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-black text-sm uppercase tracking-wider">WhatsApp da Redação</h3>
                <p className="text-xs text-white/90 font-medium mt-0.5">Envie fotos, vídeos e notícias: (71) 99999-9999</p>
              </div>
            </a>

            {/* Direct Department Emails */}
            <div className="bg-white p-6 border border-gray-100 shadow-xs rounded-none text-left">
              <h2 className="text-sm font-black text-brand-blue uppercase tracking-tight mb-4 border-b border-gray-50 pb-2">
                Nossos Departamentos
              </h2>
              
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-black uppercase text-brand-red tracking-wider">Jornalismo & Redação</span>
                  <a href="mailto:jornalismo@sociedadeon.com.br" className="text-sm font-bold text-brand-blue hover:text-brand-yellow transition-colors truncate">
                    jornalismo@sociedadeon.com.br
                  </a>
                </div>

                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-black uppercase text-brand-red tracking-wider">Departamento Comercial</span>
                  <a href="mailto:comercial@sociedadeon.com.br" className="text-sm font-bold text-brand-blue hover:text-brand-yellow transition-colors truncate">
                    comercial@sociedadeon.com.br
                  </a>
                </div>

                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-black uppercase text-brand-red tracking-wider">Estúdio da Rádio</span>
                  <a href="mailto:studio@sociedadeon.com.br" className="text-sm font-bold text-brand-blue hover:text-brand-yellow transition-colors truncate">
                    studio@sociedadeon.com.br
                  </a>
                </div>
              </div>
            </div>

            {/* Address & General Contacts Card */}
            <div className="bg-white p-6 border border-gray-100 shadow-xs rounded-none text-left flex flex-col gap-4">
              <h2 className="text-sm font-black text-brand-blue uppercase tracking-tight border-b border-gray-50 pb-2">
                Informações de Contato
              </h2>

              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-black uppercase text-brand-blue tracking-wider">Endereço</h4>
                  <p className="text-xs text-brand-gray font-semibold leading-relaxed mt-0.5">
                    Av. Tancredo Neves, 1234 - Caminho das Árvores<br />
                    Salvador - BA, CEP 41820-020
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Phone className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-black uppercase text-brand-blue tracking-wider">Telefone Geral</h4>
                  <p className="text-xs text-brand-gray font-bold mt-0.5">(71) 3333-3333</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Mail className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-black uppercase text-brand-blue tracking-wider">E-mail Administrativo</h4>
                  <p className="text-xs text-brand-gray font-bold mt-0.5">contato@sociedadeon.com.br</p>
                </div>
              </div>
            </div>

            {/* Stylized Mock Map Location widget */}
            <div className="bg-brand-blue text-white p-5 border border-brand-blue shadow-xs rounded-none text-left relative overflow-hidden flex flex-col justify-between h-40">
              {/* Background abstract layout shapes */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <div className="absolute left-4 top-4 w-12 h-12 border border-white rounded-none" />
                <div className="absolute left-10 top-16 w-32 h-1 border-b border-white border-dashed" />
                <div className="absolute left-24 top-0 w-1 h-36 border-r border-white border-dashed" />
                <div className="absolute right-8 top-12 w-16 h-16 border border-white rotate-45 rounded-none" />
              </div>
              
              <div className="relative z-10 flex gap-2.5 items-start">
                <div className="w-8 h-8 bg-brand-red flex items-center justify-center rounded-none shrink-0 mt-0.5 animate-bounce-slow">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-black text-sm uppercase tracking-wider leading-tight">Salvador, Bahia</h3>
                  <p className="text-[10px] text-white/80 font-semibold mt-1">Caminho das Árvores • Centro Financeiro</p>
                </div>
              </div>
              
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative z-10 w-fit bg-white text-brand-blue hover:bg-brand-yellow hover:text-brand-blue px-4 py-2 text-[10px] font-black uppercase tracking-wider transition-colors rounded-none text-center cursor-pointer shadow-sm"
              >
                Como Chegar
              </a>
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

  return {
    props: {
      currentUrl,
    },
  };
};
