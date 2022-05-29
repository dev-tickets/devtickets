import {
  AdminIcon,
  CalendarIcons,
  ExploreIcon,
  GenericIconComponentType,
  HomeHeartIcon,
  HomeIcon,
  PlusIcon,
  SettingsIcon,
  TicketIcon,
} from "@/components/Icons";
import { GithubIcon, MailIcon, TwitterIcon } from "@/components/Icons";
import { useIsAuthenticated, useUser } from "@/features/Auth/supabase";
import {
  Avatar,
  Box,
  Button,
  chakra,
  CloseButton,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Logo } from "@choc-ui/logo";
import { useViewportScroll } from "framer-motion";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useGetUserInformationQuery } from "./getUserInformation.generated";

export function Footer() {
  return (
    <Flex
      w="full"
      bg={useColorModeValue("gray.100", "gray.600")}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        w="full"
        as="footer"
        flexDir={{ base: "column", sm: "row" }}
        align="center"
        justify="space-between"
        px="6"
        py="8"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
      >
        <chakra.a
          href="#"
          fontSize="xl"
          fontWeight="bold"
          color="gray.600"
          _dark={{
            color: "white",
            _hover: {
              color: "gray.300",
            },
          }}
          _hover={{
            color: "gray.700",
          }}
        >
          DevTickets
        </chakra.a>

        <chakra.p
          color="gray.800"
          py={{ base: "2", sm: "0" }}
          _dark={{ color: "white" }}
        >
          All rights reserved
        </chakra.p>

        <Flex gap={3}>
          <chakra.a
            href="#"
            color="gray.600"
            _dark={{ color: "gray.300", _hover: { color: "gray.400" } }}
            _hover={{
              color: "gray.500",
            }}
            aria-label="Maik"
          >
            <MailIcon />
          </chakra.a>

          <chakra.a
            href="#"
            color="gray.600"
            _dark={{ color: "gray.300", _hover: { color: "gray.400" } }}
            _hover={{
              color: "gray.500",
            }}
            aria-label="Facebook"
          >
            <TwitterIcon />
          </chakra.a>

          <chakra.a
            href="#"
            color="gray.600"
            _dark={{ color: "gray.300", _hover: { color: "gray.400" } }}
            _hover={{
              color: "gray.500",
            }}
            aria-label="Github"
          >
            <GithubIcon />
          </chakra.a>
        </Flex>
      </Flex>
    </Flex>
  );
}
