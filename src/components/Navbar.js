import React, { Component } from 'react';
import {NavWrapper, AddButton, NavText, NavContentContainer} from './styled-components/Navbar';


class Navbar extends Component{
    render(){
        return(
            <NavWrapper className="nav-wrapper">
                <NavContentContainer className="nav-content-container">
                    <NavText className="nav-text">Workfront To-do List</NavText>
                    <AddButton className="add-button" onClick={this.props.toggle}>Add</AddButton>
                </NavContentContainer>
            </NavWrapper>
        )
    }
}

export default Navbar;
