"use client";

import { Box, Container, VStack, HStack, Text, Icon } from "@chakra-ui/react";
import { Github, Linkedin, Heart } from "lucide-react";
import { contactData } from "@/data/contact";

export function Footer() {
  return (
    <Box
      as="footer"
      bgGradient="linear(to-r, gray.900, slate.900)"
      color="white"
      py={12}
    >
      <Container maxW="7xl">
        <VStack spacing={6} textAlign="center">
          <Text color="gray.300" fontSize="sm">
            Built with{" "}
            <Text
              as="a"
              href="https://cursor.com"
              target="_blank"
              rel="noopener noreferrer"
              color="blue.300"
              _hover={{ color: "blue.200", textDecoration: "underline" }}
              transition="colors"
              display="inline"
            >
              Cursor
            </Text>{" "}
            by {contactData.name}
          </Text>

          <Text color="gray.400" fontSize="xs" maxW="md" lineHeight="relaxed">
            I defined the main structure of this website, guided the development
            process and carefully reviewed the code. The design and
            functionality were developed using artificial intelligence tools
            from the Cursor IDE to create a modern, professional website
            experience in just a few hours.
          </Text>

          <Text color="gray.400" fontSize="sm">
            © {new Date().getFullYear()} {contactData.name}. All rights
            reserved.
          </Text>

          <HStack spacing={6} mt={6}>
            <Box
              as="a"
              href={`https://${
                contactData.urls.find((u) => u.label === "GitHub")?.url
              }`}
              target="_blank"
              rel="noopener noreferrer"
              color="gray.400"
              _hover={{ color: "white" }}
              transition="colors"
            >
              <Icon as={Github} w={5} h={5} />
            </Box>
            <Box
              as="a"
              href={`https://${
                contactData.urls.find((u) => u.label === "LinkedIn")?.url
              }`}
              target="_blank"
              rel="noopener noreferrer"
              color="gray.400"
              _hover={{ color: "white" }}
              transition="colors"
            >
              <Icon as={Linkedin} w={5} h={5} />
            </Box>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}
