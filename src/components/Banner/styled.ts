import styled from "styled-components";
import  restangulo from "../../asstes/images/image.png"
import { cores } from "../../styles";

export const Banner = styled.section`
  width: 100%;
  background-image: url(${restangulo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 280px; 
  position: relative;
  will-change: transform;
  backface-visibility: hidden;
  image-rendering: crisp-edges;
  transform: translateZ(0); /* Ajuda a evitar flickering */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1; /* Garantir que o fundo escuro fique sobre a imagem */
  }
`;


export const Apresentation = styled.h1`
 font-weight: 100;
  font-size: 32px;
  color: ${cores.branca};
  width: 101px;
  height: 33.25px;
  padding-top: 20px

`

export const Titulo = styled.h2`
  color: ${cores.branca};
  font-size: 32px;
  font-weight: 900;
  width: 676px;
  height: 33.25px;
  font-familt: Roboto;
  padding-top: 180px;
  opacity: 0.9;

`

export const BannerTitulos = styled.div`
  width: 100%;
  padding-left: 23%;

`