import React, { Component } from 'react'
import "./PreviewGallery.scss"
import Slider from "../Slider/Slider"

 class PreviewGallery extends Component {
    render() {
        return (
            <div className="gallery-container">
                <Slider/>
            </div>
        )
    }
}
export default PreviewGallery;
