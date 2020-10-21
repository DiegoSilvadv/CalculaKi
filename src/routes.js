import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import landing from './pages/landing';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={landing} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
