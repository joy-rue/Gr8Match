import React, { ReactNode, useState } from "react";



export const SubListCard = ({
  items,
  title,
  NoItemMessage,
  footer,
  onSelectItem,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Show only the last 7 items
  const last7Items = items.slice(-7);

  return (
    <div style={{ width: "25vw" }}>
      <div className="card">
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
            {last7Items.length === 0 && (
              <p className="list-group-item">{NoItemMessage}</p>
            )}
          </li>
          {last7Items.map((item, index) => (
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

export default SubListCard;