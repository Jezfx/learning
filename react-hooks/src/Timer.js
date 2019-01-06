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

  return { handleRunClick, handleClearClick, lapse, running };
}

function Timer() {
  const stopWatchOne = StopWatch();
  const stopWatchTwo = StopWatch();

  return (
    <>
      <p>{stopWatchOne.lapse}ms</p>
      <button onClick={stopWatchOne.handleRunClick}>
        {stopWatchOne.running ? "Stop" : "Start"}
      </button>
      <button onClick={stopWatchOne.handleClearClick}>clear</button>
      <hr />
      <strong>Time lapse difference:</strong>
      {stopWatchOne.lapse - stopWatchTwo.lapse}ms
      <hr />
      <p>{stopWatchTwo.lapse}ms</p>
      <button onClick={stopWatchTwo.handleRunClick}>
        {stopWatchTwo.running ? "Stop" : "Start"}
      </button>
      <button onClick={stopWatchTwo.handleClearClick}>clear</button>
    </>
  );
}

export default Timer;
