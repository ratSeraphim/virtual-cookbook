import * as S from "./style";
import React, { useEffect, useState } from "react";
import { updateSearch } from "../../redux/Recipes";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(updateSearch(searchQuery));
  }, [searchQuery]);

  return (
    <>
      <S.Search
        placeholder="Search"
        type="text"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        value={searchQuery}
      ></S.Search>
    </>
  );
};

export default SearchBar;
