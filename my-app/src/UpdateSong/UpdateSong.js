import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import UpdateForm from './UpdateForm'

class UpdateSong extends Component {
  constructor() {
    super();
    this.state = {
      songLyrics: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({
      songLyrics: event.target.value
    });
  };

  handleSubmit = (event) => {
    console.log(this.props.params.match.id);
    event.preventDefault();
    // axios.post(`https://lyrically123.herokuapp.com/songs/${this.props.params.match._id}`, {lyrics: this.state.songLyrics})
    // .then (res => {
    //   console.log(res.data)
    // })
    // .then (() => {
    //   return <Redirect to='/songs' />
    // })
  };

  render() {
    let thisSong = [];
    this.props.songs.filter(song => {if (song._id === this.props.match.params.id) 
      {thisSong.push(song);console.log(song.lyrics)}
    });

    return (
      <div>
        <UpdateForm thisSong={thisSong} {...this.props} {...this.state} />

        <form>
          <button type="submit" name={this.props.match.params.id} onClick={this.props.delete}>Delete</button>
        </form>
      </div>
    );
  }
}

export default UpdateSong;
