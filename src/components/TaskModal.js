import React, { Component } from 'react';
import Select from 'react-select'
import {Modal, ModalWrapper, CategoryWrapper, DescriptionWrapper, InfoWrapper, ButtonWrapper, ModalButton, InputText, PriorityWrapper, TextBox, customStyles} from './styled-components/TaskModal';

class TaskModal extends Component{
    constructor(props){
        super(props);
        this.state = {
            taskCategories: ['Work', 'Personal', 'Shopping'],
            priorities: ['Low', 'Medium', 'High'],
        }
    }
    
    render(){
        let {category, priority, update, task, info} = this.props;
        const catOptions = [
            {value: 'Work', label: 'Work'},
            {value: 'Personal', label: 'Personal'},
            {value: 'Shopping', label: 'Shopping'}
        ];
        const priorityOptions = [
            {value: 'Low', label: 'Low'},
            {value: 'Medium', label: 'Medium'},
            {value: 'High', label: 'High'}
        ];

        return(
            <Modal taskModal={this.props.taskModal} className="modal">
                <ModalWrapper className="modal-wrapper">
                    <CategoryWrapper className="category-wrapper">
                        <InputText className="input-text">Category: </InputText>
                        <Select 
                            options={catOptions} 
                            styles={customStyles} 
                            onChange={(e) => this.props.handleDropdownChange(e, 'category')}/>
                    </CategoryWrapper>
                    <PriorityWrapper className="priority-wrapper">
                        <InputText className="input-text">Priority: </InputText>
                        <Select 
                            options={priorityOptions} 
                            styles={customStyles}
                            onChange={(e) => this.props.handleDropdownChange(e, 'priority')}/>
                    </PriorityWrapper>
                    <DescriptionWrapper className="description-wrapper">
                        <InputText className="input-text">Task: </InputText>
                        <TextBox 
                            className="input-box"
                            value={this.props.task} 
                            name="task" 
                            width={'100%'} 
                            height={'16px'}
                            onChange={(e) => this.props.handleTextChange(e)}/>
                    </DescriptionWrapper>
                    <InfoWrapper className="info-wrapper">
                        <InputText className="input-text" width='105px'>Additional Info</InputText>
                        <TextBox 
                            className="text-box" 
                            value={this.props.info} 
                            name="info" 
                            height={"100px"} 
                            width={'100%'} 
                            onChange={(e) => this.props.handleTextChange(e)}/>
                    </InfoWrapper>
                    <ButtonWrapper className="button-wrapper">
                        {this.props.update ? 
                            <ModalButton className="submit" disabled={!category || !task || !priority ? true : false} onClick={this.props.handleUpdate}>
                            Update Task
                            </ModalButton> :
                            <ModalButton className="update" disabled={(!category || !task || !priority ? true : false)} onClick={this.props.handleSubmit}>
                            Add Task
                            </ModalButton>}
                        {this.props.update && <ModalButton onClick={this.props.handleDelete}>Delete</ModalButton>}
                    </ButtonWrapper>
                </ModalWrapper>
            </Modal>
        )
    }
}

export default TaskModal;