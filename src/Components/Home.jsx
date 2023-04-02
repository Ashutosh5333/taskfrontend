import React from 'react'
import { Box } from '@chakra-ui/react'

import Dashboard from './Dashboard'
import UserBoard from './UserBoard'



const Home = () => {


  return (
    <>
    <Box  w='100%' height={"100vh"} p={6} boxShadow="lg" border="1px solid gray"   display={{base:"row",md:"flex",lg:"flex" }}  justifyContent={"space-between"} gap="10">

         <Box> 

         <Dashboard/>
         </Box>

         <Box> 
           <UserBoard/>
         </Box>


     </Box>
    </>
  )
}

export default Home