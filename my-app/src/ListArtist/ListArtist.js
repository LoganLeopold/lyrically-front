import React, { Component } from "react";
import axios from "axios";
import "./ListArtist.css"

class ListArtist extends Component {
  state = {
    artists: []
  };

  componentDidMount() {
    axios
      .get("https://lyrically123.herokuapp.com/artists")
      .then(res => {
        // console.log(res);
        this.setState({
          artists: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let artistList = this.state.artists.map(artist => {
      // console.log(artist);
      return (
        <div key={artist._id}>
          <div>
            Artist: <h2>{artist.Name}</h2>
            Genre: <h5>{artist.Genre}</h5>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h1>Artist List</h1>
        {artistList}
      </div>
    );
  }
}

export default ListArtist;
