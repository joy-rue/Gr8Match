import React from "react";
import UpcomingTask from "./components/UpcomingTask";
import PendingTasks from "./components/PendingTasks";
import ApproveTask from "./components/ApproveTask";
import FacultyCompletedTask from "./components/FacultyCompletedTask";
import RFMilestonePage from "./RFMilestonePage";
import RAMilestonePage from "./RAMilestonePage";
import ExploreProjectPage from "./ExploreProjectPage";
import MemberRole from "./MemberRolePage";
import ListItemsIcons from "./components/ListItemsIcons";
import ExampleComponent from "./doodle";
import CommentPage from "./components/CommentList";
import CommentList from "./doodle";
import TaskPage from "./RFTaskPage";

const Test = () => {
  const comments = [
    {
      id: 1,
      sender: "User2",
      date: "2024-01-09",
      time: "11:30 AM",
      message: "This comment was on tuesday",
    },
    {
      id: 2,
      sender: "User2",
      date: "2024-01-11",
      time: "11:30 AM",
      message: "This comment was yesterday.",
    },
    {
      id: 3,
      sender: "User2",
      date: "2024-01-12",
      time: "11:30 AM",
      message: "This comment is today.",
    },
    {
      id: 4,
      sender: "User2",
      date: "2024-01-13",
      time: "11:30 AM",
      message: "this comment is tomorrow",
    },
    {
      id: 5,
      sender: "User2",
      date: "2024-01-19",
      time: "11:30 AM",
      message: "This comment is in days.",
    },
    {
      id: 6,
      sender: "User2",
      date: "2024-01-24",
      time: "11:30 AM",
      message: "This comment is in weeks",
    },
    {
      id: 7,
      sender: "User2",
      date: "2024-03-12",
      time: "11:30 AM",
      message: "This comment is in months.",
    },
  ];
  const commentUser = "User1";

  // Render the CommentList component with the example data
  // Assuming you are using ReactDOM to render your components
  return (
    <div>
      {/* <CommentList comments={comments} commentUser={commentUser} /> */}
      <TaskPage/>
    </div>
  );
};

export default Test;
