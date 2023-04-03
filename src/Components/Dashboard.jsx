import { Avatar, Box, Button, Image, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllblogData } from '../Redux/AppReducer/action'


const Dashboard = () => {

  const dispatch = useDispatch()
  const BlogData = useSelector((store) => store.AppReducer.BlogData)
   console.log("blog" ,BlogData)

   

 useEffect(() =>{
   dispatch(getAllblogData)
 },[])



  return (
    <>
    <Box border="4px solid yellow" width={{base:"90vw",md:"60vw",lg:"70vw" }} height={"50vh"} m="auto">
       
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


       {/* ----------- */}


       <Box  display={"flex"} justifyContent={"space-between"} gap="5">

          <Box width={"60vw"} height="30vh" p="4">

            <Text  textAlign={"start"} fontSize={{base:"1rem",md:"1.5rem",lg:"1.5rem" }} fontWeight={"600"}  noOfLines={{ base: 3, md: 2 }}>  What is React  </Text>
                
                <Box display={{ base: "none", md: "block" }} >
              <Text noOfLines={3}  textAlign={"start"} fontSize={{base:".8rem",md:"1rem",lg:"1rem" }} >ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components. It's important to note that ReactJS is not a JavaScript framework   </Text>
                </Box>

               <Box textAlign={"start"} mt="4" mb="4" display={"flex"} >
               <Button justifyContent={"flex-start"} >  React  </Button>
               <Text textAlign={"start"} fontWeight={"600"} ml="4" mt="2">  5 min  </Text>            
               </Box>
          </Box>

               
          <Box > 
                  <Image  marginRight={{base:"40" }} borderRadius={"10"}
                  maxW={{ base: "70%", md: "70%", lg: "100%" }}    height={{base:"20vh",md:"20vh",lg:"30vh"}} src="https://itsg-global.com/wp-content/uploads/2016/09/react-js-to-use-or-not-to-use.png" />
          </Box>
          
       </Box>

       


    </Box>
    </>
  )
}

export default Dashboard