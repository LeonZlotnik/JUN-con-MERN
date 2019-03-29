import React, { Component } from 'react';
import Bulma from 'bulma';

import programas from '../programas.json';
import {Link} from 'react-router-dom';

class ProgramHeader extends Component {
    render(){
        return(
            <section className="program-header">
            {programas.map((contenido, index) => {
                    return(
                        <div className="main-program-box" key={index} to="">
                            <img src={contenido.media.hologo}/>
                        </div>
                    )
                })}
            {programas.map((contenido, index) => {
                    return(
                        <div className="program-banner" key={index} to="">
                            <img src={contenido.media.banner}/>
                        </div>
                    )
                })}
            </section>
        )
    }
}

export default ProgramHeader;