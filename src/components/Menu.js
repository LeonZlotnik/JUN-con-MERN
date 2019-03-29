import React, { Component, Fragment } from 'react';
import MenuOptions from '../components/MenuOptions';
import Tips from '../components/Tips';
import MainBar from '../components/MainBar';

//Duda, como pongo a Menu.js en una nueva pantalla, tiene que estar ligada a App.js?

class Menu extends Component {

   render(){
    return(
      <Fragment>
        <MainBar/>
        <Tips/>
        <MenuOptions/>
     </Fragment>
  );
}
}

  export default Menu