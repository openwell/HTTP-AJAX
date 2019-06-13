import React, { Component } from "react";
import axios from "axios";
import Friend from "./Friend";
import "./Friend.css";
import uuid from "uuid/v1";
class Friends extends Component {
  state = {
    friends: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(data => this.setState({ friends: data.data }));
  }
  newPageHandler = (path) => {
    let details = this.state.friends.filter(elem => elem.id === path);
    this.props.history.location.search = details[0];
    const queryString = [];
    for (let i in details[0]) {
      queryString.push(
        encodeURIComponent(i) + "=" + encodeURIComponent(details[0][i])
      );
    }
    let queryParams = queryString.join("&");
    this.props.history.push({
      pathname: "/" + path,
      search: "?" + queryParams
    });
  };
  deletePostHandler = (event, id) => {
    event.stopPropagation();
    axios
      .delete("http://localhost:5000/friends/" + id)
      .then(data => this.setState({ friends: data.data }));
  };
  render() {
    return (
      <div className='FriendsWrapper'>
        {this.state.friends.map(elem => (
          <Friend
            key={uuid()}
            data={elem}
            newPage={this.newPageHandler}
            deletePostHandler={this.deletePostHandler}
          />
        ))}
      </div>
    );
  }
}

export default Friends;
