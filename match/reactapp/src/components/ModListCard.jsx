import React, { useState, useRef } from "react";
import ListCard from "./ListCard";
import ListItemsIcons from "./ListItemsIcons";

const ModListCard = ({
  items,
  title,
  NoItemMessage,
  onSelectItem,
  handleAddOperation,
  handleDeleteOperation,
  handleAddIconClick,
  handleDeleteIconClick,
  footer,
}) => {
  const [check, setCheck] = useState(false);
  const [action, setAction] = useState("default");

  const submitRef = useRef(null);

  // List Card passes checked items into this function
  const handleSubmitOperation = (
    checkedItems,
    subaction = action || "default"
  ) => {
    switch (subaction) {
      case "delete":
        setCheck(false);
        handleDeleteOperation(checkedItems);
        console.log(`delete Requirement: ${checkedItems}`);
        break;
      case "add":
        handleAddOperation(checkedItems);
        setCheck(false);
        console.log(`add Requirement: ${checkedItems}`);
        break; // Add a break statement here
      default:
        setCheck(false);
        break;
    }
  };

  // handleOperation in ListIconsItems calls this function,
  // This function calls handlePrintCheckedItems from ListCard
  // handlePrintCheckedItems calls handleSubmitOperation
  const deleteListItem = () => {
    setAction("delete");
    console.log("delete Responsibility");
    submitRef.current.handlePrintCheckedItems("delete");
  };

  const addListItem = () => {
    // console.log("add Responsibility");
    setAction("add");
    submitRef.current.handlePrintCheckedItems();
  };

  const IconClick = (subaction) => {
    switch (subaction) {
      case "delete":
        setCheck(true);
        handleDeleteIconClick?.();
        break;
      case "add":
        handleAddIconClick?.();
        break;
      default:
        setCheck(false);
        break;
    }
  };

  return (
    <div>
      <ListCard
        items={items}
        onSelectItem={onSelectItem}
        showCheckbox={check}
        submitOperation={handleSubmitOperation}
        ref={submitRef}
        NoItemMessage={NoItemMessage}
        footer={footer}
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>{title}</div>
            <div>
              {
                <ListItemsIcons
                  handleAddOperation={addListItem}
                  handleDeleteOperation={deleteListItem}
                  handleIconClickAction={IconClick}
                />
              }
            </div>
          </div>
        }
      />
    </div>
  );
};

export default ModListCard;
