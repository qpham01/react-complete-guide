import React, { Component } from "react";
import classes from "../styles/Person.css";
import WithClass from "./WithClass";
// Use functional component as much as possible.
// Only use class component when there's state that can change

// By adding a value property to the input, a 2-way binding
// is set up where the value of the input is set to the name
// and when the input is changed the name also changed with it.
class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[>> Person.js] Inside constructor", props);
  }

  componentWillMount() {
    console.log("[>> Person.js] Inside componentWillMount");
  }

  componentDidMount() {
    console.log("[>> Person.js] Inside componentDidMount");
  }
  render() {
    console.log("[>> Person.js] Inside render");
    return (
      <WithClass classes={classes.Person}>
        <p onClick={this.props.click}>
          Name: {this.props.name}, Age: {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </WithClass>
    );
  }
}
export default Person;
