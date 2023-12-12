import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppsContent from "./components/AppsContent";
import Header from "./components/Header";
import ListCard from "./components/ListCard";
import ashesilogoblank from "./components/icons/ashesiblanklogo.png";
import ProjectPage from "./ProjectPage";
import { HomeHeader } from "./components/HomeHeader";

function App() {
  return (
    <div className="app__body">
      <Header Page={HomeHeader} />
    </div>
  );
}

export default App;
