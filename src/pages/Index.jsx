import React from "react";
import { Box, VStack, Heading, Link, Image, useColorModeValue } from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  const bgGradient = useColorModeValue("linear(to-b, green.200, green.500)", "linear(to-b, green.800, green.900)");
  const linkColor = useColorModeValue("green.800", "green.200");
  const iconColor = useColorModeValue("green.600", "green.400");

  return (
    <Box minHeight="100vh" bgGradient={bgGradient} backgroundImage="https://images.unsplash.com/photo-1574170240473-5733a5b43a3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBvdmVyZ3Jvd24lMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTcxMTk2OTY1M3ww&ixlib=rb-4.0.3&q=80&w=1080" backgroundSize="cover" backgroundPosition="center" display="flex" alignItems="center" justifyContent="center" padding={8}>
      <Box maxWidth="sm" width="full" bg={useColorModeValue("white", "gray.700")} boxShadow="lg" rounded="lg" overflow="hidden" padding={6}>
        <VStack spacing={4} align="center">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1489440543286-a69330151c0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwcGljdHVyZSUyMGluJTIwbmF0dXJlfGVufDB8fHx8MTcxMTk2OTY1M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile" />
          <Heading as="h1" size="xl">
            Still Childhood
          </Heading>
          <VStack spacing={2} align="center">
            <Link href="#" color={linkColor} fontWeight="bold">
              <FaTwitter color={iconColor} /> Twitter
            </Link>
            <Link href="#" color={linkColor} fontWeight="bold">
              <FaInstagram color={iconColor} /> Instagram
            </Link>
            <Link href="#" color={linkColor} fontWeight="bold">
              <FaGithub color={iconColor} /> GitHub
            </Link>
            <Link href="#" color={linkColor} fontWeight="bold">
              <FaLinkedin color={iconColor} /> LinkedIn
            </Link>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Index;
