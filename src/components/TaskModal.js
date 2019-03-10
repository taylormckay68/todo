import React, { Component } from 'react';
import {ModalWrapper} from './styled-components/TaskModal';

class TaskModal extends Component{
    constructor(props){
        super(props);
        this.state = {
            taskCategories: ['Work', 'Personal', 'Shopping']
        }
    }

    
    render(){
        // console.log('state: ', this.props);
        return(
            <ModalWrapper taskModal={this.props.taskModal} className="modal-wrapper">
                <form onSubmit={this.props.handleSubmit}>
                    <label>
                    Catgory:
                        <select value={this.props.category} name="category" onChange={(e) => this.props.handleChange(e)}>
                            <option defaultValue="" disabled hidden></option>
                            {this.state.taskCategories.map((e, i) =>{
                                return(
                                    <option key={i}>{e}</option>
                                )
                            })}
                        </select>
                    </label>
                    <label>
                        Description:
                        <input name="description" value={this.props.description} onChange={e => this.props.handleChange(e)}></input>
                    </label>
                    <label>
                        Additional Info:
                        <textarea name="info" value={this.props.info} onChange={(e) => this.props.handleChange(e)}></textarea>   
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </ModalWrapper>
        )
    }
}

export default TaskModal;