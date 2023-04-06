import { Avatar, Box,  Text, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetMypost } from '../Redux/AppReducer/action'


const UserBoard = () => {
  const [name,Setname] = useState("")
  const [Loading ,SetLoading] = useState(false)
  const dispatch = useDispatch()
  const Mypost = useSelector((store) => store.AppReducer.Mypost)
    //  Setname(Mypost[0].postedby.name)
  
  
   console.log( "name",name)

 useEffect(() =>{
   SetLoading(true)
   dispatch(GetMypost).then((res)=>{
     Setname(res.payload[0])
   })
   SetLoading(false)
 },[])
    


  return (
    <>
     <Box border="1px solid gray" p="6"  width={{base:"90vw",md:"25vw",lg:"20vw" }} m="auto" >

     
          <Box  m="auto" p="4">
                  <Avatar size={"xl"} 
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3dAr4nnYucbZaV3JyyKl_htTZUwmyk-h9fYh33dwBDA&s"
                  />
         </Box>
          <Text fontSize={"1.2rem"} fontWeight={"600"}>  </Text>
       

  



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