import styled, { createGlobalStyle } from "styled-components"

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        background-color: #141516;
        font-family: "Titillium Web", sans-serif;
    }
`
export const Container = styled.div`
    padding: 0 28px;
`

export const Secao = styled.section`
    padding: 15vh 5.6vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const Titulo = styled.h1`
    clear: both;
    color: #fff;
    font-weight: 600;
    display: block;
    margin-bottom: 40px;
    padding-top: 5px;
`
export const Texto = styled.p`
    color: #768696;
    margin-bottom: 40px;

`
export const Botao = styled.button`
    display: inline-flex;
    font-size: 16px;
    letter-spacing: -0.1px;
    font-weight: 500;
    line-height: 16px;
    text-decoration: none;
    color: #fff;
    background-color: #4353FF;
    border: none;
    cursor: pointer;
    justify-content: center;
    padding: 16px 36px;
    height: 48px;
    text-align: center;
    white-space: nowrap;
    border-radius: 8px;
`
export default EstiloGlobal