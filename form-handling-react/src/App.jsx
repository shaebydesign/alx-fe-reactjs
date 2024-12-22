import React, { useState } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>Simple Counter</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count is {count}
      </button>
      <button onClick={() => setCount(0)}>Reset Count</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to Vite + React</h1>
      </header>
      <main>
        <p>This is a simple React app created with Vite.</p>
        <Counter />
      </main>
      <footer>
        <p className="read-the-docs">
          Edit <code>src/App.jsx</code> to customize your app.
        </p>
      </footer>
    </div>
  );
}

export default App;
