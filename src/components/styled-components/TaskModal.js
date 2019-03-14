import styled, {keyframes} from 'styled-components';
import ReactSelect from 'react-select';

export const Modal = styled.div`
    height: 285px;
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
    justify-content: space-around;
    height: 100%;
    box-sizing: border-box;
    align-content: space-around;
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
export const customStyles = {
    control: (provided, state) => ({
        ...provided,
        background: state.isFocused ? '#CED1D5' : '#E7E8EA',
        border: '0',
        width: '175px',
        'border-radius': '2px',
        'box-shadow': 'none',
        'min-height': '23px'
    }),
    valueContainer: provided => ({
        ...provided,
        color: '#2f3337',
        'font-size': '14px',
        padding: '0 0 0 12px'
    }),
    dropdownIndicator: provided => ({
        ...provided,
        color: '#2f3337',
        padding: '0 16px'
    }),
    indicatorSeparator: () => ({
        display: 'none'
    }),
    menu: provided => ({
        ...provided,
        color: '#2f3337',
        'border-radius': '2px',
        'box-shadow': '0 1px 3px rgba(0, 0, 0, 0.2)'
    }),
    option: (provided, state) => ({
        ...provided,
        color: state.isHovered ? 'white' : '#2f3337',
        'background-color': state.isSelected ? '#F0F7FA' : 'white',
        '&:hover': {
            'background-color': '#0485CC',
            color: 'white'
        }
    })
};