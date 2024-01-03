import React, { ReactNode } from "react";


const VerticalList = ({ items, spacing }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index} style={{ marginBottom: `${spacing}px` }}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default VerticalList;
