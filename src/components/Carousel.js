import React, { Component } from "react";
import Slider from "react-slick";
import { speciality } from "../utils/constant";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      activeSlide: 0
    };
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      dots: true,
      beforeChange: (current, next) => this.setState({ activeSlide: next })
    };

    return (
      <div>
        <Slider {...settings}>
          {speciality.map((item, index) => {
            return (
              <div key={index}>
                <div className='card-slider'>
                  <div className="card-slider-image">
                    <img src={require(`../assets/speciality-${index+1}.svg`)} alt={item.title} />
                  </div>
                  <p className={`card-slider-title  ${this.state.activeSlide !== index && 'disable'}`}>{item.title}</p>
                  <p className={`card-slider-desc ${this.state.activeSlide !== index && 'disable'}`}>{item.desc}</p>
                </div>
              </div>
              )
            })}
        </Slider>
      </div>
    );
  }
}