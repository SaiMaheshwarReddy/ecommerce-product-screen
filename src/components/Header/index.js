import { Flex } from "@chakra-ui/layout";
import React from "react";
import NavContainer from "./NavContainer";
import Profile from "./Profile";

const Header = () => {
  return (
    <Flex
      position={["relative", "relative"]}
      height={["50px", "60px", "90px"]}
      px="0.5rem"
      width={["100vw", "100vw", "100vw", "90vw", "80vw"]}
      boxShadow="0px 2.5px 0px #E8E7EC"
      justifyContent="space-between"
      alignItems="center"
    >
      <NavContainer />
      <Profile />
    </Flex>
  );
};

export default Header;
