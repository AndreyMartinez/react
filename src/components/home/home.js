import React, {Component} from 'react'
import PropTypes from 'prop-types';

//Component
import Header from './../global/Header/Header'
//utils
import * as Logger from '../../util/logger'
//Data
import menu from './../../data/menu'

class Home extends Component{
static propTypes = {
    body: PropTypes.object.isRequired
};
    render(){
        Logger.error('hello WORLD');
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