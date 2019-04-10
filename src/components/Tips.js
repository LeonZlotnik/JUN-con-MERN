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
            <img src="https://yt3.ggpht.com/a-/AAuE7mCfM8VUpqw_Ptodz7stpbc9mbrO1sbTa6obiA=s900-mo-c-c0xffffffff-rj-k-no" alt="Placeholder image" />
        </figure>
        </div>
        <div className="card-content">
        <div className="media">
            <div className="media-left">
            <figure className="image is-48x48">
                <img src="https://yt3.ggpht.com/a-/AAuE7mCfM8VUpqw_Ptodz7stpbc9mbrO1sbTa6obiA=s900-mo-c-c0xffffffff-rj-k-no" alt="Placeholder image" />
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
            <img src="http://nfl.com/static/content/public/static/scripts/network/assets/redzone/redzone2018_600x600.jpg" alt="Placeholder image" />
        </figure>
        </div>
        <div className="card-content">
        <div className="media">
            <div className="media-left">
            <figure className="image is-48x48">
                <img src="http://nfl.com/static/content/public/static/scripts/network/assets/redzone/redzone2018_600x600.jpg" alt="Placeholder image" />
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