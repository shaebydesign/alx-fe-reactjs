import { useState } from 'react';

// Functional component for the counter
function Counter() {
  // Initialize count state with useState hook
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Simple Counter Application</h2>
      <p style={{ fontSize: '24px' }}>Current Count: {count}</p>

      {/* Buttons to control the counter */}
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
      >
        Increment
      </button>

      <button 
        onClick={() => setCount(count - 1)} 
        style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
      >
        Decrement
      </button>

      <button 
        onClick={() => setCount(0)} 
        style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
