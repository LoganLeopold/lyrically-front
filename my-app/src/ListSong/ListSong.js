import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import UpdateSong from '../UpdateSong/UpdateSong'
import axios from 'axios'

class ListSong extends Component { 
   

    render() {
        console.log(this.props.songs)
        let songList = this.props.songs.map ( song => {
        
        return (
            <div key={song._id}>
                <h1>{song.title}</h1>
                <h1>{song.artist}</h1>
                <p>{song.lyrics}</p>
             {/* <Route path={`/${song._id}`} render={ (routerProps) => {<UpdateSong delete={this.props.delete} {...routerProps} {...this.state}/>} } /> */}
            </div>
            
        )
        
    })

    console.log(songList)
        return (
        <div>
        <h2>Hello</h2>
        {songList}
        </div>
        )
    }
}

export default ListSong;