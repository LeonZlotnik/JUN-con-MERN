import React ,{Component} from 'react';

class NavBar extends Component {
   state = {
        mail : '',
        password: ''
    }

    changeHandler = (e) => {
        const {name, value} = e.target //Piensa en què quieres sacar
        this.setState({
            name : this.name,
            value : this.value
        })
    }

    render() {
        return(
        <div className="nav-container">
        <img src="IMG/Logo-jun-110.png" alt="" />

        <ul>
            <li className="Go-button"><a href="">Go</a></li>
            <li className="pw">password<input name="password" type="password" required defaultValue="" onChange={e => this.changeHandler(e)}/></li>
            <li className="mail">e-mail<input name="mail" defaultValue="" type="mail" required placeholder="example@mail.com" onChange={e => this.changeHandler(e)}/></li>
        </ul>
        </div>
        );        
    }
}

export default NavBar