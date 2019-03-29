import React, { Component } from 'react';
import FirstForm from './FirstForm';
import NavBar from '../components/NavBar';


class Index extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <FirstForm/>
      </div>
    );
  }
}

export default Index;
