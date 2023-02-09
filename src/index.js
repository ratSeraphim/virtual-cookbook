import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import RecipeContextProvider from "./RecipeContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecipeContextProvider>
      <App />
    </RecipeContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
