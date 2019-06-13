import React, { Component } from "react";
import "./Friend.css";
import axios from "axios";

class friendUpdate extends Component {
  state = {
    friend: {},
    message: false,
  };
  componentDidMount() {
    const query = new URLSearchParams(this.props.history.location.search);
    const data = {};
    // for (let elem of query.entries()) {
    //   data[elem[0]] = elem[1];
    // }
    query.forEach(function(value, key) {
        data[key] = value;
      });
    this.setState({ friend: data });
  }

  editHandle  = event => {
    event.preventDefault();
    event.target.reset();
    const data = {
      name: event.currentTarget[0].value.trim(),
      age: event.currentTarget[1].value.trim(),
      email: event.currentTarget[2].value.trim()
    };
    axios
    .put(`http://localhost:5000/friends/${this.props.match.params.id}`, data)
      .then(res => {
        if (res.status === 200) this.setState({ message: true });
        setTimeout(() => {
          this.setState({ message: false });
        }, 2000);
      })

      .catch(error => {
        return error;
      });
  };
  render() {
      const {name, age, email} = this.state.friend
    return (
      <div className="FriendUpdate">
          <small style={{color: 'green'}}>{this.state.message ? "Friend Updated Successfully" : ""}</small>
        <h2>Update Your Friend Details</h2>
        <form action="" onSubmit={this.editHandle}>
          <label htmlFor="">Name</label>
          <input type="text" defaultValue={name}/>
          <label htmlFor="">Email</label>
          <input type="email" defaultValue={email}/>
          <label htmlFor="">Age</label>
          <input type="number" defaultValue={age}/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default friendUpdate;
