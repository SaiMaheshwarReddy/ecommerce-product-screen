import { Flex, Box } from '@chakra-ui/react'
import React from 'react'

const NavBar = () => {
    return (
     <Flex as="ul" ml={[null, null, "1.4rem"]} height="100%" justifyContent="space-between" alignItems="center" color="blue.200" listStyleType="none">
         <Box as="li" height="100%" mx="0.9rem"><Box as="a" height="100%" className="nav-link" cursor="pointer">Collections</Box></Box>
         <Box as="li" height="100%" mx="0.9rem"><Box as="a" height="100%" className="nav-link" cursor="pointer">Men</Box></Box>
         <Box as="li" height="100%" mx="0.9rem"><Box as="a" height="100%" className="nav-link" cursor="pointer">Women</Box></Box>
         <Box as="li" height="100%" mx="0.9rem"><Box as="a" height="100%" className="nav-link" cursor="pointer">About</Box></Box>
         <Box as="li" height="100%" mx="0.9rem"><Box as="a" height="100%" className="nav-link" cursor="pointer">Contact</Box></Box>
     </Flex>
    )
}

export default NavBar
