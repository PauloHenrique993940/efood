import Button from "../Button";
import { Card, TagContainer, TagButton, Image, TitleContainer, Description, Rating, Titulo } from "./styles";
import start from '../../asstes/images/star.svg';
import { restaurants } from "../../data/restaurants";

export const Product = () => {
  return (
    <>
      {restaurants.map((card) => (
        <Card key={card.id}>
          <Image src={card.capa} alt={card.titulo} />
          <TagContainer>
            {card.destacado && <TagButton>Destaque</TagButton>}
            <TagButton>{card.tipo}</TagButton>
          </TagContainer>
          <TitleContainer>
            <Titulo>{card.titulo}</Titulo>
            <Rating>
              <span>{card.avaliacao}</span>
              <img className="star" src={start} alt="Avaliação" />
            </Rating>
          </TitleContainer>
          <Description>{card.descricao}</Description>
          <Button />
        </Card>
      ))}
    </>
  );
};
