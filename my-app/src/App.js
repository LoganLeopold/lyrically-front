import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import { Link, Route, Switch } from "react-router-dom";
import UpdateSong from "./UpdateSong/UpdateSong";
import ListSong from "./ListSong/ListSong";
import ListArtist from './ListArtist/ListArtist';

class App extends Component {
  state = {
    songs: [],
    // artists: []
  };

  componentDidMount() {
    axios.get("https://lyrically123.herokuapp.com/songs")
      .then(res => {
        // console.log(res);
        this.setState({songs: res.data});})
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
        <h1>Lyrically</h1>
        
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
