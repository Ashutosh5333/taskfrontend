import React from 'react'
import {Drawer, DrawerBody,DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure,  Avatar, Flex, Text,  } from '@chakra-ui/react'
import { CiUser } from "react-icons/ci";
import { BsBookmarks } from "react-icons/bs";
import { RiFileList2Line,RiStarSFill } from "react-icons/ri";
import { IoMdStats } from "react-icons/io";
import { Link } from 'react-router-dom';

const MenuDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

     const data = JSON.parse(localStorage.getItem("data"))
   

     const handleLogOut = () =>{
         localStorage.clear()
         window.location.reload()
     }


  return (
    <>
     <Avatar ref={btnRef} size={"sm"} colorScheme='teal' onClick={onOpen}>
       
     </Avatar>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
         
          <DrawerBody>
          <Link to="/profile">
              <Flex alignItems="center" mb="20px" gap="10px" color="rgba(117, 117, 117, 1)" cursor="pointer">
                  <CiUser size="1.5em"/>
                  <Text>Profile</Text>
              </Flex>
            </Link>
              <Flex alignItems="center" mb="20px" gap="10px" color="rgba(117, 117, 117, 1)" cursor="pointer">
              <BsBookmarks size="1.5em"/>
                <Text>Lists</Text>
              </Flex>
              <Flex alignItems="center" mb="20px" gap="10px" color="rgba(117, 117, 117, 1)" cursor="pointer">
                <RiFileList2Line size="1.5em"/>
                <Text>Stories</Text>
              </Flex>
              <Flex alignItems="center" mb="20px" gap="10px" color="rgba(117, 117, 117, 1)" cursor="pointer">
                <IoMdStats size="1.5em"/>
                <Text>Stats</Text>
              </Flex>
              <hr/>
              <Text mt="15px" mb="20px" color="rgba(117, 117, 117, 1)" cursor="pointer">Settings</Text>
              <Text mb="20px" color="rgba(117, 117, 117, 1)" cursor="pointer">Refine recommendations</Text>
              <Text mb="20px" color="rgba(117, 117, 117, 1)" cursor="pointer">Manage Publications</Text>
              <hr/>
              <Flex alignItems="center" gap="70px">
                <Text mt="15px" mb="20px" color="rgba(117, 117, 117, 1)" cursor="pointer">Become a member</Text>
                <RiStarSFill size="1.3em" color="#FFD700"/>
              </Flex>
              <Text mb="20px" color="rgba(117, 117, 117, 1)" cursor="pointer">Apply to the Partner Program</Text>
              <Text mb="20px" color="rgba(117, 117, 117, 1)" cursor="pointer">Gift a membership</Text>
              <hr/>
              <Text onClick={handleLogOut} mt="15px" mb="20px" color="rgba(117, 117, 117, 1)" cursor="pointer">Sign out</Text>
              <Text mb="20px" color="rgba(117, 117, 117, 1)" cursor="pointer">{data.email} </Text>
        
          </DrawerBody>

        
        </DrawerContent>
      </Drawer>
    
    
    </>
  )
}

export default MenuDrawer