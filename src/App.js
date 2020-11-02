import React from "react";
import "./styles.css";

import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";

export default function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
    </div>
  );
}
