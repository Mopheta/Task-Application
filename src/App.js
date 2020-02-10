import React, { Component } from 'react';
import './App.css';

//Data en formato json
import jsonTask from './DATA/task.json';

//Componentes
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

//State: define los  datos que le pertenecen al componente
//Metodo map: funciona en arrays, recorre y devuelve un array nuevo
//a.map((e) => e + 3) para cada elemento, sumale 3

class App extends Component{

  state = {
    tasks: jsonTask
  }

  //Metodo que envia una funcion por props
  addNewTask = (title, description) => {
    const newTask = {
      id: this.state.tasks.length,
      title: title,
      description: description,
      done: false
      
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const taskAfterDelete = this.state.tasks.filter(task => task.id !== id);
    //console.log(taskAfterDelete);

    this.setState({
      tasks: taskAfterDelete
    })
  }

  editTask = (id) => {
    const editTask = this.state.tasks.find(task => task.id === id);
    console.log(editTask);
  }

  checkDone = (id) => {
    const newTasks = this.state.tasks.map(task =>{
      if(task.id === id){
        task.done = !task.done;
      }
      return task;
    })
    this.setState({
      task: newTasks
    })
    console.log(this.state.tasks)
  }

  render(){
    console.log(this.state.tasks);
    return (
      <div>
        <TaskForm addNewTask={ this.addNewTask } />
        <Tasks tareas = {this.state.tasks} deleteTask = { this.deleteTask } editTask = { this.editTask } checkDone = { this.checkDone}/>     
      </div>
    )}
}


//paso la propiedad que tengo en state, accediendo a este componente, state y el nombre de la prop, se va a recibir como props del otro
export default App;

