import React, { Component } from "react";
import axios from 'axios'

class CreateSong extends Component {

    constructor() {
        super()
        this.state = {
            Title: '',
            Lyrics: '',
            Artist: '',
            allArtists: []
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {

    }

    handleClick(event) {
        event.preventDefault();
        let thisurl = 'https://lyrically123.herokuapp.com/artists/'
        let bodyFormData = {
            Title: event.target.Name,
            Lyrics: event.target.Lyrics,
            Artist: event.target.Artist
        }
        axios({
            method: 'POST',
            url: thisurl,
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

    }

  render() {

    return (
      <div className='newsong'>
        <form name='createSong'>
          <h1>Create a Song</h1>
          <label>Title</label>
          <input type="text" name="Title" defaultValue="" />
          <label>Lyrics</label>
          <input type="text" name="Lyrics" defaultValue="" />
          <label>Artist</label>
          <select name='Artist' defaultValue=''>
            {this.props.artists.map(artist => {
              return <option key={artist._id}>{artist.Name}</option>;
            })}
          </select>
          <button onClick={this.handleClick}>Create This Song</button>
        </form>
      </div>
    );
  }
}

export default CreateSong;
