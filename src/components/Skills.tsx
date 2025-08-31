"use client";

import { skillsData } from "@/data/skills";
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
} from "@chakra-ui/react";
import {
  Monitor,
  Server,
  Database,
  Cloud,
  Calendar,
  Users,
} from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "frontend":
      return Monitor;
    case "backend":
      return Server;
    case "databases":
      return Database;
    case "cloud":
      return Cloud;
    case "methodologies":
      return Calendar;
    case "soft-skills":
      return Users;
    default:
      return Monitor;
  }
};

const getIconBackground = (iconName: string) => {
  switch (iconName) {
    case "frontend":
      return "linear(to-r, blue.600, cyan.600)";
    case "backend":
      return "linear(to-r, red.600, orange.500)";
    case "databases":
      return "linear(to-r, green.500, teal.600)";
    case "cloud":
      return "linear(to-r, cyan.600, blue.600)";
    case "methodologies":
      return "linear(to-r, orange.500, red.600)";
    case "soft-skills":
      return "linear(to-r, teal.600, green.500)";
    default:
      return "linear(to-r, blue.600, cyan.500)";
  }
};

export function Skills() {
  return (
    <Box as="section" id="skills" py={20} bg="white">
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
              Skills & Technologies
            </Heading>
            <Box
              w="24"
              h="1"
              bgGradient="linear(to-r, blue.600, purple.600)"
              mx="auto"
              borderRadius="full"
            />
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {skillsData.map((category, index) => {
              const IconComponent = getIcon(category.icon);
              return (
                <Box
                  key={index}
                  bgGradient="linear(to-br, gray.50, blue.50)"
                  p={8}
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor="gray.100"
                  _hover={{
                    shadow: "xl",
                    transform: "translateY(-8px)",
                  }}
                  transition="all 0.3s"
                >
                  <HStack mb={6}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      w="12"
                      h="12"
                      bgGradient={getIconBackground(category.icon)}
                      borderRadius="xl"
                      shadow="lg"
                    >
                      <Icon
                        as={IconComponent}
                        w={6}
                        h={6}
                        color="white"
                        filter="drop-shadow(0 1px 2px rgba(0,0,0,0.3))"
                      />
                    </Box>
                    <Heading as="h3" size="md" color="gray.900">
                      {category.title}
                    </Heading>
                  </HStack>
                  <HStack spacing={2} flexWrap="wrap">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        bg="white"
                        color="gray.700"
                        fontSize="sm"
                        px={3}
                        py={1.5}
                        borderRadius="full"
                        fontWeight="medium"
                        shadow="sm"
                        border="1px solid"
                        borderColor="gray.200"
                        _hover={{ shadow: "md", bg: "gray.50" }}
                        transition="all 0.2s"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </HStack>
                </Box>
              );
            })}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
