/* eslint-disable react/react-in-jsx-scope */
import { Card } from "../Product/styles";
import  pizza from "../../asstes/images/pizza.png"
import { Cad, ContainerGrid } from "./styles";

const PizzaGrid: React.FC = () => {
    const pizzas = [
      {
        title: "Pizza Margherita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        imageUrl: pizza, // Substitua por uma imagem real
      },
      {
        title: "Pizza Pepperoni",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        imageUrl: pizza,
      },
      {
        title: "Pizza Quatro Queijos",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        imageUrl: pizza,
      },
      {
        title: "Pizza Margherita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!.",
        imageUrl: pizza, // Substitua por uma imagem real
      },
      {
        title: "Pizza Pepperoni",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        imageUrl: pizza,
      },
      {
        title: "Pizza Quatro Queijos",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        imageUrl: pizza,
      },
    ];
  
    return (
      <ContainerGrid>
        {pizzas.map((pizza, index) => (
          <Cad key={index}>
            <img src={pizza.imageUrl} alt={pizza.title}/>
            <h2>{pizza.title}</h2>
            <p >{pizza.description}</p>
            <button>Adicionar ao carrinho</button>
          </Cad>
        ))}
      </ContainerGrid>
    );
  };
  
  export default PizzaGrid;
  