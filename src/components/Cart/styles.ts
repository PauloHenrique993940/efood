import styled from "styled-components";
import { cores } from "../../styles";

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
  width: 320px;
  height: 100vh;
  background: ${cores.rosa};
  padding: 30px 10px;
  display: flex;
  flex-direction: column;

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
    border-color: ${cores.branca}
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

export const Sidebar = styled.div`
  flex: 1;
`;

export const CarrinhoContainer = styled.div`
`;

export const CarriinhoText = styled.h2`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: ${cores.rosa};
`
export const CartItem = styled.div`
  display: flex;
  margin-bottom: 20px; /* Adiciona 10px de espaço abaixo de cada item */
  background: ${cores.rosaClaro}; /* Adiciona o fundo para cada item */
  padding: 8px; /* Adiciona preenchimento interno para melhor visualização */
`;

export const CartItemImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;
`;

export const CartItemInfo = styled.div`
  flex: 1;
`;

export const CartItemName = styled.h3`
  font-size: 16px;
  color:${cores.rosa};
`;

export const CartItemPrice = styled.p`
  font-size: 14px;
  color: ${cores.rosa};
  margin-top: 10px;
`;

export const CartItemRemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 40px;
`;

export const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  background: transparent;
  border-radius: 8px;
`;

export const CartTotalLabel = styled.span`
  font-weight: bold;
`;

export const CartTotalValue = styled.span`
  font-weight: bold;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  background: ${cores.branca};
  color: ${cores.rosa};
  heigth: 16px;
  padding: 4px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 12px;
  border-color: 1px ${cores.branca};
`;

