
import React, { Component } from "react";
import "./App.css";

import CreateArtist from "./CreateArtist/createArtist";
import { Link, Route, Switch } from "react-router-dom";
import ListArtist from "./ListArtist/ListArtist";
//import UpdateSong from './UpdateSong/UpdateSong'


class App extends Component {
  constructor(){
    super()
  this.state = {
    songs: this.songs,
    Artist: this.Artist
  
  }
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h3>  <a href="/">Home</a></h3>
          <Link
            to="/createArtist"
            style={{ textDecoration: "none", color: "lightblue" }}
          >
           <h3 className="new"> Create New Song</h3>
          </Link>
           <h3><Link to="/listArtist"> List </Link></h3>
        </header>

        <h1>Song List!</h1>

        <section className="form" />
        <main>
          <Switch>
            <Route
              path="/createArtist"
              render={props => (
                <CreateArtist
                  {...this.state}
                  {...props}
                  songs={this.props.songs}
                />
              )}
            />

            <Route path="/listArtist" Component={ListArtist} />
            
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;