import React, { Component } from "react";

class UpdateForm extends Component {
  render() {
    return (
      <div>
        <h1>Update Song</h1>
        <form name="update" onSubmit={this.handleSubmit}>
          <label>Lyrics:</label>
          <input
            className="lyricsInput"
            type="text"
            defaultValue={this.props.thisSong[0].lyrics}
            onChange={this.handleChange}
          />
          <button type="submit">Update Lyrics</button>
        </form>
      </div>
    );
  }
}

export default UpdateForm;
