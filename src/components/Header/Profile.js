import { Flex, Image, Box, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "../../Context";
import cartIcon from "../../images/icon-cart-black.svg";
import profileAvatar from "../../images/image-avatar.png";
import closeIcon from "../../images/icon-close.svg";
import deleteIcon from "../../images/icon-delete.svg";
const Profile = () => {
  const cart = useContext(CartContext);
 const {cartOpen, setCartOpen, setAddCartBtnStatus} = cart

 const handleDelete = (item) => {
   const filteredCart = cart.cartItem.filter((i) => {
     return i.title !== item.title
   })
   cart.setCartItem(filteredCart)
   setAddCartBtnStatus(true)
 }
  return (
    <>
      <Box
        position="absolute"
        minWidth="18rem"
        minHeight={cart.cartItem.length > 0 ? "13rem" : "10rem"}
        bg="white"
        // border="1px solid black"
        borderRadius="3px"
        zIndex="5"
        top={["3.2rem", "3.6rem", "4.7rem"]}
        right="0.5rem"
        m="auto"
        px="1rem"
        className={cartOpen ? "cartOpen" : "cartClose"}
        boxShadow="1px 11px 30px rgba(0, 0, 0, 0.2)"
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          px="1rem"
          py="1rem"
          width="100%"
          boxShadow="0px 2.5px 0px #E8E7EC"
        >
          <Text fontWeight="bold" fontSize="1.1rem">
            Cart
          </Text>
          <Box as="button" onClick={() => setCartOpen(false)}>
            <Image src={closeIcon} width="16px" />
          </Box>
        </Flex>
        {cart.cartItem.length > 0 ? (
          <>
          {cart.cartItem.map((item) => {
            const { title } = item;
            const newTitle =
              title.length > 25 ? title.slice(0, 24) + "..." : title;
            return (
              <Flex
                mx="0.6rem"
                py="1rem"
                justifyContent="center"
                alignItems="center"
              >
                <Image src={item.cartItemImg} width="50px" borderRadius="5px" />
                <Box ml="1.2rem">
                  <Text fontSize="0.7rem" color="blue.200">
                    {newTitle}
                  </Text>
                  <Box>
                    <Text as="span" fontSize="0.85rem" color="blue.200">
                      ${item.price.toFixed(2)}
                    </Text>
                    <Text
                      as="span"
                      ml="0.2rem"
                      fontSize="0.55rem"
                      color="blue.200"
                    >
                      X
                    </Text>
                    <Text
                      as="span"
                      ml="0.2rem"
                      fontSize="0.85rem"
                      color="blue.200"
                    >
                      {item.quantity}
                    </Text>
                    <Text
                      as="span"
                      fontSize="0.9rem"
                      ml="0.4rem"
                      fontWeight="bold"
                    >
                      ${(item.price * item.quantity).toFixed(2)}
                    </Text>
                  </Box>
                </Box>
                <Box as="button" onClick={() => handleDelete(item)}>
                <Image src={deleteIcon} width="0.8rem" ml="1.4rem" />
                </Box>
              </Flex>
            );
          })
          }
        <Box
          as="button"
          width="100%"
          borderRadius="10px"
          _hover={{ backgroundColor: "rgba(255, 125, 27, 0.754)" }}
          color="white.100"
          py="0.4rem"
          mt="0.8rem"
          bg="brand.100"
          fontWeight="bold"
        >
          Checkout
        </Box>
        </>
        ) : (
          <Flex alignItems="center" minHeight="8rem" justifyContent="center">
            <Text as="div" width="100%" height="100%" textAlign="center">
              Your cart is empty.
            </Text>
          </Flex>
        )}
      </Box>
      <Flex justifyContent="center" alignItems="center" mr="0.5rem">
        <Box
          as="button"
          onClick={() => setCartOpen(!cartOpen)}
          position="relative"
        >
          <Image
            src={cartIcon}
            mr={["1.8rem", "2.3rem"]}
            width={["18px", "20px"]}
          />
          <Text
            bg="brand.100"
            color="white"
            fontWeight="bold"
            px={["0.2rem", "0.3rem"]}
            py={["0.06rem", "0.1rem"]}
            // width="14px"
            // height="14px"
            borderRadius="50%"
            position="absolute"
            top="-5px"
            left="8px"
            fontSize={["0.35rem", "0.4rem"]}
          >
            {cart.cartCount}
          </Text>
        </Box>
        <Box
          borderRadius="50px"
          cursor="pointer"
          _hover={{ outline: "3px solid hsl(26, 100%, 55%)" }}
          width={["30px", "36px"]}
        >
          <Image src={profileAvatar} width="100%" />
        </Box>
      </Flex>
    </>
  );
};

export default Profile;
