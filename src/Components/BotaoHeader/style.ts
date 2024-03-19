import styled from "styled-components";

export const nav = styled.nav`
    text-align: center;
`
export const li = styled.li`
    float: left;
    font-size: 2em;
    margin-right: 20px;
    text-align: center;
`
export const button = styled.a`
    background-color: #141516;
    color: #fff;
    display: block;
    height: 55px;
    position: relative;
    text-decoration: none;
    width: 50px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    -moz-transition: color 0.1s;
    -o-transition: color 0.1s;
    -webkit-transition: color 0.1s;
    transition: color 0.1s;

    i {
        position: relative;
        z-index: 1;
        font-size: 16px;
        transition: all 0.1s;
    }

    .inner {
        background-color: #fff;
        display: block;
        height: 0;
        left: 50%;
        margin: 0;
        position: absolute;
        top: 50%;
        width: 0;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        -moz-transition: all 0.1s;
        -o-transition: all 0.1s;
        -webkit-transition: all 0.1s;
        transition: all 0.1s;
    }

    &:hover i{
        background-color: #fff;
        color: #141516;
    }

    &:hover .inner {
        height: 56px;
        margin-left: -28px;
        margin-top: -28px;
        width: 56px;
    }
`
export const Arrow = styled.div`
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
    position: absolute;
    right: 63px;
    top: 64px;
`
export const MenuEditar = styled.div`
    position: absolute;
    right: 50px;
    background-color: #fff;
    width: 200px;
    border-radius: 4px;
    box-shadow: 0 0 40px -10px #000;
    margin-top: 12px;
    overflow: hidden;
    transition:all .5s;

    a{
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        color: #505050;
        padding: 12px 8px;
        margin:0;
        transition:all .1s;
        font-size: 14px;
        transition:all .5s;
        text-decoration: none;
    }

    a:hover{
        background: #141516;
        transform: scale(1.05);
        color: rgba(255,255,255,0.8);
        box-shadow: 0 0 30px -10px #000;
        transition:all .5s;
        cursor: pointer;

        i{
            background: #141516;
            transition:all .5s;
        }
    }

    i{
        background:  #fff;
        transition:all .5s;
    }
`

export const BarraPesquisa = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    input{
    position: relative;
    padding: 15px 40px 15px 20px;
    width: 200px;
    color: #525252;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 100;
    letter-spacing: 2px;
    border: 1px solid #fff;
    border-radius: 5px;
    background: linear-gradient(to right, #FFFFFF 0%,#464747 #F9F9F9 100%);
    transition: width 0.4s ease;
    outline: none;
    
    &:focus{ width: 300px; }
    }

    i{
    position: relative;
    left: -37px;
    color: #fff;
    font-size: 16px;
    }
`