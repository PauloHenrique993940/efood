import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Corrigido */
  display: flex; /* Corrigido */
  justify-content: flex-end;
  z-index: 1;
`

export const Sidebar = styled.aside`
  background-color: ${cores.rosa};
  position: fixed; /* Adicionado para garantir que funcione corretamente */
  right: 0;
  top: 0;
  height: 100%;
  width: 300px; /* Defina uma largura */
  z-index: 1;
`