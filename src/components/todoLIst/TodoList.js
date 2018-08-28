//dependencies
import React , {Component} from 'react';
import PropTypes from 'prop-types'
class TodoList extends Component{
   static PropTypes ={
       item: PropTypes.array.isRequired
   }

    render(){

        return(
               <ul>
       {
           this.props.item.map(item => (
  <li key={item.id}> {item.text}</li>
           ))}
               </ul>
        );
    }
}
export default TodoList