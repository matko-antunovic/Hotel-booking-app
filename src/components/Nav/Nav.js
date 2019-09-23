import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="NavBar">
      <div className="NavBar-container">
        <NavLink exact={true} to={"/"} className="NavBar-logo">
          <span>B L</span>
        </NavLink>

        <div className="NavBar-submenus">
          <NavLink
            exact={true}
            to={"/"}
            activeClassName="active"
            className="NavBar-submenus__menu"
          >
            Home
          </NavLink>
          <NavLink
            to={"/rooms"}
            activeClassName="active"
            className="NavBar-submenus__menu"
          >
            Rooms and Suites
          </NavLink>
          <button disabled>Lorem Ipsum</button>
          <button disabled>Dorem Sit</button>
        </div>

        <NavLink to={"/rooms"} activeClassName="active" className="NavBar-book">
          Rooms and Suites
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
