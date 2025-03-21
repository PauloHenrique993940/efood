/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import { Cad, ContainerGrid, ModalContent, Overlay } from "./styles";
import { Card } from "../Product/styles";

// Interface Restaurant
interface Restaurant {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: {
    foto: string;
    preco: number;
    id: number;
    nome: string;
    descricao: string;
    porcao: string;
  }[];
}

const PizzaGrid: React.FC = () => {
  const [cart, setCart] = useState<string[]>([]);
  const [selectedPizza, setSelectedPizza] = useState<Restaurant | null>(null); // Corrigido o tipo
  const [pizzas, setPizzas] = useState<Restaurant[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch os dados da API
  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((response) => response.json())
      .then((data: Restaurant[]) => { // Tipagem correta da resposta da API
        setPizzas(data);  
        setLoading(false);
      })
      .catch(() => {
        setError("Erro ao buscar dados da API");
        setLoading(false);
      });
  }, []);

  const openModal = (pizza: Restaurant) => {
    setSelectedPizza(pizza);
  };

  const closeModal = () => {
    setSelectedPizza(null);
  };

  const addToCart = () => {
    if (selectedPizza) {
      setCart([...cart, selectedPizza.titulo]);
      alert(`${selectedPizza.titulo} adicionada ao carrinho!`);
      closeModal();
    }
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <ContainerGrid>
        {pizzas.map((restaurant) => (
          <Cad key={restaurant.id}>
            <img src={restaurant.capa} alt={restaurant.titulo} />
            <h2>{restaurant.titulo}</h2>
            <p>{restaurant.descricao}</p>
            <button onClick={() => openModal(restaurant)}>Adicionar ao carrinho</button>
          </Cad>
        ))}
      </ContainerGrid>

      {/* MODAL */}
      {selectedPizza && (
        <Overlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} style={{ float: "right" }}>X</button>
            <h2>{selectedPizza.titulo}</h2>
            <img src={selectedPizza.capa} alt={selectedPizza.titulo} style={{ width: "100%" }} />
            <p>{selectedPizza.descricao}</p>
            <p><strong>Avaliação:</strong> {selectedPizza.avaliacao}</p>
            <h3>Cardápio:</h3>
            <div className="cardapio-container">
              {selectedPizza.cardapio.map((item) => (
                <div className="item-cardapio" key={item.id}>
                  <img src={item.foto} alt={item.nome} style={{ width: "100px" }} />
                  <p><strong>{item.nome}</strong></p>
                  <p>R$ {item.preco.toFixed(2)}</p>
                  <p>{item.descricao}</p>
                  <p><strong>Porção:</strong> {item.porcao}</p>
                  <button onClick={addToCart}>Adicionar ao carrinho</button>
                </div>
              ))}
            </div>
          </ModalContent>
        </Overlay>
      )}
    </>
  );
};

export default PizzaGrid;




  












  


  



  


  




  




  









