import { Flex, Box} from "@chakra-ui/react";
import React, { useState } from "react";

const ImageCarouselContainer = ({ setProductImage, productImages }) => {
  const [activeThumb, setActiveThumb] = useState(
    productImages[0].productThumbnail
  );
  const handleClick = (e, img) => {
    // console.log(e.target, "elem");
    // e.target.style.border = "5px solid black"
    setProductImage(img.productImage);
    setActiveThumb(img.productThumbnail);
  };
  return (
    <Box width={["100%", "100%", "100%", "90%", "80%"]} overflowX={["scroll", "scroll", "scroll", "scroll", "hidden"]} className="hideScroll" mt={["0.8rem","0.8rem", "1rem" ,"1.7rem"]}>
    <Flex
   py={["0.5rem", "0.5rem","0.5rem", "0.5rem"]}
      justifyContent="flex-start"
      alignItems="center"
      width={["max-content", "max-content","max-content", "max-content" ]}
    className="hideScroll"
    >
      {productImages.map((img, i) => {
        return (
          <Box
            outline={activeThumb === img.productThumbnail && "3px solid hsl(26, 100%, 55%)"}
            as="button"
            mx={["0.6rem","1rem", "0.9rem", "0.5rem", `${i > 0 && "1rem"}`]}
            width={["60px","75px", "100px", "100px"]}
            bgBlendMode="overlay"
            bgColor={activeThumb === img.productThumbnail && "blue.300"}
            height={["60px","75px", "100px", "100px"]}
            borderRadius="10px"
            onClick={(e) => handleClick(e, img)}
            backgroundSize="cover"
            bgSize="cover"
            bgPos="center"
            bgImg={img.productThumbnail}
            key={img.productImage}
          >
            {/* <Image src={img.productThumbnail}  /> */}
          </Box>
        );
      })}
    </Flex>
    </Box>
  );
};

export default ImageCarouselContainer;
