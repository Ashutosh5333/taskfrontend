import { Avatar, Box, Button, Image, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'


const Dashboard = () => {


  return (
    <>
    <Box  width="70vw" height={"90vh"} m="auto">
       
       <Box  display={"flex"}  gap="5" p="4" >

              <Wrap >
                  <WrapItem>
                    <Avatar
                      className="image"
                      m="auto"
                      size={{ base: "sm", md: "lg", lg: "xl" }}
                      name={"Ashutosh"}
                    //   src={el.image}
                    />
                  </WrapItem>
                </Wrap>        

              <Box justifyContent={"center"} display={"flex"}  gap="5">
                <Text m="auto" mt="5" fontWeight={"600"}> Ashutosh </Text>
                 <Text m="auto" mt="5" fontWeight={"600"} > Saturday  </Text>
                 <Text mt="5" fontWeight={"600"}> 30 march </Text>
              </Box>

       </Box>


       
       {/* ----------- */}


       <Box  display={"flex"} justifyContent={"space-between"} gap="5">

          <Box width={"50vw"} height="30vh" p="4">

            <Text  textAlign={"start"} fontSize={{base:"1rem",md:"1.5rem",lg:"1.5rem" }} fontWeight={"600"}>  What is React  </Text>

            <Text  textAlign={"start"} fontSize={{base:".8rem",md:"1rem",lg:"1rem" }} >ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components. It's important to note that ReactJS is not a JavaScript framework   </Text>


               <Text textAlign={"start"} mt="4" mb="4">
            <Button justifyContent={"flex-start"} >  React  </Button>
               </Text>

          </Box>

          <Box  width={"20vw"} height="30vh"  > 
                  <Image m="auto" width="20vw" height="30vh" src="https://itsg-global.com/wp-content/uploads/2016/09/react-js-to-use-or-not-to-use.png" />
          </Box>
          
       </Box>

       


    </Box>
    </>
  )
}

export default Dashboard