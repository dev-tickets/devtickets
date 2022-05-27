import {
  HamburgerMenuIcon,
  HomeHeartIcon,
  HomeIcon,
  PlusIcon,
  SettingsIcon,
  TicketIcon,
} from "@/components/Icons";
import { useIsAuthenticated } from "@/features/Auth/supabase";
import {
  Box,
  BoxProps,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  FlexProps,
  Icon,
  IconButton,
  StackDivider,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import {
  GetUserInformationQuery,
  useGetUserInformationQuery,
} from "./getUserInformation.generated";

interface LinkItemProps {
  name: string;
  href: string;
  icon: IconType;
}

const Links = {
  home: { href: "/", name: "Home", icon: HomeIcon },
  yourCommunities: {
    href: "/communities",
    name: "Tus Comunidades",
    icon: HomeHeartIcon,
  },
  newCommunities: {
    href: "/communities/create",
    name: "Create Community",
    icon: PlusIcon,
  },
  yourTickets: { href: "/tickets", name: "Tus Tickets", icon: TicketIcon },
  settings: {
    href: "/settings",
    name: "Configuración",
    icon: SettingsIcon,
  },
} as const;

const LinkItems: Array<keyof typeof Links> = [
  "home",
  "yourCommunities",
  "yourTickets",
];

interface SidebarProps extends BoxProps {
  onClose: () => void;
  userInformationQueryData?: GetUserInformationQuery;
}

const horizontalPadding = { paddingX: 4 };

const NavItem = ({ id }: { id: keyof typeof Links }) => {
  const linkData = Links[id];
  const { pathname } = useRouter();
  const { icon, name, href } = linkData;
  const isActive = React.useMemo(() => {
    if (href === "/") {
      return pathname.trim() === href;
    }
    return pathname.trim().startsWith(href);
  }, [href, pathname]);
  if (!linkData) {
    return null;
  }

  return (
    <Flex
      id={isActive.toString()}
      background={isActive ? "pink.300" : "transparent"}
      color={isActive ? "white" : "inherit"}
      width="100%"
      align="center"
      role="group"
      cursor="pointer"
      gap={4}
      transitionDuration="100ms"
      transitionProperty="all"
      transitionTimingFunction="ease-in-out"
      _hover={{
        background: "pink.400",
        color: "white",
      }}
    >
      <Link href={href} passHref>
        <Flex
          as={"a"}
          alignItems="center"
          width="100%"
          paddingY={2}
          {...horizontalPadding}
          gap={4}
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
          {name}
        </Flex>
      </Link>
    </Flex>
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
        Welcome 👋
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
        Bienvenido 👋🏼
      </Text>
      <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
    </Flex>
  );
};

const SidebarContent = (
  { onClose, userInformationQueryData, ...rest }: SidebarProps,
) => {
  return (
    <VStack
      gap={2}
      h="full"
      id="qqqq"
      overflow="scroll"
      pos="fixed"
      borderRight="1px"
      paddingY={2}
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
        gap={2}
        alignItems="center"
        justifyContent="flex-start"
        flexDirection="column"
        width="100%"
        flex={1}
      >
        {LinkItems.map((linkName) => (
          <NavItem
            key={Links[linkName].name}
            id={linkName}
          />
        ))}
      </Flex>
      {userInformationQueryData?.super_adminsCollection?.edges.length && (
        <Flex width="100%">
          <NavItem id="newCommunities" />
        </Flex>
      )}
      <Flex width="100%">
        <NavItem id="settings" />
      </Flex>
    </VStack>
  );
};

const ActualLayout = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [results] = useGetUserInformationQuery();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        userInformationQueryData={results.data}
        onClose={onClose}
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
          <SidebarContent
            userInformationQueryData={results.data}
            onClose={onClose}
          />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      {
        /*
          TODO:
          Consider a different component structure for this.
          <m>aybe side-by-side flex containers instead of a margin?
      */
      }
      <Box ml={{ base: 0, md: 64 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

/** This is only for authenticated users */
export function AppLayout({ children }: { children: ReactNode }) {
  // This is an authenticated-only layout, so first we check if the user is
  // authenticated If they are not, we send them to login
  const isAuthenticated = useIsAuthenticated();
  const router = useRouter();
  if (!isAuthenticated) {
    router.push("/login");
    return <p></p>;
  }
  return <ActualLayout>{children}</ActualLayout>;
}
