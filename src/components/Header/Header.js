import React from "react";
import "./Header.css";
import Input from "../Input/Input";
import NavLink from "./NavLink/NavLink";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Header = (props) => {
  return (
    <header>
      <div className="header__left">
        <img
          src="http://pngimg.com/uploads/twitch/twitch_PNG6.png"
          alt="twitch logo"
          className="header__logo"
        />
        <div className="header__left-links">
          <div className="links links-left">
            <NavLink type="header" name="Following" />
            <NavLink type="header" name="Browse" />
          </div>
          <div className="divider"></div>
          <div className="links links-right">
            <NavLink type="header" name="Esports" />
            <NavLink type="header" name="Music" />
            <Tippy content={<span style={{ fontFamily: "Inter" }}>More</span>}>
              <div className="icon">
                <i className="fas fa-ellipsis-h"></i>
              </div>
            </Tippy>
          </div>
        </div>
      </div>
      <div className="header__center">
        <Input size="large" placeholder="Search" type="header" />
      </div>
      <div className="header__right">
        <div className="right-links">
          <Tippy
            content={<span style={{ fontFamily: "Inter" }}>Notifications</span>}
          >
            <div className="icon">
              <i className="fas fa-inbox"></i>
            </div>
          </Tippy>

          <Tippy
            content={<span style={{ fontFamily: "Inter" }}>Whispers</span>}
          >
            <div className="icon">
              <i className="far fa-comment-alt"></i>
            </div>
          </Tippy>
          <div className="icon getbits">
            <i className="fas fa-gem"></i>
            Get Bits
          </div>
          <div className="user__avatar">
            <img
              src="https://avatars.dicebear.com/api/male/asasa.svg"
              alt="user avatar"
            />

            <div className="online"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
