import React, { Component } from 'React';
import Main from '../components/MainBar';
import {Switch, Route} from 'react-router-dom';

class Dashboard extends Component {
    render(){
        return(
            <div className="Dashboard">

            <Switch>
                <Route exact path='/' component={Main}/>
                <Route/>
            </Switch>

            </div>
        )
    }
}

export default Dashboard;
