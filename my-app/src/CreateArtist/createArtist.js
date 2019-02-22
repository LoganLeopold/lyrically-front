// import React, { Component } from "react";
import axios from 'axios'
import React, { Component } from "react";

class createArtist extends Component {

    // constructor() {
    //     super()
    //     this.state = {
    //         title: '',
    //         lyrics: '',
    //         artist: []
    //     }
    // }

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
      
// import React, { Component } from 'react';
// import { FormControl } from "react-bootstrap"
// import { FormGroup } from "react-bootstrap"
// import { Button } from 'react-bootstrap'
// class CreateArtist extends Component {

//     render() {
//         return (
//             <div className="CreateArtist">
//                 <form>
//                     <FormGroup bsSize="large">
//                         <label>Title</label>
//                         <FormControl type="text" placeholder="Title" />
//                     </FormGroup>
//                     <FormGroup bsSize="large">
//                         <label>Genre</label>
//                         <FormControl type="text" placeholder="Url" />
//                         <p>
//                             <Button className="button" bsStyle="primary">submit</Button>
//                         </p>
//                     </FormGroup>
//                     {/* <FormGroup bsSize="large">
//                         <label>Create your Artist</label>
//                         <FormControl type="text" placeholder="Item or Task" />
//                         <p>
//                             <Button className="button" bsStyle="primary">submit</Button>
//                         </p>
//                     </FormGroup> */}
//                 </form>
//             </div>
//         );
//     }
// }

// export default CreateArtist;

            //credit for this to this article (if it works ;P): https://stackoverflow.com/questions/47630163/axios-post-request-to-send-form-data

    }

  render() {

    return (
      <div> 
        <form  method='POST'>
          <h1>Create a Song</h1>
          <label>Name</label>
          <input type="text" name="Title" value="" />
          <label>Genre</label>
          <input type="text" name="Lyrics" value="" />
          <select name='Artist'>
            {this.props.artists.map(artist => {
              return <option key={artist._id}>{artist.Name}</option>;
            })}
          </select>
          <button onClick={this.handleClick}>Create This Artist</button>
        </form>
      </div>
    );
  }
}

export default createArtist;
