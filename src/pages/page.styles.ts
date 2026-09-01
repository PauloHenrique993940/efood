import styled from 'styled-components';
import { breakpoints, cores } from '../styles';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: ${cores.branca};
  min-height: 82px;
  position: relative;
  width: 100%;
  border-bottom: 1px solid #e9e9e9;

  @media (max-width: ${breakpoints.tablet}) {
    min-height: 72px;
  }
`;

export const HeaderLinks = styled.div`
  max-width: 1024px;
  width: 100%;
  min-height: 82px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    min-height: 72px;
    padding: 0 16px;
  }
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
  gap: 16px;
  font-weight: 900;
  font-size: 15px;
`;

export const Li = styled.li`
  color: ${cores.rosa};
  font-weight: 900;
  font-size: 15px;
`;

export const Img = styled.img`
  height: 38px;
`;

export const Span = styled.span`
  color: ${cores.rosa};
`;

export const A = styled(Link)`
  color: ${cores.rosa} !important;
  text-decoration: none;
`;

export const Menu = styled.section`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 48px 24px 72px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 32px 16px 48px;
  }
`;


