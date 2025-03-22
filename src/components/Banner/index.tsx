import { useState, useEffect } from "react";
import { Apresentation, Banner, BannerTitulos, Titulo } from "./styled";

// Definição da interface para os dados do restaurante
interface Restaurante {
  id: number;
  titulo: string;
  capa: string;
  tipo: string;
}

const Hero = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);
  const [indexAtual, setIndexAtual] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((response) => response.json())
      .then((data: Restaurante[]) => {
        if (data.length > 0) {
          setRestaurantes(data);
        } else {
          setError("Nenhum restaurante encontrado.");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Erro ao carregar os dados do restaurante.");
        setLoading(false);
      });
  }, []);

  // Alterna entre os restaurantes a cada 5 segundos
  useEffect(() => {
    if (restaurantes.length > 1) {
      const interval = setInterval(() => {
        setIndexAtual((prevIndex) => (prevIndex + 1) % restaurantes.length);
      }, 5000);

      return () => clearInterval(interval); // Limpa o intervalo ao desmontar
    }
  }, [restaurantes]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;
  if (!restaurantes.length) return <div>Nenhum restaurante disponível</div>;

  const restauranteAtual = restaurantes[indexAtual];

  return (
    <Banner style={{ backgroundImage: `url(${restauranteAtual.capa})` }}>
      <BannerTitulos>
        <Apresentation>{restauranteAtual.tipo}</Apresentation>
        <Titulo>{restauranteAtual.titulo}</Titulo>
      </BannerTitulos>
    </Banner>
  );
};

export default Hero;

