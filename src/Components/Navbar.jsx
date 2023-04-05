import React from 'react'
import { Box, Text, Tooltip } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {BiUserCircle} from "react-icons/bi"
import MenuDrawer from './Drawer/MenuDrawer'

const Navbar = () => {

    const token =  JSON.parse(localStorage.getItem("token"))
    // console.log(token)
    const data = JSON.parse(localStorage.getItem("data"))
     console.log(data)


  return (
    <>
      <Box  w='100%' p={6} boxShadow="lg" border="0.1px solid gray" display="flex" justifyContent={"space-between"}>
       
       <Box>
         <Link to={"/"}>
          <Text fontSize={"1.2rem"} fontWeight="600">
            Blog 
          </Text>
         </Link>
       </Box>
       <Box display={"flex"} justifyContent="space-between" gap={"10"}>
          
           <Link to={"/creteb"}>
           <Text  fontSize={"1.2rem"} fontWeight="600"> Write blog  </Text>
           </Link>

            {

            token ? <MenuDrawer/> :    
            
             <Link to={"/singtab"}>
           <Text  fontSize={"1.2rem"} fontWeight="600"> Login  </Text>
           </Link>          
            }
          

           <Tooltip hasArrow label="User Profile" placement="top">
              <Box cursor="pointer">
                <BiUserCircle size={30}  />
              </Box>
           </Tooltip>

      
       </Box>
      
    </Box>
    </>
  )
}

export default Navbar