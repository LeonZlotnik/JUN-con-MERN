import React from 'react';
import Bulma from 'bulma';

import img1 from '../assets/img/'

//Duda, como pongo a Menu.js en una nueva pantalla, tiene que estar ligada a App.js?
class Menu extends Component{

   render(){
    return(
        <div class="modal">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                <p class="modal-card-title">TV</p>
                <button class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">

                <div className="field">
          <label className="label">Subject</label>
          <div className="control">
            <div className="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
                </div>
                </div>
     

                </section>
                <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
                <button class="button">Cancel</button>
                </footer>
            </div>
            </div>
        <div className="Go"><Link href="results.html">Go</Link></div>
    );
  }

}

  export default Menu