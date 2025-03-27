import React from "react";
import styled from "styled-components";
import { Botao, Container, Texto, Titulo} from "./stylesConf"

interface ConfirmacaoProps {
  orderId: string;
  onClose: () => void;
}

const Confirmacao: React.FC<ConfirmacaoProps> = ({ orderId, onClose }) => {
  return (
    <Container>
      <Titulo>PEDIDO REALIZADO - ({orderId})</Titulo>
      <Texto>
        Estamos felizes em informar que seu pedido já está sendo preparado para envio. Você receberá um email com o código de rastreamento e informações de entrega fornecidas.
      </Texto>
      <Texto>
        Lembramos de consultar quais nossos entregadores estão autorizados a realizar cobranças extras.
      </Texto>
      <Texto>
        Lembre-se da importância de registrar os dados após recebimento do pedido, para quando acabar seus produtos, ir até uma unidade e realizar a retenção.
      </Texto>
      <Texto>
        Esperamos que desfrute da sua Seleciona e agradecemos a preferência gastronômica. Bom apetite!
      </Texto>
      <Botao onClick={onClose}>Concluir</Botao>
    </Container>
  );
};

export default Confirmacao; // Exportação padrão corrigida



