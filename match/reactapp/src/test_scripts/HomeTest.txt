import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./HomePage";
import ProjectPage from "./ProjectPage";
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <AuthProvider>
    <div className="app__body">
      <HomePage />
    </div>
    </AuthProvider>
  );
}

export default App;