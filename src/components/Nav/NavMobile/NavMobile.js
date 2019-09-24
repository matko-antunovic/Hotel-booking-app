import React from "react";
import SideCart from "./SideCart/SideCart"
import "./NavMobile.scss";
import { Link } from "react-router-dom";

class NavMobile extends React.Component {
  state = {
    isOpen: false
  };

  handleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen })
  };
  render() {
    return (
      <div className="NavMobile">
        <div className="HamburgerMenu" onClick={this.handleOpen}>
          <div className="bar-1"></div>
          <div className="bar-2"></div>
          <div className="bar-3"></div>
        </div>
        <Link className="link" to={"/"}>
          Hotel Blue Lagoon
        </Link>
        <SideCart isOpen={this.state.isOpen} />
      </div>
    );
  }
}

export default NavMobile;
