import React from "react";

const NumResult = ({ movies }) => {
  return (
    <p className="num-results">
      Found <strong>{movies}</strong> results
    </p>
  );
};

export default NumResult;
