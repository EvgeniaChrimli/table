import React from "react";

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <span>
        Search:{" "}
        <input
          type="text"
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
      </span>
    </div>
  );
};

export default GlobalFilter;
