import React, { Component } from 'react';
import Bulma from 'bulma';
import MainBar from '../components/MainBar';
import programas from '../programas.json';
import {Link} from 'react-router-dom';

import ProgramHeader from  '../components/MainBar';


class Program extends Component{


    state = {
        busqueda: {}
    }


    render(){

        const programacionfiltrada = [
            
        ];
        
        programacionfiltrada = this.programacion.filter(programa => {
            return programa.pais == this.state.busqueda.pais && programa.idioma == this.state.busqueda.idioma 
        })


        return(  
        <div>
            <MainBar/>
            <ProgramHeader/>
            <section>
            <div className="columns is-gapless is-multiline is-mobile">
                    <div className="column is-one-quarter">
                        {programas.map((contenido, index) => {
                            return(
                                <div className="catalog-box" key={index} to="">
                                    <img src={contenido.media.contenidos.logo.principal}/>
                                </div>
                            )
                        })}
                    </div>
                    <div className="column is-one-quarter">
                        is-one-quarter
                    </div>
                    </div>

            </section>
        </div> 
        )
    }
}

export default Program