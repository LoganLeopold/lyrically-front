
import React, { Component } from "react";
import "./App.css";

import CreateItem from "./CreateArtist/createArtist";
import { Link, Route, Switch } from "react-router-dom";
import ListItem from "./ListArtist/ListArtist";
import UpdateSong from './UpdateSong/UpdateSong'

class App extends Component {
  state = {
    title: this.title,
    url: this.url,
    description: this.description
  };

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
                <CreateItem
                  {...this.state}
                  {...props}
                  stocks={this.props.stocks}
                />
              )}
            />

            <Route path="/listItems" Component={ListItem} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;