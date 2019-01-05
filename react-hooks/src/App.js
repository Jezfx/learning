import React, { useState, useEffect } from "react";
import "./App.css";

function useCounter({ initialState, step }) {
  const [count, setCount] = useState(initialState);
  const incrementCount = () => setCount(count + step);
  return { count, incrementCount };
}

function App() {
  // lazy initialisation
  const initialState = () =>
    Number(window.localStorage.getItem("counter")) || 0;

  const { count, incrementCount } = useCounter({ initialState, step: 3 });

  useEffect(() => {
    window.localStorage.setItem("counter", count);
  });

  return (
    <div className="container">
      <button className="button" onClick={incrementCount}>
        {count}
      </button>
    </div>
  );
}

export default App;
