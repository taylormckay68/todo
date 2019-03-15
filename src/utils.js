export const customStyles = {
    control: (provided, state) => ({
        ...provided,
        background: state.isFocused ? '#CED1D5' : '#E7E8EA',
        border: '1px solid',
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

export const taskCategories = ['Work', 'Personal', 'Shopping'];
export const priorities = ['Low', 'Medium', 'High'];
export const catOptions = [
    {value: 'Work', label: 'Work'},
    {value: 'Personal', label: 'Personal'},
    {value: 'Shopping', label: 'Shopping'}
];
export const priorityOptions = [
    {value: 'Low', label: 'Low'},
    {value: 'Medium', label: 'Medium'},
    {value: 'High', label: 'High'}
];