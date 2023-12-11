import "./App.css";
import { Header } from "./components/Header";
import { ListCard } from "./components/ListCard";
import { TaskContent } from "./components/TaskContent";

function App() {
  const descr =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. Cras nec ultricies massa. Curabitur rutrum, diam id consequat consequat";

  const TaskCon = (
    <TaskContent
      title={"Create research Survey You have no Tasks You have no Tasks"}
      dueDate={"22 Aug 2023"}
      // timeLeft={"2wks"}?\
      completed={false}
    />
  );

  let content = [TaskCon, TaskCon, TaskCon];
  // content = [];
  return (
    <div className="app__body">
      <Header
        Page={
          <ListCard
            items={content}
            title={"Ethnographic Research"}
            NoItemMessage={"You have no Tasks"}
          />
        }
      />
    </div>
  );
}

export default App;
