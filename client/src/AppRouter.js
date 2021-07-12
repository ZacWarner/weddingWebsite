import React from 'react';
import logo from "./logo.svg";

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';


export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>Welcome to React</h2>
                    </div>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                </div>
            </Switch>
        </BrowserRouter>
    )
};