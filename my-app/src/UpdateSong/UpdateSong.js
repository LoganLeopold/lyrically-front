import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './UpdateSong.css'
import axios from "axios";
// import UpdateForm from './UpdateForm'
// import { FormControl } from "react-bootstrap";
// import { FormGroup } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import {Route} from 'react-router-dom'

class UpdateSong extends Component {
  constructor() {
    super();
    this.state = {
      song: [],
      // songLyrics: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({
      songLyrics: event.target.value
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    console.log(event.target.name)
    axios.put(`https://lyrically123.herokuapp.com/songs/${event.target.name}`, {Lyrics: this.props.songLyrics})
    .then (res => {
      console.log(res.data)
    })
    .then (() => {
      return <Redirect to='/songs' />
    })
  };

  render() {
    let thisSong = [];
    this.props.songs.filter(song => {if (song._id === this.props.match.params.id) 
      {thisSong.push(song);console.log(song.lyrics)}
    });

    return (
      <div>
        <h1>Update Song</h1>
        <form className='top' name="update">
          <label>Lyrics:</label>
          <input className="lyricsInput"type="text" defaultValue={this.state.song.Lyrics} onChange={this.props.handleChange}
          />
          <button name={this.state.song._id} onClick={this.handleClick}>Update Lyrics</button>
        </form> 

        <form>
          <button type="submit" name={this.props.match.params.id} onClick={this.props.delete}>Delete</button>
        </form>
      </div>
    );
  }
}

export default UpdateSong;
