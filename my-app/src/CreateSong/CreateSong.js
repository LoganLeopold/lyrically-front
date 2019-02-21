import React, { Component } from 'react';

class CreateSong extends Component {
    render() {

        let artistDropdowns = this.props.artists.map( (artist) => {
            return <input>{artist.Name}</input>
        })

        return (
            <div>
                <form>
                    <h1>Create a Song</h1>
                    <label>Name</label>
                    <input type='text' name='Name' value=''></input>
                    <label>Genre</label>
                    <input type='text' name='Genre' value=''></input>
                    <select>
                        {artistDropdowns}
                    </select>
                    <button >Create This Song</button>
                </form>
            </div>
        );
    }
}

export default CreateSong;