import * as S from "./style";
import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../SearchContext";

const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchContext = useContext(SearchContext);

  useEffect(() => {
    searchContext.searchHandler(searchQuery);
  });

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
