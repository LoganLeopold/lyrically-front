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
            <strong>Artist: </strong>{artist.Name}
            <br></br>
            <strong>Genre: </strong>{artist.Genre}
          </div>
        </div>
      );
    });
    return (
      <div className='artistlist'>
        <h1>Artist List</h1>
        {artistList}
        <br></br>
        <Link to={'/create/artist'}>
          <button>Create Artist</button>
        </Link>
      </div>
    );
  }
}

export default ListArtist;
