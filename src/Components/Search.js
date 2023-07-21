import { useState } from "react";

const Search = (props) => {
  const [query, setQuery] = useState("");
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
    props.onSearch(query);
  };

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={queryChangeHandler}
    />
  );
};

export default Search;
