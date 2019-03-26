import React, { Component } from "react";
import axios from "axios";
import './createArtist.css'

class CreateArtist extends Component {

  constructor() {
    super()
    this.state = {
      Name: '',
      Genre: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
  }
 
  handleNameChange = event => {
    this.setState({
      Name: event.target.value
    });
  };

  handleGenreChange = event => {
    this.setState({
      Genre: event.target.value
    })
  }

  handleClick(event) {
    event.preventDefault();
    axios.post('https://lyrically123.herokuapp.com/create/artist',{
      Name: this.state.Name,
      Genre: this.state.Genre,
    },
    )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(response) {
        console.log(response);
      });

    //https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index helped me realize I don't need a weird format and then I just reverted to the same update state change stuff and got 'er done!
  }

  render() {
    return (
      <div>
        <div>
          <form name="create">
            <h1>Create An Artist</h1>
            <label>Name: </label>
            <input type="text" name="Name" defaultValue=''onChange={this.handleNameChange}/>
            <br></br>
            <label>Genre: </label>
            <input type="text" name="Genre" defaultValue=''onChange={this.handleGenreChange}/>
          </form>
        </div>
        <div className='create-btn'>
          <button onClick={this.handleClick}>Create This Artist</button>
        </div>
      </div>
    );
  }
}

export default CreateArtist;
