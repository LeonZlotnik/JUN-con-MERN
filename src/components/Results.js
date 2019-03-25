import React, { Component,  } from 'react';
import Bulma from 'bulma';

import ResultBox from '../components/ResultBox';

class Results extends Component {


    render(){
        return(
            <div className="results">
                <ResultBox/>
            </div>
        )
    }
}

export default Results;