import React from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";
import Todo from "./components/todo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
);
