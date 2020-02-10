import React, { Component } from 'react'

export default class Post extends Component {

    state = {
        posts: [] //Inicializo con un array vacio
    }

    //cuando el componente es montado
    async componentDidMount() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        
        this.setState({
            posts: data
        })
    }


    render() {
        return (
            <div>
                <h1>Posts</h1>
                {
                    this.state.posts.map(post => {
                        return <div key={ post.id }>
                            <h2>{ post.title }</h2>
                            <p>{ post.body }</p>                           
                        </div>
                    })
                }
            </div>
        )
    }
}
