import React, { useEffect, useState } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.scss'
import axios from 'axios';
const PopularCourses = () => {


const [data, setData] = useState([])
useEffect(() => {
axios.get("http://localhost:8000/courses")
.then((res)=>setData(res.data))
}, [])
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className='courseslider'>
      <h2>Popular Courses</h2>
 <Slider {...settings}>
         {
          data?.map((el)=>{
            return(
              <div className='courses'><img  className='image' src={el?.image} alt="" />
              <p className='caption'>{el?.caption}</p>
              <p className='description'>{el?.description}</p>
              <div className='price'>
                <img src={el?.personimg} alt="" />
                <p>{el?.fullname}</p>
                <div ><span>{el?.price}</span></div>
              </div>
              </div>
            )
          })
         }
        </Slider>
    </div>
  )
}

export default PopularCourses