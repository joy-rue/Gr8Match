import React from "react";
import HomeHeader from "./components/HomeHeader";
import Header from "./components/Header";


const PageNotFound = () => {
  return (
    <div>
      <Header
        Page={[
          <HomeHeader
            key="homeHeader"
            title={"404 Page Not Found"}
            spacing={"320px"}
          />,
        ]}
      />
    </div>
  );
};

export default PageNotFound;
