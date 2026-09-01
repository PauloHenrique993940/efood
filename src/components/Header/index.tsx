import React from 'react'; // Adicione esta linha
import { ContainerLogo, HeaderBar, TituloTexto } from "./styles";
import logo from "../../asstes/images/logo.png";


const Header = () => (
  <HeaderBar>
    <ContainerLogo src={logo} alt="efood"/>
    <TituloTexto>Viva experiências gastronômicas no conforto da sua casa</TituloTexto>
  </HeaderBar>
);

export default Header;