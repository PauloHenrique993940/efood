import React, { useState } from "react";
import { ButtaoVoltarAoEndereco, ButtonFinanlizar, CartaoInfosPagment, CartLabel, ConatinerFomsBtn, InputContainer, InputCvv, InputMonth, InputNumber, InputYear, PaymentContainer } from "./paymento";

interface PaymentFormProps {
  onCancel: () => void;
  onPaymentSuccess: () => void; // Adicione esta linha
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onCancel, onPaymentSuccess }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ cardNumber, cvv, expiryMonth, expiryYear });
    // Aqui você faria a lógica real de pagamento (ex: chamada de API)
    // Se o pagamento for bem-sucedido, chame onPaymentSuccess
    onPaymentSuccess();
  };

  return (
    <PaymentContainer>
      <h2>Pagamento - Valor a pagar R$ 190,90</h2>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <div>
            <div>
              <CartLabel>Nome do cartão:</CartLabel>
              <input
                type="text"
                id="cardName"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </div>
            <CartaoInfosPagment>
              <div>
                <CartLabel>Numero do cartão:</CartLabel>
                <InputNumber
                  id="cardNumber"
                  value={cardNumber}
                  onChange={(value) => setCardNumber(value?.toString() || "")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV:</label>
                <InputCvv
                  type="text"
                  id="cvv"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                />
              </div>
            </CartaoInfosPagment>
          </div>
        </InputContainer>
        <CartaoInfosPagment>
          <div>
            <CartLabel htmlFor="expiryMonth">Mês de vencimento:</CartLabel>
            <InputMonth
              type="text"
              id="expiryMonth"
              value={expiryMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
              required
            />
          </div>
          <div>
            <CartLabel htmlFor="expiryYear">Ano de vencimento:</CartLabel>
            <InputYear
              type="text"
              id="expiryYear"
              value={expiryYear}
              onChange={(e) => setExpiryYear(e.target.value)}
              required
            />
          </div>
        </CartaoInfosPagment>
        <ConatinerFomsBtn>
          <ButtonFinanlizar type="submit">
            Finalizar pagamento
          </ButtonFinanlizar>
          <ButtaoVoltarAoEndereco type="button" onClick={onCancel}>
            Voltar para a edição de endereço
          </ButtaoVoltarAoEndereco>
        </ConatinerFomsBtn>
      </form>
    </PaymentContainer>
  );
};

export default PaymentForm;

