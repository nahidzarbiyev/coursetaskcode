import React from 'react'
import OurService from '../../components/ourService'
import PopularCourses from '../../components/popularCourses'
import Search from '../../components/searchCourse'
import SliderComponent from '../../components/slider'
import Upcomings from '../../components/upcomingsevents'


const Home = () => {
  return (
<>
<SliderComponent/>
<PopularCourses/>
<Search/>
<OurService/>
<Upcomings/>
</>
    )
}

export default Home