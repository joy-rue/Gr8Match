import React, { ReactNode } from "react";

interface Props {
  items: ReactNode[];
  spacing: number;
}

const VerticalList = ({ items, spacing }: Props) => {
  const data = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <div style={{ margin: "10px" }}>
      {items.map((item, index) => (
        <div key={index} style={{ marginBottom: `${spacing}px` }}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default VerticalList;
