import { Avatar, Box, Button, Divider, Image, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllblogData } from '../Redux/AppReducer/action'
import Skeltonlist from './Skeltonlist'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  const [Loading ,SetLoading] = useState(false)
  const dispatch = useDispatch()
  const BlogData = useSelector((store) => store.AppReducer.BlogData)
    console.log( "Blogdata",BlogData)
   

 useEffect(() =>{
   SetLoading(true)
   dispatch(getAllblogData)
   SetLoading(false)
 },[])

   


  return (
    <>
     {
        BlogData.length > 0 && BlogData  && BlogData.map((el) =>{
        
          return    <Box key={el._id}  width={{base:"90vw",md:"90vw",lg:"90vw" }}  m="auto" gap="10">
       
       <Box  display={"flex"}  gap="5" p="4" >

              <Wrap >
                  <WrapItem>
                    <Avatar
                      className="image"
                      m="auto"
                      size={{ base: "md", md: "md", lg: "md" }}
                      // name={el.postedby.name}
                    />
                  </WrapItem>
                </Wrap>        

              <Box justifyContent={"center"} display={"flex"}  gap="5">
                {/* <Text m="auto" mt="3" fontWeight={"600"}> {el?.postedby.name} </Text> */}
                 <Text m="auto" mt="3" > . Saturday  </Text>
                 <Text mt="3" > 30 march </Text>
              </Box>

       </Box>


      <Link to={`/blog/${el._id} `}> 
      
       <Box  display={"flex"} justifyContent={"space-between"} gap="5">

          <Box width={"70vw"}  p="4">

            <Text  textAlign={"start"} fontSize={{base:"1rem",md:"1.5rem",lg:"1.5rem" }} fontWeight={"600"}  noOfLines={{ base: 3, md: 2 }}>  {el.title}  </Text>
                
                <Box display={{ base: "none", md: "block" }} >
              <Text noOfLines={3}  textAlign={"start"} fontSize={{base:".8rem",md:"1rem",lg:"1rem" }} >{el.description} </Text>
                </Box>

               <Box textAlign={"start"} mt="4" mb="4" display={"flex"} >
               <Button justifyContent={"flex-start"} >  View  </Button>
               <Text textAlign={"start"} fontWeight={"600"} ml="4" mt="2">  5 min  </Text>            
               </Box>
          </Box>

               
          <Box > 
                  <Image 
                   borderRadius={"10"}
                marginY="auto"
                  maxW={{ base: "112px", sm: "130px", md: "200px" }}   src={el.pic} />
          </Box>
          
       </Box>
       </Link>
     


      
    <Divider orientation='horizontal' />
    </Box>


        })
        


     }

 
    </>
  )
}

export default Dashboard