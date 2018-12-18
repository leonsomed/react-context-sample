import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import GuardRoute from './guardRoute';
import Dashboard from './pages/dashboard';
import Login from './pages/login';

const root = (
    <BrowserRouter>
        <Switch>
            <GuardRoute type="protected" path="/dashboard" component={Dashboard} />
            <GuardRoute type="public" path="/login" component={Login} />
            <Redirect from="/" to="/dashboard" />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(root, document.getElementById('root'));
