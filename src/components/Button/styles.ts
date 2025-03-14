import styled from "styled-components";
import { cores } from "../../styles";


const ButtonContainer = styled.div`
  /* Estilos para o container do botão */
  background-color: ${cores.rosa};
  color: ${cores.blanck};
  padding: 10px;
  width: 100px;
  margin-left: 10px;
  margin-top: 20px;
  cursor: pointer;
  text-decoration: none; /* Remove o sublinhado, se houver */
`;


export default ButtonContainer;