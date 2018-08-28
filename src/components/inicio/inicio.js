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
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        Agregar Todo
                    </label>
                    <input id="new-todo"
                        onChange={e =>
                            this.setState({ text: e.target.value })
                        }
                        value={this.state.text}
                    />
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        )
    }

    handleSubmit(e) {
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
}


export default Inicio
