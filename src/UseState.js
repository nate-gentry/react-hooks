import React, { useState } from "react";
import UseEffect from "./UseEffect";
// USESTATE
function UseState() {
  const [state, setState] = useState({ count: 4, color: "red" });

  const count = state.count;
  const color = state.color;

  function decrementCount() {
    //need to use previous value not juts count-1
    // setState((prevCount) => prevCount - 1); simple updated mot obj value changed
    setState((prevState) => {
      //we need to spred out your prev state ...prevState,
      return { ...prevState, count: prevState.count - 1 };
    });
  }
 
  function incrementCount() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  }

  return (
    <div>
      <button onClick={incrementCount}>+</button>
      <span>{count}</span>
      <span>{color}</span>
      <button onClick={decrementCount}>-</button>

    </div>
  );
}

export default UseState;
