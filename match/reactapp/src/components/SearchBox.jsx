import React, { useState } from "react";
import searchIcon from "./icons/searchicon.png"; // Replace with the actual path to your search icon
import HorizontalList from "./HorizontalList";

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div
      style={{
        width: "310px",
        position: "relative",
        backgroundColor: "#EEF3F8",
        borderRadius: "5px",
        borderBottom: "3px solid #DBDCDD",
      }}
    >
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
        style={{
          outline: "none",
          fontSize: "15px",
          padding: "5px",
          paddingLeft: "15px",
          borderColor: "transparent", // Use "transparent" instead of "none"
          backgroundColor: "transparent", // Use "transparent" instead of "none"
          color: "#5F6163",
        }}
      />
    </div>
  );
};

export default SearchBox;
