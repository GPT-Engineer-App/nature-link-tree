import React from "react";
import { Box } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const FloatingHeart = ({ top, left }) => {
  return (
    <Box
      position="absolute"
      top={top}
      left={left}
      animation="floatUp 2s ease-out forwards"
      opacity={0}
    >
      <FaHeart color="red" size="2rem" />
    </Box>
  );
};

export default FloatingHeart;