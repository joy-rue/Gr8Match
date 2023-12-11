import React, { ReactNode } from "react";

interface Props {
  items: ReactNode[];
  spacing?: number;
}

const VerticalList = ({ items, spacing }: Props) => {
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
