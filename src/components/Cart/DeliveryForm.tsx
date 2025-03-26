import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentForm from "./PaymentForm"; // Importando o componente correto
import { 
    ButaoVoltar, 
    ButtonContinuar, 
    CartForms, 
    FormGroup, 
    FormGroupFlex, 
    FormInput, 
    Input, 
    Label, 
    LabelComplemento 
} from "./stylesForms";
import Button from "../Button";

interface DeliveryFormProps {
    onCancel: () => void;
}

const DeliveryForm: React.FC<DeliveryFormProps> = ({ onCancel }) => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [cep, setCep] = useState("");
    const [number, setNumber] = useState("");
    const [complement, setComplement] = useState("");
    const [showPaymentForm, setShowPaymentForm] = useState(false); 
    const navigate = useNavigate();

    const handlePaymentForm = () => {
        setShowPaymentForm(true);
    };

    // Se showPaymentForm for true, renderiza o PaymentForm
    if (showPaymentForm) {
        return <PaymentForm onCancel={() => setShowPaymentForm(false)} />;
    }

    return (
        <CartForms>
            <h2>Entrega</h2>
            <FormGroup>
                <label htmlFor="name">Quem irá receber:</label>
                <FormInput
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </FormGroup>
            <FormGroup>
                <label htmlFor="address">Endereço:</label>
                <FormInput
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
            </FormGroup>
            <FormGroup>
                <label htmlFor="city">Cidade:</label>
                <FormInput
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />
            </FormGroup>
            <FormGroupFlex>
                <div>
                   <Label htmlFor="cep">CEP:</Label>
                   <Input
                       type="text"
                       id="cep"
                       value={cep}
                       onChange={(e) => setCep(e.target.value)}
                       required
                    />
                </div>
                <div>
                   <Label htmlFor="number">Número:</Label>
                   <Input
                      type="text"
                      id="number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      required
                    />
                </div>
            </FormGroupFlex>
            <FormGroup>
                <LabelComplemento htmlFor="complement">Complemento (opcional):</LabelComplemento>
                <FormInput
                    type="text"
                    id="complement"
                    value={complement}
                    onChange={(e) => setComplement(e.target.value)}
                />
            </FormGroup>
            <ButtonContinuar type="button" onClick={handlePaymentForm}>
                Continuar com o pagamento
            </ButtonContinuar>
            <ButaoVoltar type="button" onClick={onCancel}>
                Voltar para o carrinho
            </ButaoVoltar>
        </CartForms>
    );
};

export default DeliveryForm;





