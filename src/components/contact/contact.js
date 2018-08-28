import React, { Component } from 'react';
class Contact extends Component {

    constructor() {
        super();
        this.state = {
          email: '',
          password: '',
          everFocusedEmail: false,
          everFocusedPassword: false,
          inFocus: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      handleSubmit(evt) {
        if (!this.canBeSubmitted()) {
          evt.preventDefault();
          return;
        }
        const { email, password } = this.state;
        alert(`Signed up with email: ${email} password: ${password}`);
      }
      
      canBeSubmitted() {
        const errors = this.validate(this.state.email, this.state.password);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
      }
      validate(email, password) {
        // true means invalid, so our conditions got reversed
        return {
          email: email.length === 0,
          password: password.length === 0,
        };
      }
      
      render() {
        const errors = this.validate(this.state.email, this.state.password);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return (
          <form onSubmit={this.handleSubmit}>
            <input
              className={errors.email ? "error" : ""}
              type="text"
              placeholder="Enter email"
              value={this.state.email}
              onChange={e =>  this.setState({ email: e.target.value })}
            />
            <input
              className={errors.password ? "error" : ""}
              type="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={ e =>   this.setState({ password: e.target.value })}
            />
            <button disabled={isDisabled}>Sign up</button>
          </form>
        )
      }
    }
export default Contact