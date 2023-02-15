import { configureStore } from "@reduxjs/toolkit";

import recipeReducer from "./Recipes";

const store = configureStore({
  reducer: { recipes: recipeReducer },
});

export default store;
