import React, { useState, useEffect } from "react";
import Button from "../Button";
import { Card, TagContainer, TagButton, Image, TitleContainer, Description, Rating, Titulo } from "./styles";
import start from '../../asstes/images/star.svg';
import Cart from "../Cart";

// Definindo o tipo para os dados da API
export interface Restaurant {
  length: number;
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: {
    foto: string;
    preco: number;
    id: number;
    nome: string;
    descricao: string;
    porcao: string;
  }[]; // Especificando que cardapio é um array de objetos
  // Adicione outras propriedades se necessário
}


export const Product = () => {
  const [cardsData, setCardsData] = useState<Restaurant[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then(response => response.json())
      .then(data => {
        setCardsData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Erro ao buscar dados da API');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {cardsData.map((card) => (
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
