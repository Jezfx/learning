import React, { useState, Suspense } from "react";

const Tilt = React.lazy(() => import("react-tilt"));

function App() {
  const [showTilt, setShowTilt] = useState(false);
  return (
    <div>
      <form>
        <label>
          show tilt
          <input type="checkbox" onChange={() => setShowTilt(!showTilt)} />
        </label>
      </form>
      {showTilt && (
        <Suspense fallback="<div>loading</div>">
          <Tilt
            className="Tilt"
            options={{ max: 25 }}
            style={{ height: 250, width: 250 }}
          >
            <div className="Tilt-inner"> 👽 </div>
          </Tilt>
        </Suspense>
      )}
    </div>
  );
}

export default App;
