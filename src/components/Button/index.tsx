import React from 'react';
import { Link } from 'react-router-dom';
import ButtonContainer from './styles';

const Button = () => (
  <ButtonContainer>
    <Link to="/page">Saiba mais</Link>
  </ButtonContainer>
);

export default Button;
