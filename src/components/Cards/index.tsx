import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem, openCart } from "../../store/reducers/cart"; // Importando ações do Redux
import { Cad, ContainerGrid } from "./styles";
import Modal from "./Modal";

export interface CardapioItem {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
}

const Cardapio: React.FC = () => {
  const dispatch = useDispatch();
  const [cardapio, setCardapio] = useState<CardapioItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((response) => response.json())
      .then((data) => {
        const allItems = data.flatMap((restaurant: any) => restaurant.cardapio);
        const limitedItems = allItems.slice(0, 6);
        setCardapio(limitedItems.length > 0 ? limitedItems : []);
        setLoading(false);
      })
      .catch(() => {
        setError("Erro ao buscar dados da API");
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (item: CardapioItem) => {
    dispatch(addItem({
      id: item.id,
      name: item.nome,
      price: item.preco,
      image: item.foto,
      quantity: 1,
    }));
    dispatch(openCart()); // 🔹 Abre o carrinho após adicionar o item
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <ContainerGrid>
      {cardapio.length > 0 ? (
        cardapio.map((item) => (
          <Cad key={item.id}>
            <img src={item.foto} alt={item.nome} />
            <h2>{item.nome}</h2>
            <p><strong>Descrição:</strong> {item.descricao}</p>
            <p><strong>Porção:</strong> {item.porcao}</p>
            <p><strong>Preço:</strong> R$ {item.preco.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(item)}>Adicionar ao carrinho</button>
          </Cad>
        ))
      ) : (
        <div>Nenhum item disponível no cardápio.</div>
      )}
    </ContainerGrid>
  );
};

export default Cardapio;

























































