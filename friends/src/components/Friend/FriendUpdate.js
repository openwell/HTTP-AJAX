import React, { Component } from "react";
import "./Friend.css";

class friendUpdate extends Component {
  render() {
    return (
      <div className="FriendUpdate">
        <h2>Update Your Friend Details</h2>
        <form action="">
          <label for="">Name</label>
          <input type="text" value="" />
          <label for="">Email</label>
          <input type="email" value="" />
          <label for="">Age</label>
          <input type="number" value="" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default friendUpdate;
