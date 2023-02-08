import { createContext, useState } from "react";

const RecipeContext = createContext();

export function RecipeProvider({ children }) {
  //const [selectedRecipes, setSelectedRecipes] = useState([]);

  const selectedRecipes = {
    title: "Greek Salad",
    time: "35 minutes to make",
    steps:
      "1. Pre-heat the oven to 200C 2. Place the carrot leek and tofu in a large bowl.",
  };

  return (
    <RecipeContext.Provider value={selectedRecipes}>
      {children}
    </RecipeContext.Provider>
  );
}

export default RecipeContext;
