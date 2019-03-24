import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
// import {Route} from 'react-router-dom'
import './UpdateSong.css'


class UpdateSong extends Component {
  constructor() {
    super();
    this.state = {
      song: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    axios
      .get(
        `https://lyrically123.herokuapp.com/songs/${this.props.match.params.id}`
        )
      .then(res => {
        console.log(res.data); 
        this.setState({
          song: res.data
        });
        console.log(this.state.song._id)
      })
      .catch(err => {
        console.log(err);
      });
    console.log('UpdateSong mounted')
  }

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

    console.log('UpdateSong rendered')

    return (
      <div className='up'>
        <h1>Update Song</h1>
        <form className='top' name="update">
          <label>Lyrics:</label>
          <input
            className="lyricsInput"
            type="text"
            defaultValue={this.state.song.Lyrics}
            onChange={this.props.handleChange}
          />
          <button name={this.state.song._id} onClick={this.handleClick}>Update Lyrics</button>
        </form> 

        <form>
          <button
            type="submit"
            onClick={this.props.delete}
          >
            Delete this Note
          </button>
        </form>
      </div>
    );
  }

}

export default UpdateSong;


