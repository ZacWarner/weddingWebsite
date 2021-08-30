import React, { Component } from "react";

import "./App.css";

import AppRouter from './AppRouter';
import NavBar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <AppRouter />
      </>
    );
  }
}

export default App;
