import styled from "styled-components";
import { cores } from "../../styles";
import { Props as ImportedProps } from "."; // Renomeia para ImportedProps


interface Props {
  size?: 'small' | 'medium' | 'large'; // Define os tamanhos possíveis
}

export const TagContainer = styled.div<Props>`
  background-color: ${cores.rosa};
  color: ${cores.blanck}; // Corrigido o nome da cor para 'black'
  font-weight: bold;
  padding: ${props => props.size === 'small' ? '8px 16px' : '10px 20px'}; // Define padding condicional
  font-size: ${props => props.size === 'small' ? '12px' : '14px'}; // Define font-size condicional
`;