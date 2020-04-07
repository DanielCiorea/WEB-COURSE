import React from "react";

const Welcome = (props) => {
  return (
    <h1>
      Welcome {props.name}, you are {props.age} years old.
    </h1>
  );
};

export default Welcome;
