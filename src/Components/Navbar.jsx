import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <>
      <Box  w='100%' p={6} boxShadow="lg" border="0.1px solid gray" display="flex" justifyContent={"space-between"}>
       
       <Box>
         <Link to={"/event"}>
          <Text fontSize={"1.2rem"} fontWeight="600">
            Task Mangement
          </Text>
         </Link>
       </Box>
       <Box display={"flex"} justifyContent="space-between" gap={"10"}>
          
           <Link to={"/creteb"}>
           <Text  fontSize={"1.2rem"} fontWeight="600"> Write blog  </Text>
           </Link>

           <Link to={"/singtab"}>
           <Text  fontSize={"1.2rem"} fontWeight="600"> Login  </Text>
           </Link>

         

       </Box>
      
    </Box>
    </>
  )
}

export default Navbar