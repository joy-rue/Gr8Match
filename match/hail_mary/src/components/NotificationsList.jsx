import React from "react";
import SubListCard from "./SubListCard";
import VerticalList from "./VerticalList";
import SubBanner from "./SubBanner";

const NotificationsList = ({ notificationcontent }) => {
  const content = notificationcontent;

  return (
    <div>
      <VerticalList
        key="rightContent"
        spacing={20}
        items={[
          <SubBanner />,
          <SubListCard
            // key="subListCard"
            items={content}
            title={"Notifications (3)"}
            NoItemMessage={"You have no notifications"}
          />,
        ]}
      />
    </div>
  );
};

export default NotificationsList;