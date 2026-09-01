import styled from "styled-components";
import { cores } from "../../styles";


const ButtonContainer = styled.div`
  background-color: ${cores.rosa};
  display: inline-flex;
  padding: 10px 16px;
  margin: 18px 18px 0;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 800;

  a {
    color: ${cores.branca};
  }

  &:hover {
    background-color: #c91625;
  }
`;


export default ButtonContainer;
