import { Box,  Text } from '@chakra-ui/react'
import React from 'react'


const UserBoard = () => {


  return (
    <>
     <Box border="3px solid gray" p="6"  width={{base:"80vw",md:"30vw",lg:"25vw" }} >

      <Box bg="black" color={"#fff"}  p="2" borderRadius={"10"}>
          <Text> Get Unlimited Topics  </Text>       
      </Box>

      <Box mt="4" >
         <Text fontWeight={"600"} textAlign={"start"}> Recomended Topics </Text>
      </Box>
         
       <Box mt="10"  display={"flex"} justifyContent={"space-around"}>
         
         <Text  borderRadius={"10"} bg="gray.100" p="2"> React</Text>

         <Text  borderRadius={"10"} bg="gray.100" p="2"> Software </Text>

         <Text  borderRadius={"10"} bg="gray.100" p="2"> Web </Text>

       </Box>  

       <Box  mt="10"  display={"flex"} justifyContent={"space-around"}>
         
         <Text  borderRadius={"10"} bg="gray.100" p="2"> Techincal </Text>

         <Text  borderRadius={"10"} bg="gray.100" p="2"> Coding </Text>

         <Text  borderRadius={"10"} bg="gray.100" p="2"> Adventure</Text>

    
       </Box>  





     </Box>    
    </>
  )
}

export default UserBoard