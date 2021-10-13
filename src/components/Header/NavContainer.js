import { Box, Flex, Image,useMediaQuery } from '@chakra-ui/react'
import React, { useState } from 'react'
import logoImg from "../../images/logo.svg"
import openMenuIcon from "../../images/icon-menu.svg"
import closeMenuIcon from "../../images/icon-close.svg"
import MobileNav from './MobileNav'
import NavBar from './NavBar'

const NavContainer = () => {
    const [isLessThan320] = useMediaQuery("(min-width: 768px)")
    const [navOpen, setNavOpen] = useState(false)
    const handleToggle = () => {
        console.log("toggle")
setNavOpen(!navOpen)
    }
    return (
       <Flex justifyContent={["flex-start", "flex-start", "flex-start","flex-start"]} width="100%" alignItems="center" ml="0.6rem" height="100%">
            {!isLessThan320 && <Box as="button" zIndex={3} onClick={handleToggle}>
            {navOpen ?   <Image src={closeMenuIcon} width={["15px", "18px"]} /> : <Image src={openMenuIcon} width={["15px", "20px"]} />}
                {/* <Box width="24px" borderRadius="12px" bg="black.100" height="3px"></Box>
                <Box width="24px" mt="0.19rem" borderRadius="12px" bg="black.100" height="3px"></Box>
                <Box width="24px" mt="0.19rem" borderRadius="12px" bg="black.100" height="3px"></Box> */}
            </Box>}
            <Box>
            <Image src={logoImg} ml={["0.95rem", "1.3rem", "0.5rem"]} width={["110px", "125px", "145px"]} />
            </Box>
            {/* <Box onClick={() => navOpen && setNavOpen(false)} className={ navOpen  && "light-boxshadow"}></Box> */}
            {isLessThan320 ? <NavBar /> : <MobileNav navOpen={navOpen} setNavOpen={setNavOpen} />}
       </Flex>
    )
}

export default NavContainer
