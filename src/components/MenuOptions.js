import React, { Component } from 'react'
import Bulma from 'bulma'
import programas from '../programas.json';

import { Link } from 'react-router-dom';

class MenuOptions extends Component{

    state = {
        pais: "",
        idioma: "",
        categoria: "",
        subcategoria: ""
    }

    popUpFunction = () => {
        const popup =  document.getElementById("Program-Browser");
        popup.style.display = 'block';
    }

    deleteModal = () => {
        const popup =  document.getElementById("Program-Browser");
        popup.style.display = 'none';
    }

    savePais = (e) => {
        this.setState({
            pais: e.target.value
        })
    }

    saveIdioma = (e) => {
        this.setState({
            idioma: e.target.value
        })
    }

    saveCategoria = (e) => {
        this.setState({
            categoria: e.target.value
        })
        
    }

    saveSubcategoria = (e) => {
        this.setState({
            subcategoria: e.target.value
        })
    }

    submit = () => {
        this.props.funcion(this.state)
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
                    <select className="select is-rounded" onChange={(e)=> this.savePais(e)}>
                                <option disabled selected>Seleccione el pais</option>  
                        {programas.map((contenido,index) => {
                            return(
                                //<option value={contenido.media.contenidos.origen.pais} key={index}>{contenido.media.contenidos.origen.pais}</option>
                                <option value={contenido.media.contenidos.origen.pais} key={index}>{contenido.media.contenidos.origen.pais}</option>
                                )
                        })}
                    </select >
                    <label>Idioma</label>
                    <select className="select is-rounded" onChange={(e)=> this.saveIdioma(e)}>
                                <option disabled selected>Seleccione el idioma</option>   
                        {programas.map((contenido,index) => {
                            return(
                                <option value={contenido.media.contenidos.origen.idioma} key={index}>{contenido.media.contenidos.origen.idioma}</option>
                            )
                        })}
                    </select>
                    <label>Categoría</label>
                    <select className="select is-rounded" onChange={(e)=> this.saveCategoria(e)}>
                                <option disabled selected>Seleccione la categoría</option>
                        {programas.map((contenido,index) => {
                            return(
                                <option value={contenido.media.contenidos.categoria.principal} key={index}>{contenido.media.contenidos.categoria.principal}</option>
                            )
                        })}
                    </select>
                    <label>Subcategoría</label>
                    <select className="select is-rounded" onChange={(e)=> this.saveSubcategoria(e)}>
                                <option disabled selected>Seleccione la subcategoría</option>
                        {programas.map((contenido,index) => {
                            return(
                                <option value={contenido.media.contenidos.categoria.secundaria} key={index}>{contenido.media.contenidos.categoria.secundaria}</option>
                            )
                        })}
                    </select>
                    </section>
                    <footer className="modal-card-foot">
                    <Link to="/results">
                    <button onClick={this.submit} className="button is-success">Save changes</button>  {/* Metodo GET*/} 
                    </Link>
                    <button className="button" onClick={this.deleteModal}>Cancel</button>
                    </footer>
                </div>
            </div>

    </section>
    )
}
}

export default MenuOptions;