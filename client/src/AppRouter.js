import React from 'react';
import logo from "./logo.svg";

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import NavBar from "./components/navbar";

import FrontPage from './pages/FrontPage';
import InfomationPage from './pages/Information';


export default () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path='/information' component={InfomationPage} />
                <Route path='/' component={FrontPage} />
            </Switch>       
        </BrowserRouter>
    )
};