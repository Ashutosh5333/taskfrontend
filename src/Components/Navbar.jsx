import React, { useState } from "react";
import {  Box,  Flex,  IconButton,  useColorMode,  useDisclosure,Stack,  Text,  Input,} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import MenuDrawer from "./Drawer/MenuDrawer";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";



const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();
  const token = JSON.parse(localStorage.getItem("token"));
  const data = JSON.parse(localStorage.getItem("data"));



  return (
    <>
      <Box
        px={4}
        className="ChackraNavBar"
        shadow="2xl"
        borderBottom={{ base: "0px", md: "1px solid black" }}
        padding="10px"
        position={"relative"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            color="black"
            size="md"
            bg="white"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize="30px" />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <Flex
            width={{ base: "20%", md: "13%", lg: "10%" }}
            justifyContent={"center"}
          >
            <Link to="/">
              <Text fontSize={"1.2rem"} fontWeight={"600"}> Blog </Text>
            </Link>
          </Flex>

          <Flex
            as={"nav"}
            spacing={4}
            display={{ base: "none", md: "flex" }}
            gap="10px"
            w={{ base: "", md: "90%", lg: "95%" }}
            justifyContent="space-around"
            alignItems="center"
            padding="10px"
          >
            <Flex
              width={{ base: "0", md: "60%", lg: "65%" }}
              border={"1px solid black"}
              padding="5px"
              alignItems="center"
            >
              <Text ml="10px">
                <BsSearch />
              </Text>
              <Input
                borderRadius="0px"
                border="0px"
                placeholder="SEARCH "
                
                variant="unstyled"
                padding="5px"
              />
            </Flex>

            <Flex
              width={{ base: "", md: "25%", lg: "15%" }}
              justifyContent="space-around"
              fontSize="25px"
            >
              <Link to={"/creteb"}>
                <Text fontSize={"1.2rem"} fontWeight="600">
                  
                  Write
                </Text>
              </Link>

              {token ? (
                <MenuDrawer />
              ) : (
                <Link to={"/singtab"}>
                  <Text fontSize={"1.2rem"} fontWeight="600">
                    
                    Login
                  </Text>
                </Link>
              )}

              <Text onClick={toggleColorMode} fontSize={"1.2rem"}>
                {" "}
                {colorMode === "light" ? (
                  <MoonIcon color="Dark" />
                ) : (
                  <SunIcon color="Light" />
                )}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>

               <Link to={"/creteb"}>
                <Text fontSize={"1.2rem"} fontWeight="600">
                  Write
                </Text>
              </Link>

              <Link to="/profile">
                <Text  fontSize={"1.2rem"} fontWeight="600"> profile</Text>{" "}
              </Link>

              <Link to="/singtab">
                {token ? (
                  <MenuDrawer />
                ) : (
                  <Link to={"/singtab"}>
                    <Text fontSize={"1.2rem"} fontWeight="600">
                      {" "}
                      Login{" "}
                    </Text>
                  </Link>
                )}
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
