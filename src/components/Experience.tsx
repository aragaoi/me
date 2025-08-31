"use client";

import { useState } from "react";
import { experienceData } from "@/data/experience";
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Heading,
  Icon,
  Badge,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import {
  Building2,
  Calendar,
  MapPin,
  Trophy,
  Code,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export function Experience() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };
  return (
    <Box
      as="section"
      id="experience"
      py={20}
      bgGradient="linear(to-br, gray.50, blue.50)"
    >
      <Container maxW="7xl">
        <VStack spacing={16} textAlign="center">
          <Box>
            <Heading
              as="h2"
              size="2xl"
              color="gray.900"
              mb={6}
              fontSize={{ base: "4xl", md: "5xl" }}
            >
              Professional Experience
            </Heading>
            <Box
              w="24"
              h="1"
              bgGradient="linear(to-r, blue.600, purple.600)"
              mx="auto"
              borderRadius="full"
            />
          </Box>

          <VStack spacing={8} align="center">
            {experienceData.map((job, index) => (
              <Box
                key={index}
                bg="white"
                borderRadius="2xl"
                shadow="lg"
                border="1px solid"
                borderColor="gray.100"
                p={8}
                maxW={{ base: "full", md: "4xl", lg: "5xl" }}
                w="full"
                _hover={{
                  shadow: "2xl",
                  transform: "translateY(-4px)",
                }}
                transition="all 0.3s"
              >
                <HStack
                  flexDirection={{ base: "column", md: "row" }}
                  alignItems={{ base: "flex-start", md: "center" }}
                  justifyContent={{ base: "flex-start", md: "space-between" }}
                  mb={6}
                  w="full"
                >
                  <Box flex="1" minW="0">
                    <Heading
                      as="h3"
                      size="md"
                      color="gray.900"
                      mb={2}
                      textAlign="center"
                      _groupHover={{ color: "blue.600" }}
                      transition="colors"
                    >
                      {job.title}
                    </Heading>
                    <HStack color="gray.600" mb={2}>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        w="8"
                        h="8"
                        bg="blue.100"
                        borderRadius="lg"
                        mr={3}
                      >
                        <Icon as={Building2} w={4} h={4} color="blue.600" />
                      </Box>
                      <Text fontWeight="semibold">{job.company}</Text>
                    </HStack>
                  </Box>

                  <VStack
                    alignItems={{ base: "flex-start", md: "flex-end" }}
                    spacing={2}
                    mt={{ base: 4, md: 0 }}
                  >
                    <HStack color="gray.600">
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        w="6"
                        h="6"
                        bg="green.100"
                        borderRadius="lg"
                        mr={2}
                      >
                        <Icon as={Calendar} w={3} h={3} color="green.600" />
                      </Box>
                      <Text fontSize="sm" fontWeight="medium">
                        {job.period}
                      </Text>
                    </HStack>
                    <HStack color="gray.600">
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        w="6"
                        h="6"
                        bg="purple.100"
                        borderRadius="lg"
                        mr={2}
                      >
                        <Icon as={MapPin} w={3} h={3} color="purple.600" />
                      </Box>
                      <Text fontSize="sm" fontWeight="medium">
                        {job.location}
                      </Text>
                    </HStack>
                  </VStack>
                </HStack>

                {/* Technologies - Always visible */}
                <Box mb={4}>
                  <HStack mb={3}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      w="6"
                      h="6"
                      bg="indigo.100"
                      borderRadius="lg"
                      mr={2}
                    >
                      <Icon as={Code} w={3} h={3} color="indigo.600" />
                    </Box>
                    <Text fontWeight="semibold" color="gray.900">
                      Technologies:
                    </Text>
                  </HStack>
                  <Box display="flex" flexWrap="wrap" gap={2}>
                    {job.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        bgGradient="linear(to-r, blue.100, indigo.100)"
                        color="blue.800"
                        fontSize="xs"
                        px={3}
                        py={1.5}
                        borderRadius="full"
                        fontWeight="medium"
                        border="1px solid"
                        borderColor="blue.200"
                        flexShrink={0}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </Box>
                </Box>

                {/* Expand/Collapse Button */}
                <Box textAlign="center" mb={4}>
                  <Button
                    onClick={() => toggleCard(index)}
                    variant="ghost"
                    size="sm"
                    color="blue.600"
                    _hover={{ bg: "blue.50" }}
                    rightIcon={
                      expandedCards.has(index) ? (
                        <Icon as={ChevronUp} w={4} h={4} />
                      ) : (
                        <Icon as={ChevronDown} w={4} h={4} />
                      )
                    }
                  >
                    {expandedCards.has(index) ? "Show Less" : "Show More"}
                  </Button>
                </Box>

                {/* Detailed Content - Only show when expanded */}
                {expandedCards.has(index) && (
                  <>
                    {/* Key Achievements */}
                    {job.keyAchievements && job.keyAchievements.length > 0 && (
                      <Box mb={6}>
                        <HStack mb={3}>
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            w="6"
                            h="6"
                            bg="yellow.100"
                            borderRadius="lg"
                            mr={2}
                          >
                            <Icon as={Trophy} w={3} h={3} color="yellow.600" />
                          </Box>
                          <Text fontWeight="semibold" color="gray.900">
                            Key Achievements:
                          </Text>
                        </HStack>
                        <List spacing={3}>
                          {job.keyAchievements.map((achievement, idx) => (
                            <ListItem
                              key={idx}
                              display="flex"
                              alignItems="flex-start"
                            >
                              <ListIcon
                                as={() => (
                                  <Box
                                    w="1.5"
                                    h="1.5"
                                    bg="yellow.500"
                                    borderRadius="full"
                                    mt={2}
                                    flexShrink={0}
                                    mr={3}
                                  />
                                )}
                              />
                              <Text
                                fontSize="sm"
                                color="gray.700"
                                lineHeight="relaxed"
                              >
                                {achievement}
                              </Text>
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    )}

                    {/* Responsibilities */}
                    <Box mb={6}>
                      <HStack mb={3}>
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          w="6"
                          h="6"
                          bg="green.100"
                          borderRadius="lg"
                          mr={2}
                        >
                          <Icon
                            as={CheckCircle}
                            w={3}
                            h={3}
                            color="green.600"
                          />
                        </Box>
                        <Text fontWeight="semibold" color="gray.900">
                          Responsibilities:
                        </Text>
                      </HStack>
                      <List spacing={3}>
                        {job.achievements.map((achievement, idx) => (
                          <ListItem
                            key={idx}
                            display="flex"
                            alignItems="flex-start"
                          >
                            <ListIcon
                              as={() => (
                                <Box
                                  w="1.5"
                                  h="1.5"
                                  bg="blue.500"
                                  borderRadius="full"
                                  mt={2}
                                  flexShrink={0}
                                  mr={3}
                                />
                              )}
                            />
                            <Text
                              fontSize="sm"
                              color="gray.700"
                              lineHeight="relaxed"
                            >
                              {achievement}
                            </Text>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </>
                )}
              </Box>
            ))}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
