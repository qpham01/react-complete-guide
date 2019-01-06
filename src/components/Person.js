import React from "react";
import classes from "./Person.css";
// Use functional component as much as possible.
// Only use class component when there's state that can change

// By adding a value property to the input, a 2-way binding
// is set up where the value of the input is set to the name
// and when the input is changed the name also changed with it.
const person = props => {
  return (
    <div className={classes.Person} onClick={props.click}>
      <p>
        Name: {props.name}, Age: {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
