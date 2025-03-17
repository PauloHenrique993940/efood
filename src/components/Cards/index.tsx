/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { Card } from "../Product/styles";
import pizza from "../../asstes/images/pizza.png";
import { Cad, ContainerGrid,  ModalContent, Overlay } from "./styles";
import pizza1 from "../../asstes/pizzas/pizza1.jpg";
import pizza2 from "../../asstes/pizzas/pizza2.jpg";
import pizza3 from "../../asstes/pizzas/pizza3.jpg";


const PizzaGrid: React.FC = () => {
  const [cart, setCart] = useState<string[]>([]);
  const [selectedPizza, setSelectedPizza] = useState<any | null>(null);

  const pizzas = [
    {
      title: "Pizza Margherita",
      description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
      imageUrl: pizza1,
      price: "R$ 50,90",
    },
    {
      title: "Pizza Pepperoni",
      description: "Uma pizza saborosa com molho de tomate, mussarela derretida e fatias crocantes de pepperoni, uma deliciosa massa  com bordas finas e crocantes.",
      imageUrl: pizza2,
      price: "R$ 55,90",
    },
    {
      title: "Pizza Quatro Queijos",
      description: "Queijo mussarela, parmesão, gorgonzola e provolone se combinam para criar um sabor irresistível acompanha batata frita e Ketchup a gosto",
      imageUrl: pizza3,
      price: "R$ 58,90",
    },
    {
      title: "Pizza Margherita",
      description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
      imageUrl: pizza2,
      price: "R$ 50,90",
    },
    {
      title: "Pizza Pepperoni",
      description: "Uma pizza saborosa com molho de tomate, mussarela derretida e fatias crocantes de pepperoni, uma deliciosa massa  com bordas finas e crocantes.",
      imageUrl: pizza3,
      price: "R$ 55,90",
    },
    {
      title: "Pizza Quatro Queijos",
      description: "Queijo mussarela, parmesão, gorgonzola e provolone se combinam para criar um sabor quente e saboroso acompanha azeitona  e um delicioso de laranja!",
      imageUrl: pizza1,
      price: "R$ 58,90",
    },
  ];

  const openModal = (pizza: any) => {
    setSelectedPizza(pizza);
  };

  const closeModal = () => {
    setSelectedPizza(null);
  };

  const addToCart = () => {
    if (selectedPizza) {
      setCart([...cart, selectedPizza.title]);
      alert(`${selectedPizza.title} adicionada ao carrinho!`);
      closeModal();
    }
  };

  return (
    <>
      <ContainerGrid>
        {pizzas.map((pizza, index) => (
          <Cad key={index}>
            <img src={pizza.imageUrl} alt={pizza.title} />
            <h2>{pizza.title}</h2>
            <p>{pizza.description}</p>
            <button onClick={() => openModal(pizza)}>Adicionar ao carrinho</button>
          </Cad>
        ))}
      </ContainerGrid>

      {/* MODAL */}
      {selectedPizza && (
        <Overlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} style={{ float: "right" }}>X</button>
            <h2>{selectedPizza.title}</h2>
            <img src={selectedPizza.imageUrl} alt={selectedPizza.title} style={{ width: "100%" }} />
            <p>{selectedPizza.description}</p>
            <p><strong>Preço:</strong> {selectedPizza.price}</p>
            <button onClick={addToCart}>Adicionar ao carrinho - {selectedPizza.price}</button>
          </ModalContent>
        </Overlay>
      )}
    </>
  );
};

export default PizzaGrid;


  