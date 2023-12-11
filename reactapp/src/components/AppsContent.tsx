import HorizontalList from "./HorizontalList";
import VerticalList from "./VerticalList";

interface Props {
  profile: string;
  title: string;
  descr: string;
}

export const AppsContent = ({ profile, title, descr }: Props) => {
  return (
    <div>
      <HorizontalList
        spacing={10}
        items={[
          <img
            src={profile}
            alt=""
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "20%",
              transform: "translateY(20px) ",
            }}
          />,
          <VerticalList
            spacing={10}
            items={[
              <div style={{ fontWeight: "500" }}>{title}</div>,
              <div
                style={{
                  width: "60%",
                  fontSize: "12px", // Adjust the font size as needed
                  wordWrap: "break-word",
                }}
              >
                {descr}
              </div>,
            ]}
          />,
        ]}
      />
    </div>
  );
};
