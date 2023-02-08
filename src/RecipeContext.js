import { createContext, useReducer, useState } from "react";

export const RecipeContext = createContext();

const recipeReducer = (state, action) => {
  switch (action.type) {
    case "SET_LIST":
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

const RecipeContextProvider = (props) => {
  const [state, dispatch] = useReducer(recipeReducer, { list: [] });

  const setList = (listData) => {
    dispatch({ type: "SET_LIST", payload: listData });
  };

  const [selectedRecipes, setSelectedRecipes] = useState([
    {
      title: "Greek Salad",
      time: "35 minutes to make",
      steps:
        "1. Pre-heat the oven to 200C 2. Place the carrot leek and tofu in a large bowl.",
      id: 1,
    },
    {
      title: "Greek Beasst",
      time: "38 minutes to make",
      steps: "1. Pre-f 200C 2. Place the carrot leek and tofu in a large bowl.",
      id: 2,
    },
  ]);

  const addRecipe = (title, steps) => {
    setSelectedRecipes([
      ...selectedRecipes,
      { title: title, steps: steps, id: crypto.randomUUID() },
    ]);
  };

  return (
    <RecipeContext.Provider value={{ selectedRecipes, addRecipe }}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeContextProvider;
