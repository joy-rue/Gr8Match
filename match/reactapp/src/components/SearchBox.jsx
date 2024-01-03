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
        width: "20vw",
        position: "relative",
        backgroundColor: "#EEF3F8",
        borderRadius: "10px",
      }}
    >
      <HorizontalList
        items={[
          <img
            src={searchIcon}
            alt="Search"
            style={{
              width: "15px",
              // marginTop: "6px",
              margin: "10px",
            }}
            onClick={handleSearch}
          />,
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleInputChange}
            style={{
              outline: "none",
              fontSize: "18px",
              paddingRight: "30px",
              borderColor: "transparent", // Use "transparent" instead of "none"
              backgroundColor: "transparent", // Use "transparent" instead of "none"
              color: "#5F6163",
            }}
          />,
        ]}
      />
    </div>
  );
};

export default SearchBox;
