import React, { useContext } from "react";
import * as S from "./style";
import { useData } from "../hooks/useData";
import { SearchContext } from "../../SearchContext";

const RecipeList = () => {
  const searchContext = useContext(SearchContext);
  const { fetch } = useData();

  let filteredRecipes;
  if (fetch.data) {
    filteredRecipes = fetch.data.filter((recipe) => {
      if (recipe.title.toLowerCase().includes(searchContext.query)) {
        return recipe;
      }
      return null;
    });
  }

  return (
    <>
      {searchContext.query && (
        <S.Search>Recipes including {searchContext.query} </S.Search>
      )}
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
