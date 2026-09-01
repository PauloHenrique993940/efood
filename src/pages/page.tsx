import * as S from "../pages/page.styles";
import logoImage from "../asstes/images/logo.png";
import { HeaderLinks, Img, Li, Nav, Span, Ul } from "../pages/page.styles";
import { Link } from "react-router-dom";
import { cores } from "../styles";
import Footer from "../components/Footer";
import Hero from "../components/Banner";
import CardapioGrid from "../components/Cards";
import Cart from "../components/Cart";
import { useDispatch } from "react-redux";
import { openCart } from "../store/reducers/cart";

const Page = () => {
  const dispatch = useDispatch();

  return (
    <>
      <S.Container>
        <HeaderLinks>
          <Nav>
            <Ul>
              <Link to="/" style={{ color: cores.rosa }}>Restaurantes</Link>
              <Li>
                <Img src={logoImage} alt="Logo" />
              </Li>
              <Li>
                <Span onClick={() => dispatch(openCart())} style={{ cursor: "pointer" }}>
                  Ver Carrinho
                </Span>
              </Li>
            </Ul>
          </Nav>
        </HeaderLinks>
      </S.Container>
      <Hero />
      <S.Menu>
        <CardapioGrid />
      </S.Menu>
      <Footer />
      <Cart />
    </>
  );
};

export default Page;








