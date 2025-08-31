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
        <VStack spacing={16} textAlign="center">
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
              w="24"
              h="24"
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
                w="20"
                h="20"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="2xl" fontWeight="bold" color="white">
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
              mb={6}
              fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
              fontWeight="bold"
              lineHeight="tight"
              aria-label="Main heading - Irenio de Aragão"
            >
              Irenio de Aragão
            </Heading>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              color="whiteAlpha.900"
              mb={8}
              maxW="3xl"
              mx="auto"
              lineHeight="relaxed"
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
            <HStack spacing={6} justify="center" flexWrap="wrap">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
                  px={8}
                  py={4}
                  borderRadius="2xl"
                  fontWeight="semibold"
                  transition="all 0.3s"
                  shadow="2xl"
                  aria-label="Connect on LinkedIn"
                >
                  <Icon as={Linkedin} w={5} h={5} mr={3} />
                  Get in Touch
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
                  px={8}
                  py={4}
                  borderRadius="2xl"
                  fontWeight="semibold"
                  transition="all 0.3s"
                  aria-label="View work experience section"
                >
                  <Icon as={Calendar} w={5} h={5} mr={3} />
                  View Experience
                </Button>
              </motion.div>
            </HStack>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <HStack spacing={8} justify="center" mt={8}>
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
                    w="50px"
                    h="50px"
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
                    <Icon as={Linkedin} w={6} h={6} color="white" />
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
                    w="50px"
                    h="50px"
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
                    <Icon as={Github} w={6} h={6} color="white" />
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
