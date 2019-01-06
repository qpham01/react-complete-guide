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

    let persons = null;
    if (this.state.showPerson === true) {
      style.backgroundColor = "red";
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                {...person}
                key={index}
                click={() => this.deletePersonHandler(index)}
                changed={event => this.nameChangeHandler(event, index)}
              />
            );
          })}
        </div>
      );
    } else {
      style.backgroundColor = "green";
    }

    /*
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
    */
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi I am a React App</h1>
        <p className={classes.join(" ")}>This is a paragraph</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Show Persons
        </button>
        {persons}
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
