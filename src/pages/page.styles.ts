import styled from 'styled-components';
import Fundo from "../asstes/images/Fundo.png";
import { cores } from '../styles';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-image: url(${Fundo});
  height: 186px;
  position: relative;
  width: 100%;
  color: ${cores.rosa};
`;

export const HeaderLinks = styled.div`
  width: 1024px;
  z-index: 1;
  padding-top: 30px;
  display: flex;
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  align-items: center; /* Alinha verticalmente */
  margin: 0 auto; /* Centraliza horizontalmente */
`;

export const Nav = styled.nav`
  color: ${cores.rosa};
  width: 100%;
  text-align: center;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 0px; /* Espaçamento entre os itens */
  font-weight: 900;
  font-size: 18px;
`;

export const Li = styled.li`
  color: ${cores.rosa};
  font-weight: 900;
  font-size: 18px;
`;

export const Img = styled.img`
  height: 50px;
`;

export const Span = styled.span`
  color: ${cores.rosa};
`;

export const A = styled(Link)`
  color: ${cores.rosa} !important;
  text-decoration: none;
`;


