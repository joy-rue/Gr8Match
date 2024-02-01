import React from "react";
import HorizontalList from "./HorizontalList";
import VerticalList from "./VerticalList";


const TaskContent = ({ title, dueDate, timeLeft, completed }) => {
  // const timerem = timeLeft.length;
  return (
<<<<<<< HEAD
    <div>
      {" "}
      <VerticalList
        spacing={10}
        items={[
          <HorizontalList
            spacing={30}
            items={[
              <div
                style={{ minWidth: "90%", fontWeight: "500" }}
              >{`${title} `}</div>,

              <div style={{ paddingLeft: "100px" }}>{dueDate}</div>,

              <div style={{ transform: "translateY(-1px)" }}>
                {completed === true ? (
                  <li style={{ fontWeight: "600", color: "#06B217" }}>
                    <HorizontalList
                      spacing={7}
                      items={[
                        <div
                          style={{
                            width: "7px",
                            height: "7px",
                            borderRadius: "50%",
                            backgroundColor: "#06B217",
                            transform: "translateY(11px)",
                          }}
                        ></div>,
                        "completed",
                      ]}
                    />
                  </li>
                ) : (
                  <li style={{ fontWeight: "600", color: "#D5B02C" }}>
                    <HorizontalList
                      spacing={7}
                      items={[
                        <div
                          style={{
                            width: "7px",
                            height: "7px",
                            borderRadius: "50%",
                            backgroundColor: "#D5B02C",
                            transform: "translateY(11px)",
                          }}
                        ></div>,
                        "pending",
                      ]}
                    />
                  </li>
                )}
              </div>,
            ]}
          />,
          <div style={{ fontWeight: "600px", color: "#0A66C2" }}>
            {timeLeft}
          </div>,
        ]}
      />
    </div>
=======

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ minWidth: "70%", fontWeight: "500" }}>
            {`${title} `}
          </div>
          <div style={{ marginRight: "30px" }}>
            {completed === true && dateCompleted ? (
              <div>{dateCompleted}</div>
            ) : (
              <div>{dueDate}</div>
            )}
          </div>
        </div>
      </div>
>>>>>>> fa9007de822d3fd50ac08af696e85c7cb86ab5a1
  );
};

export default TaskContent;