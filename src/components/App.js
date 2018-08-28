import React, { Component } from 'react';
//components 
import PropTypes from 'prop-types';
import Home from './home/home'

//assets 
import './App.css';
class App extends Component {
  static PropTypes = {
    children:PropTypes.object.isRequired
  }
    render() {
      const {children} = this.props
      return (
        <div className="App">
           
<Home body={children}/>

           {/* <TestSecondComponent  textElement="esta es la segunda parte con un componente"/> */}
        </div>
      );
    }
  }

export default App;
