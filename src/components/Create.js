import React, { Component } from 'react';
import MainBarTwo from './MainBarTwo';
import Bulma from 'bulma';
import ProductionBar from '../components/ProductionBar';

const Create = (props) => {

        return(
            <div>
            <MainBarTwo/>
            <ProductionBar/>
        
            <section className="container-form">
                <form action="/myprograms" method="POST" onSubmit={props.getInfo}>
                <div className="notification">
                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control">
                        <input type="text" name="username" className="input is-info"/>
                        </div>
                    </div>
                    <br/>
                    <div className="field">
                        <label className="label">Channel</label>
                        <div className="control">
                            <input type="text" name="channel" className="input is-info"/>
                        </div>
                    </div>
                    <br/>
                    <div className="field">
                        <div className="control">   
                        <label className="label">Channel Logo</label>
                        
                            <input type="file" name="channelogo" className="button is-info"/>
                        </div>
                    </div>
                    <br/>
                    <div className="field">
                        <label className="label">Program Name</label>
                        <div className="control">
                            <input type="text" name="program" className="input is-info"/>
                        </div>
                    </div>
                    <br/>
                    <div className="field">
                        <div className="control">
                        <label className="label">Program Logo</label>
                       
                            <input type="file" name="programlogo" className="button is-info"/>
                        </div>
                    </div>
                    <br/>
                    <div className="field">
                        <label className="label">Description</label>
                        <div className="control">
                            <textarea className="textarea" name="description"></textarea>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <ul className="form-Booleans">

                    <li>
                    <label className="label">Country</label>
                    
                    <select className="select is-danger" name="country">
                        <option name="Mexico">Mexico</option>
                        <option name="Brasil">Brasil</option>
                        <option name="USA">USA</option>
                        <option name="Canada">Canada</option>
                        <option name="England">England</option>
                        <option name="Spain">Spain</option>
                        <option name="Germany">Germany</option>
                        <option name="Corea">Corea</option>
                        <option name="France">Frannce</option>
                    </select>
                    </li>
                    <li>
                    <label className="label">Language</label>
                   
                    <select className="select is-danger" name="languge">
                        <option name="Spanish">Spanish</option>
                        <option name="Portugues">Portugues</option>
                        <option name="English">English</option>
                        <option name="German">German</option>
                        <option name="Corean">Corean</option>
                        <option name="French">French</option>
                    </select>
                    </li>
                    <li>
                    <label className="label">Category</label>
                    
                    <select className="select is-danger" name="principal">
                        <option name="Spanish">Contest</option>
                        <option name="Portugues">News</option>
                        <option name="English">Reality</option>
                        <option name="German">TalkShow</option>
                        <option name="Corean">Series</option>
                        <option name="French">Events</option>
                        <option name="French">Clips</option>
                        <option name="French">Documentaries</option>
                        <option name="French">Movies</option>
                        <option name="French">Explainers</option>
                        <option name="French">Interviews</option>
                    </select>
                    </li>
                    </ul>

                    <br/>
                    <div className="field">
                        <label className="label">Subcategory</label>
                        <div className="control">
                            <input type="text" name="secundaria" className="input is-info" name="second"></input>
                        </div>
                    </div>
                    <br/>
                    <div className="field">
                    <div className="control">
                        <label className="label">Clasification</label>
                        
                            <select className="select is-danger" name="rating"> 
                                <option name="Family">Family</option>
                                <option name="Violence">Violence</option>
                                <option name="Intense">Intense</option>
                                <option name="Adults">Adults</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <input type="submit" value="submit" className="button is-info"/>
                    </div>
                </form>
                
            </section>
            
            </div>
        )
    }

export default Create;