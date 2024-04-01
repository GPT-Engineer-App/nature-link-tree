import React from "react";
import { Box } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const FloatingHeart = ({ top, left }) => {
  return (
    <Box
      position="absolute"
      top={top}
      left={left}
      animation="float 2s ease-in-out infinite"
      zIndex={10}
    >
      <FaHeart color="red" size="24px" />
    </Box>
  );
};

export default FloatingHeart;