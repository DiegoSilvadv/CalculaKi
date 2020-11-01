import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './pages/home';

import Milling from './pages/milling_machine'; 
import Lathe from './pages/lathe';


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/milling" component={Milling} />
                <Route path="/lathe" component={Lathe} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
