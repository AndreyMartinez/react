//dependices
import React from 'react';
import {Route,Switch} from 'react-router-dom'

//Componentes
import App from './components/App'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Page404 from './components/page404/page404'
import Home from './components/home/home'
import Inicio from './components/inicio/inicio'

const AppRoutes = () =>
<App>
    <switch>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="./" component={Home}/>
        <Route path="/inicio" component={Inicio} /> 
        <Route  componnent={Page404}/>
    </switch>
    </App>;

    export default AppRoutes;