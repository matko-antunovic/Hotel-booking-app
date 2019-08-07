import React from 'react';
import "./Home.scss";
import {Link} from "react-router-dom";


const Home = () => {
    return (
        <div className="container">
            <h1 className="title">HOMEPAGE </h1>
            <Link to="/preview" className="button">SEE MORE</Link>
           
        </div>
    )
}

export default Home;