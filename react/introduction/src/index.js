import React from "react";
import ReactDOM from "react-dom";
// import Welcome from "./Welcome";
import Counter from "./Counter";
import Clock from "./Clock";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Counter step={5} />
    <Counter step={10} />
    <Counter step={25} />
    <Clock />
  </React.StrictMode>,
  document.getElementById("root")
);
