import * as S from "./style";
import React from "react";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <S.Navbar>
      <S.Title>Cook Book</S.Title>
      <div>
        Search:
        <SearchBar />
        <S.Link href="/create">create recipe</S.Link>
      </div>
    </S.Navbar>
  );
};

export default Navbar;
