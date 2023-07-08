import React from "react"

function FunctionGreetingWithProps(props) {

  return <h1>Hello, {props.name}! I see you are {props.age} years old; {props.greeting}</h1>;
}

export default FunctionGreetingWithProps;