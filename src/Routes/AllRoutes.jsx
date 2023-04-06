import React from 'react'
import {Routes ,Route} from "react-router-dom"
import Home from '../Components/Home'
import Dashboard from '../Components/Dashboard';
import UserBoard from '../Components/UserBoard';
import Createblog from '../Components/Createblog';
import SingleBlog from '../Components/SingleBlog';
import SingnTablist from '../Components/SingnTablist';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import UserLogged from '../Components/UserProfile/UserLogged';



const AllRoutes = () => {
  return (
    <Routes>
     <Route  path='/'    element={<Home/>}/>
   
     <Route  path="/blog/:Id"    element={<SingleBlog/>}/>
     
     <Route  path= '/creteb'  element={
       <PrivateRoute> 
     <Createblog/>
      </PrivateRoute>
     } />

      <Route  path='/profile'  element={<UserLogged/>}/>

     <Route  path='/dash'  element={<Dashboard/>}/>
     <Route  path= '/user'  element={<UserBoard/>} />
     <Route  path= '/singtab'  element={<SingnTablist/>} />


    </Routes>
  )
}

export default AllRoutes