import React, { Component } from "react";
class AutoCompleteText extends Component {
  constructor(props) {
    super(props);

    this.items = [
      "sharma",
      "himanshu",
      "shukla",
      "mayank",
      "chauhan",
      "manishka"
    ];
    this.state = {
      suggestions: [],
      text: ""
    };
  }
  onTextChanged = e => {
    const text = e.target.value;
    let suggestions = [];
    if (text.length > 0) {
      const regex = new RegExp(`^${text}`, "i");
      suggestions = this.items.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions, text }));
  };

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map(item => (
          <li onClick={() => this.suggestionsSelected(item)}>{item}</li>
        ))}
      </ul>
    );
  }
  suggestionsSelected(value) {
    this.setState(() => ({
      suggestions: [],
      text: value
    }));
  }
  render() {
    return (
      <div className="autocomplete">
        <input
          value={this.state.text}
          onChange={this.onTextChanged}
          type="text"
        />
        {this.renderSuggestions()}
      </div>
    );
  }
}
export default AutoCompleteText;
