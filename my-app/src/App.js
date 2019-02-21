import React, { Component } from "react";
import "./App.css";
import axios from "axios";

// import CreateItem from "./CreateArtist/createArtist";
import { Link, Route, Switch } from "react-router-dom";
// import ListItem from "./ListArtist/ListArtist";
import UpdateSong from "./UpdateSong/UpdateSong";
import ListSong from "./ListSong/ListSong";
import ListArtist from './ListArtist/ListArtist';
import CreateSong from './CreateSong/CreateSong'

class App extends Component {
  constructor() {
  super()
  this.state = {
    songs: [],
    artists: [],
    songLyrics: ''
  };
}

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
      console.log('App mounted')
  }

  handleChange = event => {
    this.setState({
      songLyrics: event.target.value
    });
  };

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
    console.log('App rendered')
    return (
      <div className="App">
        <h1>Lyrically</h1>
        <nav>
          <Link to={'/songs'}>Songs</Link>
          <br></br>
          <Link to={'/artists'}>Artists</Link>
        </nav>        
        <main>
          <Route path="/songs" exact render={routerProps => <ListSong delete={this.delete} {...this.state} {...routerProps} />}/>
          <Route path="/songs/:id" exact render={routerProps => <UpdateSong delete={this.delete} handleChange={this.handleChange} {...routerProps} {...this.state}/>}/>
          <Route path="/songs" exact render={routerProps => <CreateSong delete={this.delete} handleChange={this.handleChange} {...routerProps} {...this.state}/>}/>

          <Route path="/artists" exact render={routerProps => <ListArtist {...this.state} {...routerProps} />}/>
          <Route path="/artists/:id" exact render={routerProps => <UpdateSong delete={this.delete} handleChange={this.handleChange} {...routerProps} {...this.state}/>}/>

        </main>

      </div>
    );
  }
}

export default App;
