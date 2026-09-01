import styled from "styled-components";
import { breakpoints, cores } from "../../styles";

export const Banner = styled.section`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 460px;
  position: relative;
  display: flex;
  align-items: flex-end;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2));
  }

  @media (max-width: ${breakpoints.tablet}) {
    min-height: 360px;
  }
`;


export const Apresentation = styled.h1`
  font-weight: 400;
  font-size: 20px;
  color: ${cores.branca};
  margin-bottom: 12px;
`;

export const Titulo = styled.h2`
  color: ${cores.branca};
  font-size: 40px;
  font-weight: 900;
  line-height: 1.15;
  max-width: 620px;
  margin: 0;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 30px;
  }

`

export const BannerTitulos = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 56px 24px;
  position: relative;
  z-index: 1;

`;
