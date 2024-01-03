import React, { useState } from "react";
import ProjectCardList from "./components/ProjectCardList";
import ProjectCard from "./components/ProjectCard";

const App = () => {
  // Create a state variable to store the list of dictionaries
  const dataList = ([
    { id: 1, projecttitle: "Item 1", milestone: "milestone 1" },
    { id: 2, projecttitle: "Item 2", milestone: "milestone 2" },
    { id: 3, projecttitle: "Item 3", milestone: "milestone 3" },
    ]);
    
    const cards = 
        ([dataList.map((item) => (
            <ProjectCard
                // key="sampleCard"
                title={item.milestone}
                dueDate={"22 Aug 2023"}
                progress={16}
                milestone={item.milestone}
                timeleft={"2wks"}
            />
        ))]);

  return (
    <div>
        <ProjectCardList cards={cards}/>

    </div>
  );
};

export default App;
