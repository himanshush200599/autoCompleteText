import React, { Component } from "react";
import "./App.css";
import countries from "./countries";
import AutoCompleteText from "./AutoCompleteText";
class App extends Component {
  render() {
    return (
      <div>
        <header>
          <AutoCompleteText items={countries} />
        </header>
      </div>
    );
  }
}

export default App;
