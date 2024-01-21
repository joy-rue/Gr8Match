import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import HorizontalList from "./HorizontalList";

const ListCard = forwardRef(
  (
    {
      items,
      title,
      NoItemMessage,
      footer,
      onSelectItem,
      showCheckbox,
      submitOperation,
    },
    ref
  ) => {
    const [checkedItems, setCheckedItems] = useState([]);
    const [isViewAll, setIsViewAll] = useState(false);

    useEffect(() => {
      // Reset checkedItems when showCheckbox changes
      if (!showCheckbox) {
        setCheckedItems([]);
      }
    }, [showCheckbox]);

    const handleCheckboxChange = (index) => {
      const updatedCheckedItems = [...checkedItems];
      updatedCheckedItems[index] = !updatedCheckedItems[index];
      setCheckedItems(updatedCheckedItems);
    };

    const handlePrintCheckedItems = (action) => {
      const checkedItemIndices = checkedItems.reduce(
        (indices, isChecked, index) => {
          if (isChecked) {
            indices.push(index);
          }
          return indices;
        },
        []
      );

      const checkedItemsList = checkedItemIndices.map((index) => items[index]);
      // console.log("Checked Items:", checkedItemsList);
      submitOperation(checkedItemsList, action);
    };

    useImperativeHandle(ref, () => ({
      handlePrintCheckedItems,
      handleCheckboxChange,
    }));

    // Determine the number of items to display based on isViewAll
    const displayItems = isViewAll ? items : items.slice(0, 7);

    const ViewAll = () => {
      setIsViewAll(!isViewAll);
    };

    const footerContent = (
      <div
        style={{ color: "#0077B5", fontWeight: "500", cursor: "pointer" }}
        onClick={() => {
          ViewAll();
        }}
      >
        {isViewAll
          ? "View Less"
          : `View All (${Math.max(items.length - 7, 0)} more)`}
      </div>
    );

    return (
      <div>
        <div
          className="card"
          style={{
            width: "60vw",
            margin: "0px",
            paddingLeft: "30px",
            paddingRight: "30px",
          }}
        >
          <ul
            className="list-group list-group-flush"
            style={{ listStyleType: "none" }}
          >
            <li
              style={{
                paddingTop: "10px",
                fontSize: "22px",
                fontWeight: "500",
              }}
            >
              {title}
            </li>
            <li
              className="list-group-item"
              style={{
                display: "flex",
                paddingLeft: "-30px",
                justifyContent: "center",
              }}
            >
              {items.length === 0 && <p>{NoItemMessage}</p>}
            </li>
            {displayItems.map((item, index) => (
              <li
                className="list-group-item"
                key={index}
                onClick={() => {
                  (!showCheckbox && onSelectItem?.(item)) ||
                    (showCheckbox && handleCheckboxChange(index));
                }}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  // paddingLeft: "30px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div>
                  {showCheckbox && (
                    <input
                      type="checkbox"
                      checked={checkedItems[index] || false}
                      onChange={() => handleCheckboxChange(index)}
                      style={{ marginRight: "10px" }}
                    />
                  )}
                </div>
                <div style={{ width: "100%" }}>{item}</div>
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
              {footer ? footer : footerContent}
            </li>
          </ul>
        </div>
      </div>
    );
  }
);

export default ListCard;
