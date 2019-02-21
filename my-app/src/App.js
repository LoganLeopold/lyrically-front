import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import CreateItem from "./CreateArtist/createArtist";
import { Link, Route, Switch } from "react-router-dom";
import ListItem from "./ListArtist/ListArtist";
import UpdateSong from "./UpdateSong/UpdateSong";
import ListSong from "./ListSong/ListSong";

class App extends Component {
  state = {
    songs: [],
    artists: []
  };

  componentDidMount() {
    axios
      .get("https://lyrically123.herokuapp.com/songs")
      .then(res => {
        console.log(res);
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
      .delete(`https://lyrically123.herokuapp.com/${event.target.key}`)
      .then(() => {
        window.location = "/";
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <nav>
          <h3>  <a href="/">Home</a></h3>
          <Link
            to="/createArtist"
            style={{ textDecoration: "none", color: "lightblue" }}
          >
         
          </Link>
           <h3><Link to="/ListSongs"> Songs </Link></h3>
           <h3><Link to="/listArtist"> Artists </Link></h3>
           </nav>
        </header>

        <h1>Song List!</h1>

        <section className="form" />
        {/* <main>
          <Route path="/" render={routerProps => (<ListSong delete={this.delete} {...this.state} {...routerProps} />)}/>
        </main> */}
      </div>
    );
  }
}

export default App;
