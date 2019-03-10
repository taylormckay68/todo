import React, { Component } from 'react';
import {TaskListWrapper} from './styled-components/TaskList';

class TaskList extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <TaskListWrapper>
                {JSON.stringify(this.props.taskArr)}
            </TaskListWrapper>
        )
    }
}

export default TaskList