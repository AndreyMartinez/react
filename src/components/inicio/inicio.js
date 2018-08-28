import React, { Component } from 'react';

import TodoList from '../todoLIst/TodoList';
class Inicio extends Component {

    constructor(props) {
        super(props)
        this.state = { items: [], text: '' }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <div>
                <h3>Todo</h3>
                <TodoList item={this.state.items} />
                <form >
                    <label htmlFor="new-todo">
                        Agregar Todo
                    </label>
                    <input id="new-todo"
                        onChange={e =>
                            this.setState({ text: e.target.value })
                        }
                        value={this.state.text}
                    />
                    <button id="add" onClick={this.handleSubmit}>
                        Add #{this.state.items.length + 1}
                    </button>
                    <button id="delete" onClick={this.handleSubmit}>
                        Delete #{this.state.items.length - 1}
                    </button>
                </form>
                
            </div>
        )
    }

    handleSubmit(e) {
        console.log(e.target.id)
        if(e.target.id === "add"){
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: ''
        }))
    }
    else{
        e.preventDefault();
        this.setState(prevState => ({
            items: prevState.items.splice(1)
        }))
        console.log(this.items)
    }
    }
}


export default Inicio
