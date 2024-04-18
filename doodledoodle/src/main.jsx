import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import DrawingBoard from "./component/DrawingBoard.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <DrawingBoard />
  </React.StrictMode>
);
