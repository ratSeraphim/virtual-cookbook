import React from "react";
import * as S from "./style";
import RecipeContext from "../../RecipeContext";
import { useContext } from "react";

// hard-coding for style adjustments

const RecipeList = () => {
  return (
    <S.RecipeList>
      <RecipeContext.Consumer>
        {(selectedRecipe) => {
          return (
            <S.Recipe>
              <S.Title>{selectedRecipe.title}</S.Title>
              <S.Time>{selectedRecipe.time}</S.Time>
              <S.Steps>{selectedRecipe.steps}</S.Steps>
              <S.Button>Cook this</S.Button>
            </S.Recipe>
          );
        }}
      </RecipeContext.Consumer>
    </S.RecipeList>
  );
};

export default RecipeList;
