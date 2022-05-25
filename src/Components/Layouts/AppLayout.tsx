import React, { ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  StackDivider,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { IconType } from "react-icons";
import {
  HomeHeartIcon,
  HamburgerMenuIcon,
  HomeIcon,
  SettingsIcon,
  TicketIcon,
} from "../Icons";

interface LinkItemProps {
  name: string;
  href: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { href: "/", name: "Home", icon: HomeIcon },
  { href: "/communities", name: "Your Communities", icon: HomeHeartIcon },
  { href: "/tickets", name: "Tickets", icon: TicketIcon },
  { href: "/settings", name: "Settings", icon: SettingsIcon },
];

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  href: string;
  children: string;
}

const horizontalPadding = { paddingX: 4 };

const NavItem = ({ icon, href, children, ...rest }: NavItemProps) => {
  return (
    <Link href={href} passHref>
      <Flex
        as={"a"}
        flex={1}
        paddingY={2}
        style={{ textDecoration: "none" }}
        width="100%"
        {...horizontalPadding}
        align="center"
        role="group"
        cursor="pointer"
        gap={4}
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<HamburgerMenuIcon />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Welcome, username 👋
      </Text>
    </Flex>
  );
};

const DesktopTitle = ({ onClose }: { onClose: () => void }) => {
  return (
    <Flex
      // This margin here is to visually counter the combination of
      // StackDivider's default margin (2) and "gap" (1) of the parent
      marginTop={4}
      alignItems="center"
      h={8}
      justifyContent="center"
    >
      <Text
        fontSize={16}
        lineHeight={0}
        fontFamily="monospace"
        fontWeight="bold"
      >
        Welcome, username 👋🏼
      </Text>
      <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
    </Flex>
  );
};

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <VStack
      gap={2}
      h="full"
      id="qqqq"
      pos="fixed"
      borderRight="1px"
      alignItems="center"
      flexDirection="column"
      justifyContent="flex-start"
      w={{ base: "full", md: 64 }}
      bg={useColorModeValue("white", "gray.900")}
      divider={<StackDivider borderColor="red.200" />}
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      {...rest}
    >
      <DesktopTitle onClose={onClose} />
      <Flex
        paddingTop={2}
        gap={2}
        alignItems="center"
        justifyContent="flex-start"
        flexDirection="column"
        width="100%"
      >
        {LinkItems.map((link) => (
          <NavItem key={link.name} href={link.href} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </Flex>
    </VStack>
  );
};

export function AppLayout({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "flex" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}
