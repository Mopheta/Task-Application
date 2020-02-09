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

  render(){
    console.log(this.state.tasks);
    return (
      <div>
        <TaskForm />
        <Tasks tareas = {this.state.tasks}/>     
      </div>
    )}
}


//paso la propiedad que tengo en state, accediendo a este componente, state y el nombre de la prop, se va a recibir como props del otro
export default App;

