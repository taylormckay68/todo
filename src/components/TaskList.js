import React, { Component } from 'react';
import {TaskListWrapper, TaskWrapper, TaskText, TaskInfoWrapper, TaskLabel, CategoryText, InfoText, HeaderWrapper, CategoryHeader, InfoHeader, TaskHeader} from './styled-components/TaskList';
import Switch from "react-switch";

class TaskList extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <TaskListWrapper className="task-list-wrapper">
                <HeaderWrapper className="header-wrapper">
                    <CategoryHeader className="category-header">Category</CategoryHeader>
                    <TaskHeader className="task-header">Task</TaskHeader>
                    <InfoHeader className="info-header">Additional Info</InfoHeader>
                </HeaderWrapper>
                {this.props.taskArr.map((e,i) => {
                    return(
                        <TaskWrapper className="task-wrapper" name={e.id} /*onClick={() => this.props.taskClick(e.id)}*/>
                            <TaskLabel className="task-label">
                                <Switch 
                                    id={e.id}
                                    onChange={this.props.handleToggleCheck} 
                                    checked={e.complete} />
                            </TaskLabel>
                            <TaskInfoWrapper 
                                className="task-info-wrapper"
                                onClick={() => this.props.taskClick(e.id)}>
                                <CategoryText className="category-text">{e.category}</CategoryText>
                                <TaskText className="task-text">{e.task}</TaskText>
                                <InfoText className="info-text">{e.info}</InfoText>
                            </TaskInfoWrapper>
                        </TaskWrapper>
                    )
                })}
            </TaskListWrapper>
        )
    }
}

export default TaskList