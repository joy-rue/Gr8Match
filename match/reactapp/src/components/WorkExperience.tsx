import HorizontalList from "./HorizontalList";
import { IconItem } from "./IconItem";
import VerticalList from "./VerticalList";
import clockicon from "./icons/clockicon.png";

interface Props {
  profile: string;
  title: string;
  dueDate: string;
  timeleft: string;
  People: string[];
  description: string;
  workhours?: number;
  active: boolean;
}

export const WorKExperience = ({
  profile,
  title,
  dueDate,
  timeleft,
  People,
  workhours,
  description,
  active,
}: Props) => {
  return (
    <div style={{ maxWidth: "50vw" }}>
      <HorizontalList
        spacing={10}
        items={[
          <img
            src={profile}
            alt=""
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              transform: "translateY(20px) ",
            }}
          />,
          <VerticalList
            spacing={10}
            items={[
              <HorizontalList
                spacing={30}
                items={[
                  <div style={{ fontWeight: "500" }}>{title} </div>,

                  <div
                    style={{
                      fontWeight: "600",
                      color: "#D5B02C",
                      //   transform: "translateY(-2px)",
                    }}
                  >
                    {active === true ? (
                      <div style={{ fontWeight: "600", color: "#06B217" }}>
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
                            "active project",
                          ]}
                        />
                      </div>
                    ) : (
                      <div style={{ fontWeight: "600", color: "#C2BEBE" }}>
                        <HorizontalList
                          spacing={7}
                          items={[
                            <div
                              style={{
                                width: "7px",
                                height: "7px",
                                borderRadius: "50%",
                                backgroundColor: "#C2BEBE",
                                transform: "translateY(11px)",
                              }}
                            ></div>,
                            "past project",
                          ]}
                        />
                      </div>
                    )}
                  </div>,
                ]}
              />,
              <HorizontalList
                spacing={40}
                items={[
                  <div style={{ fontWeight: "350" }}>{dueDate}</div>,
                  <div style={{ color: "#0A66C2", fontWeight: "500" }}>
                    <IconItem icon={clockicon} item={`${workhours}hrs/wk`} />
                  </div>,
                ]}
              />,
              <div style={{ fontSize: "12px" }}>
                <HorizontalList spacing={10} items={People} />
              </div>,
              <div
                style={{
                  width: "100%",
                  fontSize: "12px", // Adjust the font size as needed
                  wordWrap: "break-word",
                }}
              >
                {description}
              </div>,
            ]}
          />,
        ]}
      />
    </div>
  );
};
