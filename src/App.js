import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

import {Switch, Route} from 'react-router-dom';

import Index from './components/Index';
import Menu from './components/Menu';
import Results from './components/Results';
import Program from './components/Program';
import ActionPage from './components/Display';
import Dashboard from './components/Dashboard';
import Create from './components/Create';
import MyPrograms from './components/MyPrograms';

import programas from './programas.json';

class App extends Component {

  state= {
    recibirfiltro: "data",
    renderResponse : ""
  }

  getInfo = (e) =>{
      e.preventDefault();
      const user = e.target.elemnts.username.value;
      axios.post(`http://localhost:5000`);
  }
  // componentDidMount() {
  //   axios.get('http://localhost:3000/progam/api')
  //     .then(data => console.log(data))
  //     .catch(err => console.log(err));
  // }

  getResponse = async () => {
    const response = await fetch('/progam/api');
    const body = await response.json();
    console.log(body)
    if(response.status !== 200) throw Error(body.message);

    return body;
  }

  componentDidMount() {
    this.getResponse()
      .then(res => {
        const SomeData = res;
        this.setState({ renderResponse : SomeData})
        console.log(SomeData);
      }) 
      .catch(err => {
        console.log(err);
      })
  }

  filtro = programas.filter(display => {
    return display
  })

  recibirfiltro = data => {
    console.log(data)
  }

  render() {
    return (
      <div className="App">

        <Switch>
          <Route exact path='/' component={Index}/>
          <Route exact path='/menu' render={() => <Menu funcion={this.recibirfiltro} filtro={this.filtro} />}/>
          <Route exact path='/results' render={() => <Results programas={this.state.recibirfiltro} />}/>
          <Route exact path='/program' component={Program}/>
          <Route exact path='/action-page' component={ActionPage}/>
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route exact path='/dashboard/create' render={() => <Create getInfo={this.getInfo} />}/>
          <Route exact path='/dashboard/my-programs' component={MyPrograms}/>

        </Switch>

        {/* <h2>Call out API</h2> */}
        {/* <p>{this.state.renderResponse.express}</p> */}

      </div>
    );
  }
}

export default App;
