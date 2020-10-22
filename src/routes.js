import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Landing from './pages/landing';
import Lathe from './pages/lathe';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/lathe" component={Lathe} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
