import React, { ReactNode, useState } from "react";

interface Props {
  items: ReactNode[];
  title: string;
  NoItemMessage: string;
  onSelectItem?: Function;
  footer?: ReactNode;
}

export const ListCard = ({
  items,
  title,
  NoItemMessage,
  footer,
  onSelectItem,
}: Props) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div>
      <div className="card" style={{ width: "60vw" }}>
        <ul
          className="list-group list-group-flush"
          style={{ listStyleType: "none" }}
        >
          <li
            style={{
              paddingLeft: "30px",
              paddingTop: "10px",
              fontSize: "22px",
              fontWeight: "500",
              // fontFamily: "Montserrat, sans-serif", // Set the font-family to Montserrat
            }}
          >
            {title}
          </li>
          <li
            style={{
              display: "flex",
              paddingLeft: "-30px",
              justifyContent: "center",
            }}
          >
            {items.length === 0 && (
              <p className="list-group-item">{NoItemMessage}</p>
            )}
          </li>
          {items.map((item, index) => (
            <li
              className="list-group-item"
              key={index}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem?.(item);
              }}
              style={{
                padding: "10px",
                cursor: "pointer",
                paddingLeft: "30px",
              }}
            >
              {item}
            </li>
          ))}
          <li
            className="list-group-item"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "15px",
            }}
          >
            {footer}
          </li>
        </ul>
      </div>
    </div>
  );
};
