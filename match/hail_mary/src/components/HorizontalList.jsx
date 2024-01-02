import React, { ReactNode } from "react";

const HorizontalList = ({ items, spacing }) => {
  // Sample array of text items

  return (
    <div style={{ display: "flex" }}>
      {items.map((item, index) => (
        <div key={index} style={{ marginRight: `${spacing}px` }}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default HorizontalList;
