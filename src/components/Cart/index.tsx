/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react"; // Importe useEffect
import { useSelector, useDispatch } from "react-redux";
import lixeira from "../../asstes/carrinho/lixeira.png";
import DeliveryForm from "./DeliveryForm";
import PaymentForm from "./PaymentForm";
import Confirmacao from "./confirm/Confirmacao"; // Importação corrigida
import { RootState } from "../../store";
import { closeCart, removeItem } from "../../store/reducers/cart";

// ... (restante do código) ...

import {
    Overlay, CartContainer, Sidebar, CarrinhoContainer,
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
    const [orderId] = useState("ORDER_12345");
    const isOpen = useSelector((state: RootState) => state.cart.isOpen);
    const items = useSelector((state: RootState) => state.cart.items);

    // Recalcula o total sempre que os items do carrinho mudarem
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

    // Este useEffect não é estritamente necessário para a funcionalidade principal
    // de mostrar o valor total, mas pode ser útil para observar as mudanças nos itens.
    useEffect(() => {
        console.log("Itens no carrinho atualizados:", items);
        console.log("Valor total atualizado:", total);
    }, [items, total]); // Depende de 'items' para ser executado quando o carrinho mudar

    if (!isOpen) return null;

    return (
        <Overlay>
            <CartContainer>
                <button className="btnFechar" onClick={() => dispatch(closeCart())}>X</button>
                {showConfirmacao ? (
                    <Confirmacao onClose={handleConfirmacaoClose} orderId={orderId} total={total} />
                ) : showPaymentForm ? (
                    <PaymentForm
                        onPaymentSuccess={handlePaymentSuccess}
                        onCancel={handlePaymentCancel}
                        total={total} // Passe o valor do 'total' como prop
                    />
                ) : showDeliveryForm ? (
                    <DeliveryForm onCancel={handleCancelDelivery} onDeliverySuccess={handleDeliverySuccess} total={0} />
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













































































