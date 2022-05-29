import {
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";

export const SettingsMenu = (
  { mobileNavDisclosure }: {
    mobileNavDisclosure: ReturnType<typeof useDisclosure>;
  },
) => {
  const darkOrLightText = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const { toggleColorMode: toggleMode } = useColorMode();
  return (
    <React.Fragment>
      <VStack spacing="5" display={{ base: "none", md: "flex" }}>
        <Button colorScheme="brand" variant="ghost" size="sm">
          Sign in
        </Button>
        <Button colorScheme="brand" variant="ghost" size="sm">
          Sign up
        </Button>
      </VStack>
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${darkOrLightText} mode`}
        variant="ghost"
        color="current"
        ml={{ base: "0", md: "3" }}
        onClick={toggleMode}
        icon={<SwitchIcon />}
      />
      <IconButton
        display={{ base: "flex", md: "none" }}
        aria-label="Open menu"
        fontSize="20px"
        color={useColorModeValue("gray.800", "inherit")}
        variant="ghost"
        icon={<AiOutlineMenu />}
        onClick={mobileNavDisclosure.onOpen}
      />
    </React.Fragment>
  );
};
