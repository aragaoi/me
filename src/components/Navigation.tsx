"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Briefcase, Code, FolderOpen } from "lucide-react";
import {
  Box,
  Container,
  HStack,
  VStack,
  Text,
  Button,
  Icon,
  Heading,
} from "@chakra-ui/react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close menu first to prevent DOM interruption
      setIsOpen(false);

      // Then start scroll animation
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100); // Small delay to ensure menu is closed
    } else {
      console.log(`Element with id "${sectionId}" not found`);
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: FolderOpen },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        style={{ opacity: 1 }}
      >
        <Box
          position="fixed"
          top={0}
          w="full"
          bg="whiteAlpha.800"
          backdropFilter="blur(10px)"
          shadow="lg"
          borderBottom="1px solid"
          borderColor="gray.200"
          zIndex={50}
        >
          <Container maxW="7xl">
            <HStack justify="space-between" h={16}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Heading
                  as="h1"
                  size="md"
                  color="gray.900"
                  fontWeight="bold"
                  cursor="pointer"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Irenio de Aragão
                </Heading>
              </motion.div>

              {/* Desktop Navigation */}
              <HStack spacing={1} display={{ base: "none", md: "flex" }}>
                {navItems.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => scrollToSection(item.id)}
                      color="gray.700"
                      _hover={{ color: "blue.600", bg: "blue.50" }}
                      px={3}
                      py={2}
                      borderRadius="xl"
                      fontSize="sm"
                      fontWeight="medium"
                      transition="all 0.3s"
                      variant="ghost"
                    >
                      <Icon as={item.icon} w={4} h={4} mr={2} />
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
              </HStack>

              {/* Mobile Menu Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  display={{ base: isOpen ? "none" : "block", md: "none" }}
                  onClick={() => setIsOpen(!isOpen)}
                  color="gray.700"
                  _hover={{ color: "blue.600", bg: "blue.50" }}
                  p={2}
                  borderRadius="xl"
                  variant="ghost"
                >
                  <Icon as={Menu} w={5} h={5} />
                </Button>
              </motion.div>
            </HStack>
          </Container>
        </Box>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Box
              display={{ base: "block", md: "none" }}
              bg="whiteAlpha.900"
              shadow="xl"
              borderBottom="1px solid"
              borderColor="gray.200"
              position="fixed"
              top="64px"
              left={0}
              right={0}
              zIndex={40}
            >
              <HStack
                justify="space-between"
                p={4}
                borderBottom="1px solid"
                borderColor="gray.200"
              >
                <Text color="gray.700" fontWeight="semibold">
                  Menu
                </Text>
                <Button
                  onClick={() => setIsOpen(false)}
                  color="gray.700"
                  _hover={{ color: "blue.600", bg: "blue.50" }}
                  p={2}
                  borderRadius="xl"
                  variant="ghost"
                  size="sm"
                >
                  <Icon as={X} w={4} h={4} />
                </Button>
              </HStack>
              <VStack spacing={2} p={4} align="stretch">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      onClick={() => scrollToSection(item.id)}
                      color="gray.700"
                      _hover={{ color: "blue.600", bg: "blue.50" }}
                      w="full"
                      textAlign="left"
                      px={4}
                      py={3}
                      borderRadius="xl"
                      fontSize="base"
                      fontWeight="medium"
                      transition="all 0.3s"
                      variant="ghost"
                      justifyContent="flex-start"
                    >
                      <Icon as={item.icon} w={5} h={5} mr={3} />
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
              </VStack>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
