import React, { useState, useEffect } from "react";

function useCounter({ initialState, step }) {
  const [count, setCount] = useState(initialState);
  const incrementCount = () => setCount(count + step);
  return { count, incrementCount };
}

function Counter() {
  // lazy initialisation
  const initialState = () =>
    Number(window.localStorage.getItem("counter")) || 0;

  const { count, incrementCount } = useCounter({ initialState, step: 3 });

  useEffect(
    () => {
      window.localStorage.setItem("counter", count);
    },
    [count]
  );

  return (
    <div className="container">
      <button className="button" onClick={incrementCount}>
        {count}
      </button>
    </div>
  );
}

export default Counter;
