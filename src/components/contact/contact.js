import React, { Component } from 'react';
class Contact extends Component {

    constructor() {
        super();
        this.state = {
            name: "element"
        }
        this.sendForm = this.sendForm.bind(this);
    }

sendForm(){
    console.log('entro'+ this.state.name)
}
    

    render() {
        return (
            <div>
                <input type="email" value={this.state.name} onChange={e => this.setState({
                   name: e.target.value 
                })}/>
                <button onClick={this.sendForm}>Mostar</button>
            </div>
        )
    }
}
export default Contact