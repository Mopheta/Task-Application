import React, { Component } from 'react';

export default class TaskForm extends Component {

    onSubmitEvent = (eventNavegador) => { //Recibe el evento del navegador Submit, ejecutado cuando se presiona el boton del tipo submit
        console.log('Submitting..');
        eventNavegador.preventDefault(); //Metodo que me permite evitar que el navegador se refresque cuando se submitea el formulario
    }

    onChangeFields = (event) => {
        console.log(event.target.value);
    }

    render() {
        return (
            <form onSubmit={ this.onSubmitEvent }>
                <input type="text" placeholder="Write a task" onChange={ this.onChangeFields }/>
                <br/>
                <textarea placeholder="Write a description" onChange={ this.onChangeFields }></textarea>
                <br/>
                <input type="submit" value="Enviar"/>
            </form>
        )
    }
}