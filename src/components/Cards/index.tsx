/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import { Cad, ContainerGrid } from "./styles";
import Modal from "./Modal"; // Importando o componente Modal

// Interface para Cardápio
export interface CardapioItem {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
}

const Cardapio: React.FC = () => {
  const [cardapio, setCardapio] = useState<CardapioItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<CardapioItem | null>(null);

  // Fetch dos dados da API
  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((response) => response.json())
      .then((data) => {
        const allItems = data.flatMap((restaurant: any) => restaurant.cardapio);
        const limitedItems = allItems.slice(0, 6);
        if (limitedItems.length > 0) {
          setCardapio(limitedItems);
        } else {
          setError("Nenhum item disponível no cardápio.");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Erro ao buscar dados da API");
        setLoading(false);
      });
  }, []);

  const handleOpenModal = (item: CardapioItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <ContainerGrid>
        {cardapio.length > 0 ? (
          cardapio.map((item) => (
            <Cad key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <h2>{item.nome}</h2>
              <p><strong>Descrição:</strong> {item.descricao}</p>
              <p><strong>Porção:</strong> {item.porcao}</p>
              <p><strong>Preço:</strong> R$ {item.preco.toFixed(2)}</p>
              <button onClick={() => handleOpenModal(item)}>Adicionar ao carrinho</button>
            </Cad>
          ))
        ) : (
          <div>Nenhum item disponível no cardápio.</div>
        )}
      </ContainerGrid>
      {modalOpen && selectedItem && (
        <Modal item={selectedItem} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Cardapio;























































