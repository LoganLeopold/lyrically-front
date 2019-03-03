import React, { Component } from "react";
import axios from "axios";
import "./ListArtist.css";
import {Link} from 'react-router-dom'

class ListArtist extends Component {
  state = {
    artists: []
  };

  componentDidMount() {
    axios
      .get(
        "https://lyrically123.herokuapp.com/artists")
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
        <div className="songcard" key={artist._id}>
          <div>
            Artist: <h2 className="artistname">{artist.Name}</h2>
            Genre: <h5 className="artistgenre">{artist.Genre}</h5>
          </div>
        </div>
      );
    });
    return (
      <div className="topartist">
        <h1>Artist List</h1>
        <Link to={'/create/artist'}>
          <button>Create Artist</button>
        </Link>
        {artistList}
      </div>
    );
  }
}

export default ListArtist;
