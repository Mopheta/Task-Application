import React, { Component } from 'react';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmitEvent = (eventNavegador) => { //Recibe el evento del navegador Submit, ejecutado cuando se presiona el boton del tipo submit
        eventNavegador.preventDefault(); //Metodo que me permite evitar que el navegador se refresque cuando se submitea el formulario
        console.log(this.props)
        //Por props recibo la funcion desde APP.js en este caso addNewTask()
        this.props.addNewTask(this.state.title, this.state.description);
    }

    onChangeFields = (event) => {
        //console.log(event.target.name, event.target.value)
        
        this.setState({ //Permite alterar el estado del state
            //title: valor
            [event.target.name]: event.target.value 
            /*Se asigna el nuevo valor en [el state correspondiente], al compartir evento,
              el evento onChange te da el name de donde se esta ingresando info, y la info ingresada, va entre [] para que compile  
            */
        })
    }

    render() {
        return (
            <form onSubmit={ this.onSubmitEvent }>
                <input 
                    type="text"
                    name="title"
                    placeholder="Write a task" 
                    onChange={ this.onChangeFields } 
                    value={ this.state.title }   
                />
                <br/>

                <textarea
                    name="description" 
                    placeholder="Write a description" 
                    onChange={ this.onChangeFields }
                    value={ this.state.description } >
                </textarea>

                <br/>
                <input type="submit" value="Enviar"/>
            </form>
        )
    }
}