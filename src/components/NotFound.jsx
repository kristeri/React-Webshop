import React, { Component } from "react";

class NotFound extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div>
          <h1>
            <strong>404.</strong> Page not found. :(
          </h1>
          <br />
          <h2>
            The requested URL {this.props.location.pathname} was unfortunately
            not found on the server.
          </h2>
          <h5>
            Click
            <a href="/"> here </a>
            to navigate back to front page.
          </h5>
        </div>
      </div>
    );
  }
}

export default NotFound;
