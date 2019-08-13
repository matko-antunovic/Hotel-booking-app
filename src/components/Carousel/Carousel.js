import React, { Component } from "react";
import "./Carousel.scss";
import ImageSlide from "../ImageSlide/ImageSlide";
import Arrow from "../Arrow/Arrow";
import Thumbnail from "../Thumbnail/Thumbnail"

class Carousel extends Component {

  state = {
    currentImageIndex: 0,
  }  
  handleClick=(im)=>{
  this.setState({
      currentImageIndex:im
    });
  }
 

  nextSlide = () => {
    const lastIndex = this.props.images.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;
    this.setState({
      currentImageIndex: index
    });
  };

  previousSlide = () => {
    const lastIndex = this.props.images.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index,
    });
  };


  render() {
    return (
      <div className="carousel-container">
      <div className="carousel">
        <Arrow
          direction="left"
          handleClick={this.previousSlide}
          glyph="&#60;"
        />
        <ImageSlide src={this.props.images[this.state.currentImageIndex]} />
        <Arrow
          direction="right"
          handleClick={this.nextSlide}
          glyph="&#62;"
          index={this.state.currentImageIndex}
        />
        </div>
        <Thumbnail handleClick={this.handleClick} images={this.props.images} index={this.state.currentImageIndex}/>
        </div>
    );
  }
}
export default Carousel;