import { createContext, useState } from "react";

export const RecipeContext = createContext();

const RecipeContextProvider = (props) => {
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
  const removeRecipe = (id) => {
    setSelectedRecipes(selectedRecipes.filter((recipe) => recipe.id !== id));
  };
  return (
    <RecipeContext.Provider
      value={{ selectedRecipes, addRecipe, removeRecipe }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeContextProvider;
