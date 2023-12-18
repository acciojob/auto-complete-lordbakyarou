import React from "react";

const Search = ({ searchResult }) => {
  return (
    <ul>
      {searchResult.map((item) => {
        return <li>{item}</li>;
      })}
    </ul>
  );
};

export default Search;
