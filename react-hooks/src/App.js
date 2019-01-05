import React, { useState } from "react";
import "./App.css";

function useCounter({ initialState, step }) {
  const [count, setCount] = useState(initialState);
  const incrementCount = () => setCount(count + step);
  return { count, incrementCount };
}

function App() {
  const { count, incrementCount } = useCounter({ initialState: 5, step: 3 });
  return (
    <div className="container">
      <button className="button" onClick={incrementCount}>
        {count}
      </button>
    </div>
  );
}

export default App;
