import React from "react";
import useCounter from "../hooks/useCounter";

const CounterTwo: React.FC = () => {
  const [count, increment, decrement, reset] = useCounter(20, 5);

  return (
    <div>
      <h1> count - {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default CounterTwo;
