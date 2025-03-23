import React, { useState } from "react";
import styled from "styled-components";
import { cores } from "../../styles";

interface ModalProps {
  item: {
    foto: string;
    nome: string;
    descricao: string;
    porcao: string;
    preco: number;
  };
  onClose: () => void;
}

// ------------ ESTILOS ------------
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: ${cores.rosa};
  color: ${cores.branca};
  padding: 24px;
  width: 100%;
  max-width: 850px;
  height: 344px;
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  gap: 24px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 95%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  color: ${cores.branca};
  font-size: 18px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 280px;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  
  @media (max-width: 768px) {
    width: 100%;
    max-height: 250px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  h2 {
    margin-bottom: 0px;
    font-size: 20px;
  }
  
  p {
    margin-top: 10px;
    line-height: 22px;
    width: 500px;
    height: 176px;
    font-weight: 400;
    font-size: 14px;
  }
`;

const AddToCartButton = styled.button`
  background: ${cores.branca};
  color: ${cores.rosa};
  border: none;
  padding: 12px 16px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s ease-in-out;
  margin-top: auto;
  width: 300px;
  heigth: 24px:
  
  &:hover {
    background: transparent;
    color: ${cores.branca};
    transform: scale(1.05);
  }
`;

const ConfirmationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
`;

const ConfirmationImage = styled.img`
  width: 280px;
  height: auto;
  max-height: 400px;
  object-fit: cover;
`;

// ------------ COMPONENTE ------------
const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    //Ação
    setIsAdded(true);
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        {isAdded ? (
          <ConfirmationWrapper>
            <ConfirmationImage src={item.foto} alt={item.nome} />
            <h2>Item adicionado ao carrinho!</h2>
          </ConfirmationWrapper>
        ) : (
          <>
            <Image src={item.foto} alt={item.nome} />
            <TextWrapper>
              <h2>{item.nome}</h2>
              <p>{item.descricao}</p>
              <p className="P-Botton">
                <strong>Serve:</strong> {item.porcao}
              </p>
              <p>
                <strong>Preço:</strong> R$ {item.preco.toFixed(2)}
              </p>
              <AddToCartButton onClick={handleAddToCart}>
                Adicionar ao carrinho - R$ {item.preco.toFixed(2)}
              </AddToCartButton>
            </TextWrapper>
          </>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;






