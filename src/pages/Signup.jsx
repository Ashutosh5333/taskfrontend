import { Button, Card, CardBody, Input, InputGroup,InputLeftElement, InputRightElement, VStack, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import {  EmailIcon,  UnlockIcon,  ViewIcon,  ViewOffIcon,
} from "@chakra-ui/icons";
import { CiUser } from "react-icons/ci";
import { BsCardImage } from "react-icons/bs";

export const Signup = () => {
  const colorScheme = useColorModeValue("blue", "green");
  const [show, setShow] = useState(false);

  return (
    <>
      <Card  py="3" >
        <CardBody>
          <VStack maxW="2xl" spacing={5}>
          <InputGroup>
          <InputLeftElement 
               pointerEvents="none"
                position="absolute"
                top="1"
                children={<CiUser color="gray" size="23" />} />
          <Input placeholder="Name*"
                type="name"
                name="name"
                size="lg" />
          </InputGroup>

 
          <InputGroup position="relative">
              <InputLeftElement
                pointerEvents="none"
                position="absolute"
                top="1"
                children={<BsCardImage color="gray" size="25" />}
              />
              <Input
                placeholder="Paste URL*"
                type="file"
                name="avatar_url"
                //  display={"none"}
                size="lg"
                accept="image/*"
                sx={{
                  "::file-selector-button": {
                    height: 8,
                    mr: 4,
                    border: "1px solid grey",
                    mt: 2,
                  },
                }}
             
              />
            </InputGroup>
            <InputGroup position="relative">
              <InputLeftElement
                pointerEvents="none"
                position="absolute"
                top="1"
                children={<EmailIcon color="gray.400" boxSize={5} />}
              />
              <Input
                placeholder="Email*"
                type="email"
                name="email"
                size="lg"
             
              />
            </InputGroup>

            <InputGroup position="relative">
              <InputLeftElement
                pointerEvents="none"
                position="absolute"
                top="1"
                children={<UnlockIcon color="gray.400" boxSize={5} />}
              />
              <Input
                type={show ? "text" : "password"}
                placeholder="Password*"
                name="password"
                size="lg"
              
              />
              <InputRightElement width="4.5rem" position="absolute" top="1">
                <Button
                  h="1.75rem"
                  size="sm"
                  variant="link"
        
                >
                  {show ? (
                    <ViewOffIcon color="gray.400" boxSize={5} />
                  ) : (
                    <ViewIcon color="gray.400" boxSize={5} />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button
             
              width="100%"
            colorScheme={colorScheme}
              size="lg"
             
            >
              Signup
            </Button>
          </VStack>
        </CardBody>
      </Card>
  
    </>
  )
}
