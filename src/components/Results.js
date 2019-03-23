import React, { Component } from 'react';
import Bulma from 'bulma';
import programas from '../programas.json';
import {Link} from 'react-router-dom';

class Results extends Component {


    render(){
        return(
            <div className="results">

                <h2>Channels</h2>

                <section className="result-box">
                    {programas.map((contenido, index) => {
                        return(
                            <div className="container" key={index} to="">
                                <Link to="/">
                                {contenido.logo.principal}
                                </Link>
                            </div>
                        )
                    })};
    

                </section>
            </div>
        )
    }
}

export default Results;