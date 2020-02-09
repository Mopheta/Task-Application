import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
    
    StyleCompleted() {
        return {
            color: this.props.tareaComoProp.done ? 'green' : 'black',
            textDecoration: this.props.tareaComoProp.done ? 'line-through' : 'none',
            //background: this.props.tareaComoProp.done ? 'grey' : 'white'
        }
    }
    render(){
        //destructuring 
        
        const {tareaComoProp} = this.props;

        return ( 
            <div style={this.StyleCompleted()}>
                <div>
                    {tareaComoProp.id} - {tareaComoProp.title} - {tareaComoProp.description} - {tareaComoProp.done}
                    <input type="checkbox"></input>
                    <button style={btn_x}> X </button>
                </div>
            </div>
    )}
}
//de este componente this, tengo una prop, que se llama (tareas), que es un arreglo, itero sobre el //

//Con esta linea de codigo, exijo que lo que venga como prop sea del tipo objeto, de lo contrario la consola indicara error (no se cae la app);
Task.propTypes = {
    tareaComoProp: PropTypes.object.isRequired
}


//Styles:
const btn_x = {
    borderRadius: '20px',
    color: 'white',
    background: "green",
}

export default Task;