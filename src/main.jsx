import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Data from "./assets/components/Data";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Data>
      <App />
    </Data>
  </React.StrictMode>
);
