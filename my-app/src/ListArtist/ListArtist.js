import React, { Component } from 'react';
import {Link, Route} from "react-router-dom"
import axios from "axios"


class ListArtist extends Component {
    sate = {
        ListArtist: []
    }
    componentDidMount() {
        axios.get("http://localhost:3000/api/listArtist/")
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
        const listArtist = this.state.listArtist.map((listItem, index) => {
            return (
                <div key={index}>
                    <p>
                        <Link to={`/listArtist/${listItem._id}`}>{listItem.title}</Link>>
                </p>
                    <Route path={`listArtist/${listItem._id}`}
                        render={() => {
                            return (
                                <p>{listItem.title}{listItem.url}{listItem.discription}{listItem.completetd}</p>
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