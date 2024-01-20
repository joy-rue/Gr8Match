import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import VerticalList from "./VerticalList";
import HorizontalList from "./HorizontalList";
import inviteMemberIcon from "./icons/inviteMemberIcon.png";

const InviteMember = ({ members, handleInviteMembers }) => {
  const [items, setItems] = useState(members);

  const handleCheckboxChange = (id) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );

      // Track the number of checked items
      const checkedCount = updatedItems.filter((item) => item.checked).length;

      // If more than 5 items are checked, prevent checking more
      if (checkedCount > 5) {
        return prevItems;
      }

      // Explicitly sort items by priority and then checked status
      const sortedItems = updatedItems.sort((a, b) => {
        if (a.checked !== b.checked) return a.checked ? -1 : 1;
        if (a.priority !== b.priority) return a.priority ? -1 : 1;
        if (a.priorityValue > b.priorityValue) return a.priorityValue ? -1 : 1;

        return 0;
      });

      return sortedItems;
    });
  };

  useEffect(() => {
    // Run handleCheckboxChange automatically when the component mounts
    handleCheckboxChange(items[0].id);
  }, []); // The empty dependency array ensures the effect runs only once on mount

  const inviteClick = () => {
    // Get the checked items
    const checkedItems = items.filter((item) => item.checked);

    // Print the checked items (you can replace this with your desired logic)
    console.log("Checked Items:", checkedItems);

    // Perform your invite logic using the checked items
    handleInviteMembers(checkedItems);
  };

  return (
    <div style={{ padding: "10px", paddingTop: "0px" }}>
      {/* <h5>Invite Member (max 5)</h5> */}
      <div style={{ marginBottom: "10px" }}>
        <HorizontalList
          spacing={10}
          items={[
            <SearchBox style={{}} />,
            <img
              onClick={inviteClick}
              src={inviteMemberIcon}
              style={{
                height: "39px",
                cursor: "pointer",
                padding: "5px",
                backgroundColor: "#5DDF52",
                borderRadius: "5px",
              }}
              alt=""
            />,
          ]}
        />
      </div>

      <ul
        className="list-group list-group-flush"
        style={{
          listStyleType: "none",
          padding: 0,
          maxHeight: "400px",
          overflowY: "auto",
        }}
      >
        {items.map((item) => (
          <li
            onClick={() => handleCheckboxChange(item.id)}
            className="list-group-item"
            key={item.id}
            style={{
              padding: "10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              minHeight: "60px",
            }}
          >
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(item.id)}
              disabled={
                !item.checked && items.filter((i) => i.checked).length >= 5
              }
            />
            {
              <div
                style={{
                  marginLeft: "10px",
                }}
              >
                <VerticalList
                  items={[
                    <div>{item.text}</div>,
                    item.priority === true && (
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: "400",
                          padding: "2px",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                          backgroundColor: "#5DDF52",
                          borderRadius: "30px",
                          width: "107px",
                          color: "white",
                          marginTop: "3px",
                        }}
                      >
                        {`${item.priorityValue}% Compatible`}
                      </div>
                    ),
                  ]}
                />
              </div>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InviteMember;
