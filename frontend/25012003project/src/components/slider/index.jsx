import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './index.scss'
const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      };

  return (
    <div  >
         <Slider {...settings} className='slider'>
          <div className='slick'>
            <div className='image'>
                <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg" alt="" />
            </div>
            <span>Get your <span>Education </span>Today</span>
          </div>
          <div className='slick'>
            <div className='image'>
                <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg" alt="" />
            </div>
            <span>Get your <span>Education </span>Today</span>

          </div>
          <div className='slick'>
            <div className='image'>
                <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg" alt="" />
            </div>
            <span>Get your <span>Education </span>Today</span>

          </div>
         
        </Slider>
    </div>
  )
}

export default SliderComponent