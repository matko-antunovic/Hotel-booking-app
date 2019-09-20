import React from 'react'
import "./Nav.scss"
import {NavLink} from "react-router-dom"

const Nav = () => {
    return (
        <div className="NavBar">
            <div className="NavBar-container">

        <NavLink exact={true} to={"/"} className="NavBar-logo"><span>B L</span></NavLink>

                <div className="NavBar-submenus">
                    <NavLink exact={true} to={"/"}  activeClassName="active" className="NavBar-submenus__menu">About Hotel</NavLink>
                    <NavLink  to={"/rooms"}   activeClassName="active" className="NavBar-submenus__menu">Rooms and Suites</NavLink>
                    <NavLink  activeClassName="active" className="NavBar-submenus__menu">Dining</NavLink>
                    <NavLink  activeClassName="active" className="NavBar-submenus__menu">Wellness and Spa</NavLink>
                    <NavLink  activeClassName="active" className="NavBar-submenus__menu">Gallery</NavLink>
                </div>

     <div className="NavBar-book"><span>Book your stay</span></div>
            </div>
            
        </div>
    )
}

export default Nav
