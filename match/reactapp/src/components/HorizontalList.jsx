import React, { ReactNode } from "react";

const HorizontalList = ({ items, spacing,dot_separation }) => {
  return (
    <div style={{ display: "flex" }}>
      {items? ( typeof items !== "string"?
      items.map((item, index) => (
            <div key={index} style={{ marginRight: `${spacing}px` }}>
             {item}
            </div>
          )) : <div style={{ marginRight: `${spacing}px` }}>
            {items}
            </div>
          ):
          <div>{"no value"}</div>
          }
          
    </div>
  );
};

export default HorizontalList;

