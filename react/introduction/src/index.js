import React from "react";
import ReactDOM from "react-dom";
// import Welcome from "./Welcome";
import Counter from "./Counter";
import Clock from "./Clock";
import TimezoneClock from "./TimezoneClock";
import TimezoneManager from "./TimezoneManager";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <div className="container"> */}
    {/* <Counter step={5} /> */}
    {/* <Counter step={10} />
    <Counter step={25} /> */}
    {/* <Clock /> */}
    <TimezoneManager />
    {/* <TimezoneClock timezone="Europe/London" city="London" />
      <TimezoneClock timezone="America/New_York" city="New York" />
      <TimezoneClock timezone="Europe/Bucharest" city="Cluj" /> */}
    {/* </div> */}
  </React.StrictMode>,
  document.getElementById("root")
);
