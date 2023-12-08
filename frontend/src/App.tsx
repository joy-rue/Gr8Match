// import { Sidebar } from "react-pro-sidebar";
import React from "react";
import { Register } from "./Register";
import { Login } from "./Login";
import { Sidemenu } from "./components/Sidemenu";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="app__body">
      <Header />
      <Sidemenu />
      {/* <Login
        onFormSwitch={function (arg0: string): void {
          throw new Error("Function not implemented.");
        }}
      /> */}
    </div>
  );
}

export default App;
