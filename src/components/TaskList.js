import React, { Component } from 'react';
import {TaskListWrapper, TaskWrapper, TaskText, TaskInfoWrapper, TaskLabel} from './styled-components/TaskList';
import Switch from "react-switch";

class TaskList extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <TaskListWrapper className="task-list-wrapper">
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
                                <TaskText className="task-text">{e.task}</TaskText>
                            </TaskInfoWrapper>
                        </TaskWrapper>
                    )
                })}
            </TaskListWrapper>
        )
    }
}

export default TaskList