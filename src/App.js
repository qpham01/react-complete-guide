import React, { Component } from "react";
import "./App.css";

class App extends Component {
  // Render is the one thing every component has to do... to
  // render HTML to the DOM to visually show the component.
  render() {
    return (
      <div className="App">
        <h1>Hi I am a React App</h1>
        <p>This is a paragraph</p>
      </div>
    );
    // Above JSX code is compiled to JavaScript below.
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hi I'm a React App!!!")
    // );
  }
}

export default App;
