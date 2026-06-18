import { Noticia } from '../types/noticia';
import { Editoria } from '../types/editoria';
import { Podcast } from '../types/podcast';

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL || '';

// Mock Data
export const mockEditorias: Editoria[] = [
  { id: '1', nome: 'Salvador', slug: 'salvador', cor: '#0D1B4B' },
  { id: '2', nome: 'Bahia', slug: 'bahia', cor: '#1D6FBF' },
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
    titulo: 'Jogo do Brasil terá festa em bairros de Salvador',
    subtitulo: 'Prefeitura de Salvador monta estruturas com transmissão ao vivo nos bairros para o jogo da seleção feminina.',
    conteudo: 'A Prefeitura de Salvador preparou festas e transmissões especiais em diversos bairros da capital baiana para o próximo jogo da Seleção Brasileira Feminina na Copa do Mundo. Telões gigantes e atrações musicais farão parte das estruturas nos bairros periféricos para garantir a diversão dos torcedores locais de forma gratuita.',
    slug: 'jogo-do-brasil-tera-festa-em-bairros-de-salvador',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2026/06/Foto-para-materia-2026-06-18T100339.148-320x240.png.avif',
    editoria: mockEditorias[0], // Salvador
    publicadoEm: new Date(now.getTime() - 15 * 60000).toISOString(),
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    views: 1540
  },
  {
    id: 'n2',
    titulo: 'Carreta em chamas interdita trecho da BR-116',
    subtitulo: 'Acidente com veículo de carga provoca incêndio de grandes proporções e bloqueio total da rodovia na Bahia.',
    conteudo: 'Uma carreta pegou fogo na manhã desta quinta-feira em um trecho movimentado da rodovia federal BR-116, na Bahia. O fogo espalhou-se rapidamente e a Polícia Rodoviária Federal (PRF) precisou interditar completamente a via em ambos os sentidos para o trabalho do Corpo de Bombeiros. O incidente causou grande engarrafamento e desvios nas estradas locais.',
    slug: 'carreta-em-chamas-interdita-trecho-da-br-116',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2026/06/Foto-para-materia-2026-06-18T085152.663-320x240.png.avif',
    editoria: mockEditorias[1], // Bahia
    publicadoEm: new Date(now.getTime() - 30 * 60000).toISOString(),
    views: 3420
  },
  {
    id: 'n3',
    titulo: 'Coletores salvam cachorro momentos antes de compactação de lixo',
    subtitulo: 'Garis ouvem gemidos e resgatam animal que estava preso dentro de saco de lixo descartado na calçada.',
    conteudo: 'Um ato heroico e emocionante marcou a manhã dos coletores de lixo na Bahia. Durante o recolhimento rotineiro, os garis ouviram barulhos abafados de latidos vindos de um saco de lixo preto bem amarrado. Ao abrirem o saco, encontraram um cachorrinho bastante assustado. O resgate aconteceu segundos antes de a carga ser compactada pelo caminhão coletor.',
    slug: 'coletores-salvam-cachorro-momentos-antes-de-compactacao-de-lixo',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2026/06/WhatsApp-Image-2026-06-18-at-10.02.18-560x420.jpeg.avif',
    editoria: mockEditorias[0], // Salvador
    publicadoEm: new Date(now.getTime() - 45 * 60000).toISOString(),
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    views: 4120
  },
  {
    id: 'n4',
    titulo: 'Mais de mil celulares serão devolvidos aos donos nesta quinta (18) na Bahia',
    subtitulo: 'Secretaria de Segurança Pública realiza mutirão de devolução de aparelhos recuperados de furtos e roubos.',
    conteudo: 'A Secretaria de Segurança Pública da Bahia realiza nesta quinta-feira um grande mutirão para a devolução de mais de mil telefones celulares recuperados em operações recentes da Polícia Civil. As pessoas cadastradas que tiveram seus aparelhos subtraídos foram previamente notificadas para comparecer aos postos de atendimento portando documento pessoal e comprovante de propriedade.',
    slug: 'mais-de-mil-celulares-serao-devolvidos-aos-donos-nesta-quinta-18-na-bahia',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2026/06/Foto-para-materia-35.png.avif',
    editoria: mockEditorias[1], // Bahia
    publicadoEm: new Date(now.getTime() - 60 * 60000).toISOString(),
    views: 2890
  },
  {
    id: 'n5',
    titulo: 'Porsche cai em córrego na Avenida ACM',
    subtitulo: 'Motorista perde controle do carro esportivo de luxo que acaba despencando no canal da movimentada avenida de Salvador.',
    conteudo: 'Um carro esportivo de luxo, modelo Porsche, acabou caindo no córrego que divide as pistas da Avenida ACM, em Salvador, após o condutor perder o controle da direção na madrugada desta quinta-feira. Equipes da Transalvador e guinchos especializados foram acionados para a retirada do automóvel do canal. O motorista teve apenas escoriações leves e foi atendido no local.',
    slug: 'porsche-cai-em-corrego-na-avenida-acm',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2023/10/av-acm-320x240.jpg.avif',
    editoria: mockEditorias[0], // Salvador
    publicadoEm: new Date(now.getTime() - 120 * 60000).toISOString(),
    views: 5670
  },
  {
    id: 'n6',
    titulo: 'Prefeitura inicia segunda etapa da requalificação da Avenida Dorival Caymmi',
    subtitulo: 'Obras em Itapuã avançam para melhorar a mobilidade urbana e o trânsito em uma das principais vias da capital.',
    conteudo: 'A Prefeitura de Salvador deu início à segunda fase de obras de drenagem, recapeamento e requalificação urbana da Avenida Dorival Caymmi, em Itapuã. O projeto completo de infraestrutura visa desafogar o tráfego de veículos na região e proporcionar novas calçadas com acessibilidade total, paisagismo moderno e faixas de ciclovias para os moradores soteropolitanos.',
    slug: 'prefeitura-inicia-segunda-etapa-da-requalificacao-da-avenida-dorival-caymmi',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2026/06/Foto-para-materia-34-320x240.png.avif',
    editoria: mockEditorias[0], // Salvador
    publicadoEm: new Date(now.getTime() - 180 * 60000).toISOString(),
    views: 1210
  },
  {
    id: 'n7',
    titulo: 'Homem decepa próprio pé para receber valor milionário em indenização',
    subtitulo: 'Caso inusitado e sob investigação policial ocorre no interior da Bahia com suspeita de fraude contra seguradora.',
    conteudo: 'A Polícia Civil está investigando um caso em que um morador do interior baiano teria decepado o próprio pé de forma deliberada com o objetivo de fraudar seguros e receber uma indenização estimada em mais de R$ 1 milhão. As circunstâncias do acidente foram consideradas suspeitas pelos peritos médicos e investigadores de seguros, que alertaram as autoridades policiais da comarca local.',
    slug: 'homem-decepa-proprio-pe-para-receber-valor-milionario-em-indenizacao',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2026/06/Foto-para-materia-100-320x240.png.avif',
    editoria: mockEditorias[1], // Bahia
    publicadoEm: new Date(now.getTime() - 240 * 60000).toISOString(),
    views: 7420
  },
  {
    id: 'n8',
    titulo: 'Cinthya Marabá lança pré-candidatura em Luís Eduardo Magalhães',
    subtitulo: 'Evento político reúne apoiadores e lideranças da região oeste para anunciar o projeto eleitoral da pré-candidata.',
    conteudo: 'O cenário eleitoral da cidade de Luís Eduardo Magalhães, no oeste do estado, ganhou movimentações nesta semana com o lançamento oficial da pré-candidatura de Cinthya Marabá. O evento político reuniu diversos partidos da base de apoio, empresários proeminentes do agronegócio e lideranças comunitárias da região interessadas em suas propostas para o município.',
    slug: 'cinthya-maraba-lanca-pre-candidatura-em-luis-eduardo-magalhaes',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2026/06/Foto-para-materia-79-1-320x240.png.avif',
    editoria: mockEditorias[1], // Bahia
    publicadoEm: new Date(now.getTime() - 300 * 60000).toISOString(),
    views: 1890
  },
  {
    id: 'n9',
    titulo: 'Diogo Defante é detido durante cobertura da Copa nos Estados Unidos',
    subtitulo: 'Humorista e repórter brasileiro passa por apuros com policiais americanos enquanto gravava conteúdo humorístico na rua.',
    conteudo: 'O humorista e influenciador Diogo Defante foi detido brevemente por autoridades policiais dos Estados Unidos durante a cobertura dos bastidores do torneio mundial de futebol. O comediante realizava suas tradicionais esquetes de humor de forma descontraída perto do estádio, o que gerou desconfiança e intervenção dos agentes locais de segurança. Ele prestou esclarecimentos e foi liberado em seguida.',
    slug: 'diogo-defante-e-detido-durante-cobertura-da-copa-nos-estados-unidos',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2026/06/WhatsApp-Image-2026-06-15-at-09.52.17-320x240.jpeg.avif',
    editoria: mockEditorias[5], // Esportes
    publicadoEm: new Date(now.getTime() - 360 * 60000).toISOString(),
    views: 6540
  },
  {
    id: 'n10',
    titulo: 'Copa de 2026 é marcada por polêmicas além do futebol',
    subtitulo: 'Atrasos logísticos, protestos nos arredores e discussões de arbitragem pautam os debates da primeira semana do torneio.',
    conteudo: 'A Copa do Mundo de 2026 vem chamando atenção não só pelos belos lances de gol nos gramados da América do Norte, mas também por uma série de polêmicas organizacionais. Problemas de locomoção de torcedores, manifestações civis em frente aos estádios e falhas de comunicação da arbitragem figuram entre as reclamações oficiais das seleções envolvidas.',
    slug: 'copa-de-2026-e-marcada-por-polemicas-alem-do-futebol',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2026/06/WhatsApp-Image-2026-06-14-at-14.42.59-320x240.jpeg.avif',
    editoria: mockEditorias[5], // Esportes
    publicadoEm: new Date(now.getTime() - 420 * 60000).toISOString(),
    views: 4320
  },
  {
    id: 'n11',
    titulo: 'Saiba como foi o primeiro dia de Copa do Mundo',
    subtitulo: 'Abertura oficial e primeiros confrontos agitam torcedores ao redor do planeta com grandes atuações em campo.',
    conteudo: 'O pontapé inicial da Copa do Mundo foi dado em grande estilo com a cerimônia de abertura e as primeiras partidas. Os torcedores presenciaram grandes duelos e muita animação de fãs de futebol do mundo inteiro. A cobertura completa destaca o desempenho das equipes favoritas e as primeiras surpresas táticas apresentadas pelos técnicos das seleções de menor expressão.',
    slug: 'saiba-como-foi-o-primeiro-dia-de-copa-do-mundo',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2026/06/Foto-para-materia-96-320x240.png.avif',
    editoria: mockEditorias[5], // Esportes
    publicadoEm: new Date(now.getTime() - 480 * 60000).toISOString(),
    views: 3210
  },
  {
    id: 'n12',
    titulo: 'Casal acumula quase R$ 1 milhão em multas por recusar vacinação dos filhos',
    subtitulo: 'Decisão judicial na Bahia impõe sanção histórica de multa diária após descumprimento reiterado das ordens da Justiça.',
    conteudo: 'Um casal baiano acumula quase R$ 1 milhão em multas devido à recusa reiterada de vacinar seus filhos menores de idade com as vacinas obrigatórias da infância. A decisão judicial visa proteger a integridade de saúde dos menores, uma vez que a vacinação é considerada um direito fundamental coletivo que prevalece sobre crenças ideológicas ou religiosas particulares dos responsáveis.',
    slug: 'casal-acumula-quase-r-1-milhao-em-multas-por-recusar-vacinacao-dos-filhos',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2023/10/25_01_2022_Avanco-Vacinacao-Infantil-_Fot-Bruno-Concha_Secom_Pms-10-2048x1365-1-560x420.jpg.avif',
    editoria: mockEditorias[2], // Brasil
    publicadoEm: new Date(now.getTime() - 600 * 60000).toISOString(),
    views: 5120
  },
  {
    id: 'n13',
    titulo: 'Inmet alerta para chuvas intensas em 31 cidades da Bahia',
    subtitulo: 'Boletim meteorológico indica possibilidade de fortes temporais com rajadas de vento e riscos de deslizamento no estado.',
    conteudo: 'O Instituto Nacional de Meteorologia (Inmet) emitiu um aviso meteorológico de perigo para fortes pancadas de chuva cobrindo 31 cidades no território baiano. O acumulado de chuva pode passar de 50 milímetros por dia, exigindo atenção redobrada dos órgãos de Defesa Civil em áreas litorâneas e de encostas por conta do perigo de deslizamentos de terra.',
    slug: 'inmet-alerta-para-chuvas-intensas-em-31-cidades-da-bahia',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2026/06/WhatsApp-Image-2026-06-14-at-15.15.44-560x420.jpeg.avif',
    editoria: mockEditorias[1], // Bahia
    publicadoEm: new Date(now.getTime() - 720 * 60000).toISOString(),
    views: 3310
  },
  {
    id: 'n14',
    titulo: 'Operação mira organização criminosa no Baixo Sul da Bahia',
    subtitulo: 'Polícia cumpre mandados de prisão e busca contra quadrilha acusada de lavagem de dinheiro e desvio de verba municipal.',
    conteudo: 'Uma ação conjunta entre forças policiais resultou na deflagração de uma grande operação no Baixo Sul da Bahia para desmantelar um grupo especializado em desvio de recursos da saúde e fraudes em licitações públicas municipais. Diversos mandados de busca foram cumpridos e bens de luxo dos envolvidos foram apreendidos pela Justiça Federal.',
    slug: 'operacao-mira-organizacao-criminosa-no-baixo-sul-da-bahia',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2026/02/Foto-para-materia-108-560x420.png.avif',
    editoria: mockEditorias[1], // Bahia
    publicadoEm: new Date(now.getTime() - 840 * 60000).toISOString(),
    views: 4190
  },
  {
    id: 'n15',
    titulo: 'Receita apreende 15 iPhones em aeroporto de Salvador',
    subtitulo: 'Aparelhos trazidos por passageiro de voo internacional não foram declarados e foram retidos pela fiscalização.',
    conteudo: 'Agentes da Receita Federal lotados no Aeroporto Internacional de Salvador apreenderam 15 aparelhos iPhone de última geração na bagagem de um passageiro procedente do exterior. Os celulares estavam escondidos na mala e não possuíam nota fiscal nem a documentação de importação regular de bagagens. Os produtos foram confiscados e o passageiro autuado.',
    slug: 'receita-apreende-15-iphones-em-aeroporto-de-salvador',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2023/01/uso_de_smartphone_e_celular050720211245-560x420.jpg.avif',
    editoria: mockEditorias[0], // Salvador
    publicadoEm: new Date(now.getTime() - 960 * 60000).toISOString(),
    views: 1980
  },
  {
    id: 'n16',
    titulo: 'Filho é preso suspeito de matar e esquartejar pai na Bahia',
    subtitulo: 'Crime bárbaro choca moradores de Feira de Santana após a prisão em flagrante do principal suspeito.',
    conteudo: 'Um homem foi preso em flagrante no município de Feira de Santana sob a acusação de ter assassinado e esquartejado o próprio pai. Vizinhos ouviram discussões na residência e acionaram os policiais militares. O corpo da vítima foi localizado nos fundos do imóvel e a perícia criminal está colhendo detalhes da motivação do crime.',
    slug: 'filho-e-preso-suspeito-de-matar-e-esquartejar-pai-na-bahia',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2026/03/Foto-para-materia-13-2-560x420.png.avif',
    editoria: mockEditorias[1], // Bahia
    publicadoEm: new Date(now.getTime() - 1080 * 60000).toISOString(),
    views: 6120
  },
  {
    id: 'n17',
    titulo: 'Carro pega fogo em frente a supermercado em Salvador',
    subtitulo: 'Incêndio destrói veículo particular e causa lentidão e curiosidade no trânsito na Avenida Octávio Mangabeira.',
    conteudo: 'Um carro de passeio começou a pegar fogo no início da tarde desta quinta-feira em frente a um conhecido supermercado na Avenida Octávio Mangabeira, na orla de Salvador. Os bombeiros agiram rapidamente para controlar as chamas, evitando maiores acidentes. Ninguém ficou ferido no ocorrido, mas o tráfego local registrou enorme lentidão nos dois sentidos.',
    slug: 'carro-pega-fogo-em-frente-a-supermercado-em-salvador',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2026/06/Foto-para-materia-32-1-560x420.png.avif',
    editoria: mockEditorias[0], // Salvador
    publicadoEm: new Date(now.getTime() - 1200 * 60000).toISOString(),
    views: 2340
  },
  {
    id: 'n18',
    titulo: 'Arraiá do Coração leva forró de qualidade para o Shopping Piedade',
    subtitulo: 'Programação cultural junina gratuita conta com trios de forró, dança e comidas típicas para os visitantes.',
    conteudo: 'O Shopping Piedade iniciou as comemorações de São João com a atração "Arraiá do Coração". O evento promove apresentações gratuitas de forró pé-de-serra na praça central do shopping, além de barracas com iguarias típicas e decorações caipiras. É uma excelente opção de entretenimento e cultura para quem está fazendo compras no centro de Salvador.',
    slug: 'arraia-do-coracao-leva-muito-forro-para-o-shopping-piedade',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2026/06/IMG-20260616-WA0059-560x420.jpg.avif',
    editoria: mockEditorias[0], // Salvador
    publicadoEm: new Date(now.getTime() - 1320 * 60000).toISOString(),
    views: 1220
  },
  {
    id: 'n19',
    titulo: 'Operação investiga grupo suspeito de fraudar benefícios previdenciários',
    subtitulo: 'Força-tarefa da PF descobre fraude em aposentadorias que gerou prejuízos milionários aos cofres do INSS na Bahia.',
    conteudo: 'Uma operação policial foi deflagrada pela PF para apurar irregularidades na concessão de pensões e aposentadorias rurais. O grupo investigado falsificava certidões de atividade rural de pessoas que moravam na cidade para obter o benefício previdenciário de forma irregular. As buscas continuam para prender os líderes do esquema financeiro.',
    slug: 'operacao-investiga-grupo-suspeito-de-fraudar-beneficios-previdenciarios',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2026/02/Foto-para-materia-2-20-560x420.png.avif',
    editoria: mockEditorias[2], // Brasil
    publicadoEm: new Date(now.getTime() - 1440 * 60000).toISOString(),
    views: 1950
  },
  {
    id: 'n20',
    titulo: 'Produção de manga fortalece a economia e as exportações de Juazeiro',
    subtitulo: 'Fruticultura irrigada no Vale do São Francisco registra recorde de envios e movimenta milhões na região.',
    conteudo: 'A colheita e exportação de manga na região de Juazeiro, no norte do estado, registraram excelentes resultados neste trimestre. A fruticultura irrigada consolidou-se como um dos principais motores do agronegócio da Bahia, enviando toneladas da fruta de alta qualidade para mercados dos EUA e da Europa e gerando empregos no campo.',
    slug: 'producao-de-manga-fortalece-economia-e-exportacoes-de-juazeiro',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2026/06/Foto-para-materia-33-560x420.png.avif',
    editoria: mockEditorias[4], // Economia
    publicadoEm: new Date(now.getTime() - 1560 * 60000).toISOString(),
    views: 2450
  },
  {
    id: 'n21',
    titulo: 'PF cumpre mandados na Bahia e em Pernambuco durante ação contra o tráfico',
    subtitulo: 'Operação interestadual foca na desarticulação financeira de quadrilhas de entorpecentes no vale são-franciscano.',
    conteudo: 'A Polícia Federal deflagrou a operação para cumprir diversos mandados de busca e apreensão de bens e contas bancárias ligadas a chefes do tráfico de drogas que atuam na divisa entre a Bahia e Pernambuco. Os policiais confiscaram bens avaliados em milhões de reais e continuam as buscas por foragidos da Justiça.',
    slug: 'pf-cumpre-mandados-na-bahia-e-em-pernambuco-durante-acao-contra-o-trafico',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2026/05/foto-capa-2026-05-04T083722.290-560x420.png.avif',
    editoria: mockEditorias[1], // Bahia
    publicadoEm: new Date(now.getTime() - 1680 * 60000).toISOString(),
    views: 3820
  },
  {
    id: 'n22',
    titulo: 'Justiça condena policial militar por uso irregular de recursos públicos',
    subtitulo: 'Oficial da PM na Bahia é sentenciado à perda do cargo e devolução de valores desviados em licitações internas.',
    conteudo: 'O Tribunal de Justiça acolheu o pedido do Ministério Público e condenou um oficial da PM-BA por improbidade administrativa e uso inadequado de verbas públicas em reformas de sedes policiais. Além da destituição do posto, a sentença ordena o ressarcimento integral dos valores aos cofres do tesouro público.',
    slug: 'justica-condena-policial-militar-por-uso-irregular-de-recursos-publicos',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2026/03/Foto-para-materia-2026-03-02T175308.650-560x420.png.avif',
    editoria: mockEditorias[3], // Política
    publicadoEm: new Date(now.getTime() - 1800 * 60000).toISOString(),
    views: 2980
  },
  {
    id: 'n23',
    titulo: 'Curso de Formação de Sargentos da Aeronáutica recebe inscrições até julho',
    subtitulo: 'Força Aérea Brasileira oferece vagas de nível médio para diversas áreas técnicas e operacionais do país.',
    conteudo: 'Estão abertas as inscrições para o concurso da Escola de Especialistas de Aeronáutica (EEAR). São dezenas de vagas para ambos os sexos destinadas a especialidades como mecânica, eletrônica, administração e controle de tráfego aéreo. Os interessados devem efetuar a inscrição pela internet até o prazo limite estipulado no edital oficial.',
    slug: 'curso-de-formacao-de-sargentos-da-aeronautica-recebe-inscricoes-ate-julho',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2026/06/Foto-para-materia-2-5-560x420.png.avif',
    editoria: mockEditorias[2], // Brasil
    publicadoEm: new Date(now.getTime() - 1920 * 60000).toISOString(),
    views: 1540
  },
  {
    id: 'n24',
    titulo: 'Hospital Regional do Sisal deve ser entregue no primeiro semestre de 2027',
    subtitulo: 'Obras em Serrinha avançam e prometem descentralizar os atendimentos de urgência médica na região sisaleira.',
    conteudo: 'A construção do novo Hospital Regional do Sisal, em Serrinha, está com cronograma adiantado. De acordo com a Sesab, o novo equipamento público terá leitos de terapia intensiva e centro de diagnóstico completo, evitando que pacientes da região tenham que se deslocar até Salvador para consultas e procedimentos cirúrgicos complexos.',
    slug: 'hospital-regional-do-sisal-deve-ser-entregue-no-primeiro-semestre-de-2027',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2026/06/Foto-para-materia-1-8-560x420.png.avif',
    editoria: mockEditorias[1], // Bahia
    publicadoEm: new Date(now.getTime() - 2040 * 60000).toISOString(),
    views: 1120
  },
  {
    id: 'n25',
    titulo: 'Boi gordo inicia semana com mercado lento e preços firmes',
    subtitulo: 'Cotações no agronegócio mantêm estabilidade na arroba com pouca oscilação nas principais praças da Bahia.',
    conteudo: 'O mercado físico do boi gordo começou o período de negociações comerciais com liquidez moderada e manutenção dos preços da arroba. Os pecuaristas baianos continuam segurando as vendas de lotes maiores aguardando melhores ofertas, enquanto os frigoríficos locais operam com escalas de abate confortáveis para os próximos dias.',
    slug: 'boi-gordo-inicia-semana-com-mercado-lento-e-precos-firmes',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2023/02/gado-1-560x420.jpg.avif',
    editoria: mockEditorias[4], // Economia
    publicadoEm: new Date(now.getTime() - 2160 * 60000).toISOString(),
    views: 980
  },
  {
    id: 'n26',
    titulo: 'Anvisa cria grupo para avaliar vacina da dengue do Butantan',
    subtitulo: 'Agência cria comitê especial para agilizar a análise técnica do imunizante nacional contra a doença.',
    conteudo: 'A Agência Nacional de Vigilância Sanitária (Anvisa) instituiu um grupo técnico de emergência para avaliar com celeridade os dados de eficácia e segurança da vacina da dengue produzida pelo Instituto Butantan. A medida visa acelerar o processo de aprovação de registro sanitário para disponibilizar a vacina no SUS o quanto antes.',
    slug: 'anvisa-cria-grupo-para-avaliar-vacina-da-dengue-do-butantan',
    imagem: 'https://sociedadeonline.com/wp-content/uploads/2024/12/vacina_dengue_07-560x420.webp',
    editoria: mockEditorias[2], // Brasil
    publicadoEm: new Date(now.getTime() - 2280 * 60000).toISOString(),
    views: 1670
  },
  {
    id: 'n27',
    titulo: 'Adriane Galisteu compartilha receita para mulheres no climatério e menopausa',
    subtitulo: 'Apresentadora fala abertamente sobre saúde da mulher e divide dicas de nutrição e bem-estar em suas redes.',
    conteudo: 'A famosa apresentadora Adriane Galisteu chamou a atenção de seus seguidores ao compartilhar receitas saudáveis e dicas de cuidados específicos voltados para mulheres que estão passando pela transição do climatério e menopausa. Ela ressaltou a importância do acompanhamento médico e da alimentação para aliviar os sintomas do período.',
    slug: 'adriane-galisteu-compartilha-receita-para-mulheres-no-climaterio-e-menopausa',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2026/06/WhatsApp-Image-2026-06-16-at-10.06.23-560x420.jpeg.avif',
    editoria: mockEditorias[6], // Entretenimento
    publicadoEm: new Date(now.getTime() - 2400 * 60000).toISOString(),
    views: 2110
  },
  {
    id: 'n28',
    titulo: 'Salvador amplia vacinação com atendimento até 19h nesta terça',
    subtitulo: 'Postos de saúde da capital baiana funcionam em horário estendido para facilitar o acesso da população às vacinas.',
    conteudo: 'Para aumentar a cobertura vacinal contra gripe, covid-19 e outras doenças do calendário regular de vacinação, a prefeitura de Salvador disponibilizou postos com horário de atendimento estendido até as 19h nesta terça-feira. A população é incentivada a levar a caderneta para atualização das doses pendentes.',
    slug: 'salvador-amplia-vacinacao-com-atendimento-ate-19h-nesta-terca',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2025/07/167644pesquisadores-avancam-na-criacao-da-vacina-universal-contra-o-cancer-3-560x420.jpg.avif',
    editoria: mockEditorias[0], // Salvador
    publicadoEm: new Date(now.getTime() - 2520 * 60000).toISOString(),
    views: 1890
  },
  {
    id: 'n29',
    titulo: 'Problemas de visão podem afetar desempenho escolar de crianças, explica Dr. André Lavigne',
    subtitulo: 'Oftalmologista alerta pais e educadores para os sinais de dificuldades visuais em idade escolar na Bahia.',
    conteudo: 'Em entrevista especial, o oftalmologista Dr. André Lavigne detalhou como problemas refrativos comuns, como miopia e astigmatismo não diagnosticados, são causas frequentes de queda no rendimento de aprendizado de alunos infantis. Ele orienta a realização de exames periódicos anuais antes do início de cada ano letivo.',
    slug: 'problemas-de-visao-podem-afetar-desempenho-escolar-de-criancas-explica-dr-andre-lavigne',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2026/06/Foto-para-materia-2026-06-16T082908.466-560x420.png.avif',
    editoria: mockEditorias[0], // Salvador
    publicadoEm: new Date(now.getTime() - 2640 * 60000).toISOString(),
    views: 1240
  },
  {
    id: 'n30',
    titulo: 'Rádio Sociedade promove tarde de forró no Shopping Piedade',
    subtitulo: 'Ação especial em Salvador leva show ao vivo de bandas de forró e brindes para os frequentadores do centro comercial.',
    conteudo: 'Uma tarde de muita música e animação junina movimentou o Shopping Piedade nesta semana. Em parceria com a Rádio Sociedade da Bahia, o espaço promoveu apresentações gratuitas de forrozeiros, com distribuição de brindes exclusivos para os ouvintes da rádio mais tradicional da Bahia. O público dançou e festejou antecipando o São João.',
    slug: 'radio-sociedade-promove-tarde-de-forro-no-shopping-piedade',
    imagem: 'https://sociedadeonline.com/wp-content/smush-avif/2026/06/Foto-para-materia-32-560x420.png.avif',
    editoria: mockEditorias[0], // Salvador
    publicadoEm: new Date(now.getTime() - 2760 * 60000).toISOString(),
    views: 1340
  },
  {
    id: 'n31',
    titulo: 'Prefeitura abre inscrições para credenciamento de blocos de rua',
    subtitulo: 'Regras visam organizar circuitos tradicionais e garantir segurança da folia.',
    conteudo: 'O cadastramento prévio é necessário para os blocos que desejam desfilar nos circuitos oficiais da capital.',
    slug: 'carnaval-salvador-credenciamento-blocos-rua',
    imagem: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80',
    editoria: mockEditorias[6], // Entretenimento
    publicadoEm: new Date(now.getTime() - 2040 * 60000).toISOString(),
    views: 2980
  },
  {
    id: 'n32',
    titulo: 'Senado aprova novo marco regulatório das startups',
    subtitulo: 'Medida visa simplificar obrigações tributárias e incentivar investimentos em tecnologia no país.',
    conteudo: 'O Plenário do Senado aprovou o novo marco regulatório das startups e empresas inovadoras. O projeto prevê facilidades para a captação de recursos, desburocratização de registros e incentivos fiscais para investidores-anjo. A proposta segue para sanção presidencial na próxima semana.',
    slug: 'senado-aprova-novo-marco-regulatorio-das-startups',
    imagem: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&auto=format&fit=crop&q=80',
    editoria: mockEditorias[2], // Brasil
    publicadoEm: new Date(now.getTime() - 25 * 3600000).toISOString(),
    views: 1920
  },
  {
    id: 'n33',
    titulo: 'Câmara dos Deputados discute reforma tributária nesta semana',
    subtitulo: 'Presidente da Câmara pauta debates cruciais sobre simplificação de impostos e alíquotas do novo imposto unificado.',
    conteudo: 'Os deputados federais retomam nesta semana as sessões de debate sobre a regulamentação da reforma tributária. O foco principal é a definição da cesta básica nacional isenta de impostos e os regimes especiais para setores de serviços e educação.',
    slug: 'camara-dos-deputados-discute-reforma-tributaria-nesta-semana',
    imagem: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&auto=format&fit=crop&q=80',
    editoria: mockEditorias[3], // Política
    publicadoEm: new Date(now.getTime() - 3 * 3600000).toISOString(),
    views: 2540
  },
  {
    id: 'n34',
    titulo: 'Eleições 2026: Partidos definem primeiras alianças em Salvador',
    subtitulo: 'Convenções partidárias iniciam negociações para chapas majoritárias e apoio nas eleições de outubro.',
    conteudo: 'Com a aproximação das eleições gerais de 2026, os principais partidos políticos na Bahia iniciaram rodadas de conversas para a formação de coligações. Os debates giram em torno de nomes para o governo estadual e chapas proporcionais.',
    slug: 'eleicoes-2026-partidos-definem-aliancas-salvador',
    imagem: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&auto=format&fit=crop&q=80',
    editoria: mockEditorias[3], // Política
    publicadoEm: new Date(now.getTime() - 6 * 3600000).toISOString(),
    views: 3100
  },
  {
    id: 'n35',
    titulo: 'Prefeito anuncia novas metas de mobilidade para os próximos anos',
    subtitulo: 'Em coletiva de imprensa, gestor detalha investimentos em faixas exclusivas e ampliação da frota de ônibus elétricos.',
    conteudo: 'O prefeito de Salvador anunciou um robusto plano de investimentos em mobilidade urbana sustentável. A meta é integrar novas ciclovias e aumentar a frota pública de ônibus 100% elétricos em operação nos principais corredores de tráfego.',
    slug: 'prefeito-anuncia-metas-de-mobilidade-proximos-anos',
    imagem: 'https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?w=800&auto=format&fit=crop&q=80',
    editoria: mockEditorias[3], // Política
    publicadoEm: new Date(now.getTime() - 12 * 3600000).toISOString(),
    views: 1870
  },
  {
    id: 'n36',
    titulo: 'Bahia receberá investimentos federais para segurança pública',
    subtitulo: 'Ministério da Justiça garante envio de novos equipamentos e reforço no efetivo de forças integradas no estado.',
    conteudo: 'Um novo convênio assinado entre o governo estadual e o Ministério da Justiça prevê o repasse de verbas federais destinadas à aquisição de viaturas, armamentos e sistemas de inteligência integrados para o combate à criminalidade na Bahia.',
    slug: 'bahia-recebera-investimentos-federais-seguranca-publica',
    imagem: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=80',
    editoria: mockEditorias[3], // Política
    publicadoEm: new Date(now.getTime() - 18 * 3600000).toISOString(),
    views: 2950
  },
  {
    id: 'n37',
    titulo: 'Inflação oficial sob controle no acumulado do primeiro semestre',
    subtitulo: 'IPCA registra variação dentro da meta do Banco Central com alívio nos preços de alimentos e energia elétrica.',
    conteudo: 'O índice de inflação oficial do país apresentou comportamento estável no encerramento do primeiro semestre de 2026. A desaceleração nos preços de itens básicos como feijão, arroz e combustíveis aliviou o orçamento familiar dos brasileiros.',
    slug: 'inflacao-oficial-sob-controle-primeiro-semestre',
    imagem: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80',
    editoria: mockEditorias[4], // Economia
    publicadoEm: new Date(now.getTime() - 4 * 3600000).toISOString(),
    views: 2180
  },
  {
    id: 'n38',
    titulo: 'Setor de serviços cresce e puxa geração de empregos na Bahia',
    subtitulo: 'Dados do Caged apontam abertura de milhares de novos postos formais de trabalho no comércio e turismo baianos.',
    conteudo: 'O mercado de trabalho baiano registrou saldo positivo de empregos com carteira assinada, impulsionado pela forte retomada das atividades do setor de serviços, hotelaria e gastronomia em diversas regiões turísticas do estado.',
    slug: 'setor-de-servicos-cresce-geracao-empregos-bahia',
    imagem: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
    editoria: mockEditorias[4], // Economia
    publicadoEm: new Date(now.getTime() - 8 * 3600000).toISOString(),
    views: 1760
  },
  {
    id: 'n39',
    titulo: 'Dólar opera em queda após decisões econômicas no exterior',
    subtitulo: 'Moeda americana recua frente ao real com entrada de divisas estrangeiras e otimismo nos mercados globais.',
    conteudo: 'O mercado cambial registrou nova sessão de queda para a moeda norte-americana. Analistas atribuem o recuo do dólar à manutenção das taxas de juros americanas e à boa receptividade de investidores estrangeiros a títulos do tesouro nacional.',
    slug: 'dolar-opera-em-queda-decisoes-economicas-exterior',
    imagem: 'https://images.unsplash.com/photo-1502920514313-52581002a659?w=800&auto=format&fit=crop&q=80',
    editoria: mockEditorias[4], // Economia
    publicadoEm: new Date(now.getTime() - 14 * 3600000).toISOString(),
    views: 2310
  },
  {
    id: 'n40',
    titulo: 'Bahia vence e assume liderança isolada de grupo na Copa do Nordeste',
    subtitulo: 'Tricolor bate adversário fora de casa com grande atuação coletiva e garante classificação antecipada.',
    conteudo: 'O Esporte Clube Bahia conquistou uma importante vitória em partida válida pela fase de grupos do torneio regional. Jogando com determinação, o elenco assegurou os três pontos que colocam o time na ponta da tabela de classificação.',
    slug: 'bahia-vence-lideranca-copa-do-nordeste',
    imagem: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80',
    editoria: mockEditorias[5], // Esportes
    publicadoEm: new Date(now.getTime() - 2 * 3600000).toISOString(),
    views: 4890
  },
  {
    id: 'n41',
    titulo: 'Vitória empata no Barradão e técnico cobra mais foco da equipe',
    subtitulo: 'Leão pressiona durante todo o jogo mas peca nas finalizações diante de sua torcida em Salvador.',
    conteudo: 'O Esporte Clube Vitória não passou de um empate em casa em duelo muito disputado. Na entrevista coletiva, o comandante rubro-negro destacou o volume de jogo mas pediu maior capricho ofensivo nos próximos confrontos do campeonato.',
    slug: 'vitoria-empata-barradao-tecnico-cobra-foco',
    imagem: 'https://images.unsplash.com/photo-1577223625856-758c127df1b1?w=800&auto=format&fit=crop&q=80',
    editoria: mockEditorias[5], // Esportes
    publicadoEm: new Date(now.getTime() - 5 * 3600000).toISOString(),
    views: 3120
  },
  {
    id: 'n42',
    titulo: 'Teatro Castro Alves anuncia reabertura de sala principal após reforma',
    subtitulo: 'Complexo cultural em Salvador prepara programação especial com shows e espetáculos gratuitos para marcar o retorno.',
    conteudo: 'O tradicional Teatro Castro Alves (TCA) divulgou a data de reabertura da sua sala principal de espetáculos. Após meses de restauração e modernização técnica, o espaço volta a receber grandes peças teatrais e concertos musicais.',
    slug: 'teatro-castro-alves-reabertura-sala-principal',
    imagem: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&auto=format&fit=crop&q=80',
    editoria: mockEditorias[6], // Entretenimento
    publicadoEm: new Date(now.getTime() - 9 * 3600000).toISOString(),
    views: 1450
  },
  {
    id: 'n43',
    titulo: 'Artistas baianos concorrem a prêmio internacional de música latino-americana',
    subtitulo: 'Indicações destacam a diversidade e a força da produção artística baiana no cenário cultural mundial.',
    conteudo: 'Vários cantores e compositores baianos foram indicados a categorias de destaque no prestigiado festival de música latina. A premiação celebra a originalidade das canções e álbuns produzidos na Bahia ao longo do último ano.',
    slug: 'artistas-baianos-concorrem-premio-musica-latina',
    imagem: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80',
    editoria: mockEditorias[6], // Entretenimento
    publicadoEm: new Date(now.getTime() - 15 * 3600000).toISOString(),
    views: 2010
  },
  {
    id: 'n44',
    titulo: 'São João da Bahia: Confira a programação oficial das praças históricas',
    subtitulo: 'Pelourinho e Paripe terão grandes palcos com atrações de forró tradicional do dia 20 a 25 de junho.',
    conteudo: 'O governo do estado anunciou o calendário completo de shows gratuitos para os festejos juninos em Salvador. O centro histórico receberá trios tradicionais de sanfoneiros, além de nomes consagrados do forró nacional.',
    slug: 'sao-joao-bahia-programacao-oficial-pracas-historicas',
    imagem: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop&q=80',
    editoria: mockEditorias[6], // Entretenimento
    publicadoEm: new Date(now.getTime() - 21 * 3600000).toISOString(),
    views: 3100
  }
];

// Mock data for radio programming
export interface Programa {
  id: string;
  nome: string;
  apresentador: string;
  horario: string;
  dias: string;
  descricao: string;
  foto: string;
}

export const mockProgramacao: Programa[] = [
  {
    id: 'prog1',
    nome: 'Alvorada Sociedade',
    apresentador: 'Roberto Mendes',
    horario: '05:00 - 07:00',
    dias: 'Segunda a Sexta',
    descricao: 'As primeiras notícias do dia com análise e credibilidade.',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'prog2',
    nome: 'Sociedade Urgente',
    apresentador: 'Adelson Carvalho',
    horario: '07:00 - 09:00',
    dias: 'Segunda a Sexta',
    descricao: 'Jornalismo direto ao ponto: trânsito, segurança e serviço público.',
    foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'prog3',
    nome: 'Manhã Sociedade',
    apresentador: 'Patrícia Almeida',
    horario: '09:00 - 12:00',
    dias: 'Segunda a Sexta',
    descricao: 'Entretenimento, cultura e entrevistas com personalidades da Bahia.',
    foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'prog4',
    nome: 'Sociedade Esportes',
    apresentador: 'Cláudio Ramos',
    horario: '12:00 - 14:00',
    dias: 'Segunda a Sábado',
    descricao: 'Tudo sobre o futebol baiano e o esporte nacional.',
    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'prog5',
    nome: 'Sociedade Debate',
    apresentador: 'Fernando Costa',
    horario: '14:00 - 16:00',
    dias: 'Segunda a Sexta',
    descricao: 'Debates aprofundados sobre política, economia e sociedade.',
    foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'prog6',
    nome: 'Fim de Tarde',
    apresentador: 'Ana Beatriz Santos',
    horario: '16:00 - 19:00',
    dias: 'Segunda a Sexta',
    descricao: 'Música, informação e descontração para fechar o dia.',
    foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80'
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

  if (collection === 'programacao') {
    return mockProgramacao as unknown as T[];
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
