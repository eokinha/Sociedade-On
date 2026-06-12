import { Editoria } from './editoria';

export interface Noticia {
  id: string;
  titulo: string;
  subtitulo: string;
  conteudo: string;
  slug: string;
  imagem: string;
  editoria: Editoria;
  publicadoEm: string;
  audioUrl?: string;
  views?: number;
}
