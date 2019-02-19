import React, { Component } from "react";
import "./App.css";
import axios from 'axios'

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
    axios.get("https://lyrically123.herokuapp.com/songs")
        .then((res) => {
            console.log(res)
            this.setState({
                songs: res.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Header
          {/* <h3>  <a href="/">Home</a></h3>
          <Link
            to="/createArtist"
            style={{ textDecoration: "none", color: "lightblue" }}
          >
           <h3 className="new"> Create New Song</h3>
          </Link>
           <h3><Link to="/listArtist"> List </Link></h3> */}
        </header>

        <h1>Song List!</h1>

        <section className="form" />
        <main>
          {/* <Switch> */}
          <Route path='/' render={(routerProps) => <ListSong {...this.state}{...routerProps} />} />
          {/* <Route
              path="/createArtist"
              render={props => (
                <CreateItem
                  {...this.state}
                  {...props}
                  stocks={this.props.stocks}
                />
              )}
            /> */}

          {/* <Route path="/listItems" Component={ListItem} /> */}
          {/* </Switch> */}
        </main>
      </div>
    );
  }
}

export default App;
