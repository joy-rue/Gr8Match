import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import VerticalList from "./VerticalList";
import HorizontalList from "./HorizontalList";
import inviteMemberIcon from "./icons/inviteMemberIcon.png";
import axios from "axios";
import Cookies from "js-cookie";

const InviteMember = ({ members, project_id }) => {
console.log(members);
  const [items, setItems] = useState(members);
console.log(members);
  const handleCheckboxChange = (id) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );

      // Track the number of checked items
      const checkedCount = updatedItems.filter((item) => item.checked).length;

      // If more than 3 items are checked, prevent checking more
      if (checkedCount > 3) {
        return prevItems;
      }
      // Explicitly sort items by priority and then checked status
      const sortedItems = updatedItems.sort((a, b) => {
        if (a.checked !== b.checked) return a.checked ? -1 : 1;
                if (a.priorityValue > b.priorityValue) return a.priorityValue ? -1 : 1;

        return 0;
      });

      return sortedItems;
    });
  };

  useEffect(() => {
    inviteClick();
  }, []); 

  ```
  function is called to handle the selected RA by sending invitations as website notification and via email
  ```
  const inviteClick = async () => {
    const checkedItems = items.filter((item) => item.checked);
const accessToken = Cookies.get("access");
      const nodemailer = require('nodemailer');

      // Gmail SMTP
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'your_email@gmail.com',
          pass: 'your_password'
        }
        });
        try {// Make a POST request to send the invitation for each checked item

          for (const ra of checkedItems) {
            console.log(ra.id);
            const sendInvitation = await axios.post(`http://127.0.0.1:5173/api/project/invitation/invite/`,
              {
                user_id: checkedItems.user_id, // Use ra.id to access the ID of the current checked item
                project_id: project_id
              },
              {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${accessToken}`,
                },
                withCredentials: true,
              }
            );

            if (sendInvitation.status === 201) {// send emails after suuccessful database entry
              console.log(`Success status ${ra.id}`);
              const sendInvitationEmail = async (recipientEmails, project_id) => {
                try {
                  // Compose email
                  let info = await transporter.sendMail({
                    from: 'your_email@gmail.com',
                    to: recipientEmails.join(', '), // Join the recipient emails with commas
                    subject: 'Invitation to join Faculty on a project',
                    text: `You have been invited to join the project: ${project_name}. Click the link to accept.`,
                    html: `<p>You have been invited to join project with ID ${project_id}. Click the link to accept.</p>`
                  });

                  console.log('Email sent: ' + info.response);
                } catch (error) {
                  console.error('Error sending email:', error);
                }
              };

            } else {
              console.log(`Failed to invite user ${ra.id}`);
            }
          }
        } catch (error) {
          console.error("Error sending invitations:", error);
        }
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
