import React, {Component} from 'react'
import PropTypes from 'prop-types';

//Component
import Header from './../global/Header/Header'

//Data
import menu from './../../data/menu'

class Home extends Component{
static propTypes = {
    body: PropTypes.object.isRequired
};
    render(){
        const {body} = this.props
        return (
            <div>
                <Header items={menu}/>
            {body}
            </div>
        )
    }
}


export default Home