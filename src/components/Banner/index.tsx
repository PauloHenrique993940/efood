import { useEffect, useState } from "react";
import { Apresentation, Banner, BannerTitulos, Titulo } from "./styled";
import { restaurants } from "../../data/restaurants";

const Hero = () => {
  const [indexAtual, setIndexAtual] = useState(0);

  useEffect(() => {
    if (restaurants.length > 1) {
      const interval = setInterval(() => {
        setIndexAtual((prevIndex) => (prevIndex + 1) % restaurants.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, []);

  const restauranteAtual = restaurants[indexAtual];

  return (
    <Banner style={{ backgroundImage: `url(${restauranteAtual.capaDestaque})` }}>
      <BannerTitulos>
        <Apresentation>{restauranteAtual.tipo}</Apresentation>
        <Titulo>{restauranteAtual.titulo}</Titulo>
      </BannerTitulos>
    </Banner>
  );
};

export default Hero;








