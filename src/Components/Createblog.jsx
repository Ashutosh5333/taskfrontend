import { Box, Button, Divider, Input, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Addblogs } from '../Redux/AppReducer/action'

const Createblog = () => {
   const dispatch = useDispatch()
   const toast = useToast()
   const [post ,SetPost] =useState({
      title:"",
      description:"",
      pic:"",
   })  

    const handleChange = (e) =>{
      const {name ,value} = e.target
      SetPost({...post,[name]:value})
    }
   

     const handleSubmit = () =>{
      dispatch(Addblogs(post))
        .then((res) =>{
          console.log(res)
          toast({
            position:"top",
            status : "success",
            title:"Blog Added Successfully"
           })
        }).catch((err) =>{
          console.log(err)
        })
      
     }


  return (
    <>
     <Box  maxH="500px">
         
         <Box width="90vw" m="auto" display="flex" justifyContent={"space-between"} gap="5" mt="10"> 
           <Text fontSize={{base:"1.5rem",md:"1.5rem",lg:"2rem" }} fontWeight={"600"}> Publish A Blog </Text>

           <Button p="4"  onClick={handleSubmit}  colorScheme='facebook'  fontSize={"1.2rem"} fontWeight={"600"}> Publish </Button>
         </Box>

         <Divider color={"gray"} width="90vw" m="auto" mt="10" />

       <Box  width="80vw" m="auto"  mt="10">
          <Input variant={"unstyled"} name="title"
           onChange={handleChange}
           fontSize={{base:"1.5rem",md:"1.5rem",lg:"3.4rem" }} placeholder='Topic' />
       </Box>

       <Box  width="80vw" m="auto"  mt="10">
          <Input variant={"unstyled"} 
           onChange={handleChange}
          name="description" fontSize={{base:"1.5rem",md:"1.5rem",lg:"2rem" }} placeholder='+ Add a Summary' />
       </Box>

       <Box  width="80vw" m="auto"  mt="10">
          <Input variant={"unstyled"} name="pic"
           onChange={handleChange}
           fontSize={{base:"1.5rem",md:"1.5rem",lg:"2rem" }} placeholder='+ Add a Image' />
       </Box>

      


     </Box>
    </>
  )
}

export default Createblog