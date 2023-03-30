import { Box, Input, Text, } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineCalendar, AiOutlineClockCircle} from "react-icons/ai"
import "./style/Event.css"


const Event = () => {


  return (
    <>
    <Box height="100vh">
         
         <Box backgroundColor="rgb(214, 240, 247)"  width={{base:"100vw",md:"100vw",lg:"100vw" }} m="auto"  height={"50vh"}>

            <Box width="40vw" m="auto" p="4" >
                <Text fontSize={"1.1rem"} color={"gray.400"} fontWeight="600"> EVENT  <span style={{color:"red"}}>WORKSHOP</span> </Text>
            </Box>
                <Text fontSize={{base:"1.2rem",md:"1.5rem",lg:"2.4rem" }}  color={"rgb(20, 75, 89)"} fontWeight="600" mt="6">  The  title of this event page </Text>
           
             <Box  width={{base:"50vw",md:"60vw",lg:"70vw" }}  m="auto" mt="6" >
                 
                <Input bg="#fff" p="6" placeholder='Enter title'/>
             </Box>

             {/* ----------------- */}

              <Box  className='event' bg="#fff" width={"80vw"} height="20vh" m="auto" mt="20"  borderRadius="10">

                  <Text textAlign={"start"} fontSize=".8rem" mt="2" ml="4" p="4" fontWeight={"600"} color="gray"> WHEN </Text>

                    <Box  display={"flex"} justifyContent="space-evenly" width={{base:"",md:"80vw",lg:"70vw" }} m="auto" p="2" gap="5" className='WhenContainer' >
                             
                             <Box display={"flex"} justifyContent="space-between" gap="3">
                                 <Box m="auto" >
                               <AiOutlineCalendar color="skyblue"  fontSize={"1.5rem"}  />
                                 </Box>
                              <Input type={"date"}/>
                             </Box>

                             <Box  display={"flex"} justifyContent="space-between" gap="3">
                             <Box m="auto" >
                               <AiOutlineClockCircle color="skyblue"  fontSize={"1.5rem"}  />
                                 </Box>
                              <Input type={"time"}/>
                             </Box>

                             
                             <Box  display={"flex"} justifyContent="space-between" gap="3">
                             <Box m="auto" >
                                <Text fontSize={"1.2rem"}> To </Text>
                                 </Box>
                              <Input type={"time"}/>
                             </Box>
                             

                    </Box>
              </Box>

         </Box>
    
     

    </Box>
    </>
  )
}

export default Event