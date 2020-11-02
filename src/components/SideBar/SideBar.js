import React from "react";
import "./SideBar.css";
import Channels from "./Channels/Channels";
import Input from "../Input/Input";

const SideBar = (props) => {
  return (
    <div className="Sidebar">
      <div className="Sidebar__container">
        <div className="Sidebar__channels">
          <p className="Sidebar__heading">FOLLOWED CHANNELS</p>
          <Channels type="followed" />
        </div>

        <div className="Sidebar__channels">
          <p className="Sidebar__heading">RECOMMENDED CHANNELS</p>
          <Channels type="recommended" />
        </div>

        <div className="Sidebar__channels">
          <p className="Sidebar__heading">ONLINE</p>
        </div>
        <Channels type="online" />
      </div>
      <div className="Sidebar__search">
        {/* <input placeholder="Search to add friends" /> */}
        <Input size="medium" placeholder="search to add friends" />
      </div>
    </div>
  );
};

export default SideBar;
