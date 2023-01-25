import React, { useEffect, useState } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';
const PopularCourses = () => {
  const [data, setData] = useState([])
  const [toggle, SetToggle] = useState(true)


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
  const handleDelete = (id) =>{
    console.log(id);
    axios.delete(`http://localhost:8000/courses/${id}`)
    let filteredData = data.filter((el)=> el._id!== id)
    setData(filteredData)
    }

    const handleSort =()=>{
   
    

        let sortdata = data.sort((a,b)=> a.price-b.price ? 1 :-1)
        setData(sortdata)
      
    }
    const handleSearch =(e)=>{
//       axios.get("http://localhost:8000/courses")
// .then((res)=> return {   const  filteredData =  data.filter((el)=> res.data.caption.toLowerCase().includes(e.target.value))
// setData(filteredData)
// }
// )
    }
  return (
    <div className='courseslider'>
      <h2>Popular Courses</h2>
      <button onClick={()=>handleSort()}>Sort </button>
      <input type="text" placeholder='Search by name' onChange={(e)=>handleSearch(e)}/>
 <Slider {...settings}>
         {
          data?.map((el)=>{
            return(
              <Link to={`/:${el._id}`} className='courses'><img  className='image' src={el?.image} alt="" />
              <p className='caption'>{el?.caption}</p>
              <p className='description'>{el?.description}</p>
              <div className='bottom'>
                <img src={el?.personimg} alt="" />
                <p>{el?.fullname}</p>
                <div className='price' ><span>$ {el?.price}</span></div>
              </div>
              <button onClick={()=>handleDelete(el._id)}>Delete user</button>
              </Link>
            )
          })
         }
        </Slider>
    </div>
  )
}

export default PopularCourses