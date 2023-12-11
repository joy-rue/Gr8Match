import React, { ReactNode } from "react";

interface Props {
  items: ReactNode[];
  spacing?: number;
}

const HorizontalList = ({ items, spacing }: Props) => {
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
