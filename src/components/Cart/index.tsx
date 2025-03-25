import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store"; // Estado global do Redux
import { closeCart, removeItem } from "../../store/reducers/cart"; // Importando ações

import { 
  Overlay, CartContainer, Sidebar, CarrinhoContainer, CarriinhoText, 
  CartItem, CartItemImage, CartItemInfo, CartItemName, CartItemPrice, 
  CartItemRemoveButton, CartTotal, CartTotalLabel, CartTotalValue, CheckoutButton 
} from './styles';

import lixeira from "../../asstes/carrinho/lixeira.png";

const Cart = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.cart.isOpen);
  const items = useSelector((state: RootState) => state.cart.items);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Função para remover item do carrinho
  const handleRemoveFromCart = (id: number) => {
    dispatch(removeItem(id)); // Dispara a ação de remoção
  };

  if (!isOpen) return null; // 🔹 Exibe apenas se o carrinho estiver aberto

  return (
    <Overlay>
      <CartContainer>
        <button className="btnFechar" onClick={() => dispatch(closeCart())}>X</button>
        <Sidebar>
          <CarrinhoContainer>
            {items.map((item) => (
              <CartItem key={item.id}>
                <CartItemImage src={item.image} alt={item.name} />
                <CartItemInfo>
                  <CartItemName>{item.name}</CartItemName>
                  <CartItemPrice>R$ {item.price.toFixed(2)}</CartItemPrice>
                </CartItemInfo>
                <CartItemRemoveButton>
                  <img 
                    onClick={() => handleRemoveFromCart(item.id)} // Chama a função de remoção
                    src={lixeira} 
                    alt="Remover" 
                  />
                </CartItemRemoveButton>
              </CartItem>
            ))}
          </CarrinhoContainer>
          <CartTotal>
            <CartTotalLabel>Valor total</CartTotalLabel>
            <CartTotalValue>R$ {total.toFixed(2)}</CartTotalValue>
          </CartTotal>
          <CheckoutButton>Continuar com a entrega</CheckoutButton>
        </Sidebar>
      </CartContainer>
    </Overlay>
  );
};

export default Cart;




