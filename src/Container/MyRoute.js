import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';

const MyRoute = () => {
    return (
        <div>
            <Route>
               <Home /> 
            </Route>
            
        </div>
    );
};

export default MyRoute;