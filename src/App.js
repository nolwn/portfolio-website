import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Connect, Footer, Home, Projects, Resume, Header, Section } from "./components";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

class App extends Component {
  render = () =>
    <div className="content">
        <Header />
        <Section number="1">
          <Home />
        </Section>
        <Section>
          <Resume />
        </Section>
    </div>
}

export default App;
