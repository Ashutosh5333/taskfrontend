import React from 'react'
import {Routes ,Route} from "react-router-dom"
import Home from '../Components/Home'
import Event from './../Components/Event';
import Login from './../pages/Login';
import { Signup } from './../pages/Signup';

const AllRoutes = () => {
  return (
    <Routes>
     <Route  path='/'       element={<Home/>}/>
     <Route  path='/event'  element={<Event/>}/>
     <Route  path='/login'  element={<Login/>} />
     <Route  path='/signup' element={<Signup/>} />
    </Routes>
  )
}

export default AllRoutes