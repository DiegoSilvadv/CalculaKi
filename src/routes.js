import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Landing from './pages/landing';
import Lathe from './pages/lathe';
import Milling from './pages/milling_machine'; 
import Feedback from './pages/feedback';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/lathe" component={Lathe} />
                <Route path="/milling" component={Milling} />
                <Route path="/feedback" component={Feedback} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
