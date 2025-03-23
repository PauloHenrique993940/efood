// src/pages/Page.tsx
import React from 'react';
import * as S from '../pages/page.styles'; 
import logoImage from '../asstes/images/logo.png'; 
import { A, HeaderLinks, Img, Li, Nav, Span, Ul } from '../pages/page.styles';
import { Link } from 'react-router-dom'; // Importe o Link
import { cores } from '../styles';
import Footer from '../components/Footer';
import Hero from '../components/Banner';
import CardapioGrid from '../components/Cards';
import Cart from '../components/Cart';

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
                                <Span>Ver carrinho</Span> {/* Link para a página do carrinho */}
                            </Li>
                        </Ul>
                    </Nav>
                </HeaderLinks>
                {/* Adicione aqui o conteúdo da sua página */}
            </S.Container>
            <Hero />
            <section className="container">
                <CardapioGrid />
            </section>
            <Footer />
        </>
    );
};

export default Page;






