import styled from "styled-components";
import { breakpoints, cores } from "../../styles";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
`;

export const CartContainer = styled.div`
  width: 360px;
  height: 100vh;
  background: ${cores.rosa};
  padding: 30px 10px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.tablet}){
    display: flex;
    padding: 10px;
    width: 45%;
  
  }

  &.is-open {
    display: flex;
  }

  .btnFechar {
    color: ${cores.branca};
    margin-bottom: 8px;
    border: none;
    width: 50px;
    height: 50px; /* Definindo uma altura para torná-lo mais "clickable" */
    font-weight: bold;
    align-self: flex-end;
    background-color: transparent;
    border-radius: 50%; /* Deixa o botão redondo */
    font-size: 18px; /* Aumenta o tamanho da fonte */
    display: flex;
    justify-content: center;
    align-items: center; /* Centraliza o ícone ou texto dentro do botão */
    cursor: pointer;
    transition: all 0.3s ease; /* Transição suave */
    border-color: ${cores.branca};

    @media(max-width: ${breakpoints.tablet}){
      align-self:flex-start;
    }
  }

  .btnFechar:hover {
    background-color: ${cores.rosa}; 
    color: ${cores.branca};
    transform: scale(1.1);
  }

  .btnFechar:focus {
    outline: none; /* 
    box-shadow: 0 0 0 2px ${cores.rosa}; 
  }

`;