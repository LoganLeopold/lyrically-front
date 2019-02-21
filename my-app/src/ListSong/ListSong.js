import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import './ListSong.css'
import UpdateSong from "../UpdateSong/UpdateSong";

class ListSong extends Component {
  render() {
    let songList = this.props.songs.map(song => {
      // console.log(song);
      return (
        <div className='songcard' key={song._id}>
          <div>

            <h1>{song.Title}</h1>
            <h1>{song.Artist}</h1>
            <p>{song.Lyrics}</p>
        
            <Link to={`/songs/${song._id}`}>
              <button>Change Lyrics</button>
            </Link>
          </div>
        </div>
      );
    });
    return (
      <div className='toplist'>
          <h1>Song List</h1>
        {songList}
      </div>
    );
  }
}

export default ListSong;
