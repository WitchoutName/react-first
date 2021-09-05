import React from "react";

const Search = ({ value, onChange }) => {
  return (
    <div class="form-outline">
      <input
        type="search"
        id="form1"
        value={value}
        onChange={onChange}
        class="form-control"
        placeholder="Search by title"
        aria-label="Search"
      />
    </div>
  );
};

export default Search;
