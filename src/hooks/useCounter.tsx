import { useState } from "react";

const useCounter = (
  initialCount: number = 0,
  value: number
): [number, () => void, () => void, () => void] => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevState) => prevState + value);
  };

  const decrement = () => {
    setCount((prevState) => prevState - value);
  };

  const reset = () => {
    setCount(initialCount);
  };
  return [count, increment, decrement, reset];
};

export default useCounter;
