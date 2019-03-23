import React, {Component} from 'react';
import Bulma from 'react';

class Tips extends Component {

    state = {
        image : {
            name : "",
            values : ""
        }
    }

    changeHandler = (e) => {
        const {name} = e.target //Piensa en què quieres sacar
        this.setState({
            image: {name : this.name}
        })
    }

    render(){
        console.log(this.props.children)
        return(
        <section id="Tips-section">
            <div className="card is-two-fifths">
            <div className="card-image">
            <figure className="image is-4by3">
                <img src="https://cdn.dribbble.com/users/455169/screenshots/2831980/attachments/581886/pokemongo-team-logos-mystic.png" alt="Placeholder image" name="image"  value="image" onChange={e => this.changeHandler(e)}/>
            </figure>
            </div>
            <div className="card-content">
            <div className="media">
                <div className="media-left">
                <figure className="image is-48x48">
                    <img src="https://cdn.dribbble.com/users/455169/screenshots/2831980/attachments/581886/pokemongo-team-logos-mystic.png" alt="Placeholder image" />
                </figure>
                </div>
                <div className="media-content">
                <p className="title is-4">John Smith</p>
                <p className="subtitle is-6">@johnsmith</p>
                </div>
            </div>
            <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
            </div>
        </div>

        <div className="card is-two-fifths">
        <div className="card-image">
        <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
        </figure>
        </div>
        <div className="card-content">
        <div className="media">
            <div className="media-left">
            <figure className="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
            </figure>
            </div>
            <div className="media-content">
            <p className="title is-4">John Smith</p>
            <p className="subtitle is-6">@johnsmith</p>
            </div>
        </div>
        <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br />
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
        </div>
        </div>

        <div className="card is-two-fifths">
        <div className="card-image">
        <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
        </figure>
        </div>
        <div className="card-content">
        <div className="media">
            <div className="media-left">
            <figure className="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
            </figure>
            </div>
            <div className="media-content">
            <p className="title is-4">John Smith</p>
            <p className="subtitle is-6">@johnsmith</p>
            </div>
        </div>
        <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br />
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
        </div>
        </div>
        {this.props.children}
        </section>
    )
    }
  }

export default Tips;