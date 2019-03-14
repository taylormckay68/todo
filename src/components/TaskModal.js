import React, { Component } from 'react';
import Select from 'react-select'
import {customStyles, priorityOptions} from '../utils';
import {Modal, ModalWrapper, CategoryWrapper, DescriptionWrapper, InfoWrapper, ButtonWrapper, ModalButton, InputText, PriorityWrapper, TextBox, AddNewButton, AddNewWrapper, NewCatWrapper, AddNewInput, AddButton} from './styled-components/TaskModal';

class TaskModal extends Component{
    constructor(props){
        super(props);
        this.state = {
            taskCategories: ['Work', 'Personal', 'Shopping'],
            priorities: ['Low', 'Medium', 'High'],
            category: ''
        }
    }

    handleCatInput = (e) => {
        this.setState({category: e.target.value})
    }
    handleCatSubmit = (cat) => {
        this.props.addCategory(cat);
        this.setState({category: ''})
    }
    
    
    render(){
        let {category, priority, update, task, info, categories} = this.props;
        let catOptions = categories.map(e => {return {value: e, label: e}})
        return(
            <Modal taskModal={this.props.taskModal} className="modal">
                <ModalWrapper className="modal-wrapper">
                    <CategoryWrapper className="category-wrapper">
                        <InputText className="input-text">Category: </InputText>
                        <Select 
                            value={this.props.selectedCat}
                            options={catOptions} 
                            styles={customStyles} 
                            onChange={this.props.handleCatChange}
                            />
                    </CategoryWrapper>
                    <AddNewWrapper className="add-new-wrapper">
                        <AddNewButton 
                            className="add-new-button"
                            onClick={this.props.toggleAddCategory}>
                            Add category
                        </AddNewButton>
                        {this.props.addCat && <NewCatWrapper className="new-cat-wrapper">
                            <AddNewInput className="add-new-input" onChange={this.handleCatInput}/>
                            <AddButton className='add-button' onClick={() => this.handleCatSubmit(this.state.category)}>Add</AddButton>
                        </NewCatWrapper>}
                    </AddNewWrapper>
                    <PriorityWrapper className="priority-wrapper">
                        <InputText className="input-text">Priority: </InputText>
                        <Select 
                            value={this.props.selectedPriority}
                            options={priorityOptions} 
                            styles={customStyles}
                            onChange={this.props.handlePriorityChange}/>
                    </PriorityWrapper>
                    <DescriptionWrapper className="description-wrapper">
                        <InputText className="input-text">Task: </InputText>
                        <TextBox 
                            className="text-box"
                            value={this.props.task} 
                            name="task" 
                            width={'100%'} 
                            height={'20px'}
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
                            <ModalButton className="update" disabled={(!this.props.category || !task || !priority ? true : false)} onClick={this.props.handleSubmit}>
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