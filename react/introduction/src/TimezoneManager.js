import React, { Component } from "react";
import TimezoneClock from "./TimezoneClock";

const TIMEZONES_BY_CITY = {
  "New York": "America/New_York",
  London: "Europe/London",
  Amsterdam: "Europe/Amsterdam",
  "Alba Iulia": "Europe/Bucharest",
  Sydney: "Australia/Sydney",
};

class TimezoneManager extends Component {
  constructor(props) {
    super(props);
    this.state = { city: "", timezones: [] };
  }

  onCitySelected = (event) => {
    this.setState({ city: event.target.value });
  };

  addTimezone = () => {
    const city = this.state.city;
    const timezone = TIMEZONES_BY_CITY[`${city}`];

    this.setState({
      timezones: this.state.timezones.concat([{ city, timezone }]),
    });
  };

  render() {
    return (
      <div>
        <select value={this.state.city} onChange={this.onCitySelected}>
          <option value="">Choose city</option>
          <option value="New York">New York</option>
          <option value="London">London</option>
          <option value="Amsterdam">Amsterdam</option>
          <option value="Alba Iulia">Alba Iulia</option>
          <option value="Sydney">Sydney</option>
        </select>

        <button onClick={this.addTimezone}>Add</button>

        <div className="container">
          {this.state.timezones.map((timezone) => {
            return (
              <TimezoneClock
                key={timezone.timezone}
                timezone={timezone.timezone}
                city={timezone.city}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default TimezoneManager;
