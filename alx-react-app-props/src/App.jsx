import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>Welcome to the Counter App!</h1>

      {/* Include the Counter component */}
      <Counter />
    </div>
  );
}

export default App;
