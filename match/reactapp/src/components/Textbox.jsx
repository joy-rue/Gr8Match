import React, { useState } from "react";
import HorizontalList from "./HorizontalList";

const Textbox = ({ onAddComment }) => {
  const [comment, setComment] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default newline behavior
      handleAddComment();
    }
  };
  const handleAddComment = () => {
    if (comment.trim() !== "") {
      onAddComment(comment);
      setComment("");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#EEF3F8",
        padding: "3px",
        borderRadius: "7px",
      }}
    >
      <input
        style={{
          backgroundColor: "rgba(255,255,255,0)",
          width: "90%",
          marginLeft: "20px",
          borderColor: "rgba(255,255,255,0)",
          outline: "none",
        }}
        placeholder="Add your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default Textbox;
