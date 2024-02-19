import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Leva } from "leva";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Leva />
  </React.StrictMode>
);
