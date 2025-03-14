import Button from "../Button";
import { Card, TagContainer,  TagButton, Image, TitleContainer, Description, Rating, Titulo} from "./styles";
import  start from '../../asstes/images/star.svg';
import robata from '../../asstes/images/robata.jpg';
import salada from  '../../asstes/images/salada-massao.jpg';
import sashimi from  '../../asstes/images/sashimi.jpg';
import sunomono from  '../../asstes/images/sunomono.jpg';
import temaki from  '../../asstes/images/temaki.jpg';
import tempura from  '../../asstes/images/tempura.jpg';


// Array de dados para os cards
const cardsData = [
  {
    id: 1,
    image: robata,
    tags: ["Destaque da semana", "Japonês"],
    title: "Robata",
    rating: 4.4,
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
  },
  {
    id: 2,
    image: salada,
    tags: [ "ITaliana"],
    title: "Salada Massão",
    rating: 4.7,
    description:
      "A melhor pizza artesanal com ingredientes selecionados! Aproveite nossas promoções e peça já a sua. Sabor inigualável e entrega rápida!",
  },
  {
    id: 3,
    image: sashimi,
    tags: ["Japonês"],
    title: "Sashimi",
    rating: 4.1,
    description:
      "Hambúrgueres artesanais com carne suculenta e ingredientes frescos. Venha experimentar o sabor incrível do nosso smash burger!",
  },
  {
    id: 4,
    image: sunomono,
    tags: ["Japonês"],
    title: "Sunomono",
    rating: 4.8,
    description:
      "Hambúrgueres artesanais com carne suculenta e ingredientes frescos. Venha experimentar o sabor incrível do nosso smash burger!",
  },
  {
    id: 5,
    image: temaki,
    tags: ["Japonês"],
    title: "Temaki",
    rating: 4.9,
    description:
      "Hambúrgueres artesanais com carne suculenta e ingredientes frescos. Venha experimentar o sabor incrível do nosso smash burger!",
  },
  {
    id: 6,
    image: tempura,
    tags: ["Japonês"],
    title: "Tempura",
    rating: 4.5,
    description:
      "Hambúrgueres artesanais com carne suculenta e ingredientes frescos. Venha experimentar o sabor incrível do nosso smash burger!",
  },
];


export const Product = () => (
  <>
    {cardsData.map((card) => (
      <Card key={card.id}>
        <Image src={card.image} alt={card.title} />
        <TagContainer>
          {card.tags.map((tag, index) => (
            <TagButton key={index}>{tag}</TagButton>
          ))}
        </TagContainer>
        <TitleContainer>
          <Titulo>{card.title}</Titulo>
          <Rating>
            <span>{card.rating}</span>
            <img className="star" src={start} alt="Avaliação" />
          </Rating>
        </TitleContainer>
        <Description>{card.description}</Description>
        <Button />
      </Card>
    ))}
  </>
);