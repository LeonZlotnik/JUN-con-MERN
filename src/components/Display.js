import React, { Component } from 'react';
import ProgramHeader from '../components/ProgramHeader';
import MainBar from '../components/MainBar';
import Bulma from 'bulma';

class Display extends Component {
    render(){
        return(
            <div>
                <MainBar/>
                <ProgramHeader/>
                
                    <iframe width="1000" height="1280" src="https://www.youtube.com/embed/H6u0VBqNBQ8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                
            </div>
        )
    }
}

export default Display 