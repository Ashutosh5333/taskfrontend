import { Box, Button, Divider, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Createblog = () => {
    
  return (
    <>
     <Box border="3px solid gray" height="80vh" >
         
         <Box width="90vw" m="auto" display="flex" justifyContent={"space-between"} gap="5" mt="10"> 
           <Text fontSize={"2rem"} fontWeight={"600"}> Publish A Blog </Text>

           <Button p="4"  colorScheme='facebook'  fontSize={"1.2rem"} fontWeight={"600"}> Publish </Button>
         </Box>

         <Divider color={"gray"} width="90vw" m="auto" mt="10" />

       <Box  width="80vw" m="auto"  mt="10">
          <Input variant={"unstyled"} fontSize={"4rem"} placeholder='Topic' />
       </Box>

       <Box  width="80vw" m="auto"  mt="10">
          <Input variant={"unstyled"} fontSize={"2rem"} placeholder='+ Add a Summary' />
       </Box>

       <Box  width="80vw" m="auto"  mt="10">
          <Input variant={"unstyled"} fontSize={"2rem"} placeholder='+ Add a Image' />
       </Box>

      


     </Box>
    </>
  )
}

export default Createblog