import { useState } from "react";

interface CounterProps {
  name: string;
}

function Counter({ name }: CounterProps) {
  const [count, setCount] = useState(1);

  const handleAddOne = () => setCount((prevCount) => prevCount + 1);
  const handleAddFive = () => setCount((prevCount) => prevCount + 5);

  return (
    <>
      <h2>Counter name: {name}</h2>
      <p>Current count: {count}</p>
      <button onClick={handleAddOne}>+1</button>
      <button onClick={handleAddFive}>+5</button>
    </>
  );
}

export default Counter;
