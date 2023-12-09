import "./App.css";
import Login from "./Login";
import { Project } from "./Project";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="app__body">
      <Header Page={Project} />
    </div>
  );
}

export default App;
