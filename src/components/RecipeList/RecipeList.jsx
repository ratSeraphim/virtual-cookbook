import React from "react";
import * as S from "./style";

// hard-coding for style adjustments

const RecipeList = () => {
  return (
    <div>
      <S.Recipe>
        <S.Title>Veggie Stew</S.Title>
        <S.Time>45 minutes to make</S.Time>
        <S.Steps>
          1. Pre-heat the oven to 200C. 2. Place the carrot, leek and tofu in a
          large bowl.
        </S.Steps>
        <S.Button>Cook this</S.Button>
      </S.Recipe>
      <S.Recipe>
        <S.Title>Greek Salad</S.Title>
        <S.Time>35 minutes to make</S.Time>
        <S.Steps>
          1. Pre-heat the oven to 200C. 2. Place the carrot, leek and tofu in a
          large bowl.
        </S.Steps>
        <S.Button>Cook this</S.Button>
      </S.Recipe>
    </div>
  );
};

export default RecipeList;
