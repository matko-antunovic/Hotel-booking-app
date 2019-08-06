import React from 'react'
import "./HomePage.scss"
import Home from "../../components/Home/Home"

const HomePage = () => {
    const view="view";
    return (
        <div className="HomePage-container">
            <Home linkUrl={view} />
        </div>
    )
}

export default HomePage
