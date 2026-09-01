import styled from "styled-components";
import { cores } from "../../styles";

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Cad = styled.div`
   overflow: hidden;
   background-color: ${cores.branca};
   border: 1px solid #e6e6e6;
   border-radius: 6px;
   color: ${cores.cortextForms};
   padding: 0 0 16px;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  img {
    width: 100%;
    height: 180px;
    display: block;
    object-fit: cover;
  }

  button {
    width: calc(100% - 32px);
    color: ${cores.branca};
    padding: 10px;
    margin: 14px 16px 0;
    background-color: ${cores.rosa};
    border: none;
    border-radius: 4px;
    font-weight: 800;
    cursor: pointer;

    &:hover {
      background-color: #c91625;
    }
  }

  h2 {
    font-weight: 900;
    font-size: 17px;
    margin: 16px 16px 6px;
  }

  p {
    margin: 4px 16px 0;
    line-height: 1.4;
    font-size: 13px;
    font-weight: 400;
    color: #6d6d6d;
  }
`;

