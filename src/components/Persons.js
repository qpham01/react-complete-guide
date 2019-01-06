import React, { Component } from "react";
import Person from "./Person";

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log("[Persons.js] Inside constructor", props);
    this.lastPersonElement = React.createRef();
  }

  componentWillMount() {
    console.log("[Persons.js] Inside componentWillMount");
  }

  componentDidMount() {
    console.log("[Persons.js] Inside componentDidMount");
    this.lastPersonElement.current.focusInput();
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      "[UPDATE Persons.js] Inside componentsWillReceiveProps",
      nextProps
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[UPDATE Persons.js] Inside shouldComponentUpdate", nextProps);
    const shouldUpdate = this.props.persons !== nextProps.persons;
    console.log(
      "[UPDATE Persons.js] shouldComponentUpdate returns",
      shouldUpdate
    );
    return shouldUpdate;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE Persons.js] Inside componentsWillUpdate",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log(
      "[UPDATE Persons.js] Inside componentsDidUpdate",
      this.props,
      this.state
    );
  }

  render() {
    console.log("[Persons.js] Inside render");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          {...person}
          key={index}
          ref={this.lastPersonElement}
          position={index}
          click={() => this.props.clicked(index)}
          changed={event => this.props.changed(event, index)}
        />
      );
    });
  }
}

export default Persons;
