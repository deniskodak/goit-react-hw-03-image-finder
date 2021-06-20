import React, { Component } from "react";

import Searchbar from "./components/Searchbar";
const API_KEY = "21310703-eb2542faa873a37e647429bbc";
class App extends Component {
  state = {
    keyword: " ",
    BASE_URL: `https://pixabay.com/api/?q=${this.state.keyword}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  };

  componentDidMount() {
    if (this.state.keyword) {
      fetch(this.state.BASE_URL)
        .then((respose) => respose.json())
        .then((data) => console.log(data));
    }
  }

  handleSubmit = (keyword) => {
    this.state({ keyword: keyword });
  };
  render() {
    return <Searchbar onSubmit={this.handleSubmit} />;
  }
}

export default App;
