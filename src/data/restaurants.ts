import hiokiSushi from "../asstes/images/hioki-sushi.png";
import hiokiSushiBig from "../asstes/images/hioki-sushi-big.png";
import laDolceVita from "../asstes/images/ladolcevita-trattoria.png";
import laDolceVitaBig from "../asstes/images/ladolcevita-big.png";
import restaurante from "../asstes/images/restaurante.webp";
import harumaki from "../asstes/images/harumaki.jpg";
import sashimi from "../asstes/images/sashimi.jpg";
import sushi from "../asstes/images/sushi.jpg";
import temaki from "../asstes/images/temaki.jpg";
import tempura from "../asstes/images/tempura.jpg";
import shimeji from "../asstes/images/shimeji.jpg";

export interface MenuItem {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
}

export interface Restaurant {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  capaDestaque: string;
  cardapio: MenuItem[];
}

export const restaurants: Restaurant[] = [
  {
    id: 1,
    titulo: "Hioki Sushi",
    destacado: true,
    tipo: "Japonesa",
    avaliacao: 4.9,
    descricao: "Especialidades japonesas preparadas com ingredientes frescos.",
    capa: hiokiSushi,
    capaDestaque: hiokiSushiBig,
    cardapio: [
      { id: 1, nome: "Harumaki", descricao: "Rolinho crocante com recheio de legumes.", porcao: "4 unidades", preco: 12.9, foto: harumaki },
      { id: 2, nome: "Sashimi", descricao: "Fatias de salmao fresco.", porcao: "8 unidades", preco: 29.9, foto: sashimi },
      { id: 3, nome: "Combinado de Sushi", descricao: "Selecao variada de sushis da casa.", porcao: "12 unidades", preco: 34.9, foto: sushi }
    ]
  },
  {
    id: 2,
    titulo: "La Dolce Vita Trattoria",
    destacado: true,
    tipo: "Italiana",
    avaliacao: 4.7,
    descricao: "Massas artesanais e receitas italianas para todos os momentos.",
    capa: laDolceVita,
    capaDestaque: laDolceVitaBig,
    cardapio: [
      { id: 4, nome: "Temaki", descricao: "Cone de alga recheado com arroz e salmao.", porcao: "1 unidade", preco: 18.9, foto: temaki },
      { id: 5, nome: "Tempura", descricao: "Legumes empanados e crocantes.", porcao: "6 unidades", preco: 17.9, foto: tempura },
      { id: 6, nome: "Shimeji", descricao: "Cogumelos salteados na manteiga.", porcao: "200 g", preco: 16.9, foto: shimeji }
    ]
  },
  {
    id: 3,
    titulo: "Efood Bistrô",
    destacado: false,
    tipo: "Contemporanea",
    avaliacao: 4.6,
    descricao: "Pratos cuidadosamente preparados para uma experiencia especial.",
    capa: restaurante,
    capaDestaque: restaurante,
    cardapio: []
  }
];
