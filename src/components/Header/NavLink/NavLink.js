import React from "react";
import "./NavLink.css";

const NavLink = ({ name, type, link }) => {
  const HeaderNavLink = ({ name, link }) => {
    return (
      <h5 className="header__link">
        <a className="link" href="#">
          {name}
        </a>
      </h5>
    );
  };
  return type === "header" ? (
    <HeaderNavLink name={name} />
  ) : (
    <li>
      <a href="#">{name}</a>
    </li>
  );
};

export default NavLink;
