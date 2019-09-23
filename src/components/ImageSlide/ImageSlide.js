import React from 'react'
import "./ImageSlide.scss"


const ImageSlide = ({src}) => {
    return (
        <div className="img-slide">
            <img src={src} alt="alo"  />
        </div>
    )
}

export default ImageSlide
