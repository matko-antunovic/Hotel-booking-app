import React, { Component } from "react";
import Slider from "react-slick";
import "./Gallery.scss"

 class Gallery extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 5000,
      cssEase: "linear"
    };
    const{img1,img2,img3}=this.props;
    return (
      <div>
        <Slider {...settings}>
          <div className="imgSlide">
           <img  src={img1} alt="no img" />
          </div>
          <div className="imgSlide">
          <img  src={img2} alt="no img"/>
          </div>
          <div className="imgSlide">
          <img  src={img3} alt="no img"/>
          </div>
        </Slider>
        
      </div>
    );
  }
}export default Gallery;