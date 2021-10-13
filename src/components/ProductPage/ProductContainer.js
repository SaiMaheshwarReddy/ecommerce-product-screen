import { Flex } from "@chakra-ui/layout";
import React from "react";
import ProductContentContainer from "./ProductContentContainer";
import ProductImageContainer from "./ProductImageContainer";

const ProductContainer = () => {
  return (
    <Flex
      justifyContent="center"
      direction={["column", "column", "column", "row"]}
      alignItems="center"
      mt={["0", "0", "0", "3rem"]}
      mb="4rem"
      width={["100%", "100%","100%", "90%"]}
      height="100%"
    >
      <ProductImageContainer />
      <ProductContentContainer />
    </Flex>
  );
};

export default ProductContainer;
