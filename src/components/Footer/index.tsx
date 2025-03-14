
import React from "react";
import { FooterBar, LinksContainer, LinkImage, ImageWrapper, SmallText } from "./styles";
import logo from "../../asstes/images/logo.png";
import instagram from "../../asstes/images/instagram.svg";
import facebook from "../../asstes/images/facebook.svg";
import twitter from "../../asstes/images/twitter.svg";

const Footer: React.FC = () => {
  return (
    <FooterBar>
      <img className="containerLogo" src={logo} alt="efood" />
      <LinksContainer>
        <LinkImage>
          <ImageWrapper>
            <img src={instagram} alt="Instagram" />
          </ImageWrapper>
          <ImageWrapper>
            <img src={facebook} alt="Facebook" />
          </ImageWrapper>
          <ImageWrapper>
            <img src={twitter} alt="Twitter" />
          </ImageWrapper>
        </LinkImage>
      </LinksContainer>
      <SmallText>
        A efood é uma plataforma para divulgação de estabelecimentos. A
        responsabilidade pela entrega e qualidade dos produtos é inteiramente do
        estabelecimento contratado.
      </SmallText>
    </FooterBar>
  );
};

export default Footer;
