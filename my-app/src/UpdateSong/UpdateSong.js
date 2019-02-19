import React, { Component } from 'react';
import { FormControl } from "react-bootstrap"
import { FormGroup } from "react-bootstrap"
import { Button } from 'react-bootstrap'
class UpdateSong extends Component {

    render() {
        return (
            <div className="UpdateSong">
                <form>
                    <FormGroup bsSize="large">
                        <label>Song</label>
                        <FormControl type="text" placeholder="Song" />
                    </FormGroup>
                    <FormGroup bsSize="large">
                        <label>Title</label>
                        <FormControl type="text" placeholder="Title" />
                        <FormGroup bsSize="large">
                        <label>Lyrics</label>
                        <FormControl type="text" placeholder="Lyric" />
                        <p>
                            <Button className="button" bsStyle="primary">update</Button>
                        </p>
                    </FormGroup>
                    {/* <FormGroup bsSize="large">
                        <label>Add to your Artist</label>
                        <FormControl type="text" placeholder="Item or Task" />
                        */}
                    </FormGroup>
                </form>
            </div>
        );
    }
}

export default UpdateSong;
