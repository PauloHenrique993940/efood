import styled, {createGlobalStyle} from "styled-components";
import { cores } from "../../styles";
import Vector from '../../asstes/images/Vector.png'; 


export const HeaderBar = styled.header`
  height: 384px;
  width: 100%;
  color: black;
  background-image: url(${Vector});
  color: ${cores.rosa};
  padding-top: 40px;
  padding-bottom: 40px;
`;
export const ContainerLogo = styled.img`
  display: flex; 
  margin-left: auto;
  margin-right: auto;
  max-width: 100%; 
  height: auto;
  width: 125px;
  align-items: center;


`
export const TituloTexto = styled.h1`
  color: ${cores.rosa};
  width: 539px;
  text-align: center;
  margin: 0 auto;
  font-weight: 900;
  padding-top: 150px;
  font-size: 36px;

`


