import React from 'react'
import "./SideCart.scss"
import {withRouter} from "react-router-dom"

const SideCart = ({isOpen,history}) => {
    return (
        <div className={` ${isOpen ? "SideCart" : "none"} `}>
            <ul className="SideCart__list-container">
                <li onClick={()=>history.push("/")}>Home</li>
                <li onClick={()=>history.push("/rooms")}>Rooms</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
             
            </ul>
        </div>
    )
}

export default withRouter(SideCart)
