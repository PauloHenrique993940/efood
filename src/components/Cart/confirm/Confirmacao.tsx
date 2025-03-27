import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Botao, Container, Texto, Titulo } from "./stylesConf";

interface OrderData {
  trackingCode: string;
  deliveryDate: string;
}

interface ConfirmacaoProps {
  orderId: string;
  onClose: () => void;
}

const Confirmacao: React.FC<ConfirmacaoProps> = ({ orderId, onClose }) => {
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products: [{ id: 1, price: 0 }],
        delivery: {
          receiver: "Nome do destinatário",
          address: {
            description: "Endereço completo",
            city: "Cidade",
            zipCode: "00000-000",
            number: 123,
            complement: "Apto 101",
          },
        },
        payment: {
          card: {
            name: "Nome no cartão",
            number: "0000 0000 0000 0000",
            code: 123,
            expires: {
              month: 12,
              year: 2030,
            },
          },
        },
      }),
    })
      .then((response) => response.json())
      .then((data: OrderData) => {
        setOrderData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [orderId]);

  if (loading) return <Texto>Carregando...</Texto>;
  if (error) return <Texto>Erro ao carregar os dados: {error}</Texto>;

  return (
    <Container>
      <Titulo>PEDIDO REALIZADO - ({orderId})</Titulo>
      <Texto>Seu pedido está sendo preparado para envio.</Texto>
      <Texto>Código de rastreamento: {orderData?.trackingCode}</Texto>
      <Texto>Data estimada de entrega: {orderData?.deliveryDate}</Texto>
      <Texto>
        Lembre-se da importância de registrar os dados após o recebimento do pedido.
      </Texto>
      <Botao onClick={onClose}>Concluir</Botao>
    </Container>
  );
};

export default Confirmacao;




