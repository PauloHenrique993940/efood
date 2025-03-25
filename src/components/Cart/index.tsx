import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { closeCart, removeItem } from "../../store/reducers/cart";

import { 
  Overlay, CartContainer, Sidebar, CarrinhoContainer, CarriinhoText, 
  CartItem, CartItemImage, CartItemInfo, CartItemName, CartItemPrice, 
  CartItemRemoveButton, CartTotal, CartTotalLabel, CartTotalValue, CheckoutButton 
} from './styles';

import lixeira from "../../asstes/carrinho/lixeira.png";
import DeliveryForm from "./DeliveryForm"; // Importe DeliveryForm

const Cart = () => {
  const dispatch = useDispatch();
  const [showDeliveryForm, setShowDeliveryForm] = useState(false); // Estado para controlar a exibição de DeliveryForm
  const isOpen = useSelector((state: RootState) => state.cart.isOpen);
  const items = useSelector((state: RootState) => state.cart.items);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    setShowDeliveryForm(true); // Exibe DeliveryForm
  };

  const handleCancelDelivery = () => {
    setShowDeliveryForm(false); // Oculta DeliveryForm
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <CartContainer>
        <button className="btnFechar" onClick={() => dispatch(closeCart())}>X</button>
        {showDeliveryForm ? (
          <DeliveryForm onCancel={handleCancelDelivery} /> // Renderiza DeliveryForm se showDeliveryForm for true
        ) : (
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
                      onClick={() => handleRemoveFromCart(item.id)}
                      src={lixeira} 
                      alt="Remover" 
                    />
                  </CartItemRemoveButton>
                </CartItem>
              ))}
            </CarrinhoContainer>
            <CartTotal>
              <CartTotalLabel>Valor total:</CartTotalLabel>
              <CartTotalValue>R$ {total.toFixed(2)}</CartTotalValue>
            </CartTotal>
            <CheckoutButton onClick={handleCheckout}>Continuar com a entrega</CheckoutButton>
          </Sidebar>
        )}
      </CartContainer>
    </Overlay>
  );
};

export default Cart;




