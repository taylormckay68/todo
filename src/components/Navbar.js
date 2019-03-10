import React, { Component } from 'react';
import {NavWrapper, AddButton} from './styled-components/Navbar';


class Navbar extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            taskModal: false,
        }
    }
    render(){
        return(
            <NavWrapper className="nav-wrapper">
                <AddButton className="add-button" onClick={this.props.toggle}>Add</AddButton>
            </NavWrapper>
        )
    }
}

export default Navbar;