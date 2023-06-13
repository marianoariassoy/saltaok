import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/fonts/stylesheet.css";
import "./assets/css/main.min.css";
import "./assets/css/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
