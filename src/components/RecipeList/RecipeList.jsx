import React from "react";
import * as S from "./style";
import { RecipeContext } from "../../RecipeContext";
import { useContext } from "react";

// hard-coding for style adjustments

const RecipeList = () => {
  const { selectedRecipes } = useContext(RecipeContext);
  return selectedRecipes.length ? (
    <S.RecipeList>
      {selectedRecipes.map((recipe) => {
        return (
          <S.Recipe key={recipe.id}>
            <S.Title>{recipe.title}</S.Title>
            <S.Time>{recipe.time}</S.Time>
            <S.Steps>{recipe.steps}</S.Steps>
            <S.Button>Cook this</S.Button>
          </S.Recipe>
        );
      })}
    </S.RecipeList>
  ) : (
    <div className="empty">No recipes found.</div>
  );
};

export default RecipeList;
