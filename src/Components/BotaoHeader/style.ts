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