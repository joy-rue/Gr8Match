import Header from "./components/Header";
import DateInput from "./components/DateInput";
import HomeHeader from "./components/HomeHeader";
import HorizontalList from "./components/HorizontalList";
import Notification from "./components/Notification";
import SubBanner from "./components/SubBanner";
import SubListCard from "./components/SubListCard";
import VerticalList from "./components/VerticalList";
import React, { useState } from "react";
import closeIcon from "./components/icons/closeIcon.png";

const EditMilestone = () => {
  const [Title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [teamMember, setTeamMember] = useState([""]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    // Additional logic if needed
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    // Additional logic if needed
  };

  const handleTeamChange = (index, value) => {
    const newTeamMember = [...teamMember];
    newTeamMember[index] = value;
    setTeamMember(newTeamMember);
  };

  const addTeamMember = () => {
    setTeamMember([...teamMember, ""]);
  };

  const removeTeamMember = (index) => {
    const newTeamMember = [...teamMember];
    newTeamMember.splice(index, 1);
    setTeamMember(newTeamMember);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Milestone Name:", Title);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Description:", description);
    console.log("Team:", teamMember);
    window.location.href = "/rfmilestone";
  };
  const notificationElement = (
    <Notification
      key="notification"
      title={"Onedrive Library"}
      text={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat"
      }
      date={"11:23 - Aug 2023"}
    />
  );

  const notificationContent = Array(3).fill(notificationElement);

  return (
    <Header
      Page={
        <HorizontalList
          spacing={20}
          items={[
            <VerticalList
              spacing={"30px"}
              items={[
                <HomeHeader
                  key="homeHeader"
                  title={"Edit Milestone"}
                  date={"22 Aug 2023"}
                  spacing={"430px"}
                />,

                <form
                  onSubmit={handleSubmit}
                  style={{
                    backgroundColor: "white",
                    padding: "30px",
                    marginTop: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Milestone Title - 10 words max"
                    value={Title}
                    onChange={handleTitleChange}
                    required
                    style={{
                      border: "none",
                      borderBottom: "1px solid #7E7E7E",
                      borderRadius: "5px",
                      outline: "none", // Optional: Remove the input focus border
                      width: "100%", // Optional: Make the input full-width
                      marginBottom: "30px",
                      padding: "5px", // Optional: Add some padding
                    }}
                  />
                  <HorizontalList
                    items={[
                      <div
                        style={{ marginRight: "50px", marginBottom: "30px" }}
                      >
                        <DateInput
                          placeholdertxt="Start Date"
                          handleDateChange={handleStartDateChange}
                        />
                      </div>,
                      <div style={{ marginRight: "50px" }}>
                        <DateInput
                          placeholdertxt="End Date"
                          handleDateChange={handleEndDateChange}
                        />
                      </div>,
                    ]}
                  />

                  {teamMember.map((value, index) => (
                    <div key={index}>
                      <input
                        type="text"
                        value={value}
                        placeholder={`Team Member ${index + 1}`}
                        onChange={(e) =>
                          handleTeamChange(index, e.target.value)
                        }
                        style={{
                          border: "none",
                          borderRadius: "5px",
                          borderBottom: "1px solid #7E7E7E",
                          outline: "none",
                          width: "50%",
                          marginBottom: "10px",
                          padding: "5px",
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => removeTeamMember(index)}
                        style={{
                          border: "none",
                          outline: "none",
                          padding: "0px",
                          backgroundColor: "rgba(0,0,0,0)",
                        }}
                      >
                        <img
                          src={closeIcon}
                          alt=""
                          style={{
                            width: "20px",
                            marginLeft: "5px",
                            height: "20px",
                            transform: "translateY(7px)",
                          }}
                        />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addTeamMember}
                    style={{
                      cursor: "pointer",
                      outline: "none",
                      textDecoration: "none",
                      border: "none",
                      padding: "10px",
                      marginTop: "10px",
                    }}
                  >
                    Add Member
                  </button>

                  <textarea
                    value={description}
                    placeholder="Description - 50 words max"
                    onChange={handleDescriptionChange}
                    required
                    style={{
                      borderRadius: "5px",
                      borderBottom: "1px solid #7E7E7E",
                      height: "100px",
                      outline: "none", // Optional: Remove the input focus border
                      width: "100%", // Optional: Make the input full-width
                      marginTop: "30px",
                      marginBottom: "30px",
                      padding: "5px", // Optional: Add some padding
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      cursor: "pointer",
                      outline: "none",
                      textDecoration: "none",
                      border: "none",
                      color: "white",
                      backgroundColor: "#AD3537",
                      padding: "8px",
                    }}
                  >
                    Edit Milestone
                  </button>
                </form>,
              ]}
            />,
            <div>
              <VerticalList
                key="rightContent"
                spacing={20}
                items={[
                  <div>
                    <VerticalList
                      key="rightContent"
                      spacing={10}
                      items={[
                        <SubBanner />,
                        <SubListCard
                          items={notificationContent}
                          title={"Notifications (3)"}
                          NoItemMessage={"You have no notifications"}
                        />,
                      ]}
                    />
                  </div>,
                ]}
              />
            </div>,
          ]}
        />
      }
    />
  );
};

export default EditMilestone;
