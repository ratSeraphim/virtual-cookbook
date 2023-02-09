import React from "react";
import * as S from "./style";
import { RecipeContext } from "../../RecipeContext";
import { useContext } from "react";
import { useData } from "../hooks/useData";

// hard-coding for style adjustments

const RecipeList = () => {
  const { fetch } = useData();

  console.log(fetch.data);
  console.log(fetch.error);
  return (
    <S.RecipeList>
      {fetch.data.map((recipe) => (
        <S.Recipe key={recipe.id}>
          <S.Title>{recipe.title}</S.Title>
        </S.Recipe>
      ))}
    </S.RecipeList>
  );
  /*return fetch.data.length ? (
    <S.RecipeList>
      {fetch.data.map((recipe) => {
        return (
          <S.Recipe key={recipe.id}>
            <S.Title>{recipe.title}</S.Title>
            <S.Time>{recipe.time} minutes to make</S.Time>
            <S.Steps>{recipe.steps}</S.Steps>
            <S.Button>Cook this</S.Button>
          </S.Recipe>
        );
      })}
    </S.RecipeList>
  ) : (
    <div className="empty">No recipes found.</div>
  );*/
};

export default RecipeList;
