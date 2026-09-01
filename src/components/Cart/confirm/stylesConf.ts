import React from "react";
import styled from "styled-components";
import { cores } from "../../../styles";

interface ConfirmacaoProps {
  orderId: string;
  onClose: () => void;
}



// Componentes estilizados usando styled-components
export const Container = styled.div`
  color: ${cores.branca};
  text-align: center;
  padding: 8px;
  font-family: Arial, sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Titulo = styled.h2`
  margin-bottom: 20px;
`;

export const Texto = styled.p`
  margin-bottom: 10px;
  line-height: 1;
  text-align: left;
`;

export const Botao = styled.button`
  background-color: white;
  color: #E57373;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;