import { Flex } from "@chakra-ui/react";
import React from "react";
import ProductContainer from "./ProductContainer";

const ProductPage = () => {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center" width={["100%", "100%", "100%", "100%", "80%"]}>
      <ProductContainer />
    </Flex>
  );
};

export default ProductPage;
