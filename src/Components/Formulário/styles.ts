import styled from "styled-components";
import { Botao, Titulo } from "../../Styles";

export const Input = styled.input`
    background-color: #161923;
    width: 300px;
    height: 50px;
    padding: 0 0.5rem;
    margin-top: 1rem;
    margin-left: 20%;
    outline: none;
    color: rgba(166,166,166);
    font-size 1rem;
    border: 1px solid #040B18;
    border-radius: 48px;
`
export const TituloCadastro = styled(Titulo)`
    margin-bottom: 0;
`

export const Legenda = styled.legend`
    background-color: #0e0618;
    border: 3px solid #000;
    padding: 10px;
    text-align: center;
`

export const FieldSet = styled.fieldset`
    background-color: #0e0618;
    padding: 15px;
    border: 3px solid #000;
`

export const FormDiv = styled.form`
    background-color: #0e0618;
`
export const FormContainer = styled.div`
    padding: 28px;
    background-color: #0e0618; 
`
export const BotaoCadastro = styled(Botao)`
    width: 40%;
    margin-left: 28px;
    margin-top: 32px;
`