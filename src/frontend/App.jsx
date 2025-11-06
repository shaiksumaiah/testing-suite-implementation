import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>✅ React is Working!</h1>
      <p>Welcome to the Testing Suite Frontend 🚀</p>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
