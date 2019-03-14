import styled, {keyframes} from 'styled-components';
import ReactSelect from 'react-select';

export const Modal = styled.div`
    height: 340px;
    width: 90vw;
    background-color: white;
    border: 1px solid black;
    border-radius: 4px;
    position: fixed;
    box-sizing: border-box;
    transform: ${props => !props.taskModal && 'translateX(-125vw)'};
    transition: transform .3s ease-in-out;
    z-index: 2;
    @media(min-width: 500px) {
        width: 500px;
    }
`

export const ModalWrapper= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    box-sizing: border-box;
    /* align-content: space-around; */
    padding: 12px;
`

export const CategoryWrapper = styled.div`
    display: flex;
`
export const PriorityWrapper = styled.div`
    display: flex;
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
    border-radius: 2px;
    background-color: #039EFC;
    &:disabled{
        background-color: lightgray;
    }
`
export const InputText = styled.p`
    font-size: 16px;
    width: ${props => props.width ? props.width : '80px'};
`
export const TextBox = styled.textarea`
    border: 1px solid black;
    height: ${props => props.height ? props.height : 'initial'};
    width: ${props => props.width ? props.width : 'initial'};
    resize: none;
    box-sizing: border-box;
    border-radius: 2px;
`
export const AddNewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 255px;
    align-items: flex-end;
    height: max-content;
    justify-content: space-between;
`
export const AddNewButton = styled.button`
    border: 1px solid;
    width: 175px;
`
export const NewCatWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 175px;
    margin-top: 5px;
`
export const AddNewInput = styled.input`
    border: 1px solid;
`
export const AddButton = styled.button`
    border: 1px solid;
`