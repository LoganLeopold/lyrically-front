import React, { Component } from 'react';
import { FormControl } from "react-bootstrap"
import { FormGroup } from "react-bootstrap"
import { Button } from 'react-bootstrap'
import axios from 'axios'

class UpdateSong extends Component {
    // constructor(){
    //     super()
    //     this.state={
    //         songs:'',
    //         artists:''
    //     }
    // }

    
    handleSubmit = event => {
        // this.setState({ id: event.target.value });
        
      }
    
      render() {
        return (
          
          <div>
            <h1>Update Song</h1>
            <form name='update' onSubmit={this.handleSubmit}>
              <label>
                Person ID:
              </label>
              <input type="text" name="id" onChange={this.handleChange} />
              <button type="submit">Delete</button>
            </form>

            <form>
            <button type='submit' name={this.props.match.params.id} onClick={this.props.delete}>Delete this Note</button>
            </form>

          </div>
        )
      }
    
// upDateDidMount
//     render() {
//         return (
//             <div className="UpdateSong">
//                 <form>
//                     <FormGroup bsSize="large">
//                         <label>Song</label>
//                         <FormControl type="text" placeholder="Song" />
//                     </FormGroup>
//                     <FormGroup bsSize="large">
//                         <label>Title</label>
//                         <FormControl type="text" placeholder="Title" />
//                         <FormGroup bsSize="large">
//                         <label>Lyrics</label>
//                         <FormControl type="text" placeholder="Lyric" />
//                         <p>
//                             <Button className="button" bsStyle="primary">update</Button>
//                         </p>
//                     </FormGroup>
//                     {/* <FormGroup bsSize="large">
//                         <label>Add to your Artist</label>
//                         <FormControl type="text" placeholder="Item or Task" />
//                         */}
//                     </FormGroup>
//                 </form>
//             </div>
//         );
//     }
}

export default UpdateSong;
