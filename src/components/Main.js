import React, { Component } from 'React';
import MainBar from '../components/MainBar';

class MainDash extends Component {
    render(){
        return(
            <div>
            <MainBar/>
           
            <section>
                <form>
                    <label>Username</label>
                    <input type="text" name="username"></input>
                    <label>Channel</label>
                    <input type="text" name="username"></input>
                    <label>Channel Logo</label>
                    <input type="file" name="imagefile"></input>

                </form>
            </section>

            </div>
        )
    }
}