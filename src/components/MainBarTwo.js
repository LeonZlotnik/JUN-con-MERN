import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainBarTwo extends Component {

    render(){
        return(
            <div>
                 <div className="nav-container">
                 <img src="IMG/Logo-jun-110.png" alt="" />

        <ul id="mainbar-ul">
            <li className="help"><a href=""><img src=""/></a></li>
            <Link to="/menu">
            <li className="Login">Menu</li>
            </Link>
            <Link to="/dashboard">
            <li className="profile">Admin</li>
            </Link>
            <li className="search">Search<input name="search" type="text" required defaultValue="" onChange={e => this.changeHandler(e)}/></li>
            
        </ul>
        </div>
            </div>
        )
    }
}

export default MainBarTwo