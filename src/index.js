import React from "react";
import ReactDOM from "react-dom/client"; //only call once in entire React application
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//ReactDOM used to render componenets/entire application into the real DOM (i.e. div with id="root")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
