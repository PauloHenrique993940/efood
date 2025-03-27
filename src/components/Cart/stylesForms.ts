import styled from "styled-components";
import { cores } from "../../styles";

export const  CartForms = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  width: 100%;


 h2 {
   font-size: 16px;
   width: 56px;
   font-weigth: 700;
   margin-bottom: 5px;
  
 
 }

`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;




`

export const FormInput = styled.input`
  margin-top: 10px;
  margin-bottom: 5px;
  border: none;
  height: 24px;
`



export const FormGroupFlex = styled.div`
  display: flex;
  gap: 10px; /* Espaço entre os campos */
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: none;
  background-color: ${cores.branca};
  height: 24px;
`;


export const ButoesGroup = styled.button`
  display: flex;
  flex-direction: column;
  border: none;
  color: ${cores.rosa};
  margin-bottom: 8px;
`

export const LabelComplemento = styled.label`
  margin-top: 5px;
`

export  const ButaoVoltar = styled.button`
  color: ${cores.rosa};
  border: none;
  height: 24px;
  font-size: 14px;
  font-weigth: 700;
`

export const ButtonContinuar = styled.button`
  color: ${cores.rosa};
  border: none;
  margin-bottom: 10px;
  height: 24px;
  margin-top: 10px;
  font-size: 14px;
  font-weigth: 700;
`