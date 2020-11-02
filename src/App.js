import React from "react";
import "./styles.css";

import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Body from "./components/Body/Body";
import Layout from "./components/Layout/Layout";
export default function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <SideBar />
        <Body />
      </Layout>
    </div>
  );
}
