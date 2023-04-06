import { Avatar, Box, Button, Divider, Image, Text, Wrap, WrapItem } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetMypost, getDeleteData } from '../../Redux/AppReducer/action';
import {UserSkelton} from "./UserSkeltonlist";




const Userdahboard = () => {
    const dispatch = useDispatch()
    const Mypost = useSelector((store) => store.AppReducer.Mypost)
     console.log(Mypost)
  
   useEffect(() =>{
     dispatch(GetMypost)
   },[])
      
   
   const handledelete = (_id) => {
       dispatch(getDeleteData(_id))
       .then((res) =>{
        console.log(res)
       }).catch((err) =>{
        console.log(err)
       })
   
   }



  return (
    <>
    {
       Mypost.length>0 ?

        Mypost.length > 0 && Mypost.map((el) =>{
        
        return    <Box key={el._id}  width={{base:"90vw",md:"60vw",lg:"70vw" }}  m="auto" gap="10">
     
     <Box  display={"flex"}  gap="5" p="4" >

            <Wrap >
                <WrapItem>
                  <Avatar
                    className="image"
                    m="auto"
                    size={{ base: "md", md: "md", lg: "md" }}
                    name={el.postedby.name}
                  />
                </WrapItem>
              </Wrap>        

            <Box justifyContent={"center"} display={"flex"}  gap="5">
              <Text m="auto" mt="3" fontWeight={"600"}> {el.postedby.name} </Text>
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
        </Box>

             
        <Box > 
                <Image 
                 borderRadius={"10"}
              marginY="auto"
                maxW={{ base: "112px", sm: "130px", md: "200px" }}   src={el.pic} />
        </Box>
        
     </Box>
     </Link>
   

           <Box textAlign={"start"} ml="6" mt="4" mb="4" display={"flex"} >
             <Button  onClick={() => handledelete(el._id)} justifyContent={"flex-start"} colorScheme='red'>  Delete post  </Button>          
             </Box>
    
  <Divider orientation='horizontal' />
  </Box>


      }) 

      : <UserSkelton />
      


   }

    



    </>
  )
}

export default Userdahboard