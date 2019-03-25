import React, { Component } from 'react';
import Bulma from 'bulma';
import programas from '../programas.json';
import {Link} from 'react-router-dom';

class ResultCounter extends Component {

    state = {
        info: {
            value: ""
        }
    }

    showInfo = () => {
        /*switch conditional*/
    }

    render(){
        return(
            <section>
                <div className="info-box" value="pais"></div>
                <div className="info-box" value="idioma"></div>
                <div className="info-box" value="categoria"></div>
                <div className="info-box" value="subcategoria"></div>
                <div className="info-box" value="rank"></div>
            </section>
        )
    }
}