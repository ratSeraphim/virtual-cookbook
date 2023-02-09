import { createContext, useEffect, useReducer, useState } from "react";
import useFetch from "./components/hooks/useFetch";

export const RecipeContext = createContext();

const recipeReducer = (state, action) => {
  switch (action.type) {
    case "SET_LIST":
      return { ...state, fetch: action.payload };
    default:
      return state;
  }
};

const RecipeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipeReducer, { fetch: [] });

  const { data, isPending, error } = useFetch("http://localhost:3001/recipes");

  useEffect(() => {
    dispatch({ type: "SET_LIST", payload: { data, isPending, error } });
  }, [data, error, isPending]);

  /*const addRecipe = (title, steps) => {
    setSelectedRecipes([
      ...selectedRecipes,
      { title: title, steps: steps, id: crypto.randomUUID() },
    ]);
  };*/

  return (
    <RecipeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContextProvider;
