import React, { Component } from 'react'
import Bulma from 'bulma'

class MenuOptions extends Component{

    state = {

    }

    popUpFunction = () => {
        const popup =  document.getElementById("Program-Browser");
        popup.style.display = 'block';
    }

    deleteModal = () => {
        const popup =  document.getElementById("Program-Browser");
        popup.style.display = 'none'
    }

    render(){
    return(
        <section>
            
            <button className='btn' onClick={this.popUpFunction}>Browse Programs</button>

            <div id="Program-Browser" className="modal">
                <div className="modal-background" />
                <div className="modal-card">
                    <header className="modal-card-head">
                    <p className="modal-card-title">Modal title</p>
                    <button onClick={this.deleteModal} className="delete" aria-label="close" />
                    </header>
                    <section className="modal-card-body">
                    {/* Content ... */}
                    </section>
                    <footer className="modal-card-foot">
                    <button className="button is-success">Save changes</button>
                    <button className="button">Cancel</button>
                    </footer>
                </div>
            </div>

    </section>
    )
}
}

export default MenuOptions;