import styled, {keyframes} from 'styled-components';

const slideIn = keyframes`
    0% {
    transform: translateX(0);
    }
    100% {
        transform: translateX(100%);
    }
`

export const ModalWrapper = styled.div`
    height: 50vh;
    width: 50vw;
    background-color: white;
    border: 1px solid black;
    position: fixed;
    top: calc(50vh/2);
    left: calc(-50vw);
    box-sizing: border-box;
    transform: ${props => props.taskModal && 'translateX(75vw)'};
    transition: transform .3s ease-in-out;
`