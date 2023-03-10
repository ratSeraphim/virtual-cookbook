import React from "react";
import * as S from "./style";
import { useSelector } from "react-redux";

const RecipeList = () => {
  const { data, searchInput } = useSelector((state) => state.recipes);
  const recipes = data.recipes;

  let filteredRecipes;
  if (recipes) {
    filteredRecipes = recipes.filter((recipe) => {
      if (recipe.title.toLowerCase().includes(searchInput)) {
        return recipe;
      }
      return null;
    });
  }

  return (
    <>
      {searchInput && <S.Search>Recipes including {searchInput} </S.Search>}
      <S.RecipeList>
        {filteredRecipes.map((recipe, i) => {
          return (
            <S.Recipe key={recipe.id} i={recipe.id}>
              <S.Title>{recipe.title}</S.Title>
              <S.Time>{recipe.time} minutes to make</S.Time>
              <S.Steps>{recipe.steps.substring(0, 100)}...</S.Steps>
              <S.Button to={`/recipe/${recipe.id}`}>Cook this</S.Button>
            </S.Recipe>
          );
        })}
      </S.RecipeList>
    </>
  );
};

export default RecipeList;
