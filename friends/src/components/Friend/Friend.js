import React from "react";
import "./Friend.css";

const Friend = props => {
  return (
    <div
      className="Friend"
      onClick={() => props.newPage(props.data.id)}
    >
      <span
        className="close"
        onClick={event => props.deletePostHandler(event, props.data.id)}
      >
        X
      </span>
      <p>Name: {props.data.name}</p>
      <p>Age: {props.data.age}</p>
      <p>Email: {props.data.email}</p>
    </div>
  );
};

export default Friend;
