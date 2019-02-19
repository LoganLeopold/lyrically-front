import React, { Component } from 'react';
import { FormControl } from "react-bootstrap"
import { FormGroup } from "react-bootstrap"
import { Button } from 'react-bootstrap'
class CreateArtist extends Component {

    render() {
        return (
            <div className="CreateArtist">
                <form>
                    <FormGroup bsSize="large">
                        <label>Title</label>
                        <FormControl type="text" placeholder="Title" />
                    </FormGroup>
                    <FormGroup bsSize="large">
                        <label>Genre</label>
                        <FormControl type="text" placeholder="Genre" />
                        <p>
                            <Button className="button" bsStyle="primary">submit</Button>
                        </p>
                    </FormGroup>
                    {/* <FormGroup bsSize="large">
                        <label>Create your Artist</label>
                        <FormControl type="text" placeholder="Item or Task" />
                        <p>
                            <Button className="button" bsStyle="primary">submit</Button>
                        </p>
                    </FormGroup> */}
                </form>
            </div>
        );
    }
}

export default CreateArtist;
