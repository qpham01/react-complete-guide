import React, { PureComponent } from "react";
// Can now import an object that contains CSS classes as properties
import classes from "../styles/App.css";
import Persons from "../components/Persons";
import Cockpit from "../components/Cockpit";
import Wrapper from "../components/Wrapper";
import wrapClass from "../util/wrapClass";

// Component states should only be changed in a select few components that are containers, like the top-level App component.
// Container contains some part of the application's state.

// If events occurs in functional components, pass in a handler
// from a container to handle the state change from the event.

// PureComponent will to shallow state comparison to determine whether component
// should update.
class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[App.js] Inside constructor", props);
    // state is managed internally
    this.state = {
      persons: [
        { name: "Max", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Jane", age: 26 }
      ],
      otherState: "some other value",
      showPerson: false,
      toggleClickCounter: 0
    };
  }

  componentWillMount() {
    console.log("[App.js] Inside componentWillMount");
  }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount");
  }

  // Remove to use PureComponent base class
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[UPDATE App.js] Inside shouldComponentUpdate", nextProps);
  //   return (
  //     nextState.persons !== this.state.persons ||
  //     nextState.showPerson !== this.state.showPerson
  //   );
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE App.js] Inside componentsWillUpdate",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log(
      "[UPDATE App.js] Inside componentsDidUpdate",
      this.props,
      this.state
    );
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "[UPDATE App.js] Inside getDerivedStateFromProps",
      nextProps,
      prevState
    );
    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log("[UPDATE App.js] Inside getSnapshotBeforeUpdate");
    return null;
  }

  // // state is managed internally
  // state = {
  //   persons: [
  //     { name: "Max", age: 28 },
  //     { name: "Manu", age: 29 },
  //     { name: "Jane", age: 26 }
  //   ],
  //   otherState: "some other value",
  //   showPerson: false
  // };

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
    // Set state is async call so capture prevState in an anonymous
    // call so that it can't be changed during state setting.
    this.setState((prevState, props) => {
      return {
        showPerson: !doesShow,
        toggleClickCounter: prevState.toggleClickCounter + 1
      };
    });
  };

  render() {
    console.log("[App.js] Inside render");
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
      <Wrapper>
        <button
          onClick={() => {
            this.setState({ showPerson: true });
          }}
        >
          Show Persons{" "}
        </button>
        <Cockpit
          appTitle={this.props.title}
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </Wrapper>
    );
  }
}

export default wrapClass(App, classes.App);
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

// Change state only in a very few container components like App.js.
// All other components should be functional components that don't
// manage states.

// Stateful components:           Stateless components:
// --------------------------------------------------------------------
// class extends Component        const XY = props => {...}
// - Can access state and props   - Cannot access state
//   via this.state & this.props  - Can access props function parameter
// - Have lifecycle hooks         - Don't have lifecycle hooks
//   (e.g. compenentDidMount)
// - Use only if need to manage   - Use in all other cases.
//   state or use lifecycle hooks
