import React, { Component } from 'react';
import Bulma from 'bulma';
import programas from '../programas.json';
import {Link} from 'react-router-dom';
import MainBar from '../components/MainBar';

class ResultsBox extends Component {



    render(){
        return(
            <div className="results">
            <MainBar/>
                <h2>Channels</h2>

                <section className="result-box">
                    {programas.map((contenido, index) => {
                        return(
                            <div className="program-box" key={index} to="">
                                <Link to="/program">
                                {contenido.media.contenidos.logo.principal}
                                </Link>
                            </div>
                        )
                    })}
    

                </section>
            </div>
        )
    }
}

export default ResultsBox;