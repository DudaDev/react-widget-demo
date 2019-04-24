import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import { themes } from "./service";
import Gallery from "./components/Gallery";
import GalleryList from "./components/GalleryList";
const { string, bool, oneOf } = PropTypes;

class App extends Component {
  static propTypes = {
    theme: oneOf(themes),
    bw: bool,
    userName: string,
    type: oneOf(["list", "gallery"]),
    backToList: string
  };

  static defaultProps = {
    userName: "My",
    theme: "sports",
    type: "list",
    backToList: "Back to list"
  };

  render() {
    return (
      <div className="App">
        <div>
          <h2>{`Welcome to ${this.props.userName}'s galleries`}</h2>
          {this.props.type === "gallery" ? (
            <Gallery theme={this.props.theme} bw={this.props.bw} />
          ) : (
            <GalleryList
              bw={this.props.bw}
              backToList={this.props.backToList}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
