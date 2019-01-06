import React, { useState } from "react";

const Upper = React.memo(function Upper({ children }) {
  const [count, setCount] = useState(0);
  console.log("rendering", children);

  return (
    <div>
      Uppercase version: {children.toUpperCase()}
      {"  "}
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
});

function App() {
  const [first, setFirstName] = useState("");
  const [last, setLastName] = useState("");

  return (
    <div>
      <label htmlFor="first-name-label">first name</label>
      <input
        id="first-name-input"
        onChange={e => setFirstName(e.target.value)}
      />
      <Upper>{first}</Upper>
      <hr />
      <label htmlFor="last-name-label">last name</label>
      <input id="last-name-input" onChange={e => setLastName(e.target.value)} />
      <Upper>{last}</Upper>
    </div>
  );
}

export default App;
