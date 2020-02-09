import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TareaIndividual from './Task';

class Tasks extends Component {
    render(){
        return this.props.tareas.map((e,index) => <TareaIndividual tareaComoProp = { e } key={ index }/>);        
    }
}

Tasks.propTypes = {
    tareas: PropTypes.array.isRequired
}

//de este componente this, tengo una prop, que se llama (tareas), que es un arreglo, itero sobre el
export default Tasks;