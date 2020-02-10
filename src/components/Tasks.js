import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TareaIndividual from './Task';

class Tasks extends Component {
    render(){
        return this.props.tareas.map((task,index) => <TareaIndividual tareaComoProp = { task } key={ index } deleteTask = { this.props.deleteTask }  checkDone = { this.props.checkDone }/>);        
    }
}

Tasks.propTypes = {
    tareas: PropTypes.array.isRequired
}

//de este componente this, tengo una prop, que se llama (tareas), que es un arreglo, itero sobre el
export default Tasks;