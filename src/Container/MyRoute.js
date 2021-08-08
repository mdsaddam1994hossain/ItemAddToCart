import React from 'react';
import { Route } from 'react-router-dom';
import Basket from './Components/Basket';
import Home from './Home';

const MyRoute = () => {
    return (
        <div>
            <Route exact path='/'>
               <Home /> 
            </Route>
            <Route path='/basket'>
               <Basket /> 
            </Route>
            
        </div>
    );
};

export default MyRoute;