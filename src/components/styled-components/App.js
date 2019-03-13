import styled from 'styled-components';

export const AppWrapper = styled.div`
    min-height: 100vh;
    background-color: lightgray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const TaskCover = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: black;
    opacity: .2;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    transform: ${props => !props.taskModal && 'translateX(-125vw)'};
    transition: transform .3s ease-in-out;

`