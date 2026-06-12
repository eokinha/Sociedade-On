import { Noticia } from '../types/noticia';
import { Editoria } from '../types/editoria';
import { Podcast } from '../types/podcast';

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL || '';

// Mock Data
export const mockEditorias: Editoria[] = [
  { id: '1', nome: 'Salvador', slug: 'salvador', cor: '#0D1B4B' },
  { id: '2', nome: 'Bahia', slug: 'bahia', cor: '#F5A800' },
  { id: '3', nome: 'Brasil', slug: 'brasil', cor: '#E8001C' },
  { id: '4', nome: 'Política', slug: 'politica', cor: '#10B981' },
  { id: '5', nome: 'Economia', slug: 'economia', cor: '#3B82F6' },
  { id: '6', nome: 'Esportes', slug: 'esportes', cor: '#8B5CF6' },
  { id: '7', nome: 'Entretenimento', slug: 'entretenimento', cor: '#EC4899' },
];

const now = new Date();

export const mockNoticias: Noticia[] = [
  {
    id: 'n1',
    titulo: 'Modernização do Pelourinho atrai recorde de turistas neste São João e impulsiona comércio local',
    subtitulo: 'Casarões históricos revitalizados e programação cultural descentralizada geram ocupação hoteleira máxima na capital baiana.',
    conteudo: `O Pelourinho, coração histórico de Salvador, vive um de seus melhores momentos em termos de visitação e movimentação econômica neste período junino. Com a conclusão das obras de revitalização das fachadas históricas e a instalação de uma nova iluminação cênica em LED, o circuito cultural atraiu cerca de 250 mil turistas apenas no primeiro final de semana de festividades.

Segundo a Associação Brasileira da Indústria de Hotéis na Bahia (ABIH-BA), a ocupação média dos hotéis no Centro Histórico atingiu a marca histórica de 98.7%. O comércio de artesanatos, restaurantes de comida típica e os tradicionais ensaios de blocos afro registraram aumento no faturamento estimado de 34% em relação ao mesmo período do ano anterior.

O prefeito de Salvador destacou que as intervenções urbanísticas foram pensadas para preservar o patrimônio material e ao mesmo tempo dar maior segurança e conforto aos pedestres. "O turismo qualificado retorna quando encontra uma cidade que cuida do seu morador primeiro. O novo Pelourinho é um orgulho para os soteropolitanos e um cartão postal que reluz para o mundo", declarou durante a abertura oficial do festival de quadrilhas juninas.

Além dos palcos principais, os largos do Pelourinho ganharam decorações interativas inspiradas no cangaço e na literatura de cordel, proporcionando espaços instagramáveis que amplificam a divulgação da cultura baiana nas redes sociais. A segurança também foi reforçada com o monitoramento por câmeras de reconhecimento facial integradas ao centro de operações da Guarda Municipal, garantindo uma festa pacífica e familiar.`,
    slug: 'modernizacao-do-pelourinho-atrai-recorde-de-turistas-neste-sao-joao',
    imagem: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=1200&auto=format&fit=crop&q=80',
    editoria: mockEditorias[0], // Salvador
    publicadoEm: new Date(now.getTime() - 25 * 60000).toISOString(), // 25 min ago
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    views: 1245
  },
  {
    id: 'n2',
    titulo: 'Governo da Bahia anuncia novos incentivos fiscais para implantação de polo tecnológico de energia solar',
    subtitulo: 'Região norte do estado receberá consórcio internacional com investimento previsto de R$ 1.2 bilhão e geração de 3 mil empregos diretos.',
    conteudo: `O Governo do Estado da Bahia oficializou nesta manhã um pacote bilionário de incentivos fiscais direcionado à produção de painéis fotovoltaicos e baterias de lítio no semiárido baiano. A iniciativa visa consolidar o estado como líder absoluto na transição de matriz energética limpa no Nordeste.

O acordo foi assinado junto a um consórcio liderado por investidores alemães e chineses na governadoria, em Salvador. O novo polo industrial será instalado na microrregião de Juazeiro e Sobradinho, locais que apresentam os maiores índices de irradiação solar do país ao longo de todo o ano.

Além do diferimento do ICMS sobre máquinas importadas, o plano estadual inclui parcerias com o Senai e universidades estaduais para a capacitação profissional gratuita de jovens da região, criando mão de obra qualificada e reduzindo o desemprego local. A previsão de início das obras civis é para o terceiro trimestre deste ano, com início de operações comerciais agendado para meados do próximo ano.`,
    slug: 'governo-da-bahia-anuncia-novos-incentivos-fiscais-polo-solar',
    imagem: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80',
    editoria: mockEditorias[1], // Bahia
    publicadoEm: new Date(now.getTime() - 90 * 60000).toISOString(), // 1.5h ago
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    views: 890
  },
  {
    id: 'n3',
    titulo: 'Inflação oficial fecha o mês em queda impulsionada por baixa nos preços dos combustíveis e alimentos',
    subtitulo: 'Índice de Preços ao Consumidor Amplo (IPCA) registra recuo de 0,15% e traz alívio para o orçamento das famílias.',
    conteudo: `A inflação oficial do país apresentou deflação no último mês, impulsionada principalmente pela queda na cotação internacional do petróleo e pela colheita recorde da safra de grãos, que aumentou a oferta de alimentos nos supermercados.

Segundo os dados divulgados pelo Instituto de Geografia e Estatística, o grupo de Transportes teve a maior retração, refletindo os reajustes nas refinarias. No setor alimentício, hortaliças e carnes de frango puxaram a média para baixo, facilitando o acesso da população de baixa renda à cesta básica.

Analistas de mercado apontam que esse cenário abre margem para que o Banco Central acelere o ritmo de cortes na taxa básica de juros (Selic) na próxima reunião do Copom, o que pode baratear o crédito e reaquecer o financiamento imobiliário e a venda de bens de consumo duráveis nos próximos meses.`,
    slug: 'inflacao-oficial-fecha-o-mes-em-queda-combustiveis-alimentos',
    imagem: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80',
    editoria: mockEditorias[4], // Economia
    publicadoEm: new Date(now.getTime() - 180 * 60000).toISOString(), // 3h ago
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    views: 2356
  },
  {
    id: 'n4',
    titulo: 'Senado aprova texto base de reforma tributária que unifica impostos sobre consumo',
    subtitulo: 'Nova emenda constitucional simplifica o sistema tributário brasileiro por meio da criação do IVA Dual, prevendo transição gradual de dez anos.',
    conteudo: `Em uma sessão histórica com votação estendida até a madrugada, o Senado Federal aprovou por ampla maioria o texto-base da PEC da Reforma Tributária. O projeto agora retorna à Câmara dos Deputados devido às alterações pontuais feitas pelos senadores em relação a isenções de produtos da cesta básica e regimes especiais de tributação.

A mudança principal reside na simplificação de cinco tributos federais, estaduais e municipais (PIS, Cofins, IPI, ICMS e ISS) em um Imposto sobre Valor Agregado (IVA) Dual, composto pela Contribuição sobre Bens e Serviços (CBS) federal e o Imposto sobre Bens e Serviços (IBS) subnacional.

Governadores de estados do Nordeste celebraram a manutenção do Fundo de Desenvolvimento Regional, criado para compensar a perda de arrecadação de estados menos industrializados e incentivar investimentos em infraestrutura e inovação. A alíquota padrão estimada do novo imposto será definida apenas por lei complementar posterior.`,
    slug: 'senado-aprova-texto-base-de-reforma-tributaria-iva-dual',
    imagem: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&auto=format&fit=crop&q=80',
    editoria: mockEditorias[3], // Política
    publicadoEm: new Date(now.getTime() - 300 * 60000).toISOString(), // 5h ago
    views: 4120
  },
  {
    id: 'n5',
    titulo: 'Bahia vence o clássico no Barradão com gol nos acréscimos e assume a liderança do campeonato',
    subtitulo: 'Partida eletrizante termina em 3 a 2 após virada dramática e incendeia a torcida tricolor em todo o estado.',
    conteudo: `O clássico Ba-Vi deste domingo no estádio Manoel Barradas entrou para a história como um dos mais disputados dos últimos anos. Com duas expulsões e alternâncias no placar, o Esporte Clube Bahia superou o arquirrival Vitória por 3 a 2, consolidando-se no topo da tabela de classificação geral.

O Vitória começou impondo o ritmo de jogo e abriu o placar logo aos 12 minutos do primeiro tempo com chute cruzado. O Bahia empatou no início da segunda etapa, mas sofreu o segundo gol logo em seguida em lance de contra-ataque rápido.

A virada tricolor começou com um cabeceio certeiro aos 38 minutos. Quando a partida parecia caminhar para o empate, o meia-atacante aproveitou uma sobra na entrada da grande área aos 48 minutos para chutar rasteiro no canto esquerdo, definindo a vitória e garantindo os três pontos valiosos no campeonato.`,
    slug: 'bahia-vence-classico-no-barradao-gol-nos-acrescimos',
    imagem: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80',
    editoria: mockEditorias[5], // Esportes
    publicadoEm: new Date(now.getTime() - 420 * 60000).toISOString(), // 7h ago
    views: 5670
  },
  {
    id: 'n6',
    titulo: 'Festival de Inverno de Vitória da Conquista anuncia line-up oficial com grandes nomes da MPB e do Pop Rock',
    subtitulo: 'Evento tradicional do sudoeste baiano projeta atrair mais de 80 mil pessoas nos três dias de shows em agosto.',
    conteudo: `O Festival de Inverno da Bahia (FIB) revelou os nomes que irão compor a grade principal de seu palco na edição deste ano. O evento, realizado em Vitória da Conquista, destaca-se por movimentar o turismo do interior com temperaturas que chegam a marcar 12 graus no auge do inverno baiano.

Entre as atrações nacionais confirmadas, estão artistas icônicos da MPB, bandas consagradas de pop rock nacional e estrelas da nova geração da música nordestina. A estrutura da festa também contará com praça de alimentação gourmetizada integrada, ativações tecnológicas das marcas patrocinadoras e um palco alternativo dedicado à valorização do talento de artistas regionais.

Os ingressos começam a ser vendidos nos pontos oficiais credenciados e internet a partir da próxima terça-feira, com preços promocionais para o passaporte que dá acesso a todos os dias do festival.`,
    slug: 'festival-de-inverno-vitoria-da-conquista-line-up-oficial',
    imagem: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=80',
    editoria: mockEditorias[6], // Entretenimento
    publicadoEm: new Date(now.getTime() - 1440 * 60000).toISOString(), // 1 day ago
    views: 1980
  },
  {
    id: 'n7',
    titulo: 'Estudo revela potencial arqueológico intocado em cavernas da Chapada Diamantina',
    subtitulo: 'Pesquisadores encontram pinturas rupestres e fósseis de megafauna pré-histórica em áreas de preservação ambiental fechadas ao público.',
    conteudo: `Um grupo multidisciplinar de arqueólogos e geólogos de universidades federais publicou um relatório preliminar detalhando novas descobertas em cavernas inexploradas no Parque Nacional da Chapada Diamantina.

Os pesquisadores catalogaram dezenas de inscrições em paredes rochosas datadas de mais de 8 mil anos atrás, retratando cenas de caça e rituais sagrados de populações caçadoras-coletoras que habitavam a região muito antes da colonização.

Além disso, foram recuperados fragmentos ósseos fossilizados atribuídos a preguiças-gigantes e tigres-dente-de-sabre que vagavam pelo interior do estado no período do Pleistoceno. O material será catalogado e exposto temporariamente em museus de geologia do estado de forma rotativa.`,
    slug: 'estudo-revela-potencial-arqueologico-cavernas-chapada-diamantina',
    imagem: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80',
    editoria: mockEditorias[1], // Bahia
    publicadoEm: new Date(now.getTime() - 2880 * 60000).toISOString(), // 2 days ago
    views: 1105
  },
  {
    id: 'n8',
    titulo: 'Prefeitura de Salvador anuncia novo programa de habitação popular no subúrbio ferroviário',
    subtitulo: 'Projeto prevê construção de 1.200 unidades habitacionais com financiamento da Caixa Econômica Federal.',
    conteudo: `A Prefeitura de Salvador lançou nesta terça-feira o Programa Morar Bem Salvador, voltado para famílias de baixa renda que vivem em áreas de risco no Subúrbio Ferroviário. O projeto conta com aporte inicial de R$ 480 milhões do governo federal via Caixa Econômica Federal.

As obras serão realizadas em etapas e devem beneficiar mais de 4 mil pessoas diretamente. Cada unidade terá dois quartos, sala, cozinha e área de serviço, com infraestrutura de saneamento básico, iluminação pública LED e calçamento padronizado nas vias de acesso.`,
    slug: 'prefeitura-de-salvador-anuncia-programa-habitacao-popular-suburbio',
    imagem: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&auto=format&fit=crop&q=80',
    editoria: mockEditorias[0], // Salvador
    publicadoEm: new Date(now.getTime() - 45 * 60000).toISOString(), // 45 min ago
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    views: 743
  },
  {
    id: 'n9',
    titulo: 'Seleção Brasileira sub-20 vence Argentina e avança para final do Sul-Americano',
    subtitulo: 'Gol nos acréscimos garante vaga histórica e acirra rivalidade continental no futebol juvenil.',
    conteudo: `A Seleção Brasileira sub-20 protagonizou uma tarde épica ao eliminar a Argentina por 2 a 1 nos acréscimos, garantindo vaga na grande final do Campeonato Sul-Americano Sub-20. A partida, disputada em Cali, na Colômbia, foi marcada por alta intensidade e muita disputa física.

O Brasil abriu o placar ainda no primeiro tempo com finalização precisa do atacante, mas levou o empate logo após a retomada da segunda etapa. Com o duelo equilibrado, o gol da classificação saiu aos 47 minutos do segundo tempo, em cabeçada certeira que levou os brasileiros ao delírio nas arquibancadas.`,
    slug: 'selecao-brasileira-sub-20-vence-argentina-final-sul-americano',
    imagem: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop&q=80',
    editoria: mockEditorias[5], // Esportes
    publicadoEm: new Date(now.getTime() - 120 * 60000).toISOString(), // 2h ago
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    views: 3210
  }
];

export const mockPodcasts: Podcast[] = [
  {
    id: 'p1',
    titulo: 'Sociedade Debate',
    capa: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&auto=format&fit=crop&q=80',
    descricao: 'As principais discussões de política, economia e sociedade no dia a dia da Bahia.',
    episodios: [
      { id: 'p1_e1', titulo: 'O Futuro da Mobilidade em Salvador', duracao: '45:20', publicadoEm: 'Ontem', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', descricao: 'Debate sobre as novas linhas de BRT e integração com metrô.' },
      { id: 'p1_e2', titulo: 'Reforma Tributária e Impacto no Comércio Baiano', duracao: '50:15', publicadoEm: 'Há 3 dias', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', descricao: 'Especialistas analisam as novas alíquotas do IVA.' }
    ]
  },
  {
    id: 'p2',
    titulo: 'Esporte Show',
    capa: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&auto=format&fit=crop&q=80',
    descricao: 'Tudo sobre o futebol baiano, análises táticas e bastidores do Ba-Vi.',
    episodios: [
      { id: 'p2_e1', titulo: 'Rescaldo do Clássico Ba-Vi', duracao: '32:40', publicadoEm: 'Há 2 dias', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3', descricao: 'Análise tática detalhada da grande virada tricolor.' },
      { id: 'p2_e2', titulo: 'Planejamento para o Campeonato Brasileiro', duracao: '28:10', publicadoEm: 'Há 1 semana', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3', descricao: 'Reforços e saídas no elenco dos clubes baianos.' }
    ]
  },
  {
    id: 'p3',
    titulo: 'Papo de Artista',
    capa: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&auto=format&fit=crop&q=80',
    descricao: 'Entrevistas exclusivas com cantores, atores e produtores culturais que agitam a Bahia.',
    episodios: [
      { id: 'p3_e1', titulo: 'Entrevista com o Rei do Axé', duracao: '58:00', publicadoEm: 'Há 5 dias', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3', descricao: 'Um papo emocionante sobre os 40 anos de carreira nos trios elétricos.' }
    ]
  }
];

// Helper to filter items in-memory for mocking
export async function getItems<T>(collection: string, query?: any): Promise<T[]> {
  if (DIRECTUS_URL) {
    try {
      const response = await fetch(`${DIRECTUS_URL}/items/${collection}?${new URLSearchParams(query || {})}`);
      if (response.ok) {
        const json = await response.json();
        return json.data as T[];
      }
    } catch (err) {
      console.warn(`Directus failed, loading mock data for ${collection}:`, err);
    }
  }

  // Fallbacks
  if (collection === 'noticias') {
    let result = [...mockNoticias];
    if (query?.filter?.editoria?.slug?._eq) {
      const slug = query.filter.editoria.slug._eq;
      result = result.filter(n => n.editoria.slug === slug);
    }
    if (query?.search) {
      const searchTerm = query.search.toLowerCase();
      result = result.filter(
        n =>
          n.titulo.toLowerCase().includes(searchTerm) ||
          n.subtitulo.toLowerCase().includes(searchTerm) ||
          n.conteudo.toLowerCase().includes(searchTerm)
      );
    }
    if (query?.sort === '-views') {
      result.sort((a, b) => (b.views || 0) - (a.views || 0));
    }
    if (query?.limit) {
      result = result.slice(0, query.limit);
    }
    return result as unknown as T[];
  }

  if (collection === 'editorias') {
    return mockEditorias as unknown as T[];
  }

  if (collection === 'podcasts') {
    return mockPodcasts as unknown as T[];
  }

  return [] as T[];
}

export async function getItem<T>(collection: string, idOrSlug: string): Promise<T | null> {
  if (DIRECTUS_URL) {
    try {
      const response = await fetch(`${DIRECTUS_URL}/items/${collection}/${idOrSlug}`);
      if (response.ok) {
        const json = await response.json();
        return json.data as T;
      }
    } catch (err) {
      console.warn(`Directus failed, loading mock single for ${collection}:`, err);
    }
  }

  // Fallbacks
  if (collection === 'noticias') {
    const noticia = mockNoticias.find(n => n.id === idOrSlug || n.slug === idOrSlug);
    return noticia ? (noticia as unknown as T) : null;
  }

  if (collection === 'editorias') {
    const editoria = mockEditorias.find(e => e.id === idOrSlug || e.slug === idOrSlug);
    return editoria ? (editoria as unknown as T) : null;
  }

  if (collection === 'podcasts') {
    const podcast = mockPodcasts.find(p => p.id === idOrSlug);
    return podcast ? (podcast as unknown as T) : null;
  }

  return null;
}

export function getImageUrl(image: any): string {
  if (!image) return '';
  if (typeof image === 'string') {
    if (image.startsWith('http')) return image;
    return `${DIRECTUS_URL}/assets/${image}`;
  }
  if (image.id) {
    return `${DIRECTUS_URL}/assets/${image.id}`;
  }
  return '';
}
