import React, { Component } from 'react';
import {TaskListWrapper, TaskWrapper} from './styled-components/TaskList';

class TaskList extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <TaskListWrapper className="task-list-wrapper">
                {this.props.taskArr.map((e,i) => {
                    console.log(e.id);
                    return(
                        <TaskWrapper name={e.id} onClick={() => this.props.taskClick(e.id)}>{e.task}</TaskWrapper>
                    )
                })}
            </TaskListWrapper>
        )
    }
}

export default TaskList