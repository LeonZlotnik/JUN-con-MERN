import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainBar extends Component {

    render(){
        return(
            <div>
                 <div className="nav-container">
                 <img src="IMG/Logo-jun-110.png" alt="" />

        <ul id="mainbar-ul">
            <li className="help"><a href=""><img src=""/></a></li>
            <Link to="/index">
            <li className="Login">Login</li>
            </Link>
            <Link to="/profile">
            <li className="profile">Profile</li>
            </Link>
            <li className="search">Search<input name="search" type="text" required defaultValue="" onChange={e => this.changeHandler(e)}/></li>
            
        </ul>
        </div>
            </div>
        )
    }
}

export default MainBar