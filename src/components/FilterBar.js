import React from 'react';
import Select from 'react-select'
import { FilterWrapper, FilterText } from './styled-components/FilterBar';
import {customStyles, } from '../utils';

export default function FilterBar(props){
    const catOptions = props.categories.map(e => {return {value: e, label: e}})
    const options = [{value: 'All', label: 'All'}, ...catOptions]
    return(
        <FilterWrapper className="filter-wrapper">
            <FilterText className="filter-text">Filter category: </FilterText>
            <Select 
                className="filter-select"
                styles={customStyles} 
                options={options} 
                value={props.filter}
                onChange={props.handleFilterChange}/>
        </FilterWrapper>
    )
}