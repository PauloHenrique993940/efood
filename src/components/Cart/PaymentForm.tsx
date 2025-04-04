import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
    ButtaoVoltarAoEndereco,
    ButtonFinanlizar,
    CartaoInfosPagment,
    CartLabel,
    ConatinerFomsBtn,
    InputContainer,
    InputCvv,
    InputMonth,
    InputNumber,
    InputYear,
    PaymentContainer,
} from "./paymento";

interface PaymentFormProps {
    onCancel: () => void;
    onPaymentSuccess: () => void;
    total: number; // Adicione o prop 'total'
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onCancel, onPaymentSuccess, total }) => {
    const validationSchema = Yup.object({
        cardName: Yup.string().required("Nome do cartão é obrigatório"),
        cardNumber: Yup.string()
            .matches(/^\d{16}$/, "Número do cartão inválido")
            .required("Número do cartão é obrigatório"),
        cvv: Yup.string()
            .matches(/^\d{3,4}$/, "CVV inválido")
            .required("CVV é obrigatório"),
        expiryMonth: Yup.string()
            .matches(/^(0[1-9]|1[0-2])$/, "Mês inválido")
            .required("Mês de vencimento é obrigatório"),
        expiryYear: Yup.string()
            .matches(/^\d{4}$/, "Ano inválido")
            .required("Ano de vencimento é obrigatório"),
    });

    const formatCurrency = (value: number): string => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(value);
    };

    return (
        <PaymentContainer>
            <h2>Pagamento - Valor a pagar {formatCurrency(total)}</h2> {/* Use o prop 'total' aqui */}
            <Formik
                initialValues={{
                    cardName: "",
                    cardNumber: "",
                    cvv: "",
                    expiryMonth: "",
                    expiryYear: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                    onPaymentSuccess();
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <InputContainer>
                            <div>
                                <CartLabel>Nome do cartão:</CartLabel>
                                <Field type="text" id="cardName" name="cardName" />
                                <ErrorMessage name="cardName" component="div" />
                            </div>
                            <CartaoInfosPagment>
                                <div>
                                    <CartLabel>Numero do cartão:</CartLabel>
                                    <Field type="text" id="cardNumber" name="cardNumber" as={InputNumber} />
                                    <ErrorMessage name="cardNumber" component="div" />
                                </div>
                                <div>
                                    <CartLabel>CVV:</CartLabel>
                                    <Field type="text" id="cvv" name="cvv" as={InputCvv} />
                                    <ErrorMessage name="cvv" component="div" />
                                </div>
                            </CartaoInfosPagment>
                        </InputContainer>
                        <CartaoInfosPagment>
                            <div>
                                <CartLabel htmlFor="expiryMonth">Mês de vencimento:</CartLabel>
                                <Field type="text" id="expiryMonth" name="expiryMonth" as={InputMonth} />
                                <ErrorMessage name="expiryMonth" component="div" />
                            </div>
                            <div>
                                <CartLabel htmlFor="expiryYear">Ano de vencimento:</CartLabel>
                                <Field type="text" id="expiryYear" name="expiryYear" as={InputYear} />
                                <ErrorMessage name="expiryYear" component="div" />
                            </div>
                        </CartaoInfosPagment>
                        <ConatinerFomsBtn>
                            <ButtonFinanlizar type="submit" disabled={isSubmitting}>
                                Finalizar pagamento
                            </ButtonFinanlizar>
                            <ButtaoVoltarAoEndereco type="button" onClick={onCancel}>
                                Voltar para a edição de endereço
                            </ButtaoVoltarAoEndereco>
                        </ConatinerFomsBtn>
                    </Form>
                )}
            </Formik>
        </PaymentContainer>
    );
};

export default PaymentForm;









