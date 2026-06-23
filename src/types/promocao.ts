export interface Promocao {
  id: string;
  titulo: string;
  descricao: string;
  conteudo: string;
  slug: string;
  imagem: string;
  dataInicio: string;
  dataFim: string;
  status: 'ativa' | 'encerrada';
  premio: string;
}
