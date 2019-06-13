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
    const data = {
      name: event.currentTarget[0].value.trim(),
      age: event.currentTarget[1].value.trim(),
      email: event.currentTarget[2].value.trim()
    };
    event.currentTarget.reset();
    axios
      .post("http://localhost:5000/friends", data)
      .then(res => {
        console.log(res)
        if (res.status === 201) this.setState({ message: true });
        this.timerHandle = setTimeout(() => {
          this.setState({ message: false });
          this.props.history.push('/')
        }, 2000);
      })
      .catch(error => {
        return error;
      });
    
      

  };
  componentWillUnmount(){                          
    if (this.timerHandle) {                                
        clearTimeout(this.timerHandle);    
        this.timerHandle = 0;                
    }                                        
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
