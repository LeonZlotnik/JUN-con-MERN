import React, { Component } from 'react';
import MainBarTwo from './MainBarTwo';
import MyPrograms from '../components/MyPrograms';
import {Switch, Route} from 'react-router-dom';
import Create from './Create.js';
import { BrowserRouter } from 'react-router-dom';
import ProductionBar from '../components/ProductionBar';

class Dashboard extends Component {

    state = {
        program : ""
    }



    render(){
        return(
            <div>
    
    <MainBarTwo/>

    <ProductionBar/>
    <table class="table">
  <thead>
    <tr>
      <th><abbr title="Position">#</abbr></th>
      <th>Programs</th>
      <th><abbr title="Uploads">Uploads</abbr></th>
      <th><abbr title="Ads">Ads</abbr></th>
      <th><abbr title="Views">Full Views</abbr></th>
      <th><abbr title="Subscriptions">Subs</abbr></th>
      <th><abbr title="Rank">Rank</abbr></th>
      <th><abbr title="SPrice">Sub Price</abbr></th>
      <th><abbr title="APrice">Ad Price</abbr></th>
    </tr>
  </thead>
    <tr>
      <th>1</th>
      <td>Program</td>
      <td>38</td>
      <td>23</td>
      <td>12</td>
      <td>3</td>
      <td>D3</td>
      <td>$1.25</td>
      <td>$2 CPM</td>
    </tr>
    </table>


            </div>
        )
    }
}

export default Dashboard;
