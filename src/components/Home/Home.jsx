import React from 'react';
import "./Home.scss";
import {Link} from "react-router-dom";
import { Button } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
    return (
        <div className="container">
            <h1 className="title">HOMEPAGE </h1>
            <Link to="/preview" className="button">SEE MORE</Link>
            {/* <Button color="danger">Danger!</Button> */}
        </div>
    )
}

export default Home;