import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { FormControl } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
import {Route} from 'react-router-dom'
import UpdateForm from './UpdateForm'

class UpdateSong extends Component {
  constructor() {
    super();
    this.state = {
      song: [],
      songLyrics: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    axios
      .get(`https://lyrically123.herokuapp.com/songs/${this.props.match.params.id}`)
      .then(res => {
        console.log(res.data); 
        this.setState({
          song: res.data
        });
        console.log(this.state.song.lyrics)
      })
      .catch(err => {
        console.log(err);
      });
    console.log('UpdateSong mounted')
  }

  handleChange = event => {
    this.setState({
      songLyrics: event.target.value
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    axios.post(`https://lyrically123.herokuapp.com/songs/${this.props.match.params._id}`, {lyrics: this.state.songLyrics})
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
      <div>
        <h1>Update Song</h1>
        <form name="update">
          <label>Lyrics:</label>
          <input
            className="lyricsInput"
            type="text"
            defaultValue={this.state.song.lyrics}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Update Lyrics</button>
        </form> 

        <form>
          <button
            type="submit"
            name={this.props.match.params.id}
            onClick={this.props.delete}
          >
            Delete this Note
          </button>
        </form>
      </div>
    );
  }

  // upDateDidMount
  //     render() {
  //         return (
  //             <div className="UpdateSong">
  //                 <form>
  //                     <FormGroup bsSize="large">
  //                         <label>Song</label>
  //                         <FormControl type="text" placeholder="Song" />
  //                     </FormGroup>
  //                     <FormGroup bsSize="large">
  //                         <label>Title</label>
  //                         <FormControl type="text" placeholder="Title" />
  //                         <FormGroup bsSize="large">
  //                         <label>Lyrics</label>
  //                         <FormControl type="text" placeholder="Lyric" />
  //                         <p>
  //                             <Button className="button" bsStyle="primary">update</Button>
  //                         </p>
  //                     </FormGroup>
  //                     {/* <FormGroup bsSize="large">
  //                         <label>Add to your Artist</label>
  //                         <FormControl type="text" placeholder="Item or Task" />
  //                         */}
  //                     </FormGroup>
  //                 </form>
  //             </div>
  //         );
  //     }
}

export default UpdateSong;
