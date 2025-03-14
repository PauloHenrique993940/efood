import React from 'react';
import * as S from '../pages/page.styles'; // Certifique-se de que o caminho esteja correto
import logoImage from '../asstes/images/logo.png'; // Importe a imagem
import { A, HeaderLinks, Img, Li, Nav, Span, Ul } from '../pages/page.styles';
import { Link } from 'react-router-dom';
import { cores } from '../styles';
import Footer from '../components/Footer';
import { Product } from '../components/Product';
import Hero from '../components/Banner';
import PizzaGrid from '../components/Cards';

const Page: React.FC = () => {
    return (
        <>
            <S.Container>
                <HeaderLinks>
                    <Nav>
                        <Ul>
                            <Link to="/" style={{ color: cores.rosa }}>
                                Restaurante
                            </Link>
                            <Li>
                               <Img src={logoImage} alt="Logo" />
                            </Li>
                            <Li>
                                <Span>0 produto(s) no carrinho</Span>
                            </Li>
                        </Ul>
                    </Nav>
                </HeaderLinks>
                {/* Adicione aqui o conteúdo da sua página */}
            </S.Container>
            <Hero />
            <section className='container'>
                <PizzaGrid />
            </section>
            <Footer />
        </> 
    );
};

export default Page;