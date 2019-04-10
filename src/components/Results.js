import React, { Component,  } from 'react';
import Bulma from 'bulma';

import ResultBox from '../components/ResultBox';

class Results extends Component {


    render(){
        return(
            <div className="results">
                <ResultBox programas={this.props.programas}/>
            </div>
        )
    }
}

export default Results;