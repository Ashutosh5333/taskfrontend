import React, { useEffect, useState } from 'react'
import { Avatar, Box, Button, Image,  useColorModeValue, Text, Wrap, WrapItem, HStack,VStack,  useToast,  Tooltip, Flex, Heading, } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getDeleteData, getSingleblogData } from '../Redux/AppReducer/action'
import {  BsFacebook,  BsTwitter,  BsLinkedin,  BsLink45Deg,  BsBookmarkPlus,} from "react-icons/bs";
import { DeleteIcon } from '@chakra-ui/icons'

const SingleBlog = () => {
  const lightColor = useColorModeValue("#757575", "#9aa0a6");
   const [single ,Setsingle] = useState()
  const dispatch = useDispatch()
    const {Id} = useParams()
 

    useEffect(() =>{
   dispatch(getSingleblogData(Id)).then((res) =>{
      Setsingle(res.payload)
   })
  },[Id])
   




  return (
    <>
    <Box   width={{base:"80vw",md:"90vw",lg:"90vw" }}  m="auto" mt="10" p="6" >
     
     <Flex
          justifyContent="space-between"
          direction={{ base: "column", sm: "row" }}
          gap={{ base: 5, sm: 0 }}
        >
          <HStack spacing={5} mb="5">
            <Avatar 
              name={single?.postedby.name}
            />
            <Flex direction="column">
              
              <Text fontSize={"lg"} fontWeight={"600"}>{single?.postedby.name} </Text>
              <Text color={lightColor}>
               
              </Text>
            </Flex>
          </HStack>
          <hr />
  
          <HStack spacing={5} mb="5">
         
            <Tooltip hasArrow label="Share on Twitter" placement="top">
              <Box cursor="pointer">
                <BsTwitter size={20} color={lightColor} />
              </Box>
            </Tooltip>
  
            <Tooltip hasArrow label="Share on Facebook" placement="top">
              <Box cursor="pointer">
                <BsFacebook size={20} color={lightColor} />
              </Box>
            </Tooltip>
            <Tooltip hasArrow label="Share on Linkedln" placement="top">
              <Box cursor="pointer">
                <BsLinkedin size={20} color={lightColor} />
              </Box>
            </Tooltip>
            <Tooltip hasArrow label="Copy link" placement="top">
              <Box cursor="pointer">
                <BsLink45Deg size={20} color={lightColor} />
              </Box>
            </Tooltip>
            <Tooltip hasArrow label="Save" placement="top">
              <Box cursor="pointer">
                  <BsBookmarkPlus
                    size={20}
                    color={lightColor}
                  />
              </Box>
            </Tooltip>
          </HStack>
        </Flex> 
        
       <Heading  textAlign={"start"} mb="5" > {single?.title}  </Heading>
             <Box width={"100%"} mb="5"> 
                    <Image  
                     w={"100%"}
                    maxH="700px"
                    objectFit="cover"
                     alt="cover"
                   src={single?.pic} />
            </Box>
  
       
              <Box dangerouslySetInnerHTML={{ __html: single?.description }}/>
         
  
            <Box textAlign={"start"} mt="4" mb="4" display={"flex"} >
                 <Button justifyContent={"flex-start"} >  React  </Button>
                 <Text textAlign={"start"} fontWeight={"600"} ml="4" mt="2">  5 min  </Text>            
           </Box>
        
            
     
    
      </Box> 
   
      

    </>
  )


}

export default SingleBlog