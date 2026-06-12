export interface Episodio {
  id: string;
  titulo: string;
  duracao: string;
  publicadoEm: string;
  audioUrl: string;
  descricao?: string;
}

export interface Podcast {
  id: string;
  titulo: string;
  capa: string;
  episodios: Episodio[];
  descricao?: string;
}
