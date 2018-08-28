//Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

//assets
import img01 from '../../assets/01.jpg';
import header from './Header.css'

class Header extends Component{
    static propTypes = {
        items: PropTypes.array.isRequired,
        other:PropTypes.string.isRequired
      };
    render(){
const {items , other} = this.props;
        return(
    <div className="HeaderElement">
  <h1 class="element">{other}</h1>

    <ul className="Menu">
{items && items.map((items,key) =>
<li class="element" key={key}><Link to={items.url} >{items.title}</Link> </li>
)}

    </ul>
     </div>
);
}
}
export default Header;