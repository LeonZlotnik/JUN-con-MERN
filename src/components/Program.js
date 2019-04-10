import React, { Component } from 'react';
import Bulma from 'bulma';
import MainBar from '../components/MainBar';
import ProgramHeader from '../components/ProgramHeader';
import programas from '../programas.json';
import {Link} from 'react-router-dom';



class Program extends Component{


    render(){


        return(  
        <div>
            <MainBar/>
            <ProgramHeader/>
            <section>

            <div class="columns">
                <div class="column">
                    <h4>Live Stream</h4>
                        <Link to="">
                        <div className="image is-3by1 pbox"></div>
                        </Link>
                </div>
                <div class="column">
                    <h4>On Demand</h4>
                        <Link to="display">
                        <div className="image is-3by1 pbox"></div>
                        </Link>
                </div>
            </div>
            
            </section>
        </div> 
        )
    }
}

export default Program