import React, { useEffect, useState } from 'react'
import { Avatar, Box, Button, Divider, Text, Image, Wrap, WrapItem } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllblogData } from '../Redux/AppReducer/action'
import Skeltonlist from './Skeltonlist'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  
  const dispatch = useDispatch()

  const BlogData = useSelector((store) => store.AppReducer.BlogData)
 


 useEffect(() =>{
   dispatch(getAllblogData)
 },[])

 


  return (
    <>

     
      {
       BlogData.length> 0 ? 

        BlogData.length > 0   &&  
        BlogData.map((el) =>{
        
          return    <Box key={el._id}  width={{base:"90vw",md:"90vw",lg:"90vw" }}  m="auto" mt="20" gap="10">
       
       <Box  display={"flex"}  gap="5" p="4" >

              <Wrap >
                  <WrapItem>
                    <Avatar
                      m="auto"
                      size={{ base: "md", md: "md", lg: "md" }}
                       src={el.postedby.pic}
                      name={el.postedby.name}
                    />
                  </WrapItem>
                </Wrap>        

              <Box justifyContent={"center"} display={"flex"}  gap="5">
                <Text m="auto" mt="3" fontWeight={"600"}> {el.postedby.name} </Text>
                 <Text m="auto" mt="3" > {new Date(el.createdAt).toDateString()} </Text>
               
              </Box>

       </Box>


      <Link to={`/blog/${el._id} `}> 
      
       <Box  display={"flex"} justifyContent={"space-between"} gap="5">

          <Box width={"70vw"}  p="4">

            <Text  textAlign={"start"} fontSize={{base:"1rem",md:"1.5rem",lg:"1.5rem" }} fontWeight={"600"}  noOfLines={{ base: 3, md: 2 }}>  {el.title}  </Text>
                
                <Box display={{ base: "none", md: "block" }} >
              <Text noOfLines={3}  textAlign={"start"} fontSize={{base:".8rem",md:"1rem",lg:"1rem" }} letterSpacing={2}  >{el.description} </Text>
                </Box>

               <Box textAlign={"start"} mt="4" mb="4" display={"flex"} >
               <Button justifyContent={"flex-start"} >  View  </Button>
  
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
        : <Skeltonlist/>
        
     }

      

    </>
  )
}

export default Dashboard