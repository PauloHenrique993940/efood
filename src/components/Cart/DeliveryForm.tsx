import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PaymentForm from './PaymentForm';
import Button from '../Button';
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
} from './stylesForms';

interface DeliveryFormProps {
    onCancel: () => void;
    onDeliverySuccess: (total: number) => void; // Mudança aqui: agora espera o 'total'
    total: number; // Adicione o prop 'total' aqui
}

const DeliveryForm: React.FC<DeliveryFormProps> = ({
    onCancel,
    onDeliverySuccess,
    total // Recebe o 'total' como prop
}) => {
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        name: Yup.string().required('Nome é obrigatório'),
        address: Yup.string().required('Endereço é obrigatório'),
        city: Yup.string().required('Cidade é obrigatória'),
        cep: Yup.string()
            .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
            .required('CEP é obrigatório'),
        number: Yup.string().required('Número é obrigatório'),
        complement: Yup.string().optional()
    });

    const handlePaymentForm = () => {
        onDeliverySuccess(total); // Chama onDeliverySuccess passando o 'total'
        setShowPaymentForm(true);
    };

    if (showPaymentForm) {
        return (
            <PaymentForm
                onCancel={() => setShowPaymentForm(false)}
                onPaymentSuccess={() => {}}
                total={total} // Passa o 'total' para o PaymentForm
            />
        );
    }

    return (
        <CartForms>
            <h2>Entrega</h2>
            <Formik
                initialValues={{
                    name: '',
                    address: '',
                    city: '',
                    cep: '',
                    number: '',
                    complement: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values); // Aqui você pode lidar com os dados após a submissão
                    handlePaymentForm();
                }}
            >
                {() => (
                    <Form>
                        <FormGroup>
                            <label htmlFor="name">Quem irá receber:</label>
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                as={FormInput}
                                required
                            />
                            <ErrorMessage name="name" component="div" />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="address">Endereço:</label>
                            <Field
                                type="text"
                                id="address"
                                name="address"
                                as={FormInput}
                                required
                            />
                            <ErrorMessage name="address" component="div" />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="city">Cidade:</label>
                            <Field
                                type="text"
                                id="city"
                                name="city"
                                as={FormInput}
                                required
                            />
                            <ErrorMessage name="city" component="div" />
                        </FormGroup>

                        <FormGroupFlex>
                            <div>
                                <Label htmlFor="cep">CEP:</Label>
                                <Field type="text" id="cep" name="cep" as={Input} required />
                                <ErrorMessage name="cep" component="div" />
                            </div>

                            <div>
                                <Label htmlFor="number">Número:</Label>
                                <Field
                                    type="text"
                                    id="number"
                                    name="number"
                                    as={Input}
                                    required
                                />
                                <ErrorMessage name="number" component="div" />
                            </div>
                        </FormGroupFlex>

                        <FormGroup>
                            <LabelComplemento htmlFor="complement">
                                Complemento (opcional):
                            </LabelComplemento>
                            <Field
                                type="text"
                                id="complement"
                                name="complement"
                                as={FormInput}
                            />
                            <ErrorMessage name="complement" component="div" />
                        </FormGroup>
                        <ButtonContinuar
                            style={{
                                backgroundColor: '#FFFFFF', // Cor de fundo verd
                                padding: '10px', // Espaçamento interno
                                border: 'none', // Sem borda
                                cursor: 'pointer', // Cursor em forma de mão
                                fontSize: '16px', // Tamanho da fonte
                                transition: 'background-color 0.3s',
                                font: 'bold', // Transição suave para a cor de fundo
                                height: '30px',
                                width: '100%',
                                fontWeight: 'bold'
                            }}
                            type="submit"
                        >
                            Continuar com o pagamento
                        </ButtonContinuar>
                        <br />
                        <ButaoVoltar
                            style={{
                                backgroundColor: '#FFFFFF',
                                color: '#E¨¨&¨&',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: 'none',
                                fontSize: '16px',
                                transition: 'background-color 0.3s',
                                height: '30px',
                                width: '100%',
                                fontWeight: 'bold'
                            }}
                            type="button"
                            onClick={onCancel}
                        >
                            Voltar para o carrinho
                        </ButaoVoltar>
                    </Form>
                )}
            </Formik>
        </CartForms>
    );
};

export default DeliveryForm;


