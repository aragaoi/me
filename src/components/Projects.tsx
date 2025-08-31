"use client";

import { useEffect, useState } from "react";
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
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { Github } from "lucide-react";
import { contactData } from "@/data/contact";
import {
  fetchGitHubRepos,
  fetchRepoTopics,
  GitHubRepo,
} from "@/services/github";

// Static fallback projects based on actual GitHub repositories
const fallbackProjects = [
  {
    id: "me",
    name: "Portfolio Website",
    description: "Modern, responsive portfolio built with Next.js, TypeScript, and Chakra UI. Features internationalization, dark mode, and responsive design.",
    language: "TypeScript",
    topics: ["Next.js", "React", "TypeScript", "Chakra UI", "i18n", "Portfolio"],
    html_url: "https://github.com/aragaoi/me",
  },
  {
    id: "context-storage",
    name: "Context Storage",
    description: "Generic AsyncLocalStorage wrapper for context management in Node.js applications. Provides a clean API for managing async context across function calls.",
    language: "TypeScript",
    topics: ["Node.js", "TypeScript", "AsyncLocalStorage", "Context Management", "Utility"],
    html_url: "https://github.com/aragaoi/context-storage",
  },
  {
    id: "folder-cleaner",
    name: "Folder Cleaner",
    description: "A smart folder cleaner that detects and helps clean up sensitive files on Unix-like systems. Built with Python for system administration tasks.",
    language: "Python",
    topics: ["Python", "System Administration", "File Management", "Security", "Unix"],
    html_url: "https://github.com/aragaoi/folder-cleaner",
  },
  {
    id: "card-game-api",
    name: "Card Game API",
    description: "An API to handle decks and cards to be used in any card game. Provides card management, shuffling, and game logic functionality.",
    language: "TypeScript",
    topics: ["TypeScript", "API", "Card Games", "Game Logic", "Backend"],
    html_url: "https://github.com/aragaoi/card-game-api",
  },
];

export function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true);
        const username = contactData.urls
          .find((u) => u.label === "GitHub")
          ?.url.split("/")[1];
        if (!username) {
          throw new Error("GitHub username not found");
        }

        const reposData = await fetchGitHubRepos(username);

        // Fetch topics for each repo
        const reposWithTopics = await Promise.all(
          reposData.map(async (repo) => {
            const topics = await fetchRepoTopics(username, repo.name);
            return { ...repo, topics };
          })
        );

        setRepos(reposWithTopics);
      } catch (err) {
        console.error("Error loading projects:", err);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  const renderProjectCard = (project: any) => (
    <Box
      key={project.id || project.name}
      bg="white"
      borderRadius="2xl"
      p={8}
      shadow="lg"
      border="1px solid"
      borderColor="gray.100"
      _hover={{
        shadow: "2xl",
        transform: "translateY(-8px)",
      }}
      transition="all 0.3s"
    >
      <Box mb={6}>
        <Heading as="h3" size="lg" color="gray.900" mb={3} textAlign="center">
          {project.name}
        </Heading>
        <Text color="gray.600" mb={4} lineHeight="relaxed" textAlign="center">
          {project.description}
        </Text>
      </Box>

      {/* Language */}
      {project.language && (
        <Box textAlign="center" mb={4}>
          <Badge
            colorScheme="blue"
            variant="subtle"
            fontSize="sm"
            px={3}
            py={1}
          >
            {project.language}
          </Badge>
        </Box>
      )}

      {/* Topics/Tags */}
      {project.topics && project.topics.length > 0 && (
        <Box mb={6}>
          <HStack spacing={2} flexWrap="wrap" justify="center">
            {project.topics.slice(0, 5).map((topic: string, idx: number) => (
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
              >
                {topic}
              </Badge>
            ))}
          </HStack>
        </Box>
      )}

      <Box textAlign="center">
        <Button
          as="a"
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          p={2}
          bg="gray.100"
          _hover={{ bg: "blue.100", color: "blue.600" }}
          color="gray.600"
          borderRadius="lg"
          transition="all 0.3s"
          minW="auto"
          h="auto"
          title="View on GitHub"
        >
          <Icon as={Github} w={5} h={5} />
        </Button>
      </Box>
    </Box>
  );

  if (loading) {
    return (
      <Box
        as="section"
        id="projects"
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
                Featured Projects
              </Heading>
              <Box
                w="24"
                h="1"
                bgGradient="linear(to-r, blue.600, purple.600)"
                mx="auto"
                borderRadius="full"
                mb={6}
              />
              <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
                Loading projects from GitHub...
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {[1, 2, 3, 4].map((i) => (
                <Box
                  key={i}
                  bg="white"
                  borderRadius="2xl"
                  p={8}
                  shadow="lg"
                  border="1px solid"
                  borderColor="gray.100"
                >
                  <Skeleton
                    height="28px"
                    w={{ base: "80vw", md: "30vw" }}
                    mb={4}
                  />
                  <SkeletonText noOfLines={2} mb={6} />
                  <Skeleton height="20px" mb={4} />
                  <Skeleton height="24px" mb={6} />
                  <Box textAlign="center">
                    <Skeleton
                      height="48px"
                      width="48px"
                      borderRadius="lg"
                      mx="auto"
                    />
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      as="section"
      id="projects"
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
              Featured Projects
            </Heading>
            <Box
              w="24"
              h="1"
              bgGradient="linear(to-r, blue.600, purple.600)"
              mx="auto"
              borderRadius="full"
              mb={6}
            />
            <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
              {repos.length === 0
                ? "Showcasing my professional work and achievements"
                : "A showcase of my latest public projects from GitHub"}
            </Text>
          </Box>

          {repos.length === 0 ? (
            // Show fallback projects when GitHub API fails or no repos found
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {fallbackProjects.map((project) => renderProjectCard(project))}
            </SimpleGrid>
          ) : (
            // Show GitHub projects
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {repos.map((repo) => renderProjectCard(repo))}
            </SimpleGrid>
          )}

          <Box textAlign="center" mt={12}>
            <Button
              as="a"
              href={`https://${
                contactData.urls.find((u) => u.label === "GitHub")?.url
              }`}
              target="_blank"
              rel="noopener noreferrer"
              bgGradient="linear(to-r, gray.900, gray.800)"
              _hover={{
                bgGradient: "linear(to-r, gray.800, gray.700)",
                transform: "scale(1.05)",
                shadow: "xl",
              }}
              color="white"
              px={8}
              py={4}
              borderRadius="xl"
              fontWeight="medium"
              transition="all 0.3s"
              shadow="lg"
              leftIcon={<Icon as={Github} w={5} h={5} />}
            >
              View All Projects
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
