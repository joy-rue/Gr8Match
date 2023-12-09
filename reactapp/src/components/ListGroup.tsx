// import { MouseEvent } from "react";
import { useState } from "react";

interface ListgroupProps {
  items: String[];
  heading: String;
  onSelectItem: (item: String) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListgroupProps) {
  const [SelectedIndex, setSelectedIndex] = useState(-1);

  // const handleClick = (Event: MouseEvent) => {
  //   return console.log(Event);
  // };

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              SelectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
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
