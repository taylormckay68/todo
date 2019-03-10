import styled from 'styled-components';

export const NavWrapper = styled.div`
    width: 100vw;
    height: 200px;
    background-color: pink;
`

export const AddButton = styled.button`
    width: 75px;
    height: 25px;
    background-color: gray;
    cursor: pointer;
    &:focus {
        outline: 0;
    }
`