import React, { useState } from "react";

interface PaymentFormProps {
  onCancel: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onCancel }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados de pagamento
    console.log({ cardNumber, cvv, expiryMonth, expiryYear });
    // Depois de enviar os dados, você pode finalizar o pagamento
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f0f0", borderRadius: "8px" }}>
      <h2>Pagamento - Valor a pagar R$ 190,90</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="cardNumber">Número do cartão:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
            required
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
          <div>
            <label htmlFor="expiryMonth">Mês de vencimento:</label>
            <input
              type="text"
              id="expiryMonth"
              value={expiryMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
              style={{ width: "100px", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
              required
            />
          </div>
          <div>
            <label htmlFor="expiryYear">Ano de vencimento:</label>
            <input
              type="text"
              id="expiryYear"
              value={expiryYear}
              onChange={(e) => setExpiryYear(e.target.value)}
              style={{ width: "100px", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
              required
            />
          </div>
        </div>
        <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Finalizar pagamento
        </button>
        <button type="button" onClick={onCancel} style={{ width: "100%", padding: "10px", backgroundColor: "#f44336", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", marginTop: "10px" }}>
          Voltar para a edição de endereço
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;