// CommentCard.js
import React from "react";

const CommentCard = ({ sender, time, message, user }) => {
  const isUserComment = sender === user; // Replace "Alice Smith" with your actual name

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: isUserComment ? "row-reverse" : "row", // Right-align if the comment is from you, left-align otherwise
        }}
      >
        <div
          style={{
            maxWidth: "40vw",
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: isUserComment ? "#DCF8C6" : "#EAEAEA", // Change the background color as needed
          }}
        >
          <div className="sender">
            {!isUserComment && (
              <div style={{ fontWeight: "bold", textAlign: "left" }}>
                {sender}
              </div>
            )}
          </div>
          <div className="message" style={{ margin: "0", textAlign: "left" }}>
            {message}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: isUserComment ? "row-reverse" : "row", // Right-align if the comment is from you, left-align otherwise
          marginBottom: "15px",
        }}
      >
        <div style={{ color: "#777", fontSize: "13px" }}>{`${time}`}</div>
      </div>
    </div>
  );
};

export default CommentCard;
