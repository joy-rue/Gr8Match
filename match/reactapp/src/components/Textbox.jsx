import React, { useState } from "react";
import sendIcon from "./icons/sendIcon.png";

const Textbox = ({ onAddComment }) => {
  const [comment, setComment] = useState("");
  const textareaRef = React.createRef();

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAddComment();
    }
  };

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      onAddComment(comment);
      setComment("");
      // Reset textarea height after adding a comment
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleTextareaChange = () => {
    // Adjust textarea height as user types
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#EEF3F8",
        padding: "3px",
        borderRadius: "7px",
        maxHeight: "17vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <textarea
        ref={textareaRef}
        style={{
          backgroundColor: "rgba(255,255,255,0)",
          width: "100%",
          marginRight: "23px",
          marginLeft: "10px",
          borderColor: "rgba(255,255,255,0)",
          outline: "none",
          maxHeight: "15vh",
          fontSize: "14.5px",
          scrollbarWidth: "thin",
          scrollbarFaceColor: "red",
          msOverflowStyle: "none",
          overflowY: "hidden",
          resize: "none", // Disable manual resizing
        }}
        placeholder="Add your comment..."
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
          handleTextareaChange();
        }}
        onKeyDown={handleKeyPress}
      />
      <div
        style={{
          cursor: "pointer",
          marginLeft: "10px",
          fontSize: "20px",
          width: "20px",
        }}
        onClick={handleAddComment}
      >
        <img
          style={{
            width: "40px",
            backgroundColor: "white",
            marginLeft: "-25px",
            padding: "5px",
            borderRadius: "5px",
          }}
          src={sendIcon}
          alt=""
        />
      </div>
    </div>
  );
};

export default Textbox;
