import styled from "styled-components";
import { Botao, Texto, Titulo } from "../../Styles";

export const CardContato = styled.div `
    background-color: #161923;
    padding: 0 0.5rem;
    margin-top: 1rem;
    outline: none;
    color: rgba(166,166,166);
    font-size 1rem;
    border: 1px solid #040B18;
    border-radius: 48px;
`
export const CardPrincipal = styled.div `
    margin: 20px 10px 10px 10px;
    background-color: #161923;
    display: flex;
    justify-content: space-between;
`

export const TextoCard = styled(Texto)`
    background-color: #161923;
    margin-bottom: 10px;
    padding-left: 8px;
`
export const TituloCard = styled(Titulo)`
    background-color: #161923;
    padding-left: 8px;
    margin-bottom: 10px;

`
export const BotaoExpandir = styled(Botao)`
    font-size: 14px;
    background-color: #161923;
    color: #fff;
    padding: 8px 0 0 0 ;
    height: 20px;
    margin-right: 8px;

    i {
        background-color: #161923;
    }
`
export const BotaoCard = styled(Botao)`
    width: 40%;
    margin-left: 28px;
    margin-bottom: 12px;
`


