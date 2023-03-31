import React from 'react'
import { Box } from '@chakra-ui/react'

import Dashboard from './Dashboard'



const Home = () => {


  return (
    <>
    <Box  w='100%' height={"100vh"} p={6} boxShadow="lg" border="1px solid gray" display="flex" justifyContent={"space-between"} gap="10">

       <Box border={"2px solid red"} width="70vw"> 

         <Dashboard/>
         </Box>


        <Box border={"2px solid red"} width="30vw"> 
          User Name 
         </Box>


     </Box>
    </>
  )
}

export default Home