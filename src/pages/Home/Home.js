import React from 'react';
import "./Home.scss";
import Landing from "./Landing/Landing"
import BookSegment from "./Segment/BookSegment"
import About from "./About/About"

const Home=( {match,history})=>{
        return (
            <div className="home-container">
            <Landing/>
            <About/>
            <BookSegment match={match} history={history} />
            </div>
        )
    }


export default Home;
