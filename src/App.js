import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Switch, Route} from 'react-router-dom';

import Index from './components/Index';
import Menu from './components/Menu';
import Results from './components/Results';
import Program from './components/Program';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Switch>
          <Route exact path='/' component={Index} />
          <Route exact path='/menu' component={Menu} />
          <Route exact path='/results' component={Results}/>
          <Route exact path='/program' component={Program}/>
        </Switch>

      </div>
    );
  }
}

export default App;
