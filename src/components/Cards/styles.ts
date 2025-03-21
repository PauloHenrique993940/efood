import styled from "styled-components";
import { cores } from "../../styles";

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;


export const Cad = styled.div`
   width:400px;
   height: 420px;
   margin-top: 30px;
   background-color: ${cores.rosa};
   color: ${cores.branca};
   padding: 10px;

   img {
    width: 100%;
    height: 180px;
   }

   button {
    width:100%;
    color: ${cores.rosa};
    padding: 4px;
    margin-top: 10px;
    background-color: ${cores.blanck};
    border: none;

    &:hover {
      background-color: transparent;
      color: ${cores.blanck};
      border: 1px solid ${cores.blanck};
    }
   
   }
   
   h2 {
    font-weight; 900;
    font-size; 16px;
    margin-top:5px;
   }

   p {
    width: 304px;
    margin-top: 5px;
    line height: 22px;
    font-size: 14px;
    font-weigth: 400;
    color: ${cores.branca};
     
   }

`

/* ESTILOS PARA O MODAL */
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: ${cores.rosa};
  color: ${cores.branca};
  padding: 24px;
  border-radius: 12px;
  width: 60%;
  max-width: 600px;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${cores.blanck};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  .cardapio-container {
    display: grid;
    grid-template-columns: 1fr 1fr; /* DUAS COLUNAS */
    gap: 16px;
    max-height: 300px; /* Adiciona um limite */
    overflow-y: auto; /* Scroll se necessário */
    padding: 16px;
    width: 100%;
    
  }

  .item-cardapio {
    background: ${cores.rosa};
    color: ${cores.rosa};
    padding: 12px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid ${cores.branca};
  }

  img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }
  P{
    margin-top: 20px;
  }
  button {
    background: ${cores.blanck};
    color: ${cores.rosa};
    border: none;
    padding: 12px 16px;
    cursor: pointer;
    border-radius: 8px;
    font-weight: bold;
    transition: 0.3s ease-in-out;
    margin-top: 12px;

    &:hover {
      background-color: transparent;
      color: ${cores.blanck};
      border: 2px solid ${cores.blanck};
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    
    .cardapio-container {
      grid-template-columns: 1fr; /* Ajusta para coluna única no mobile */
    }
  }
`;
