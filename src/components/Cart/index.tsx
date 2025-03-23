import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store"; // Importe o tipo do estado global
import { closeCart } from "../../store/reducers/cart"; // Ação para fechar o carrinho

import { 
  Overlay, CartContainer, Sidebar, CarrinhoContainer, CarriinhoText, 
  CartItem, CartItemImage, CartItemInfo, CartItemName, CartItemPrice, 
  CartItemRemoveButton, CartTotal, CartTotalLabel, CartTotalValue, CheckoutButton 
} from './styles';

import pizza from "../../asstes/images/marguerita-modal.png";
import lixeira from "../../asstes/carrinho/lixeira.png";

const Cart = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state: RootState) => state.cart.isOpen);

  const items = [
    { name: "Pizza Marguerita", price: 63.92, image: pizza },
    { name: "Pizza Marguerita", price: 63.92, image: pizza },
    { name: "Pizza Marguerita", price: 63.92, image: pizza },
  ];

  const total = items.reduce((sum, item) => sum + item.price, 0);

  if (!isOpen) return null; // 🔹 Só exibe o carrinho quando ele estiver aberto

  return (
    <Overlay>
      <CartContainer>
        <button className="btnFechar" onClick={() => dispatch(closeCart())}>X</button>
        <Sidebar>
          <CarrinhoContainer>
            {items.map((item, index) => (
              <CartItem key={index}>
                <CartItemImage src={item.image} alt={item.name} />
                <CartItemInfo>
                  <CartItemName>{item.name}</CartItemName>
                  <CartItemPrice>R$ {item.price.toFixed(2)}</CartItemPrice>
                </CartItemInfo>
                <CartItemRemoveButton>
                  <img src={lixeira} alt="Remover" />
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


