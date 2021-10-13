import { Box } from "@chakra-ui/react";
import React from "react";
import ProductContent from "./ProductContent";

const ProductContentContainer = () => {
  return (
    <Box
      pl={["1rem", "1rem", "1rem", "1rem"]}
      pr={["0.8rem", "0.8rem", "0.8rem", "1rem"]}
      mt={["1.2rem", "2rem", "3rem", "0rem"]}
      width="100%"
      height="100%"
    >
      <ProductContent />
    </Box>
  );
};

export default ProductContentContainer;
