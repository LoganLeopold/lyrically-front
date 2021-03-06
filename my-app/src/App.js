import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Link, Route} from "react-router-dom";
import UpdateSong from "./UpdateSong/UpdateSong";
import ListSong from "./ListSong/ListSong";
import ListArtist from './ListArtist/ListArtist';
import CreateArtist from'./CreateArtist/CreateArtist.js'
// import CreateSong from './CreateSong/CreateSong'

class App extends Component {
  state = {
    songs: [],
    artists: [],
    songLyrics: ''
  };

  componentDidMount() {
    axios.get(
      "https://lyrically123.herokuapp.com/songs"
      )
      .then(res => {
        // console.log(res);
        this.setState({songs: res.data});})
      .catch(err => {
        console.log(err);
      });
      
      axios
      .get(
        "https://lyrically123.herokuapp.com/artists"
        // 'https://localhost:3000/artists'
        )
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

  delete(event) {
    event.preventDefault();
    console.log(event.target.name);
    axios
      .delete(
        `https://lyrically123.herokuapp.com/songs/${event.target.name}`)
      .then((res) => {
        console.log(res.data);
        console.log('Song deleted');
      });
  }

  handleChange = event => {
    this.setState({
      songLyrics: event.target.value
    });
  };


  render() {
    return (
      <div className="App">

        <nav className='navitems'>
         <h1> <Link className='homepage' to='/'>Lyrically</Link></h1>
          <h2> <Link to={'/songs/'}>Songs</Link></h2> 
          <h2> <Link to={'/artists/'}>Artists</Link></h2>
          {/* <h2> <Link to={'create/song'}>Create New Song</Link></h2> */}
          <h2><Link to={'/create/artist'}>Create New Artist</Link></h2>
        </nav>

        <main className='mainbody'>
        <Route path="/songs" exact render={routerProps => <ListSong delete={this.delete} {...this.state} {...routerProps} />}/>
        <Route path="/songs/:id" exact render={routerProps => <UpdateSong delete={this.delete} handleChange={this.handleChange} {...routerProps} {...this.state}/>}/>
        {/* <Route path='/create/song' exact render={() => <CreateSong />} /> */}

        <Route path="/artists" exact render={routerProps => <ListArtist {...this.state} {...routerProps} />}/>
        <Route path='/create/artist' exact render={(routerProps) => <CreateArtist {...routerProps}{...this.state}/>} />
        </main>
      
      </div>
      
    );
  }
}

export default App;
