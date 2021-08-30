import React from 'react';
import logo from "./logo.svg";

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import FrontPage from './pages/FrontPage';


export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={FrontPage} />
            </Switch>
        </BrowserRouter>
    )
};