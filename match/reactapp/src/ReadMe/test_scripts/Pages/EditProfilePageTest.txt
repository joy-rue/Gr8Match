import Header from "./components/Header";
import DateInput from "./components/DateInput";
import HomeHeader from "./components/HomeHeader";
import HorizontalList from "./components/HorizontalList";
import Notification from "./components/Notification";
import SubBanner from "./components/SubBanner";
import SubListCard from "./components/SubListCard";
import VerticalList from "./components/VerticalList";
import React, { useState } from "react";

const EditProfile = () => {
  const [ProfileName, setProfileName] = useState("");
  const [Department, setDepartment] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const handleProfileNameChange = (e) => {
    setProfileName(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Profile Name:", ProfileName);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Description:", description);
  };

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
                  title={"Edit Profile"}
                  date={"22 Aug 2023"}
                  spacing={"30vw"}
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
                    placeholder="Full Name - 10 words max"
                    value={ProfileName}
                    onChange={handleProfileNameChange}
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
                      <input
                        type="text"
                        placeholder="Email"
                        value={Email}
                        onChange={handleEmailChange}
                        required
                        style={{
                          border: "none",
                          borderRadius: "5px",
                          borderBottom: "1px solid #7E7E7E",
                          outline: "none", // Optional: Remove the input focus border
                          width: "300px", // Optional: Make the input full-width
                          marginBottom: "30px",
                          marginRight: "30px",
                          padding: "5px", // Optional: Add some padding
                        }}
                      />,
                      <input
                        type="text"
                        placeholder="Phone"
                        value={Phone}
                        onChange={handlePhoneChange}
                        required
                        style={{
                          border: "none",
                          borderRadius: "5px",
                          borderBottom: "1px solid #7E7E7E",
                          outline: "none", // Optional: Remove the input focus border
                          width: "150px", // Optional: Make the input full-width
                          marginRight: "20px",
                          marginBottom: "30px",
                          padding: "5px", // Optional: Add some padding
                        }}
                      />,

                      <input
                        type="text"
                        placeholder="Department"
                        value={Department}
                        onChange={handleDepartmentChange}
                        required
                        style={{
                          border: "none",
                          borderRadius: "5px",
                          borderBottom: "1px solid #7E7E7E",
                          outline: "none", // Optional: Remove the input focus border
                          width: "300px", // Optional: Make the input full-width
                          marginBottom: "30px",
                          padding: "5px", // Optional: Add some padding
                        }}
                      />,
                    ]}
                  />

                  <textarea
                    value={description}
                    placeholder="Profile Bio - 50 words max"
                    onChange={handleDescriptionChange}
                    required
                    style={{
                      borderRadius: "5px",
                      borderBottom: "1px solid #7E7E7E",
                      height: "100px",
                      outline: "none", // Optional: Remove the input focus border
                      width: "100%", // Optional: Make the input full-width
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
                    Edit Profile
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

export default EditProfile;
