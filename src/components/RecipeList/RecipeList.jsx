import React from "react";
import * as S from "./style";
import { useData } from "../hooks/useData";

const RecipeList = () => {
  const { fetch } = useData();

  return (
    <S.RecipeList>
      {fetch.data.map((recipe, i) => {
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
  );
};

export default RecipeList;
