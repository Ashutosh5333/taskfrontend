import { Avatar, Box,  Text, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetMypost } from '../Redux/AppReducer/action'


const UserBoard = () => {
  const [Loading ,SetLoading] = useState(false)
  const dispatch = useDispatch()
  const Mypost = useSelector((store) => store.AppReducer.Mypost)
     console.log("datamypost" ,Mypost)
   

 useEffect(() =>{
   SetLoading(true)
   dispatch(GetMypost)
   SetLoading(false)
 },[])
    


  return (
    <>
     <Box border="1px solid gray" p="6"  width={{base:"90vw",md:"25vw",lg:"20vw" }} m="auto" >



       <Box  m="auto" p="4">
                  <Avatar
                      size={"xl"} 
                    // name={el.postedby.name}
                  />
       </Box>




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

       </Box>  

     




     </Box>    
    </>
  )
}

export default UserBoard