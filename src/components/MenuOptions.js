import React, { Component } from 'react'
import Bulma from 'bulma'
import programas from '../programas.json';

class MenuOptions extends Component{

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
                    <h2><strong>Seleccione los campos siguiente</strong></h2>
                        <p>A traves de estos campos es que podrá acceder a todos los contenidos que nuetros partenrs has subido!</p>
                        <br/>
                        <p>No es necesario que llene todos los campos. Entre más campos llene más especófoca será la consulta.</p>
                    <label>País</label>
                    <select>
                        {programas.map((contenido,index) => {
                            return(
                                <option value="" key={index}>{contenido.origen.pais}</option>
                            )
                        })}
                    </select>
                    <label>Idioma</label>
                    <select>
                        {programas.map((contenido,index) => {
                            return(
                                <option value="" key={index}>{contenido.origen.idioma}</option>
                            )
                        })}
                    </select>
                    <label>Categoría</label>
                    <select>
                        {programas.map((contenido,index) => {
                            return(
                                <option value="" key={index}>{contenido.categoria.principal}</option>
                            )
                        })}
                    </select>
                    <label>Subcategoría</label>
                    <select>
                        {programas.map((contenido,index) => {
                            return(
                                <option value="" key={index}>{contenido.categoria.secundaria}</option>
                            )
                        })}
                    </select>
                    </section>
                    <footer className="modal-card-foot">
                    <button className="button is-success" submit="">Save changes</button>  {/* Metodo GET*/} 
                    <button className="button" onClick={this.deleteModal}>Cancel</button>
                    </footer>
                </div>
            </div>

    </section>
    )
}
}

export default MenuOptions;