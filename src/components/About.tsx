"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Languages,
  Award,
  BookOpen,
  Globe,
  Trophy,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Heading,
  Icon,
  SimpleGrid,
  Badge,
  Button,
} from "@chakra-ui/react";
import { aboutData } from "@/data/about";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function About() {
  const [isFinalPaperExpanded, setIsFinalPaperExpanded] = useState(false);

  return (
    <Box
      as="section"
      id="about"
      py={20}
      bgGradient="linear(to-br, white, gray.50)"
    >
      <Container maxW="7xl">
        <VStack spacing={16} textAlign="center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Heading
              as="h2"
              size="2xl"
              color="gray.900"
              mb={6}
              fontSize={{ base: "4xl", md: "5xl" }}
            >
              About Me
            </Heading>
            <Box
              w="32"
              h="1"
              bgGradient="linear(to-r, blue.600, purple.600)"
              mx="auto"
              borderRadius="full"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {/* Education */}
              <motion.div variants={itemVariants}>
                <Box
                  bg="white"
                  borderRadius="3xl"
                  p={8}
                  shadow="xl"
                  border="1px solid"
                  borderColor="gray.100"
                  _hover={{
                    shadow: "2xl",
                    transform: "translateY(-8px)",
                  }}
                  transition="all 0.5s"
                >
                  <Heading as="h3" size="lg" color="gray.900" mb={6}>
                    Education
                  </Heading>
                  <HStack mb={4}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      w="10"
                      h="10"
                      bgGradient="linear(to-r, blue.600, purple.600)"
                      borderRadius="lg"
                      shadow="md"
                    >
                      <Icon as={GraduationCap} w={5} h={5} color="white" />
                    </Box>
                    <Text
                      color="gray.800"
                      fontWeight="semibold"
                      fontSize="base"
                    >
                      Bachelor's degree in Information Systems
                    </Text>
                  </HStack>
                  <VStack spacing={3} align="stretch">
                    <Text color="gray.700" fontSize="sm" lineHeight="relaxed">
                      {aboutData.education.degree}
                    </Text>
                    <Text color="gray.600" fontSize="sm" fontWeight="medium">
                      {aboutData.education.institution}
                    </Text>
                    <Text color="gray.500" fontSize="xs">
                      {aboutData.education.period}
                    </Text>

                    {/* Final Paper */}
                    <Box
                      mt={4}
                      p={3}
                      bg="blue.50"
                      borderRadius="lg"
                      border="1px solid"
                      borderColor="blue.100"
                    >
                      <HStack justify="space-between" align="flex-start" mb={2}>
                        <Text
                          color="blue.800"
                          fontSize="sm"
                          fontWeight="semibold"
                          flex={1}
                        >
                          Final Paper: {aboutData.education.finalPaper.title}
                        </Text>
                        <Button
                          onClick={() =>
                            setIsFinalPaperExpanded(!isFinalPaperExpanded)
                          }
                          variant="ghost"
                          size="xs"
                          color="blue.600"
                          _hover={{ bg: "blue.100" }}
                          p={1}
                          minW="auto"
                          h="auto"
                        >
                          <Icon
                            as={isFinalPaperExpanded ? ChevronUp : ChevronDown}
                            w={3}
                            h={3}
                          />
                        </Button>
                      </HStack>

                      {/* Expanded Content */}
                      {isFinalPaperExpanded && (
                        <>
                          <Text
                            color="blue.700"
                            fontSize="xs"
                            lineHeight="relaxed"
                            mb={2}
                          >
                            {aboutData.education.finalPaper.description}
                          </Text>
                          <HStack spacing={2} flexWrap="wrap">
                            {aboutData.education.finalPaper.skills.map(
                              (skill, idx) => (
                                <Badge
                                  key={idx}
                                  bg="blue.100"
                                  color="blue.700"
                                  fontSize="xs"
                                  px={2}
                                  py={1}
                                  borderRadius="full"
                                  fontWeight="medium"
                                >
                                  {skill}
                                </Badge>
                              )
                            )}
                          </HStack>
                        </>
                      )}
                    </Box>
                  </VStack>
                </Box>
              </motion.div>

              {/* Languages */}
              <motion.div variants={itemVariants}>
                <Box
                  bg="white"
                  borderRadius="3xl"
                  p={8}
                  shadow="xl"
                  border="1px solid"
                  borderColor="gray.100"
                  _hover={{
                    shadow: "2xl",
                    transform: "translateY(-8px)",
                  }}
                  transition="all 0.5s"
                >
                  <Heading as="h3" size="lg" color="gray.900" mb={6}>
                    Languages
                  </Heading>
                  <VStack spacing={3} align="stretch">
                    <HStack spacing={3} justify="flex-start" w="full">
                      <Box
                        w={2}
                        h={2}
                        bg="green.500"
                        borderRadius="full"
                        flexShrink={0}
                      />
                      <Text color="gray.700" fontWeight="medium" fontSize="sm" textAlign="left">
                        English (Professional working proficiency)
                      </Text>
                    </HStack>
                    <HStack spacing={3} justify="flex-start" w="full">
                      <Box
                        w={2}
                        h={2}
                        bg="green.500"
                        borderRadius="full"
                        flexShrink={0}
                      />
                      <Text color="gray.700" fontWeight="medium" fontSize="sm" textAlign="left">
                        Portuguese (Native proficiency)
                      </Text>
                    </HStack>
                    <HStack spacing={3} justify="flex-start" w="full">
                      <Box
                        w={2}
                        h={2}
                        bg="yellow.500"
                        borderRadius="full"
                        flexShrink={0}
                      />
                      <Text color="gray.700" fontWeight="medium" fontSize="sm" textAlign="left">
                        Spanish (Limited working proficiency)
                      </Text>
                    </HStack>
                  </VStack>
                </Box>
              </motion.div>

              {/* Certifications */}
              <motion.div variants={itemVariants}>
                <Box
                  bg="white"
                  borderRadius="3xl"
                  p={8}
                  shadow="xl"
                  border="1px solid"
                  borderColor="gray.100"
                  _hover={{
                    shadow: "2xl",
                    transform: "translateY(-8px)",
                  }}
                  transition="all 0.5s"
                >
                  <Box mb={6} textAlign="center">
                    <HStack justify="center" spacing={4}>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        w="12"
                        h="12"
                        bgGradient="linear(to-r, purple.600, pink.600)"
                        borderRadius="xl"
                        shadow="lg"
                        _groupHover={{ transform: "scale(1.1)" }}
                        transition="transform 0.3s"
                      >
                        <Icon as={Award} w={6} h={6} color="white" />
                      </Box>
                      <Heading as="h3" size="lg" color="gray.900">
                        Certifications
                      </Heading>
                    </HStack>
                  </Box>
                  <VStack spacing={3} align="stretch">
                    <HStack
                      p={3}
                      bgGradient="linear(to-r, purple.50, pink.50)"
                      borderRadius="xl"
                      align="flex-start"
                    >
                      <Icon
                        as={Trophy}
                        w={4}
                        h={4}
                        color="purple.600"
                        mt={0.5}
                        flexShrink={0}
                      />
                      <Text color="gray.700" fontSize="xs" lineHeight="relaxed">
                        Microfrontends with React: A Complete Developer's Guide
                        (Udemy)
                      </Text>
                    </HStack>
                    <HStack
                      p={3}
                      bgGradient="linear(to-r, purple.50, pink.50)"
                      borderRadius="xl"
                      align="flex-start"
                    >
                      <Icon
                        as={Trophy}
                        w={4}
                        h={4}
                        color="purple.600"
                        mt={0.5}
                        flexShrink={0}
                      />
                      <Text color="gray.700" fontSize="xs" lineHeight="relaxed">
                        NestJS: The Complete Developer's Guide (Udemy)
                      </Text>
                    </HStack>
                    <HStack
                      p={3}
                      bgGradient="linear(to-r, purple.50, pink.50)"
                      borderRadius="xl"
                      align="flex-start"
                    >
                      <Icon
                        as={Trophy}
                        w={4}
                        h={4}
                        color="purple.600"
                        mt={0.5}
                        flexShrink={0}
                      />
                      <Text color="gray.700" fontSize="xs" lineHeight="relaxed">
                        Redux Saga with React: Fast-track Redux Saga intro
                        course (Udemy)
                      </Text>
                    </HStack>
                    <HStack
                      p={3}
                      bgGradient="linear(to-r, purple.50, pink.50)"
                      borderRadius="xl"
                      align="flex-start"
                    >
                      <Icon
                        as={Trophy}
                        w={4}
                        h={4}
                        color="purple.600"
                        mt={0.5}
                        flexShrink={0}
                      />
                      <Text color="gray.700" fontSize="xs" lineHeight="relaxed">
                        Agile Infrastructure with DevOps Practices (SESI
                        SENAI/SC)
                      </Text>
                    </HStack>
                  </VStack>
                </Box>
              </motion.div>
            </SimpleGrid>
          </motion.div>
        </VStack>
      </Container>
    </Box>
  );
}
