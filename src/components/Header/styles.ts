import styled, {createGlobalStyle} from "styled-components";
import { breakpoints, cores } from "../../styles";
import Vector from '../../asstes/images/Vector.png'; 


export const HeaderBar = styled.header`
  height: 384px;
  width: 100%;
  background-image: url(${Vector});
  background-size: cover;
  background-position: center;
  color: ${cores.rosa};
  padding: 40px 20px;

  @media (max-width:  ${breakpoints.tablet}) {
    HeaderBar{
      display: block;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: auto;
    }
  }
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
  font-size: 32px;


  @media(max-width: ${breakpoints.tablet}){
  }

`


