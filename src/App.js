import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import FirstForm from './components/FirstForm';

import {Switch, Route} from 'react-router-dom';

import Index from './components/Index'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>

        <Switch>
          <Route exact path='/' component={Index} />
          <Route path='/' component={Index} />
        </Switch>

      </div>
    );
  }
}

export default App;
