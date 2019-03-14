import React, { Component } from 'react';
import axios from 'axios';
import {AppWrapper, TaskCover} from './components/styled-components/App';
import Navbar from './components/Navbar';
import TaskModal from './components/TaskModal';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            taskModal: false,
            taskArr: [],
            category: '',
            selectedCat: null,
            priority: '',
            selectedPriority: null,
            task: '',
            info: '',
            id: '',
            update: false,
            selectedOption: null,
            filter: null,
            addCat: false,
            categories: []
        }
    }
    componentDidMount(){
        axios.get('/getDataArr').then(res => this.setState({taskArr: res.data}))
        axios.get('/getCats').then(res => {
            let categories = res.data.map(e => e.category);
            this.setState({categories})
        })
    }
    handleCatChange = (selectedCat) => {
        this.setState({ selectedCat, category: selectedCat.value });
    }
    handlePriorityChange = (selectedPriority) => {
        this.setState({ selectedPriority, priority: selectedPriority.value })
    }
    handleFilterChange = (filter) => {
        axios.post('/filterData', {category: filter.value}).then(res => {
            this.setState({filter, taskArr: res.data})
        })
    }
    toggleModal = () => this.setState({
        taskModal: !this.state.taskModal,
        category: '',
        priority: '',
        selectedCat: null,
        selectedPriority: null,
        info: '',
        task: '',
        id: '',
        update: false,
        selectedOption: null,
    })

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
                selectedCat: {value: arr[0].category, label: arr[0].category},
                selectedPriority: {value: arr[0].priority, label: arr[0].priority},
                task: arr[0].task,
                info: arr[0].info,
                id: arr[0].id,
                update: true
            }, this.toggleModal())
    }
    toggleAddCategory = () => {
        this.setState({addCat: !this.state.addCat})
    }
    addCategory = (category) => {
        axios.post('/addCat', {category}).then(res => {
            let categories = res.data.map(e => e.category)
            this.setState({addCat: !this.state.addCat, categories})
        })
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
                handleTextChange={this.handleTextChange}
                handleSubmit={this.handleSubmit} 
                handleUpdate={this.handleUpdate}
                handleDelete={this.handleDelete}
                handleCatChange={this.handleCatChange}
                handlePriorityChange={this.handlePriorityChange}
                toggleAddCategory={this.toggleAddCategory}
                addCategory={this.addCategory}/>
            <Navbar className="navbar" toggle={this.toggleModal}/>
            <FilterBar 
                filter={this.state.filter}
                categories={this.state.categories} 
                // taskArr={this.state.taskArr}
                handleFilterChange={this.handleFilterChange}/>
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
