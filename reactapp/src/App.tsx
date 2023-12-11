import { Header } from "./components/Header";
import HorizontalList from "./components/HorizontalList";
import { ListCard } from "./components/ListCard";
import ListGroup from "./components/ListGroup";
import { SubListCard } from "./components/SubListCard";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // items = [];
  const handleSelectItem = (item: String) => {
    console.log(item);
  };

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
    <div>
      <Header Page={MyComponent} />
    </div>
  );
}

export default App;
