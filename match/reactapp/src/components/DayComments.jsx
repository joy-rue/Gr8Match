import React from "react";
import CommentCard from "./CommentCard";
import formatDate from "./FormatDate";

const DayComments = ({ commentUser, comments, date }) => {
  return (
    <div
      className="Comment-page"
      style={{
        minWidth: "55vw",
        textAlign: "center",
      }}
    >
      <div
        style={{
          marginBottom: "15px",
          width: "100%",
        }}
      >
        <div
          style={{
            marginBottom: "15px",
            fontSize: "16px",
            padding: "5px",
            backgroundColor: "#AD3537",
            borderRadius: "8px",
            width: "fit-content",
            minWidth:"100px",
            margin: "auto",
            color: "white",
          }}
        >
          {formatDate(date)}
        </div>
      </div>
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          sender={comment.sender}
          date={comment.date}
          time={comment.time}
          message={comment.message}
          user={commentUser}
        />
      ))}
    </div>
  );
};

export default DayComments;
