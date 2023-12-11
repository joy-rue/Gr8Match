import { ReactNode, useState } from "react";

interface ListgroupProps {
  items: string[];
  heading: string;
  onSelectItem?: Function; // Make onSelectItem an optional function
}

function ListGroup({ items, heading, onSelectItem }: ListgroupProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // Use null instead of 0 for initial state

  return (
    <>
      {items.length === 0 && <p>{heading}</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={`list-group-item ${
              selectedIndex === index ? "active" : ""
            }`}
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem?.(item); // Call onSelectItem only if it exists
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
