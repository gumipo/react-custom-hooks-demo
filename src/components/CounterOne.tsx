import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

const CounterOne: React.FC = () => {
  const [count, increment, decrement, reset] = useCounter(10, 2);

  return (
    <div>
      <h1> count - {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default CounterOne;
