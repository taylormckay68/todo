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
    height: 285px;
    width: 90vw;
    background-color: white;
    border: 1px solid black;
    position: fixed;
    top: calc((100vh - 285px)/2);
    left: -90vw;
    box-sizing: border-box;
    transform: ${props => props.taskModal && 'translateX(95vw)'};
    transition: transform .3s ease-in-out;
    z-index: 2;
`

export const ModalWrapper= styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
`

export const CategoryWrapper = styled.div`
    display: flex;
    margin-bottom: 10px;
`
export const PriorityWrapper = styled.div`
    display: flex;
    margin-bottom: 10px;
`
export const DescriptionWrapper = styled.div`

`
export const InfoWrapper = styled.div`

`
export const ButtonWrapper = styled.div`

`
export const ModalButton = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 4px;
    background-color: #039EFC;
    &:disabled{
        background-color: lightgray;
    }
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
    width: 75px;
    padding-left: 5px;
    margin-left: 10px;
`
export const Option = styled.option`

`