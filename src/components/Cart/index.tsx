import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import lixeira from "../../asstes/carrinho/lixeira.png";
import DeliveryForm from "./DeliveryForm";
import PaymentForm from "./PaymentForm";
import Confirmacao from "./confirm/Confirmacao"; // Importação corrigida
import { RootState } from "../../store";
import { closeCart, removeItem } from "../../store/reducers/cart";

// ... (restante do código) ...

import { 
    Overlay, CartContainer, Sidebar, CarrinhoContainer, CarriinhoText, 
    CartItem, CartItemImage, CartItemInfo, CartItemName, CartItemPrice, 
    CartItemRemoveButton, CartTotal, CartTotalLabel, CartTotalValue, CheckoutButton 
} from './styles';

const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
};

const Cart = () => {
    const dispatch = useDispatch();
    const [showDeliveryForm, setShowDeliveryForm] = useState(false);
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [showConfirmacao, setShowConfirmacao] = useState(false);
    const [orderId, setOrderId] = useState("ORDER_12345"); // Adicione um estado para orderId

    const isOpen = useSelector((state: RootState) => state.cart.isOpen);
    const items = useSelector((state: RootState) => state.cart.items);

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleRemoveFromCart = (id: number) => {
        dispatch(removeItem(id));
    };

    const handleCheckout = () => {
        setShowDeliveryForm(true);
    };

    const handleCancelDelivery = () => {
        setShowDeliveryForm(false);
    };

    const handleDeliverySuccess = () => {
        setShowDeliveryForm(false);
        setShowPaymentForm(true);
    };

    const handlePaymentSuccess = () => {
        setShowPaymentForm(false);
        setShowConfirmacao(true);
    };

    const handlePaymentCancel = () => {
        setShowPaymentForm(false);
    };

    const handleConfirmacaoClose = () => {
        setShowConfirmacao(false);
        setShowDeliveryForm(false);
        setShowPaymentForm(false);
    };

    if (!isOpen) return null;

    return (
        <Overlay>
            <CartContainer>
                <button className="btnFechar" onClick={() => dispatch(closeCart())}>X</button>
                {showConfirmacao ? (
                    <Confirmacao onClose={handleConfirmacaoClose} orderId={orderId} /> // Adicione orderId aqui
                ) : showPaymentForm ? (
                    <PaymentForm onPaymentSuccess={handlePaymentSuccess} onCancel={handlePaymentCancel} />
                ) : showDeliveryForm ? (
                    <DeliveryForm onCancel={handleCancelDelivery} onDeliverySuccess={handleDeliverySuccess} />
                ) : (
                    <Sidebar>
                        <CarrinhoContainer>
                            {items.map((item) => (
                                <CartItem key={item.id}>
                                    <CartItemImage src={item.image} alt={item.name} />
                                    <CartItemInfo>
                                        <CartItemName>{item.name}</CartItemName>
                                        <CartItemPrice>{formatCurrency(item.price)}</CartItemPrice>
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
                            <CartTotalValue>{formatCurrency(total)}</CartTotalValue>
                        </CartTotal>
                        <CheckoutButton onClick={handleCheckout}>Continuar com a entrega</CheckoutButton>
                    </Sidebar>
                )}
            </CartContainer>
        </Overlay>
    );
};

export default Cart;












































