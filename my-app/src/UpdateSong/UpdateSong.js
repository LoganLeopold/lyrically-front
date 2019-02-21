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
      songLyrics: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this)
  }

  // componentDidMount() {

  //   this.props.songs.filter(song => {
  //     if (song._id === this.props.match.params.id) {
  //       this.setState({
  //         song: song
  //       })
  //     }
  //   });
  // }

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

    this.props.songs.filter(song => {
      if (song._id === this.props.match.params.id) {
        thisSong.push(song);
        console.log(song.lyrics)
      }
    });

    return (
      <div>
        <UpdateForm thisSong={thisSong} {...this.props} {...this.state} />

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
