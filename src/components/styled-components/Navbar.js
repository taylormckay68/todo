import styled from 'styled-components';

export const NavWrapper = styled.div`
    width: 100vw;
    height: 100px;
    background-color: black;
    display: flex;
    justify-content: center;
`
export const NavContentContainer = styled.div`
    max-width: 800px;
    width: calc(100vw - 48px);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AddButton = styled.button`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    border-radius: 25px;
    border: 1px solid gray;
    background-color: gray;
    font-weight: bolder;
    font-size: 18px;
    color: white;
    cursor: pointer;
    &:focus {
        outline: 0;
    }
`
export const NavText = styled.h1`
    color: white;
    margin: auto;
    font-size: 35px;
`