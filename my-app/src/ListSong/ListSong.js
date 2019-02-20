import React, { Component } from 'react';
import axios from 'axios'

class ListSong extends Component {
    

    // constructor() {
    //     super() 
    //     this.state = {
    //         ListArtist: []
    //     }
    // }

    // componentDidMount() {
    //     axios.get("https://lyrically123.herokuapp.com/songs")
    //         .then((res) => {
    //             console.log(res)
    //             this.setState({
    //                 ListArtist: res.data
    //             })
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

    render() {
        console.log(this.props.songs)
        let songList = this.props.songs.map ( song => {
        
        return (
            <div key={song._id}>
                <h1>{song.title}</h1>
                <h1>{song.artist}</h1>
                <p>{song.lyrics}</p>
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