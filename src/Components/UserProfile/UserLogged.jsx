import React from 'react'
import { Box } from '@chakra-ui/react';
import UserBoard from './../UserBoard';
import Userdahboard from './Userdahboard';


const UserLogged = () => {


  return (
    <>
    <Box  display={ { base:"row", md:"flex", lg:"flex"} } justifyContent={"space-between"} width={"95vw"} m="auto" mt="10" gap="5">

        
        <Box>
            <Userdahboard/>
        </Box>
             
         <Box>
               <UserBoard/>
         </Box>   

    </Box>
    </>
  )
}

export default UserLogged