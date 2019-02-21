import React, { Component } from "react";
import "./App.css";
import './logo.jpeg'

import axios from "axios";

// import CreateItem from "./CreateArtist/createArtist";
import { Link, Route, Switch } from "react-router-dom";
// import ListItem from "./ListArtist/ListArtist";
import UpdateSong from "./UpdateSong/UpdateSong";
import ListSong from "./ListSong/ListSong";
import ListArtist from './ListArtist/ListArtist';

class App extends Component {
  state = {
    songs: [],
    artists: []
  };

  componentDidMount() {
    axios
      .get("https://lyrically123.herokuapp.com/songs")
      .then(res => {
        // console.log(res);
        this.setState({
          songs: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  delete(event) {
    event.preventDefault();
    console.log(event.target.name);
    axios
      .delete(`https://lyrically123.herokuapp.com/songs/${event.target.name}`)
      .then((res) => {
        console.log(res.data);
        console.log('Song deleted');
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <nav>
         
          <Link
            to="/createArtist"
            style={{ textDecoration: "none", color: "lightblu" }}
          >
         
          </Link>
          <ul>
           <li><img src="./logo.jpeg" alt="music"/></li>
           <li>  <a href="/">Home</a></li>
           <li><Link to="/songs"> Songs </Link></li>
           <li><Link to="/artists"> Artists </Link></li>
           </ul>
           </nav>
        </header>

        {/* <h1>Song List!</h1> */}

        <section className="form" />
        {/* <main>
          <Route path="/" render={routerProps => (<ListSong delete={this.delete} {...this.state} {...routerProps} />)}/>
        </main> */}
       {/* <h1>Lyrically</h1> */}

        <main>
          <Route path="/songs" exact render={routerProps => <ListSong delete={this.delete} {...this.state} {...routerProps} />}/>
          <Route path="/artists" exact render={routerProps => <ListArtist {...this.state} {...routerProps} />}/>
          <Route path="/songs/:id" exact render={routerProps => <UpdateSong delete={this.delete} {...routerProps} {...this.state}/>}/>
        </main>

      </div>
    );
  }
}

export default App;
