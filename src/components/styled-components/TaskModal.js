import styled, {keyframes} from 'styled-components';

const slideIn = keyframes`
    0% {
    transform: translateX(0);
    }
    100% {
        transform: translateX(100%);
    }
`

export const Modal = styled.div`
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

export const ModalWrapper= styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
`

export const CategoryWrapper = styled.div`

`
export const PriorityWrapper = styled.div`

`
export const DescriptionWrapper = styled.div`

`
export const InfoWrapper = styled.div`

`
export const ButtonWrapper = styled.div`

`
export const SubmitButton = styled.button`
    width: 100px;
    height: 30px;
    /* border: 1px solid black; */
    border-radius: 4px;
    background-color: #039EFC;
`
export const InputText = styled.p`
    font-size: 16px;
`
export const InputBox = styled.input`
    height: ${props => props.height ? props.height : 'initial'};
    width: ${props => props.width ? props.width : 'initial'};
`
export const TextBox = styled.textarea`
    border: 1px solid black;
    height: ${props => props.height ? props.height : 'initial'};
    width: ${props => props.width ? props.width : 'initial'};
    resize: none;
`
export const SelectWrapper = styled.select`

`
export const Option = styled.option`

`