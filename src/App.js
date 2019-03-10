import React, { Component } from 'react';
// import axios from 'axios';
import axios from 'axios';
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
        info: ''
    }
  }
  componentDidMount(){
      axios.get('/getDataArr').then(res => this.setState({taskArr: res.data}))
  }

  toggleModal = () => this.setState({taskModal: !this.state.taskModal})

  handleChange = (event) => {
      console.log(event.target.name);
      this.setState({[event.target.name]: event.target.value});
    }

  handleSubmit = (event) => {
        let {category, priority, info, task, taskArr} = this.state;
        console.log(category, priority, info, task);
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

  render(){
        return(
        <div className="App">
            <TaskModal {...this.state} toggle={this.toggleModal} handleChange={this.handleChange} handleSubmit={this.handleSubmit} className="task-modal"/>
            <Navbar className="navbar" toggle={this.toggleModal}/>
            <TaskList taskArr={this.state.taskArr}/>
        </div>
        );
    }
}

export default App;
