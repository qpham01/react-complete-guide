import React, { Component } from "react";
// Can now import an object that contains CSS classes as properties
import classes from "./App.css";
import Persons from "../components/Persons";
import Cockpit from "../components/Cockpit";

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
    ],
    otherState: "some other value",
    showPerson: false
  };

  onClick = newName => {
    //console.log("Was clicked");
    // Set state merge param object with existing state
    this.setState({ persons: [{ name: newName, age: 35 }] });
    // this.state.persons[[0]].name = "Maximilian";
    // Only two things that causes React to render: state changes or props are set.
  };

  nameChangeHandler = (event, index) => {
    // Copy person at index to not change current state.
    const person = { ...this.state.persons[index] };
    person.name = event.target.value;

    // Copy persons array to not change current state.
    const persons = [...this.state.persons];
    persons[index] = person;
    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    // Fully copy state before splicing it so that original state is immutable.
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
// Render is the one thing every component has to do... to
// render HTML to the DOM to visually show the component.

// Note: can pass method as properties to other components
// to allow them to trigger state changes without them having
// states.
// To use advanced styles like media queries in .css files,
// classes.App is now the unique classname generated per configuration
// in webpack.config.js.

// Above JSX code is compiled to JavaScript below.
// return React.createElement(
//   "div",
//   { className: "App" },
//   React.createElement("h1", null, "Hi I'm a React App!!!")
// );
