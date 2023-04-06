import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Box,
  Button,
  Input,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { EditblogData, getSingleblogData } from "../../Redux/AppReducer/action";

const UserEdit = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
   const dispatch = useDispatch()
  const {id} = useParams()

    const [post,SetPost] = useState({
         description:"",
    })

    const [single ,Setsingle] = useState()

    useEffect(() =>{
        dispatch(getSingleblogData(id)).then((res) =>{
           Setsingle(res.payload)
        })
       },[id])
   
      const handleChange = (e) =>{
          const {name,value}= e.target
          SetPost({...post,[name]:value})
      }

    const handleupdated = (_id) => {
        // console.log("hello")
         dispatch(EditblogData(_id,post))
         .then((res) =>{
            console.log(res)
         }).catch((err) =>{
            console.log(err)
         })
    }


  return (
    <>
      <Box
        ref={finalRef}
        tabIndex={-1}
        aria-label="Focus moved to this box"
      ></Box>

      <Button onClick={onOpen}>Edit</Button>

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width={{ base: "80%", md: "80%", lg: "90%" }} p="6">
          <ModalBody>
            <Box textAlign={"center"}>
              <Heading mb="4"> Updated Description </Heading>

              <Text noOfLines={3}  textAlign={"start"} fontSize={{base:".8rem",md:"1rem",lg:"1.2rem" }} letterSpacing={2}  >{single?.description} </Text>

              <Input placeholder="Description" 
               name="description"
                onChange={handleChange}
               fontSize={"1.2rem"} variant={"unstyled"} />

              <Divider orientation="horizontal" />

              <Box display="flex" justifyContent={"space-evenly"} mt="6">
                <Button p={5} fontWeight="600" colorScheme="red" onClick={onClose}>
                  Cancel
                </Button>
                <Button  onClick={() =>handleupdated(single?._id) } p={5} fontWeight="600" colorScheme="blue" >
                   Updated
                </Button>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserEdit;
