import React from "react";
import Radium from "radium";
import "./Person.css";
// Use functional component as much as possible.
// Only use class component when there's state that can change

// By adding a value property to the input, a 2-way binding
// is set up where the value of the input is set to the name
// and when the input is changed the name also changed with it.
const person = props => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px"
    }
  };
  return (
    <div className="Person" style={style} onClick={props.click}>
      <p>
        Name: {props.name}, Age: {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
