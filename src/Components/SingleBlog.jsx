import React, { useEffect, useState } from 'react'
import { Avatar, Box, Button, Image, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getSingleblogData } from '../Redux/AppReducer/action'


const SingleBlog = () => {
   const [single ,Setsingle] = useState("")
  const dispatch = useDispatch()
    const {Id} = useParams()
 

    useEffect(() =>{
   dispatch(getSingleblogData(Id)).then((res) =>{
      Setsingle(res.payload)
   })
  },[Id])
   
   console.log(single)


  return (
    <>

   <Box  width={{base:"80vw",md:"90vw",lg:"90vw" }}  m="auto">
       
       <Box border={"2px solid black"} display={"flex"} justifyContent={"space-between"}>

       <Box  display={"flex"}  gap="5" p="4" >
              <Wrap >
                  <WrapItem>
                    <Avatar
                      className="image"
                      m="auto"
                      size={{ base: "md", md: "md", lg: "md" }}
                      name={"Ashutosh"}
                    />
                  </WrapItem>
                </Wrap>        

              <Box justifyContent={"center"} display={"flex"}  gap="5">
                <Text m="auto" mt="3" fontWeight={"600"}> Ashutosh </Text>
                 <Text m="auto" mt="3" > . Saturday  </Text>
                 <Text mt="3" > 30 march </Text>
              </Box>
       </Box>

          
       </Box>

      

            <Text  textAlign={"start"} fontSize={{base:"1rem",md:"1.5rem",lg:"1.5rem" }} fontWeight={"600"}  noOfLines={{ base: 3, md: 2 }}>  What is React  </Text>

           <Box border="2px solid red" m="auto"> 
                  <Image  
                  maxW={{ base: "100%", md: "100vw", lg: "100vw" }}  src="https://itsg-global.com/wp-content/uploads/2016/09/react-js-to-use-or-not-to-use.png" />
          </Box>


       <Box  display={"flex"} justifyContent={"space-between"} gap="5">

          <Box width={"60vw"} height="30vh" p="4">

                <Box  >
              <Text textAlign={"start"} fontSize={{base:".8rem",md:"1rem",lg:"1.2rem" }} >{single.description}  </Text>
                </Box>

               <Box textAlign={"start"} mt="4" mb="4" display={"flex"} >
               <Button justifyContent={"flex-start"} >  React  </Button>
               <Text textAlign={"start"} fontWeight={"600"} ml="4" mt="2">  5 min  </Text>            
               </Box>
          </Box>


      
          
       </Box>

       


    </Box> 
    
    </>
  )


}

export default SingleBlog