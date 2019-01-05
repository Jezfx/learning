import React, { useState, useRef, useEffect } from "react";

function StopWatch() {
  const [lapse, setLapse] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  function handleRunClick() {
    if (running) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - lapse;

      intervalRef.current = setInterval(() => {
        setLapse(Date.now() - startTime);
      }, 0);
    }
    setRunning(!running);
  }

  function handleClearClick() {
    clearInterval(intervalRef.current);
    setLapse(0);
    setRunning(false);
  }

  return (
    <>
      <p>{lapse}ms</p>
      <button onClick={handleRunClick}>{running ? "Stop" : "Start"}</button>
      <button onClick={handleClearClick}>clear</button>
    </>
  );
}

export default StopWatch;
