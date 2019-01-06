import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person";

// Component states should only be changed in a select few components that are containers, like the top-level App component.
// Container contains some part of the application's state.

// If events occurs in functional components, pass in a handler
// from a container to handle the state change from the event.
class App extends Component {
  // state is managed internally
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Jane", age: 26 }
    ]
  };

  onClick = newName => {
    //console.log("Was clicked");
    // Set state merge param object with existing state
    this.setState({ persons: [{ name: newName, age: 35 }] });
    // this.state.persons[[0]].name = "Maximilian";
    // Only two things that causes React to render: state changes or props are set.
  };

  nameChangeHandler = event => {
    console.log(event.target.value);
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Jane", age: 26 }
      ]
    });
  };
  // Render is the one thing every component has to do... to
  // render HTML to the DOM to visually show the component.

  // Note: can pass method as properties to other components
  // to allow them to trigger state changes without them having
  // states.
  render() {
    // Scoped styles can be used to apply styles to only select
    // elements and not a whole component.
    const style = {
      backgroundColor: "green",
      font: "inherit",
      border: "2px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>Hi I am a React App</h1>
        <p>This is a paragraph</p>
        <button style={style} onClick={() => this.onClick("Maximilian")}>
          Switch Name
        </button>
        <Person {...this.state.persons[0]} changed={this.nameChangeHandler} />
        <Person {...this.state.persons[1]} changed={this.nameChangeHandler}>
          {" "}
          My Hobbies: Racing
        </Person>
        <Person
          {...this.state.persons[2]}
          changed={this.nameChangeHandler}
          click={this.onClick.bind(this, "Max!")}
        />
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
