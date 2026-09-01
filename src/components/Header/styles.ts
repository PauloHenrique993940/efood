import styled from "styled-components";
import { breakpoints, cores } from "../../styles";
import Vector from '../../asstes/images/Vector.png';


export const HeaderBar = styled.header`
  min-height: 340px;
  width: 100%;
  background-image: url(${Vector});
  background-size: cover;
  background-position: center;
  color: ${cores.rosa};
  padding: 32px 20px 52px;
  text-align: center;

  @media (max-width:  ${breakpoints.tablet}) {
    min-height: 280px;
    padding: 28px 16px 40px;
  }
`;

export const ContainerLogo = styled.img`
  display: block;
  width: 118px;
  height: auto;
  margin: 0 auto;
`;

export const TituloTexto = styled.h1`
  color: ${cores.rosa};
  max-width: 600px;
  text-align: center;
  margin: 0 auto;
  font-weight: 900;
  padding-top: 92px;
  font-size: 34px;
  line-height: 1.16;

  @media(max-width: ${breakpoints.tablet}){
    padding-top: 64px;
    font-size: 27px;
  }
`;


