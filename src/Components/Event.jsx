import { Box,  Input, Text } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineCalendar, AiOutlineClockCircle} from "react-icons/ai"
import "./style/Event.css"


const Event = () => {


  return (
    <>
    <Box height="100vh">
         
         <Box backgroundColor="rgb(214, 240, 247)"  width={{base:"100vw",md:"100vw",lg:"100vw" }} m="auto"  height={"50vh"}>

            <Box width="40vw" m="auto" p="4" >
                <Text fontSize={"1.1rem"} color={"gray.400"} fontWeight="600"> EVENT  <span style={{color:"red"}}> WORKSHOP</span> </Text>
            </Box>
                <Text fontSize={{base:"1.2rem",md:"1.5rem",lg:"2.4rem" }}  color={"rgb(20, 75, 89)"} fontWeight="600" mt="6">  The  title of this event page </Text>
           
             <Box  width={{base:"50vw",md:"60vw",lg:"70vw" }}  m="auto" mt="6" >
                 
                <Input variant="unstyled" bg="#fff" p="6" placeholder='Paste or enter registration link here'/>
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


         {/* ------------------------- About Content  --------------------------- */}


         <Box  width="60vw" m="auto" mt="60">
                    
                    <Box  width="60vw" m="auto" p="4">
                     <Text textAlign={"start"} fontSize={"1rem"} letterSpacing="2px" color={"gray.400"} fontWeight="600"> ABOUT THE EVENT </Text>
                     <Text  textAlign={"start"} fontStyle="italic"  color={"rgb(20, 75, 89)"} fontSize={"1.1rem"} mt="4" fontWeight="600"> What is the event going to be about? What should people expect? </Text>
                    <Input variant="unstyled"  type="text" color={"rgb(20, 75, 89)"} fontSize={"2rem"}  placeholder='Write here' border="none" mt="4" textDecoration={"none"} />
                    </Box>
         </Box>
    

       {/* -----------------------  About the speakers --------------------------- */}

       
       <Box width="60vw" m="auto" mt="20" mb="20" height="60vh">
                    
                    <Box  width="60vw" m="auto" p="4">
                     <Text textAlign={"start"} fontSize={"1rem"} letterSpacing="2px" color={"gray.400"} fontWeight="600"> ABOUT THE SPEAKERS </Text>
                     <Text noOfLines={2}  textAlign={"start"} color={"rgb(20, 75, 89)"} fontStyle="italic" fontSize={"1.1rem"} mt="4" fontWeight="600"> Mention a few points about the speakers that are relavent to the topic, to create interest in the event </Text>
                   </Box>
                   
                   {/* ------------------------------- */}

                  <Box border="1px dashed gray" height={"40vh"} p="6"  > 
                  
                   <Box border="1px solid gray"  width="50vw" height="30vh" m="auto" display={"flex"} justifyContent="space-aroud" gap="5" >
                    

                    <Box  width="35vw" m="auto" ml="2">
                      
                       <label>
                       <Box  border=".1px solid gray" backgroundColor="rgb(214, 240, 247)"  m="auto"  width={{base:"70px",md:"100px",lg:"150px" }}  height={{base:"70px",md:"100px",lg:"150px" }} borderRadius={"80"}>
                      <Avatar size={{base:"xs",md:"sm",lg:"md"}}  position={"relative"} top="30%" alignItems={"center"} src="https://icons-for-free.com/iconfiles/png/512/gallery+image+landscape+mobile+museum+open+line+icon-1320183049020185924.png"/>
                      </Box>

                       <Input variant="unstyled" type="file" display={"none"} />
                       </label> 
                      
                    </Box>

                      <Box  width="70vw" p="4" m="auto" > 
                       <Text textAlign={"start"} color={"rgb(20, 75, 89)"} fontSize={{base:"1rem",md:"1.5rem",lg:"2rem" }} mt="4" ml="4" fontWeight={"600"} > Speaker1 </Text>
                        <Input variant="unstyled"  placeholder='About The Speaker' outline={"none"} fontWeight={"600"} colorScheme="blue" mt="1" border={"none"} />
                      </Box>

                   </Box>

                   {/* ------------------ */}

                   <Box p="2" mb="10" >
                    <Text color="skyblue" fontSize={"1.2rem"} fontWeight={"600"}>
                   + Add Another 
                    </Text>
                    </Box>
                </Box>

                {/* ---------------- */}
         </Box>
    
        

        {/* -------------------------- About the modrator --------------------  */}

        <Box width="60vw" m="auto" mt="20" mb="20" height="60vh">
                    
                    <Box  width="60vw" m="auto" p="4">
                     <Text textAlign={"start"} fontSize={"1rem"} letterSpacing="2px" color={"gray.400"} fontWeight="600"> ABOUT THE MODERATOR </Text>
                     <Text noOfLines={2}  textAlign={"start"} color={"rgb(20, 75, 89)"} fontStyle="italic" fontSize={"1.1rem"} mt="4" fontWeight="600"> Mention a few points about the moderator</Text>
                   </Box>
                   
                   {/* ------------------------------- */}

                  <Box border="1px dashed gray" height={"40vh"} p="6"  > 
                  
                   <Box border="1px solid gray"  width="50vw" height="30vh" m="auto" display={"flex"} justifyContent="space-aroud" gap="5" >
                    

                    <Box  width="35vw" m="auto" ml="2">
                      
                       <label>
                       <Box  border=".1px solid gray" backgroundColor="rgb(214, 240, 247)"  m="auto"  width={{base:"70px",md:"100px",lg:"150px" }}  height={{base:"70px",md:"100px",lg:"150px" }} borderRadius={"80"}>
                      <Avatar size={{base:"xs",md:"sm",lg:"md"}}  position={"relative"} top="30%" alignItems={"center"} src="https://icons-for-free.com/iconfiles/png/512/gallery+image+landscape+mobile+museum+open+line+icon-1320183049020185924.png"/>
                      </Box>

                       <Input variant="unstyled" type="file" display={"none"} />
                       </label> 
                      
                    </Box>

                      <Box  width="70vw" p="4" m="auto" > 
                       <Text textAlign={"start"} color={"rgb(20, 75, 89)"} fontSize={{base:"1rem",md:"1.5rem",lg:"2rem" }} mt="4" ml="4" fontWeight={"600"} > Moderator1</Text>
                        <Input variant="unstyled"  placeholder='About The Speaker' outline={"none"} fontWeight={"600"} colorScheme="blue" mt="1" border={"none"} />
                      </Box>

                   </Box>

                   {/* ------------------ */}

                   <Box p="2" mb="10" >
                    <Text color="skyblue" fontSize={"1.2rem"} fontWeight={"600"}>
                   + Add Another 
                    </Text>
                    </Box>
                </Box>

                {/* ---------------- */}
         </Box>

       
     
        {/* ----------------------  About reading material ------------------- */}

        <Box width="60vw" m="auto" mt="20" mb="20" height="60vh">
                    
                   <Box  width="60vw" m="auto" p="4">
                     <Text textAlign={"start"} fontSize={"1rem"} letterSpacing="2px" color={"gray.400"} fontWeight="600">READING MATERIAL AND RESOURCES</Text>
                     <Text noOfLines={2} textAlign={"start"} color={"rgb(20, 75, 89)"} fontStyle="italic" fontSize={"1.1rem"}  mt="4" fontWeight="600">Share links or documents that you think people can/should refer to before the event  </Text>
                     <Input variant="unstyled"  fontSize={"1.2rem"} placeholder='write here'  border={"none"}/>
                   </Box>
                   
                   {/* ------------------------------- */}

                   <Box  width="60vw" m="auto" p="4">
                     <Text textAlign={"start"} fontSize={"1rem"} letterSpacing="2px" color={"gray.400"} fontWeight="600">JOINING INFO</Text>
                     <Text  textAlign={"start"} color={"rgb(20, 75, 89)"} fontSize={"1.1rem"} fontStyle="italic" mt="4" fontWeight="600">Share links to the event or live stream  </Text>
                     <Input variant="unstyled"  fontSize={"1.2rem"} placeholder='write here'  border={"none"}/>
                   </Box>
                   
                   {/* ------------------------------- */}

                 

                {/* ---------------- */}
         </Box>



    </Box>
    </>
  )

}

export default Event

