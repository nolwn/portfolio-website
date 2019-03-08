import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Connect, Footer, Home, Projects, Resume, Header } from "./components";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

class App extends Component {
  render = () =>
    <div className="content">
        <Header />
      <Home />
    </div>
}

export default App;
