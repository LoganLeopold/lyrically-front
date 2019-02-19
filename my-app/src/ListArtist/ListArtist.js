import React, { Component } from 'react';
import {Link, Route} from "react-router-dom"
import axios from "axios"


class ListArtist extends Component {
    state = {
        ListArtist: []
    }
    componentDidMount() {
        axios.get("https://lyrically123.herokuapp.com/artists/")
            .then((res) => {
                console.log(res)
                this.setState({
                    ListArtist: res.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        const listArtist = this.state.listArtist.map((listArtist, index) => {
            return (
                <div key={index}>
                    <p>
                        <Link to={`/listArtist/${listArtist._id}`}>{listArtist.title}</Link>>
                </p>
                    <Route path={`listArtist/${listArtist._id}`}
                        render={() => {
                            return (
                                <p>{listArtist.title}{listArtist.url}{listArtist.discription}{listArtist.completetd}</p>
                            )
                        }}
                    />
                </div>
            )
        })
        return (
            <div>
                <h1> List</h1>
                {listArtist}
            </div>
        );
    }
}

export default ListArtist;