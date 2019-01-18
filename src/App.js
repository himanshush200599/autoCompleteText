import React, { Component } from "react";
import "./App.css";
import AutoCompleteText from "./AutoCompleteText";
class App extends Component {
  render() {
    return (
      <div>
        <header>
          <AutoCompleteText />
        </header>
      </div>
    );
  }
}

export default App;
