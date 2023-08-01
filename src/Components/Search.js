import { useState, useRef, useEffect } from "react";

const Search = (props) => {
  const [query, setQuery] = useState("");
  const focusRef = useRef(null);
  const queryChangeHandler = (e) => {
    const newQuery = e.target.value; // Get the updated value directly from the event
    setQuery(newQuery);
    props.onSearch(newQuery); // Pass the updated value to the onSearch function
  };

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={queryChangeHandler}
      ref={focusRef}
    />
  );
};

export default Search;
