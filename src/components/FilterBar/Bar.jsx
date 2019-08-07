import React, { Component } from 'react'
import "./Bar.scss"
class Bar extends Component {
    render() {
        return (
            <div className="bar">

                <div className="bar-title">
                    Search room
                </div>
            <div className="bar-filters">
                
                <div>
                <span>Room Type</span>
                <span>Guests</span>
                <span>Guests</span>
                <span>Room Price</span>
                <span>Guests</span>
                <span>Guests</span>
                <span>Room Price</span>
                <span>Room Size</span>
                </div>
            </div>
            </div>
        )
    }
}

export default Bar;
