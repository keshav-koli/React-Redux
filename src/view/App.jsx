import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";

const App = () => {
  let dispatch = useDispatch();
   let counterValue = useSelector((state) => {
    // console.log("I am useSelector() Hook");
    return state.counter;
  });
  console.log(counterValue);

  let counter2Value = useSelector((state) => {
    // console.log("I am useSelector() Hook");
    return state.counter2;
  });
  // console.log(counter2Value);
  return (
    <>
    {/*
      <h1>React Redux</h1>
      <p>Official React binding for Redux</p>
      <h2>Counter : {counterValue}</h2>
      <button onClick={() => dispatch({ type: "INCREMENTCOUNTER1BY1" })} className="border">Increment by 1</button>
      <button onClick={() => dispatch({ type: "INCREMENTCOUNTER1BY5" })}>Increment by 5</button>
      <button onClick={() => dispatch({ type: "INCREMENTCOUNTER1BY10" })}>Increment by 10</button>
      <button onClick={() => dispatch({ type: "RESETCOUNTER1" })}>RESET</button>
      <button onClick={() => dispatch({ type: "DECREMENTCOUNTER1BY1" })}>Decrement by 1</button>
      <button onClick={() => dispatch({ type: "DECREMENTCOUNTER1BY5" })}>Decrement by 5</button>
      <button onClick={() => dispatch({ type: "DECREMENTCOUNTER1BY10" })}>Decrement by 10</button>

      <h2>Counter 2 :{counter2Value}</h2>
      <button onClick={() => dispatch({ type: "INCREMENTCOUNTER2BY1" })}>Increment by 1</button>
      <button onClick={() => dispatch({ type: "INCREMENTCOUNTER2BY5" })}>Increment by 5</button>
      <button onClick={() => dispatch({ type: "INCREMENTCOUNTER2BY10" })}>Increment by 10</button>
      <button onClick={() => dispatch({ type: "RESETCOUNTER2" })}>RESET</button>
      <button onClick={() => dispatch({ type: "DECREMENTCOUNTER2BY1" })}>Decrement by 1</button>
      <button onClick={() => dispatch({ type: "DECREMENTCOUNTER2BY5" })}>Decrement by 5</button>
      <button onClick={() => dispatch({ type: "DECREMENTCOUNTER2BY10" })}>Decrement by 10</button>
      */}
      <Form />
      </>
    );
    
};

export default App;
