import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AddCourses from '../pages/add-courses'
import Details from '../pages/details';
import Home from '../pages/home';

const Routing = () => {
  return (
  <>
  <Routes>
    <Route path='/' element={
        <Home/>
    }/>
    <Route path='/add-courses' element={<AddCourses/>}/>
    <Route path='/:id' element={<Details/>} />
  </Routes>
  </>
  )
}

export default Routing
