import React, { Component } from 'react';
import MainBarTwo from './MainBarTwo';
import { Link } from 'react-router-dom';

class ProductionBar extends Component {
    render(){
        return(
            <div className="ProductionBar">
                <ul>
                    <Link to="/dashboard"><li>Main</li></Link>
                    <Link to="/dashboard/create"><li>Create</li></Link>
                    <Link to="/dashboard/my-programs"><li>My Programs</li></Link>
                    <li>Media</li>
                    <li>Billing</li>
                   <li>Ads</li>
                </ul>

            </div>
        )
    }
}

export default ProductionBar