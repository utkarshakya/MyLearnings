import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../Global/counterSlice";

function Counter() {
  const value = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <>
      <h1>Number: {value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
}

export default Counter;
