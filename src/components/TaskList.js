import React, { Component } from 'react';
import {TaskListWrapper, TaskWrapper, TaskText, TaskInfoWrapper, TaskLabel, CategoryText, InfoText, HeaderWrapper, CategoryHeader, InfoHeader, TaskHeader, PriorityDot, PriorityWrapper} from './styled-components/TaskList';
import Switch from "react-switch";

class TaskList extends Component{

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
                        <TaskWrapper className="task-wrapper" key={i} name={e.id} priority={e.priority}>
                            <TaskLabel className="task-label">
                                <Switch 
                                    id={e.id.toString()}
                                    onChange={this.props.handleToggleCheck} 
                                    checked={e.complete}
                                    height={20} 
                                    width={35}
                                    />
                            </TaskLabel>
                            <TaskInfoWrapper 
                                className="task-info-wrapper"
                                complete={e.complete}
                                onClick={() => this.props.taskClick(e.id)}>
                                <CategoryText className="category-text" complete={e.complete}>{e.category}</CategoryText>
                                <TaskText className="task-text" complete={e.complete}>{e.task}</TaskText>
                                <InfoText className="info-text" complete={e.complete}>{e.info}</InfoText>
                                <PriorityWrapper>
                                    <PriorityDot className="priority-dot" priority={e.priority}/>
                                </PriorityWrapper>
                            </TaskInfoWrapper>
                        </TaskWrapper>
                    )
                })}
            </TaskListWrapper>
        )
    }
}

export default TaskList