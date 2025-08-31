"use client";

import { motion } from "framer-motion";
import { Calendar, Github, Linkedin, Mail, Download } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Button,
  Icon,
  Heading,
} from "@chakra-ui/react";
import { contactData } from "@/data/contact";

export function Hero() {
  return (
    <Box
      as="section"
      id="hero"
      minH="100vh"
      bgGradient="linear(to-br, gray.900, purple.900, gray.900)"
      position="relative"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Animated background elements */}
      <Box position="absolute" inset={0}>
        <Box
          position="absolute"
          top="20"
          left="20"
          w="72"
          h="72"
          bg="purple.500"
          borderRadius="full"
          mixBlendMode="multiply"
          filter="blur(40px)"
          opacity={0.2}
          sx={{
            animation: "blob 7s infinite",
          }}
        />
        <Box
          position="absolute"
          top="40"
          right="20"
          w="72"
          h="72"
          bg="blue.500"
          borderRadius="full"
          mixBlendMode="multiply"
          filter="blur(40px)"
          opacity={0.2}
          sx={{
            animation: "blob 7s infinite 2s",
          }}
        />
        <Box
          position="absolute"
          bottom="-8"
          left="40"
          w="72"
          h="72"
          bg="pink.500"
          borderRadius="full"
          mixBlendMode="multiply"
          filter="blur(40px)"
          opacity={0.2}
          sx={{
            animation: "blob 7s infinite 4s",
          }}
        />
      </Box>

      <Container maxW="7xl" position="relative" zIndex={10}>
        <VStack spacing={{ base: 8, md: 16 }} textAlign="center" py={{ base: 8, md: 0 }} pb={{ base: 12, md: 0 }}>
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Box
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w={{ base: "20", md: "24" }}
              h={{ base: "20", md: "24" }}
              bgGradient="linear(to-r, blue.500, purple.500, pink.500)"
              borderRadius="full"
              shadow="2xl"
              position="relative"
            >
              <Box
                position="absolute"
                inset={0}
                borderRadius="full"
                bgGradient="linear(to-r, blue.500, purple.500, pink.500)"
                sx={{
                  animation: "spin 3s linear infinite",
                }}
              />
              <Box
                position="relative"
                bg="gray.900"
                borderRadius="full"
                w={{ base: "16", md: "20" }}
                h={{ base: "16", md: "20" }}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="white">
                  I A
                </Text>
              </Box>
            </Box>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Heading
              as="h1"
              size="4xl"
              color="white"
              mb={{ base: 4, md: 6 }}
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl", xl: "7xl" }}
              fontWeight="bold"
              lineHeight="tight"
              aria-label="Main heading - Irenio de Aragão"
            >
              Irenio de Aragão
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              color="whiteAlpha.900"
              mb={{ base: 6, md: 8 }}
              maxW="3xl"
              mx="auto"
              lineHeight="relaxed"
              px={{ base: 4, md: 0 }}
              aria-label="Professional title and summary"
            >
              Senior Full Stack Engineer passionate about creating innovative
              solutions and delivering exceptional user experiences
            </Text>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <VStack spacing={{ base: 4, md: 6 }} justify="center" w="full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                w="full"
              >
                <Button
                  as="a"
                  href={`https://${
                    contactData.urls.find((u) => u.label === "LinkedIn")?.url
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                  bgGradient="linear(to-r, blue.600, purple.600)"
                  _hover={{
                    bgGradient: "linear(to-r, blue.700, purple.700)",
                    shadow: "2xl",
                  }}
                  color="white"
                  px={{ base: 6, md: 8 }}
                  py={{ base: 3, md: 4 }}
                  borderRadius="2xl"
                  fontWeight="semibold"
                  transition="all 0.3s"
                  shadow="2xl"
                  aria-label="Connect on LinkedIn"
                  w={{ base: "full", md: "auto" }}
                  maxW={{ base: "280px", md: "none" }}
                >
                  <Icon as={Linkedin} w={{ base: 4, md: 5 }} h={{ base: 4, md: 5 }} mr={{ base: 2, md: 3 }} />
                  Get in Touch
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                w="full"
              >
                <Button
                  onClick={() => {
                    const element = document.getElementById("experience");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  bg="whiteAlpha.100"
                  backdropFilter="blur(10px)"
                  _hover={{ bg: "whiteAlpha.200" }}
                  color="white"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  px={{ base: 6, md: 8 }}
                  py={{ base: 3, md: 4 }}
                  borderRadius="2xl"
                  fontWeight="semibold"
                  transition="all 0.3s"
                  aria-label="View work experience section"
                  w={{ base: "full", md: "auto" }}
                  maxW={{ base: "280px", md: "none" }}
                >
                  <Icon as={Calendar} w={{ base: 4, md: 5 }} h={{ base: 4, md: 5 }} mr={{ base: 2, md: 3 }} />
                  View Experience
                </Button>
              </motion.div>
            </VStack>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <HStack spacing={{ base: 6, md: 8 }} justify="center" mt={{ base: 6, md: 8 }}>
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`https://${
                    contactData.urls.find((u) => u.label === "LinkedIn")?.url
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  aria-label="Visit LinkedIn profile"
                >
                  <Box
                    w={{ base: "44px", md: "50px" }}
                    h={{ base: "44px", md: "50px" }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="whiteAlpha.100"
                    backdropFilter="blur(10px)"
                    borderRadius="2xl"
                    _hover={{ bg: "whiteAlpha.200" }}
                    transition="all 0.3s"
                    border="1px solid"
                    borderColor="whiteAlpha.100"
                    cursor="pointer"
                    role="button"
                    tabIndex={0}
                  >
                    <Icon as={Linkedin} w={{ base: 5, md: 6 }} h={{ base: 5, md: 6 }} color="white" />
                  </Box>
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`https://${
                    contactData.urls.find((u) => u.label === "GitHub")?.url
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  aria-label="Visit GitHub profile"
                >
                  <Box
                    w={{ base: "44px", md: "50px" }}
                    h={{ base: "44px", md: "50px" }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="whiteAlpha.100"
                    backdropFilter="blur(10px)"
                    borderRadius="2xl"
                    _hover={{ bg: "whiteAlpha.200" }}
                    transition="all 0.3s"
                    border="1px solid"
                    borderColor="whiteAlpha.100"
                    cursor="pointer"
                    role="button"
                    tabIndex={0}
                  >
                    <Icon as={Github} w={{ base: 5, md: 6 }} h={{ base: 5, md: 6 }} color="white" />
                  </Box>
                </a>
              </motion.div>
            </HStack>
          </motion.div>
        </VStack>
      </Container>
    </Box>
  );
}
