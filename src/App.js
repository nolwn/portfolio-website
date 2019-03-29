import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  Connect,
  Footer,
  Home,
  Resume,
  Header,
  Projects,
  Section } from "./components";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

class App extends Component {
  render = () =>
    <div className="content">
        <Header />
        <Section number="1">
          <Home />
        </Section>
        <Section number="2">
          <Resume />
        </Section>
        <Section number="3">
          <Projects />
        </Section>
        <Connect number="4" />
    </div>
}

export default App;
