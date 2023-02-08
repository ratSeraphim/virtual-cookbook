import * as S from "./style";
import React, { useContext } from "react";
import { RecipeContext } from "../../RecipeContext";

const Navbar = () => {
  const { selectedRecipes } = useContext(RecipeContext);

  return (
    <S.Navbar>
      <S.Title>Cook Book</S.Title>
      <div>
        You have {selectedRecipes.length} ! Search:
        <S.Search type="text"></S.Search>
        <S.Link href="/create">create recipe</S.Link>
      </div>
    </S.Navbar>
  );
};

export default Navbar;
