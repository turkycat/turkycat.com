import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>welcome to turkycat.com</h1>
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}