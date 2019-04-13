import React, { Component } from 'react';
import MainBarTwo from '../components/MainBarTwo';
import ProductionBar from '../components/ProductionBar';
import Chart from 'chart.js';

class MyProgram extends Component {

//     state = {
//         graph : ""
//     }

//     getGraph = () =>{
//     const ctx = document.getElementById('myChart').getContext('2d');
//     const graph = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line',

//     // The data for our dataset
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45]
//         }]
//     },

//     // Configuration options go here
//     options: {}
// });
// }

// componentDidMount(){
//     this.getGraph()
//     .then(res => {
//         const showGraph = res;
//         this.setState({
//             showGraph : "graph"
//         });
//     })
// }
    render(){
        return(
            <div>
                <MainBarTwo/>
                <ProductionBar/>
                <section>
                    <ul className="form-Booleans">

                    <li>
                    <label className="label">Channel</label>

                    <select className="select is-danger" name="country">
                        <option value="--">--</option>
                        <option name="MyChannel">MyChannel</option>
                    </select>
                    </li>
                    <li>
                    <label className="label">Program</label>

                    <select className="select is-danger" name="languge">
                        <option value="--">--</option>
                        <option name="MyProgram">MyProgram</option>
                    </select>
                    </li>
                    </ul>
                </section>

                {/* <section>
                    <Chart>
                        <canvas id="myChart">{this.state.graph}</canvas>
                    </Chart>
                </section> */}
            </div>
        )
    }
} 

export default MyProgram;