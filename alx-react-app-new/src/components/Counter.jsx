import { useState } from 'react';

function Counter() {
  // Initialize state with 0
  const [count, setCount] = useState(0);

  // Increment count
  const increment = () => setCount(count + 1);

  // Decrement count
  const decrement = () => setCount(count - 1);

  // Reset count to 0
  const reset = () => setCount(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
