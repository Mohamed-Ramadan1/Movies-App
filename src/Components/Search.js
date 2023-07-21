import { useState } from "react";

const Search = (props) => {
  const [query, setQuery] = useState("");

  const queryChangeHandler = (e) => {
    const newQuery = e.target.value; // Get the updated value directly from the event
    setQuery(newQuery);
    props.onSearch(newQuery); // Pass the updated value to the onSearch function
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
