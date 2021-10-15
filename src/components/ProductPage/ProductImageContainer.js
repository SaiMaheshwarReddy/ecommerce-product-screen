import { Flex, Box, Image, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";
import ImageCarouselContainer from "./ImageCarouselContainer";
import productImg1 from "../../images/image-product-1.jpg";
import productImg2 from "../../images/image-product-2.jpg";
import productImg2thumb from "../../images/image-product-2-thumbnail.jpg";
import productImg3 from "../../images/image-product-3.jpg";
import productImg4 from "../../images/image-product-4.jpg";
import productImg3thumb from "../../images/image-product-3-thumbnail.jpg";
import productImg1thumb from "../../images/image-product-1-thumbnail.jpg";
import productImg4thumb from "../../images/image-product-4-thumbnail.jpg";
import nextIcon from "../../images/icon-next.svg";
import previousIcon from "../../images/icon-previous.svg";

const productImages = [
  {
    productImage: productImg1,
    productThumbnail: productImg1thumb,
  },
  {
    productImage: productImg2,
    productThumbnail: productImg2thumb,
  },
  {
    productImage: productImg3,
    productThumbnail: productImg3thumb,
  },
  {
    productImage: productImg4,
    productThumbnail: productImg4thumb,
  },
];

const ProductImageContainer = () => {
  const [isLessThan320] = useMediaQuery("(min-width: 420px)");
  const [productImage, setProductImage] = useState(
    productImages[0].productImage
  );
  const [slideIndex, setSlideIndex] = useState(1)
  const handleNext = () => {
    console.log("next")
    if(slideIndex !== productImages.length) {
      setSlideIndex(slideIndex + 1)
    } else {
      setSlideIndex(1)
    }
  }

  const handlePrev = () => {
    if(slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else {
      setSlideIndex(productImages.length)
    }
  }
  return isLessThan320 ? (
    <Flex
      direction="column"
      alignItems="center"
      width="100%"
      justifyContent="center"
    >
      <Box width={["100%","100%", "100%", "480px", "540px"]}>
        <Image
          src={productImage}
          height={["420px", "580px", "650px", "490px", "550px"]}
          objectFit="cover"
          objectPosition="center"
          width="100%"
          borderRadius={["none", "none", "none", "15px"]}
        />
      </Box>
      {isLessThan320 && (
        <ImageCarouselContainer
          setProductImage={setProductImage}
          productImages={productImages}
        />
      )}
    </Flex>
  ) : (
    <Box display="flex" width="100%" height="300px" position="relative" overflow="hidden" >
      {/* <Flex
        direction="row"
        width="100%"
        height="240px"
       
      > */}
        {productImages.map((img, i) => (
          <>
            <Box 
            // width={["100%", "480px"]}
                className={slideIndex === i + 1 ? "slide active-anim" : "slide"}
            
            >
              <Image
                src={img.productImage}
                objectFit={["cover"]}
                objectPosition={["center"]}
                width={["100%"]}
                // borderRadius={["none", "15px"]}
              />
            </Box>
            {isLessThan320 && (
              <ImageCarouselContainer
                setProductImage={setProductImage}
                productImages={productImages}
              />
            )}
          </>
        ))}
      {/* </Flex> */}
    <Flex as="button" onClick={() => handleNext()} justifyContent="center" alignItems="center" width="35px" height="35px" position="absolute" transform="translateY(-50%)" borderRadius="50%" bg="white" mr="0.4rem" right="0px" top="50%" >
    <Image src={nextIcon} width="8px" />
    </Flex>
    <Flex as="button" onClick={handlePrev} justifyContent="center" alignItems="center" width="35px" height="35px" position="absolute" transform="translateY(-50%)" borderRadius="50%" bg="white" ml="0.4rem" left="0px" top="50%" >
    <Image src={previousIcon} width="8px" />
    </Flex>
    </Box>
  );
};

export default ProductImageContainer;
