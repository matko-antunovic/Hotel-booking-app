import React from 'react';
import { Slide } from 'react-slideshow-image';
import "./Slider.scss";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const Slideshow = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(https://images.wallpaperscraft.com/image/spain_swimming_pool_buildings_evening_resort_88207_1920x1200.jpg)`}}>
          <span className="spans">Lorem ipsum dolor sit amet </span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(https://www.oneandonlyresorts.com/-/media/oneandonly/royal-mirage/home-page/oorm-eauzone-3200-x-2000.jpg?v1)`}}>
          <span className="spans">Ut enim ad minim veniam</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(https://images.unsplash.com/photo-1529316275402-0462fcc4abd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80)`}}>
          <span className="spans">Neque porro quisquam est</span>
          </div>
        </div>
      </Slide>
    )
}
export default Slideshow;