import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { ArrowLeft, Calendar, Gift, CheckCircle2, AlertCircle, Sparkles, Send } from 'lucide-react';
import { getItems, getItem } from '@/lib/directus';
import { Promocao } from '@/types/promocao';
import { Noticia } from '@/types/noticia';
import TempoPublicacao from '@/components/common/widgets/TempoPublicacao';
import { getImageUrl } from '@/lib/directus';

interface PromocaoDetailPageProps {
  promocao: Promocao;
  outrasPromocoes: Promocao[];
  ultimasNoticias: Noticia[];
  currentUrl: string;
}

export default function PromocaoDetailPage({
  promocao,
  outrasPromocoes = [],
  ultimasNoticias = [],
  currentUrl
}: PromocaoDetailPageProps) {
  const imageUrl = getImageUrl(promocao.imagem);
  const isActive = promocao.status === 'ativa';

  // Form states
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [resposta, setResposta] = useState('');
  const [aceito, setAceito] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !email || !telefone || !cidade || !resposta || !aceito) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setFormState('submitting');

    // Simulate API request
    setTimeout(() => {
      setFormState('success');
      // Reset form
      setNome('');
      setEmail('');
      setTelefone('');
      setCidade('');
      setResposta('');
      setAceito(false);
    }, 1500);
  };

  return (
    <>
      <Head>
        <title>{promocao.titulo} | Promoções | Sociedade ON</title>
        <meta name="description" content={promocao.descricao} key="description" />
        <meta property="og:title" content={`${promocao.titulo} | Sociedade ON`} key="og:title" />
        <meta property="og:description" content={promocao.descricao} key="og:description" />
        {imageUrl && <meta property="og:image" content={imageUrl} key="og:image" />}
        <meta property="og:url" content={currentUrl} key="og:url" />
        <meta property="og:type" content="article" key="og:type" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Content */}
        <article className="lg:col-span-8 flex flex-col gap-6">
          {/* Breadcrumb */}
          <div className="flex justify-start items-center gap-6 text-xs text-brand-gray mb-2">
            <Link href="/" className="flex items-center gap-1.5 hover:text-brand-yellow font-extrabold transition-colors uppercase tracking-wider">
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar</span>
            </Link>
            <div className="flex items-center gap-2">
              <Link href="/" className="hover:text-brand-yellow font-bold">Home</Link>
              <span>/</span>
              <Link href="/promocoes" className="hover:text-brand-yellow font-bold">Promoções</Link>
              <span>/</span>
              <span className="text-brand-blue font-black truncate max-w-[200px]">{promocao.titulo}</span>
            </div>
          </div>

          {/* Heading Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span
                className={`text-[10px] font-black uppercase px-2.5 py-1 rounded shadow-xs flex items-center gap-1 text-white ${
                  isActive ? 'bg-emerald-600' : 'bg-gray-600'
                }`}
              >
                {isActive ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                {isActive ? 'Promoção Ativa' : 'Promoção Encerrada'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-brand-blue leading-tight tracking-tight">
              {promocao.titulo}
            </h1>

            {/* Meta details */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-y-2 gap-x-6 text-xs font-bold text-brand-gray border-t border-b border-gray-100 py-3 uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <Gift className="w-4 h-4 text-brand-yellow" />
                <span>Prêmio: {promocao.premio}</span>
              </span>
              <span className="flex items-center gap-1.5 sm:ml-auto">
                <Calendar className="w-4 h-4" />
                <span>Até {new Date(promocao.dataFim).toLocaleDateString('pt-BR')}</span>
              </span>
            </div>
          </div>

          {/* Image */}
          {imageUrl && (
            <div className="aspect-[21/10] w-full relative overflow-hidden shadow-2xs bg-gray-50">
              <img
                src={imageUrl}
                alt={promocao.titulo}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content Description */}
          <div className="prose prose-lg max-w-none text-brand-blue leading-relaxed text-sm sm:text-base space-y-5">
            {promocao.conteudo.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-800 antialiased font-sans">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Participation Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            {isActive ? (
              <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-none shadow-sm flex flex-col gap-6">
                <div>
                  <h3 className="text-lg font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-brand-yellow animate-pulse" />
                    Formulário de Participação
                  </h3>
                  <p className="text-xs text-brand-gray mt-1 font-semibold leading-relaxed">
                    Preencha as informações abaixo com atenção para garantir sua inscrição oficial no sorteio.
                  </p>
                </div>

                {formState === 'success' ? (
                  <div className="bg-emerald-50 border border-emerald-200 p-6 text-center flex flex-col items-center gap-3 animate-fade-in">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                    <h4 className="font-black text-brand-blue text-base">Inscrição Efetuada com Sucesso!</h4>
                    <p className="text-xs text-gray-600 leading-relaxed font-semibold max-w-md">
                      Parabéns! Sua participação foi registrada no nosso sistema. Fique ligado na programação da Rádio Sociedade e boa sorte!
                    </p>
                    <button
                      onClick={() => setFormState('idle')}
                      className="mt-2 text-xs font-black text-brand-blue hover:text-brand-yellow uppercase tracking-wider cursor-pointer"
                    >
                      Inscrever outra participação
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Fields Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-2xs font-black text-brand-blue uppercase tracking-wide">Nome Completo *</label>
                        <input
                          type="text"
                          required
                          value={nome}
                          onChange={(e) => setNome(e.target.value)}
                          placeholder="Digite seu nome..."
                          className="px-3 py-2 bg-gray-50 border border-gray-200 focus:border-brand-yellow focus:bg-white text-xs text-brand-blue placeholder-gray-400 outline-none transition-all h-10 rounded-none"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-2xs font-black text-brand-blue uppercase tracking-wide">E-mail *</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="seuemail@exemplo.com"
                          className="px-3 py-2 bg-gray-50 border border-gray-200 focus:border-brand-yellow focus:bg-white text-xs text-brand-blue placeholder-gray-400 outline-none transition-all h-10 rounded-none"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-2xs font-black text-brand-blue uppercase tracking-wide">Celular/WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={telefone}
                          onChange={(e) => setTelefone(e.target.value)}
                          placeholder="(71) 99999-9999"
                          className="px-3 py-2 bg-gray-50 border border-gray-200 focus:border-brand-yellow focus:bg-white text-xs text-brand-blue placeholder-gray-400 outline-none transition-all h-10 rounded-none"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-2xs font-black text-brand-blue uppercase tracking-wide">Cidade (Bahia) *</label>
                        <input
                          type="text"
                          required
                          value={cidade}
                          onChange={(e) => setCidade(e.target.value)}
                          placeholder="Sua cidade..."
                          className="px-3 py-2 bg-gray-50 border border-gray-200 focus:border-brand-yellow focus:bg-white text-xs text-brand-blue placeholder-gray-400 outline-none transition-all h-10 rounded-none"
                        />
                      </div>
                    </div>

                    {/* Question Field */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-2xs font-black text-brand-blue uppercase tracking-wide">
                        Pergunta da Promoção: Qual é a rádio mais querida e ouvida da Bahia? *
                      </label>
                      <input
                        type="text"
                        required
                        value={resposta}
                        onChange={(e) => setResposta(e.target.value)}
                        placeholder="Sua resposta..."
                        className="px-3 py-2 bg-gray-50 border border-gray-200 focus:border-brand-yellow focus:bg-white text-xs text-brand-blue placeholder-gray-400 outline-none transition-all h-10 rounded-none"
                      />
                    </div>

                    {/* Terms Checkbox */}
                    <div className="flex items-start gap-2.5 mt-2">
                      <input
                        type="checkbox"
                        id="termos-checkbox"
                        required
                        checked={aceito}
                        onChange={(e) => setAceito(e.target.checked)}
                        className="mt-0.5 w-4 h-4 accent-brand-blue border-gray-300 rounded cursor-pointer"
                      />
                      <label htmlFor="termos-checkbox" className="text-3xs sm:text-2xs text-brand-gray font-semibold leading-relaxed cursor-pointer select-none">
                        Aceito os regulamentos oficiais de participação desta promoção e autorizo o portal a entrar em contato via telefone ou e-mail caso eu seja o sorteado.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="mt-4 flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-yellow hover:text-brand-blue disabled:bg-gray-400 disabled:text-white text-white py-3 px-6 font-black text-xs uppercase tracking-wider transition-all cursor-pointer h-12 shadow-sm rounded-none active:scale-98"
                    >
                      <Send className="w-3.5 h-3.5" />
                      {formState === 'submitting' ? 'Enviando...' : 'Enviar Participação'}
                    </button>
                  </form>
                )}
              </div>
            ) : (
              <div className="bg-gray-50 border border-gray-200 p-6 md:p-8 rounded-none shadow-2xs flex flex-col gap-4">
                <div className="flex items-center gap-2 text-brand-blue">
                  <AlertCircle className="w-5 h-5 text-gray-500 shrink-0" />
                  <h3 className="text-base font-black uppercase tracking-tight">Sorteio Finalizado</h3>
                </div>
                <div className="bg-white p-5 border border-gray-100 flex flex-col gap-3 rounded-none shadow-3xs">
                  <span className="text-3xs uppercase tracking-widest font-black text-brand-yellow">RESULTADO DO SORTEIO</span>
                  <div className="flex flex-col gap-1 text-sm text-brand-blue font-bold">
                    <p>Ganhador: <span className="font-black">Marcos Silva</span></p>
                    <p>Cidade: <span className="font-semibold text-brand-gray">Salvador - BA</span></p>
                    <p>Prêmio Entregue: <span className="font-semibold text-brand-gray">{promocao.premio}</span></p>
                  </div>
                  <p className="text-xs text-brand-gray mt-2 leading-relaxed font-semibold">
                    Esta promoção encerrou-se no dia {new Date(promocao.dataFim).toLocaleDateString('pt-BR')}. Parabéns ao ganhador! Fique de olho na lista de promoções para ver os novos sorteios do portal.
                  </p>
                </div>
              </div>
            )}
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 lg:border-l lg:border-gray-200 lg:pl-8 flex flex-col gap-8 self-stretch">
          {/* Outras Promocoes */}
          {outrasPromocoes.length > 0 && (
            <div className="flex flex-col gap-4">
              <div className="border-b border-gray-200 pb-2">
                <h3 className="text-xs font-black text-brand-blue uppercase tracking-wider">
                  Outras Promoções
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                {outrasPromocoes.map((item) => {
                  const itemImageUrl = getImageUrl(item.imagem);
                  return (
                    <Link
                      key={item.id}
                      href={`/promocoes/${item.slug}`}
                      className="group flex gap-3 items-start text-left hover:opacity-95 transition-opacity"
                    >
                      {itemImageUrl && (
                        <div className="w-16 h-12 relative overflow-hidden shrink-0 bg-gray-50 border border-gray-100">
                          <img
                            src={itemImageUrl}
                            alt={item.titulo}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm text-brand-blue group-hover:text-brand-yellow transition-colors leading-tight line-clamp-2">
                          {item.titulo}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span
                            className={`text-[8px] font-black uppercase px-1.5 py-0.5 rounded text-white ${
                              item.status === 'ativa' ? 'bg-emerald-600' : 'bg-gray-500'
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Últimas Notícias Widget */}
          {ultimasNoticias.length > 0 && (
            <div className="flex flex-col gap-4">
              <div className="border-b border-gray-200 pb-2">
                <h3 className="text-xs font-black text-brand-blue uppercase tracking-wider">
                  Últimas Notícias
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                {ultimasNoticias.map((item) => {
                  const latestImageUrl = getImageUrl(item.imagem);
                  return (
                    <Link
                      key={item.id}
                      href={`/${item.editoria.slug}/${item.slug}`}
                      className="group flex gap-3 items-start text-left hover:opacity-95 transition-opacity"
                    >
                      {latestImageUrl && (
                        <div className="w-16 h-12 relative overflow-hidden shrink-0 bg-gray-50 border border-gray-100">
                          <img
                            src={latestImageUrl}
                            alt={item.titulo}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm text-brand-blue group-hover:text-brand-yellow transition-colors leading-tight line-clamp-2">
                          {item.titulo}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span className="text-2xs font-black text-brand-yellow uppercase tracking-wider">
                            {item.editoria.nome}
                          </span>
                          <span className="text-2xs font-bold text-brand-gray">
                            <TempoPublicacao date={item.publicadoEm} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </aside>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params || {};
  const host = context.req.headers.host || 'sociedadeon.com.br';
  const protocol = context.req.headers['x-forwarded-proto'] || 'https';
  const currentUrl = `${protocol}://${host}${context.resolvedUrl}`;

  if (!slug || Array.isArray(slug)) {
    return { notFound: true };
  }

  const [promocao, todasPromocoes, ultimasNoticias] = await Promise.all([
    getItem<Promocao>('promocoes', slug),
    getItems<Promocao>('promocoes'),
    getItems<Noticia>('noticias', { limit: 5 })
  ]);

  if (!promocao) {
    return { notFound: true };
  }

  // Filter out the current promotion and take up to 4 other promotions for sidebar
  const outrasPromocoes = todasPromocoes
    .filter((p) => p.id !== promocao.id)
    .slice(0, 4);

  return {
    props: {
      promocao,
      outrasPromocoes,
      ultimasNoticias,
      currentUrl
    }
  };
};
