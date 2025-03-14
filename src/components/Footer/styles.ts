import styled from "styled-components";
import { cores } from "../../styles";
import bgFooter from '../../asstes/images/bgFooter.png'

export const FooterBar = styled.footer`
   background-image: url(${bgFooter});
   widht: 100%;
   color: ${cores.rosa};
   display: block;
   height: 298px;
   padding-top: 40px;
   padding-bottom: 40px;
   img {
    display: block; 
    margin-left: auto;
    margin-right: auto;
    max-width: 100%; 
    height: auto;
    width: 125px;
  }

  .containerLogo {
    width: 100px;
    margin-bottom: 10px;
  }

  smail{
    text-align: center;
  }

`
export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const LinkImage = styled.div`
  display: flex;
`;

export const ImageWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;

  img {
    width: 60px;
  }
`
/* Adicionando estilo para o small */

export const SmallText = styled.small`
  margin-top: 30px;
  color: ${cores.rosa};
  width: 100%; /* Para se adaptar ao tamanho do contêiner */
  max-width: 480px; /* Limite de largura */
  font-weight: 400;
  font-size: 10px;
  display: block;
  text-align: center; /* Centraliza o texto */
  line-height: 1.5;
  margin-left: auto;
  margin-right: auto;
`;
