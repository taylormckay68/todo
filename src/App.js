import React, { Component } from 'react';
// import axios from 'axios';
import axios from 'axios';
import {AppWrapper, TaskCover} from './components/styled-components/App';
import Navbar from './components/Navbar';
import TaskModal from './components/TaskModal';
import TaskList from './components/TaskList';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            taskModal: false,
            taskArr: [],
            category: '',
            priority: '',
            task: '',
            info: '',
            id: '',
            update: false
        }
    }
    componentDidMount(){
        axios.get('/getDataArr').then(res => this.setState({taskArr: res.data}))
    }

    toggleModal = () => this.setState({
        taskModal: !this.state.taskModal,
        category: '',
        priority: '',
        info: '',
        task: '',
        id: '',
        update: false
    })

    handleDropdownChange = (event, name) => {
        console.log(event, name);
        this.setState({[name]: event.value});
    }
    handleTextChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (event) => {
            let {category, priority, info, task, taskArr} = this.state;
            axios.post('/addTask', {category, priority, info, task, complete: false}).then(res => {
                this.setState({
                    taskArr: res.data,
                    category: '',
                    priority: '',
                    info: '',
                    task: ''
                })
            })
            this.toggleModal();
            event.preventDefault();
    }
    handleToggleCheck = (checked, event , id) => {
        axios.post('/toggleTask', {id, checked}).then(res => this.setState({taskArr: res.data}))
    }
    handleUpdate = () => {
        let {id, task, info, priority, category} = this.state;
        axios.post('/updateTask', {id, task, info, priority, category}).then(res => {
            this.toggleModal();
            this.setState({
                taskArr: res.data,
                category: '',
                priority: '',
                info: '',
                task: '',
                id: '',
                update: false
            })
        })
    }
    handleDelete = () => {
        axios.post('/deleteTask', {id: this.state.id}).then(res => {
            this.toggleModal();
            this.setState({
                taskArr: res.data,
                category: '',
                priority: '',
                info: '',
                task: '',
                id: '',
                update: false
            })
        })
    }
    taskClick = (id) => {
        let arr = this.state.taskArr.filter((el) => el.id === id)
            this.setState({
                category: arr[0].category,
                priority: arr[0].priority,
                task: arr[0].task,
                info: arr[0].info,
                id: arr[0].id,
                update: true
            }, this.toggleModal())
    }
    render(){
        return(
        <AppWrapper className="app-wrapper">
            <TaskCover 
                className="task-cover"
                onClick={this.toggleModal}
                taskModal={this.state.taskModal}/>
            <TaskModal 
                className="task-modal"
                {...this.state} 
                toggle={this.toggleModal} 
                handleDropdownChange={this.handleDropdownChange} 
                handleTextChange={this.handleTextChange}
                handleSubmit={this.handleSubmit} 
                handleUpdate={this.handleUpdate}
                handleDelete={this.handleDelete}/>
            <Navbar className="navbar" toggle={this.toggleModal}/>
            <TaskList 
                className="task-list"
                taskArr={this.state.taskArr} 
                taskClick={this.taskClick}
                handleToggleCheck={this.handleToggleCheck}/>
        </AppWrapper>
        );
    }
}

export default App;
