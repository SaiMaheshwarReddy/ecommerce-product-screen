import { Flex, Heading, Box, Text, Image } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import plusIcon from "../../images/icon-plus.svg";
import minusIcon from "../../images/icon-minus.svg";
import cartIcon from "../../images/icon-cart-white.svg";
import { CartContext } from "../../Context";
import productThumbnail from "../../images/image-product-1-thumbnail.jpg";

const ProductContent = () => {
  const cart = useContext(CartContext);
  const [cartCount, setCartCount] = useState(0);

  const handleDecrementCount = () => {
    if (cartCount !== 0) {
      setCartCount((prevCount) => prevCount - 1);
    }
  };
  const handleIncrementCount = () => {
    setCartCount((prevCount) => prevCount + 1);
  };
  const handleAddCart = () => {
    const cartItemInfo = {
      title: "Fall Limited Edition Sneakers",
      cartItemImg: productThumbnail,
      quantity: cartCount,
      price: 125,
    };
    cart.setCartCount(cartCount);
    if (cartCount > 0) {
      const cartItems = [...cart.cartItem];
      cartItems.push(cartItemInfo);
      cart.setCartItem(cartItems);
    }
  };

  return (
    <Flex direction="column" alignItems="flex-start" justifyContent="center" ml={[0 , 0, 0, 0, "6rem"]}>
      <Text
        color="brand.100"
        fontWeight="bold"
        letterSpacing="2px"
        fontSize={["0.75rem", "1rem", "1.3rem", "1.1rem"]}
      >
        SNEAKER COMPANY
      </Text>
      <Heading
        mt={["0.7rem", "0.8rem", "1rem", "1.6rem", "1.4rem"]}
        fontSize={["1.7rem", "2rem", "2.5rem"]}
      >
        Fall Limited Edition <br /> Sneakers
      </Heading>
      <Text
        mt={["0.7rem", "0.8rem", "1.2rem", "2.6rem", "2rem"]}
        color="blue.200"
        fontSize={["0.8rem", "1.3rem"]}
      >
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </Text>

      <Flex
        justifyContent="flex-start"
        alignItems="center"
        mt={["0.7rem", "1.4rem", "1.8rem", " 2.4rem", "2.4rem"]}
      >
        <Text fontWeight="bold" fontSize={["1.5rem", "1.7rem", "1.8rem", "1.6rem"]}>
          $125.00
        </Text>
        <Box
          as="span"
          ml="1.3rem"
          color="brand.100"
          fontWeight="bold"
          fontSize={["0.8rem", "1rem", "1.2rem", "1rem"]}
          display="inline-block"
          bg="brand.900"
          borderRadius="5px"
          px="10px"
        >
          50%
        </Box>
      </Flex>
      <Text as="s" fontWeight="bold" fontSize="0.95rem" color="blue.300">
        $250.00
      </Text>
      <Flex
        mt="2rem"
        width={["100%", "100%", "100%"]}
        justifyContent="flex-start"
        alignItems="center"
        direction={["column", "column", "row", "row"]}
      >
        <Flex
          bg="blue.400"
          width={["100%", "80%", "200px","200px"]}
          borderRadius="10px"
          py="0.9rem"
          px="1rem"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box as="button"  _hover={{transform: "scale(1.4)", transition: "all 0.4s ease-out"}} onClick={() => handleDecrementCount()}>
            <Image src={minusIcon} width={["12px"]} />
          </Box>
          <Text fontWeight="bold">{cartCount}</Text>
          <Box as="button"  _hover={{transform: "scale(1.4)",transition: "all 0.4s ease-out"}} onClick={() => handleIncrementCount()}>
            <Image src={plusIcon} width={["12px"]} />
          </Box>
        </Flex>
        <Flex
          as="button"
          onClick={() => handleAddCart()}
          ml={["0", "0", "1.2rem"]}
          justifyContent="center"
          mt={["1rem", "1rem", "0", "0rem"]}
          boxShadow="0px 7px 19px #FED2AF"
          alignItems="center"
          fontWeight="bold"
          width={["100%", "80%", "240px"]}
          px="1.2rem"
          borderRadius="10px"
          _hover={{backgroundColor: "rgba(255, 125, 27, 0.754)"}}
          color="white.100"
          py="0.9rem"
          bg="brand.100"
        >
          <Image src={cartIcon} width={["18px", "20px"]} />
          <Text ml={["0.8rem", "0.9rem", "1rem"]} fontSize={["0.9rem", "1rem"]}>
            Add to cart
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductContent;
