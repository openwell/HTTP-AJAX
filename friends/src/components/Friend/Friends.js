import React, { Component } from "react";
import axios from "axios";
import Friend from "./Friend";
import uuid from "uuid/v1";
class App extends Component {
  state = {
    friends: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(data => this.setState({ friends: data.data }));
  }
  render() {
    return (
      <div>
        {this.state.friends.map(elem => (
          <Friend key={uuid()} data={elem} />
        ))}
      </div>
    );
  }
}

export default App;
