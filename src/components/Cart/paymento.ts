import styled from "styled-components";
import { cores } from "../../styles";

export const PaymentContainer = styled.div`
   padding: 20px 8px;


    h2 {
      font-size: 16px;
      font-weigth: 700;
      color: ${cores.branca};
      margin-bottom: 20px;
   
    }
`

export const InputContainer = styled.div`
   width: 100%;

    input {
      width: 100%;
      border: none;
      height: 24px;
      color: ${cores.cortextForms};
      padding-left: 8px;
      margin-top: 10px;
      margin-bottom: 4px;
    }


`

export const CartLabel = styled.label`
  font-size: 14px;
   
`

export  const CartaoInfosPagment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`

export const InputNumber = styled.input`
  width: 200px;
  padding-left: 8px;
  color: ${cores.cortextForms};
`

export  const InputCvv = styled.input`
  width: 100px;
  height: 24px;
  padding-left: 8px;
  color: ${cores.cortextForms};
`

export const InputMonth = styled.input`
  width: 150px;
  height: 24px;
  border: none;
  margin-top: 8px;
  padding-left: 8px;
  color: ${cores.cortextForms};

`

export const InputYear = styled.input`
  margin-top: 8px;
  height: 24px;
  border: none;
  color: ${cores.cortextForms};
  padding-left: 8px;
  width: 160px;

`
export const ConatinerFomsBtn  = styled.div`
  dispalay: flex;
  flex-direction: column;


`

export const ButtonFinanlizar = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 24px;
  border: none;
  color: ${cores.rosa};
  padding-left: 8px;
  font-weight: 700;
  font-size: 14px;
`

export const ButtaoVoltarAoEndereco = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 24px;
  border: none;
  color: ${cores.rosa};
  padding-left: 8px;
  font-weight: 700;
  font-size: 14px;
`