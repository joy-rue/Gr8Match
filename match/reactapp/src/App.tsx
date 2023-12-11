import "./App.css";
import { Header } from "./components/Header";
import { ListCard } from "./components/ListCard";
import { MilestoneContent } from "./components/MilestoneContent";
import ashesilogoblank from "./components/icons/ashesiblanklogo.png";

function App() {
  const people = ["Clark Kent", "Superman", "Naruto Uzumaki"];
  const descr =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat";

    

  const milestoneElement = (
    <MilestoneContent
      profile={ashesilogoblank}
      title={"Participant Sampling"}
      dueDate={"20th August 2023"}
      timeleft={"2wks"}
      People={people}
      description={descr}
    />
  );

  const content = [milestoneElement, milestoneElement, milestoneElement];
  return (
    <div className="app__body">
      <Header
        Page={
          <ListCard
            items={content}
            title={"Milestone"}
            NoItemMessage={"You have no milestones"}
          />
        }
      />
    </div>
  );
}

export default App;
