import React from 'react'
import "./BookSegment.scss"

const BookSegment = ({match,history}) => {
    return (
        <div className="home"> 
        <div className="left-side">
        <h1 className="home-title">Experience the allure of the Croatian Coast</h1>
        <p className="home-subtext">
         The Adriatic Sea along the Croatian coastline is characterised by a particular clarity and intense colour, which contributes to the uniqueness of the landscape, along with the picturesque shoreline
        </p>
        </div>
        <div className="right-side">
            <span className="book" onClick={()=>history.push(`${match.url}rooms`)}>Book Room Now</span>
            </div>
        </div>
    )
}

export default BookSegment
