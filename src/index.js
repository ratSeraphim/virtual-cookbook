import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import RecipeContextProvider from "./RecipeContext";
import SearchContextProvider from "./SearchContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecipeContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </RecipeContextProvider>
  </React.StrictMode>
);
