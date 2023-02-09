import { useContext } from "react";
import { RecipeContext } from "../../RecipeContext";

export const useData = () => {
  const context = useContext(RecipeContext);

  if (!context) throw Error("useData() must be used inside RecipeProvider");

  return context;
};
