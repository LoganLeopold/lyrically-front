import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import UpdateSong from '../UpdateSong/UpdateSong'

class ListSong extends Component { 


    render() {
        let songList = this.props.songs.map ( song => {
        
        return (
            <div key={song._id}>
                <h1>{song.title}</h1>
                <h1>{song.artist}</h1>
                <p>{song.lyrics}</p>
                <Link to={`/${song._id}`}>
                <button>Change Lyrics</button>
                </Link> 
                <Route path={`/:id`} exact render={ (routerProps) => <UpdateSong delete={this.props.delete} {...routerProps} {...this.state}/>} />
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