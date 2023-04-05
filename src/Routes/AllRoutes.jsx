import React from 'react'
import {Routes ,Route} from "react-router-dom"
import Home from '../Components/Home'
import Event from './../Components/Event';
import Login from './../pages/Login';
import { Signup } from './../pages/Signup';
import Dashboard from '../Components/Dashboard';
import UserBoard from '../Components/UserBoard';
import Createblog from '../Components/Createblog';
import SingleBlog from '../Components/SingleBlog';
import SingnTablist from '../Components/SingnTablist';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const AllRoutes = () => {
  return (
    <Routes>
     <Route  path='/'    element={<Home/>}/>
     {/* <Route  path='/:Id'    element={<SingleBlog/>}/> */}
     <Route  path="/blog/:Id"    element={<SingleBlog/>}/>
     <Route  path= '/creteb'  element={
       <PrivateRoute> 
     <Createblog/>
      </PrivateRoute>
     } />

     <Route  path='/event'  element={<Event/>}/>
     <Route  path='/dash'  element={<Dashboard/>}/>
     <Route  path= '/user'  element={<UserBoard/>} />
     <Route  path= '/singtab'  element={<SingnTablist/>} />

     {/* <Route  path='/login'  element={<Login/>} /> */}
     {/* <Route  path='/signup' element={<Signup/>} /> */}

    </Routes>
  )
}

export default AllRoutes