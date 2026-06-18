import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { BarChart3, Users, Eye, Radio, Mail, Phone, MapPin } from 'lucide-react';

export default function Comercial() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    mensagem: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setSubmitted(true);
    setFormData({ nome: '', email: '', telefone: '', empresa: '', mensagem: '' });
  };
  const audiencia = [
    { label: 'Pageviews/mês', valor: '2.5M+', icon: Eye, cor: 'from-blue-500 to-blue-600' },
    { label: 'Usuários únicos', valor: '850K+', icon: Users, cor: 'from-emerald-500 to-emerald-600' },
    { label: 'Ouvintes rádio', valor: '1.2M+', icon: Radio, cor: 'from-purple-500 to-purple-600' },
    { label: 'Seguidores sociais', valor: '500K+', icon: BarChart3, cor: 'from-amber-500 to-amber-600' },
  ];



  return (
    <>
      <Head>
        <title>Comercial | Sociedade ON — Anuncie no Maior Portal da Bahia</title>
        <meta name="description" content="Anuncie no Sociedade ON e alcance milhões de baianos. Conheça nossos formatos publicitários, dados de audiência e entre em contato com a equipe comercial." key="description" />
        <meta property="og:title" content="Comercial | Sociedade ON — Anuncie no Maior Portal da Bahia" key="og:title" />
        <meta property="og:description" content="Anuncie no Sociedade ON e alcance milhões de baianos." key="og:description" />
      </Head>

      <div className="flex flex-col gap-10 select-none">

        {/* Hero Institucional */}
        <section className="relative overflow-hidden bg-brand-blue text-white py-16 px-8 md:px-16 -mx-4 -mt-6 md:-mt-8">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-yellow mb-4 block">
              COMERCIAL
            </span>
            <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight mb-4">
              Anuncie no maior portal de notícias e rádio da{' '}
              <span className="text-brand-yellow">Bahia</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl font-medium">
              O Sociedade ON conecta sua marca a milhões de baianos que buscam informação de qualidade. 
              Com mais de 70 anos de tradição, a Rádio Sociedade da Bahia é referência em jornalismo e agora 
              leva essa credibilidade para o digital.
            </p>
            <div className="flex gap-3 mt-8">
              <a
                href="#contato"
                className="bg-brand-yellow hover:bg-[#C0001A] text-white font-black text-xs uppercase tracking-wider py-3 px-6 transition-colors duration-200 active:scale-95"
              >
                FALE COM A EQUIPE COMERCIAL
              </a>
            </div>
          </div>
        </section>

        {/* Audiência e Alcance */}
        <section>
          <div className="mb-6 border-b border-gray-100 pb-3">
            <h2 className="text-sm md:text-base font-black text-brand-blue uppercase tracking-tight">
              AUDIÊNCIA E ALCANCE
            </h2>
            <p className="text-xs text-brand-gray mt-1 font-medium">
              Números que demonstram a força da marca Sociedade ON
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {audiencia.map((item) => (
              <div
                key={item.label}
                className="group relative overflow-hidden bg-white border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:border-brand-blue/10"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gray-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-blue/5 transition-colors" />
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.cor} flex items-center justify-center mb-4 shadow-sm`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-2xl md:text-3xl font-black text-brand-blue leading-none mb-1">
                  {item.valor}
                </p>
                <p className="text-[11px] font-bold text-brand-gray uppercase tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-amber-50/50 border border-amber-100 rounded-sm">
            <p className="text-[11px] text-amber-700 font-semibold">
              * Dados aproximados para fins de apresentação. Números oficiais auditados disponíveis sob consulta.
            </p>
          </div>
        </section>



        {/* Contato */}
        <section id="contato" className="py-8 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Coluna da Esquerda: Textos + Form */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red mb-3 block">
                    ENTRE EM CONTATO
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black leading-tight text-brand-blue mb-2">
                    Fale com nossa equipe comercial
                  </h2>
                  <p className="text-sm text-brand-gray leading-relaxed font-medium">
                    Nosso time está pronto para ajudar sua marca a alcançar o público certo. 
                    Preencha o formulário abaixo e solicite uma proposta personalizada.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 p-6 text-center rounded-sm animate-float-in">
                    <h3 className="text-emerald-600 font-black text-base uppercase tracking-wider mb-2">
                      Mensagem Enviada!
                    </h3>
                    <p className="text-xs text-brand-gray leading-relaxed font-medium">
                      Agradecemos o contato. Nossa equipe comercial analisará suas informações e retornará em breve.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-[10px] font-black text-brand-red hover:text-brand-yellow uppercase tracking-wider underline cursor-pointer"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="nome" className="text-[10px] font-black uppercase tracking-wider text-brand-blue/60 mb-1.5 block">
                          Nome Completo
                        </label>
                        <input
                          type="text"
                          id="nome"
                          required
                          value={formData.nome}
                          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200/80 focus:border-brand-yellow focus:bg-white focus:ring-1 focus:ring-brand-yellow outline-none text-brand-blue px-3.5 py-2.5 text-xs transition-all placeholder-gray-400"
                          placeholder="Ex: Lucas Silva"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-[10px] font-black uppercase tracking-wider text-brand-blue/60 mb-1.5 block">
                          E-mail Corporativo
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200/80 focus:border-brand-yellow focus:bg-white focus:ring-1 focus:ring-brand-yellow outline-none text-brand-blue px-3.5 py-2.5 text-xs transition-all placeholder-gray-400"
                          placeholder="Ex: lucas@empresa.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="telefone" className="text-[10px] font-black uppercase tracking-wider text-brand-blue/60 mb-1.5 block">
                          Telefone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          id="telefone"
                          required
                          value={formData.telefone}
                          onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200/80 focus:border-brand-yellow focus:bg-white focus:ring-1 focus:ring-brand-yellow outline-none text-brand-blue px-3.5 py-2.5 text-xs transition-all placeholder-gray-400"
                          placeholder="Ex: (71) 99999-9999"
                        />
                      </div>
                      <div>
                        <label htmlFor="empresa" className="text-[10px] font-black uppercase tracking-wider text-brand-blue/60 mb-1.5 block">
                          Nome da Empresa
                        </label>
                        <input
                          type="text"
                          id="empresa"
                          value={formData.empresa}
                          onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200/80 focus:border-brand-yellow focus:bg-white focus:ring-1 focus:ring-brand-yellow outline-none text-brand-blue px-3.5 py-2.5 text-xs transition-all placeholder-gray-400"
                          placeholder="Ex: Minha Empresa"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="mensagem" className="text-[10px] font-black uppercase tracking-wider text-brand-blue/60 mb-1.5 block">
                        Como podemos ajudar sua marca?
                      </label>
                      <textarea
                        id="mensagem"
                        required
                        rows={4}
                        value={formData.mensagem}
                        onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200/80 focus:border-brand-yellow focus:bg-white focus:ring-1 focus:ring-brand-yellow outline-none text-brand-blue px-3.5 py-2.5 text-xs transition-all resize-none placeholder-gray-400"
                        placeholder="Descreva brevemente o objetivo da sua campanha..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-brand-yellow hover:bg-[#C0001A] text-white font-black text-xs uppercase tracking-wider py-3 px-6 transition-all duration-200 active:scale-[0.98] cursor-pointer w-full text-center mt-2"
                    >
                      SOLICITAR CONTATO COMERCIAL
                    </button>
                  </form>
                )}
              </div>

              {/* Coluna da Direita: Canais de Contato Direto */}
              <div className="lg:col-span-5 flex flex-col gap-4 lg:mt-12">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue/40 mb-1 block lg:hidden">
                  CANAIS DIRETOS
                </span>

                <a
                  href="mailto:comercial@sociedadeon.com.br"
                  className="flex items-start gap-4 p-4 bg-gray-50/50 border border-gray-100 hover:border-brand-yellow/30 hover:bg-gray-50 transition-all duration-300 group rounded-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/5 flex items-center justify-center shrink-0 group-hover:bg-brand-yellow transition-colors">
                    <Mail className="w-5 h-5 text-brand-blue group-hover:text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-wide text-brand-blue/50">E-mail</h4>
                    <p className="text-xs font-bold text-brand-blue group-hover:text-brand-yellow transition-colors mt-0.5 break-all">
                      comercial@sociedadeon.com.br
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+557132222222"
                  className="flex items-start gap-4 p-4 bg-gray-50/50 border border-gray-100 hover:border-brand-yellow/30 hover:bg-gray-50 transition-all duration-300 group rounded-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/5 flex items-center justify-center shrink-0 group-hover:bg-brand-yellow transition-colors">
                    <Phone className="w-5 h-5 text-brand-blue group-hover:text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-wide text-brand-blue/50">Telefone</h4>
                    <p className="text-xs font-bold text-brand-blue group-hover:text-brand-yellow transition-colors mt-0.5">
                      (71) 3322-2222
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-gray-50/50 border border-gray-100 rounded-sm">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-wide text-brand-blue/50">Endereço</h4>
                    <p className="text-xs font-bold text-brand-blue mt-0.5 leading-relaxed">
                      Rádio Sociedade da Bahia, Salvador — BA
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
}
