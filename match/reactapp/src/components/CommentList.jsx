import React from "react";
import DayComments from "./DayComments";

const CommentList = ({ comments, commentUser }) => {
  // Group comments by date
  const sortedComments = comments.sort((a, b) => {
    const dateComparison = new Date(a.date) - new Date(b.date);
    if (dateComparison === 0) {
      // If dates are the same, compare by time
      return (
        new Date(`2000-01-01 ${a.time}`) - new Date(`2000-01-01 ${b.time}`)
      );
    }
    return dateComparison;
  });

  // Step 2: Group the sorted comments by date
  const groupedComments = sortedComments.reduce((acc, comment) => {
    const date = comment.date;
    acc[date] = acc[date] || [];
    acc[date].push(comment);
    return acc;
  }, {});

  // Convert the grouped comments into an array
  let groupedCommentsArray = Object.entries(groupedComments).map(
    ([date, comments]) => ({
      date,
      comments,
    })
  );

  return (
    <div>
      {groupedCommentsArray.map((groupedComment) => (
        <DayComments
          key={groupedComment.date}
          commentUser={commentUser}
          comments={groupedComment.comments}
          date={groupedComment.date}
        />
      ))}
    </div>
  );
};

export default CommentList;
