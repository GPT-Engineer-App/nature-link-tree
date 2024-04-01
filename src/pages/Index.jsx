import React from "react";
import { Box, VStack, Heading, Link, Image, useColorModeValue } from "@chakra-ui/react";
import { FaYoutube, FaInstagram, FaTiktok, FaDiscord } from "react-icons/fa";

const Index = () => {
  const bgGradient = useColorModeValue("linear(to-b, green.200, green.500)", "linear(to-b, green.800, green.900)");
  const linkColor = useColorModeValue("green.800", "green.200");
  const iconColor = useColorModeValue("green.600", "green.400");

  return (
    <Box minHeight="100vh" bgGradient={bgGradient} backgroundImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" backgroundSize="cover" backgroundPosition="center" display="flex" alignItems="center" justifyContent="center" padding={8}>
      <Box
        maxWidth="sm"
        width="full"
        bg={useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(55, 65, 81, 0.8)")}
        boxShadow="lg"
        rounded="lg"
        overflow="hidden"
        padding={6}
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1611095973362-88e8e2557e58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvdmVyZ3Jvd24lMjB2aW5lc3xlbnwwfHx8fDE2ODEyMzQ1Njd8MA&ixlib=rb-4.0.3&q=80&w=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
          zIndex: -1,
        }}
        _after={{
          content: '""',
          position: "absolute",
          top: "-10px",
          left: "-10px",
          right: "-10px",
          bottom: "-10px",
          border: "2px solid",
          borderColor: useColorModeValue("green.500", "green.300"),
          borderRadius: "lg",
          zIndex: -1,
        }}
      >
        <VStack spacing={4} align="center">
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://images.unsplash.com/photo-1489440543286-a69330151c0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwcGljdHVyZSUyMGluJTIwbmF0dXJlfGVufDB8fHx8MTcxMTk2OTY1M3ww&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Profile"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "md",
            }}
          />
          <Heading as="h1" size="xl">
            Still Childhood
          </Heading>
          <VStack spacing={2} align="center">
            <Link
              href="#"
              color={linkColor}
              fontWeight="bold"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "md",
              }}
            >
              <FaYoutube color={iconColor} style={{ marginRight: "8px" }} /> YouTube
            </Link>
            <Link
              href="#"
              color={linkColor}
              fontWeight="bold"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "md",
              }}
            >
              <FaTiktok color={iconColor} style={{ marginRight: "8px" }} /> TikTok
            </Link>
            <Link
              href="https://www.instagram.com/still.childhood/?igsh=M2syNGhpM3p4Y2s3"
              color={linkColor}
              fontWeight="bold"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "md",
              }}
            >
              <FaInstagram color={iconColor} style={{ marginRight: "8px" }} /> Instagram
            </Link>
            <Link
              href="https://www.instagram.com/still.childhood/?igsh=M2syNGhpM3p4Y2s3"
              color={linkColor}
              fontWeight="bold"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "md",
              }}
            >
              <FaInstagram color={iconColor} style={{ marginRight: "8px" }} /> Instagram
            </Link>
            <Link
              href="https://www.instagram.com/still.childhood/?igsh=M2syNGhpM3p4Y2s3"
              color={linkColor}
              fontWeight="bold"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "md",
              }}
            >
              <FaInstagram color={iconColor} style={{ marginRight: "8px" }} /> Instagram
            </Link>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Index;
