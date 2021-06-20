import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    value: "",
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value: value });
  };

  render() {
    return (
      <header className="Searchbar">
        <form
          onSubmit={this.props.onSubmit(this.state.value)}
          className="SearchForm"
        >
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
