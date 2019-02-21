import React, { Component } from "react";
// import { Link, Route } from "react-router-dom";
import axios from "axios";
import "./ListArtist.css"

class ListArtist extends Component {
  state = {
    artists: []
  };

  componentDidMount() {
    axios
      .get("https://lyrically123.herokuapp.com/artists")
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

  render() {
    let artistList = this.state.artists.map(artist => {
      // console.log(artist);
      return (
        <div className='songcard' key={artist._id}>
          <div>
            Artist: <h2 className='artistname'>{artist.Name}</h2>
            Genre: <h5 className='artistgenre'>{artist.Genre}</h5>
          </div>
        </div>
      );
    });
    return (
      <div className='topartist'>
        <h1>Artist List</h1>
        {artistList}
      </div>
    );
  }
}

// class ListArtist extends Component {
//     state = {
//         ListArtist: []
//     }
//     componentDidMount() {
//         axios.get("https://lyrically123.herokuapp.com/artists/")
//             .then((res) => {
//                 console.log(res)
//                 this.setState({
//                     ListArtist: res.data
//                 })
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }
//     render() {
//         const listArtist = this.state.listArtist.map((listItem, index) => {
//             return (
//                 <div key={index}>
//                     <p>
//                         <Link to={`/listArtist/${listItem._id}`}>{listItem.title}</Link>>
//                 </p>
//                     <Route path={`listArtist/${listItem._id}`}
//                         render={() => {
//                             return (
//                                 <p>{listItem.title}{listItem.url}{listItem.discription}{listItem.completetd}</p>
//                             )
//                         }}
//                     />
//                 </div>
//             )
//         })
//         return (
//             <div>
//                 <h1> Hello From List</h1>
//                 {listArtist}
//             </div>
//         );
//     }
// }

export default ListArtist;
