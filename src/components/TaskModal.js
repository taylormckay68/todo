import React, { Component } from 'react';
import {Modal, ModalForm, ModalWrapper, CategoryWrapper, DescriptionWrapper, InfoWrapper, ButtonWrapper, ModalButton, InputText, InputBox, SelectWrapper, Option, PriorityWrapper, TextBox} from './styled-components/TaskModal';

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
        return(
            <Modal taskModal={this.props.taskModal} className="modal">
                <ModalWrapper>
                    <CategoryWrapper>
                        <InputText>Category: </InputText>
                        <SelectWrapper value={this.props.category} name="category" onChange={(e) => this.props.handleChange(e)}>
                            <Option defaultValue="" disabled hidden/>
                            {this.state.taskCategories.map((e, i) => {
                                return <Option key={i}>{e}</Option>
                            })}
                        </SelectWrapper>
                    </CategoryWrapper>
                    <PriorityWrapper>
                        <InputText>Priority: </InputText>
                        <SelectWrapper value={this.props.priority} name="priority" onChange={(e) => this.props.handleChange(e)}>
                            <Option defaultValue="" disabled hidden/>
                            {this.state.priorities.map((e,i) => {
                                return <Option key={i}>{e}</Option>
                            })}
                        </SelectWrapper>
                    </PriorityWrapper>
                    <DescriptionWrapper>
                        <InputText>Task: </InputText>
                        <InputBox value={this.props.task} name="task" width={'100%'} onChange={(e) => this.props.handleChange(e)}/>
                    </DescriptionWrapper>
                    <InfoWrapper>
                        <InputText>Additional Info</InputText>
                        <TextBox  value={this.props.info} name="info" height={"100px"} width={'100%'} onChange={(e) => this.props.handleChange(e)}/>
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