import styled from "styled-components";
import { cores } from "../../styles";
import barca from '../../asstes/images/barca-sushi-1.jpg'
export const Card = styled.div`
  background-color: ${cores.branca};
  width: 472px;
  height: 0 auto;
  border: 1px solid ${cores.rosa};
  padding-bottom: 10px;
  position: relative;
`
export const Image = styled.img`
  width: 100%;
  height: 200px;
  display: block;
  position: relative
  object-fit: cover;
  
`;

export const TagContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
`;

export const TagButton = styled.span`
  background-color:  ${cores.rosa}; // Cor de fundo da tag
  border: none;
  padding: 10px;
  font-size: 12px;
  margin-left: 10px; // Espaçamento entre as tags
  color: ${cores.blanck};
  font-weight: bold;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  
`;

export const Rating = styled.div`
  color: ${cores.rosa}; // Cor da avaliação
  font-size: 18px;
  margin-left: 10px;
  font-weigth: 700;
  display: flex;
  align-itens: center;
  gap: 10px;
`;
export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 18px;
  color: ${cores.rosa};
`
export const Description = styled.p`
  width: 100px
  font-size: 14px;
  color: ${cores.rosa};
  margin-left: 10px;
  margin-right: 10px;
`;


