import React, { Component } from 'react';
import Bulma from 'bulma';
import programas from '../programas.json';
import {Link} from 'react-router-dom';
import MainBar from '../components/MainBar';
import MenuOptions from '../components/MenuOptions';

class ResultsBox extends Component {

    render(){
        return(
            <div className="results">
            <MainBar/>
                <h2>Channels</h2>

                <section className="result-box">
                    {this.props.programas.map((contenido, index) => {
                        return(
                            <Link to="/program">
                            <div className="program-box" key={index}>
                                    <p>{contenido.pais}</p>
                            </div>
                            </Link>
                        )
                    })}
    

                </section>
            </div>
        )
    }
}

export default ResultsBox;