/* eslint-disable react/react-in-jsx-scope */
import { useDispatch } from "react-redux";
import { addItem, openCart } from "../../store/reducers/cart";
import { restaurants, type MenuItem } from "../../data/restaurants";
import { Cad, ContainerGrid } from "./styles";

const Cardapio = () => {
  const dispatch = useDispatch();
  const cardapio = restaurants.flatMap((restaurant) => restaurant.cardapio).slice(0, 6);

  const handleAddToCart = (item: MenuItem) => {
    dispatch(addItem({
      id: item.id,
      name: item.nome,
      price: item.preco,
      image: item.foto,
      quantity: 1,
    }));
    dispatch(openCart()); // 🔹 Abre o carrinho após adicionar o item
  };

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

























































