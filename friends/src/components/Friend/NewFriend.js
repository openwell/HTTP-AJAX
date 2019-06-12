import React, { Component } from "react";
import "./Friend.css";
import axios from "axios";

class newFriend extends Component {
  state = {
    message: false,
    error: false
  };
  newFriendHandler = event => {
    event.preventDefault();
    event.target.reset();
    const data = {
      name: event.currentTarget[0].value.trim(),
      age: event.currentTarget[1].value.trim(),
      email: event.currentTarget[2].value.trim()
    };
    axios
      .post("http://localhost:5000/friends", data)
      .then(res => {
        if (res.status === 201) this.setState({ message: true });
        setTimeout(() => {
          this.setState({ message: false });
        }, 2000);
      })
      .catch(error => {
        return error;
      });
  };
  render() {
    return (
      <div className="NewFriend">
        <h2>ADD A NEW FRIEND</h2>
        <small style={{ color: "green" }}>
          {this.state.message ? "Friend Add Successfully" : ""}
        </small>
        <form action="" onSubmit={this.newFriendHandler}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
          <label htmlFor="age">Age</label>
          <input type="number" name="age" required />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default newFriend;
