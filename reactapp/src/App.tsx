import "./App.css";
import { AppsContent } from "./components/AppsContent";
import { Header } from "./components/Header";
import { ListCard } from "./components/ListCard";
import ListGroup from "./components/ListGroup";
import { SubListCard } from "./components/SubListCard";
import React, { useState, useEffect } from 'react';

function App() {
  const descr =
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat";

  // const content = ()
  //   );

  const MyComponent = (
    <HorizontalList
      items={[
        <ListCard
          items={items}
          title={"Cities"}
          NoItemMessage={"There are no cities in this list"}
          onSelectItem={handleSelectItem}
        />,
        <SubListCard
          items={items}
          title={"Cities"}
          NoItemMessage={"There are no cities in this list"}
          onSelectItem={handleSelectItem}
        />,
      ]}
      spacing={30}
    />
  );

  return (
    <div className="app__body">
      <Header
        Page={
          <ListCard
            items={content}
            title={"Apps"}
            NoItemMessage={"You have no Apps"}
          />
        }
      />
    </div>
  );
}

export default App;
