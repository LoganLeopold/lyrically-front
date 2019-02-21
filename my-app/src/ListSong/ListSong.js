import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import './ListSong.css'
import UpdateSong from "../UpdateSong/UpdateSong";

class ListSong extends Component {
  render() {
    let songList = this.props.songs.map(song => {
      // console.log(song);
      return (
        <div key={song._id}>
          <div>
            <h1>{song.title}</h1>
            <h1>{song.artist}</h1>
            <p>{song.lyrics}</p>
            <Link to={`/songs/${song._id}`}>
              <button>Change Lyrics</button>
            </Link>
          </div>
        </div>
      );
    });
    return (
      <div>
          <h1>Song List</h1>
        {songList}
      </div>
    );
  }
}

export default ListSong;
