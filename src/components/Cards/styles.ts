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
   width:320px;
   height: 338px;
   margin-top: 30px;
   background-color: ${cores.rosa};
   color: ${cores.branca};
   padding: 10px;

   img {
    width: 100%;
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
