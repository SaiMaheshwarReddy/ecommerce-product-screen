import { Flex, Box } from "@chakra-ui/layout";
import React from "react";

const MobileNav = ({ navOpen, setNavOpen }) => {
  return (
    <>
    <Box onClick={() => navOpen && setNavOpen(false)} className={ navOpen  && "light-boxshadow nav-open" }></Box>
    <Flex
      as="ul"
      width={["60%", "60%"]}
      height={["100vh"]}
      bg={["white"]}
      className={navOpen ? "nav-open" : "nav-close"}
      ml={[null, null, "2.5rem"]}
      direction={["column"]}
      top={["0px"]}
      left={["0px"]}
      position={["absolute"]}
      justifyContent="flex-start"
      alignItems="center"
      color={["black", "black", "blue.200"]}
      listStyleType="none"
    >
      <Flex
        mt={["45px", "55px"]}        // fontWeight="bold"
        // color="white"
        width={["100%"]}
        direction="column"
        justifyContent="center"
        alignItems="start"
        fontSize={["0.85rem", "1.1rem"]}
        fontWeight="bold"
      >
        <Box as="li" mx="0.9rem" mt="0.6rem">
          <Box href="#" as="a">
            Collections
          </Box>
        </Box>
        <Box as="li" mx="0.9rem" mt="0.8rem">
          <Box as="a">Men</Box>
        </Box>
        <Box as="li" mx="0.9rem" mt="0.8rem">
          <Box as="a">Women</Box>
        </Box>
        <Box as="li" mx="0.9rem" mt="0.8rem">
          <Box as="a">About</Box>
        </Box>
        <Box as="li" mx="0.9rem" mt="0.8rem">
          <Box as="a">Contact</Box>
        </Box>
      </Flex>
    </Flex>
    </>
  );
};

export default MobileNav;
