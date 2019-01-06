import React from "react";
import Person from "./Person";

const persons = props =>
  props.persons.map((person, index) => {
    return (
      <Person
        {...person}
        key={index}
        click={() => props.clicked(index)}
        changed={event => props.changed(event, index)}
      />
    );
  });

export default persons;
