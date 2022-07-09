import {
  CalendarIcons,
  HamburgerMenuIcon,
  HomeHeartIcon,
  HomeIcon,
  PlusIcon,
  SettingsIcon,
  TicketIcon,
} from "@/components/Icons";
import { useIsAuthenticated, useUser } from "@/features/Auth/supabase";
import {
  Avatar,
  Box,
  BoxProps,
  CloseButton,
  Divider,
  Drawer,
  DrawerContent,
  Flex,
  IconButton,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import { Footer } from "./Footer";
import { useGetUserInformationQuery } from "./getUserInformation.generated";

const useGetUserProfile = () => {
  const user = useUser();
  const { user_name, preferred_username, avatar_url } =
    (user?.user_metadata ?? {});
  return React.useMemo(() => (
    {
      avatarURL: avatar_url as string | undefined,
      username: (preferred_username || user_name) as string | undefined,
    }
  ), [avatar_url, preferred_username, user_name]);
};

interface LinkItemProps {
  name: string;
  href: string;
  icon: IconType;
}

const Links = {
  home: { href: "/", name: "Home", icon: HomeIcon },
  communities: {
    href: "/communities",
    name: "Comunidades",
    icon: HomeHeartIcon,
  },
  events: {
    href: "/events",
    name: "Eventos",
    icon: CalendarIcons,
  },
  upcomingEvents: {
    href: "/events/upcoming",
    name: "Próximos Eventos",
    icon: CalendarIcons,
  },
  createEvent: {
    href: "/events/create",
    name: "Crear Evento",
    icon: PlusIcon,
  },
  newCommunities: {
    href: "/communities/create",
    name: "Create Community",
    icon: PlusIcon,
  },
  yourTickets: { href: "/tickets", name: "Mis Tickets", icon: TicketIcon },
  settings: {
    href: "/settings",
    name: "Configuración",
    icon: SettingsIcon,
  },
} as const;

const LinkItems: Array<keyof typeof Links> = [
  "home",
  "events",
  "createEvent",
  "upcomingEvents",
  "communities",
  "yourTickets",
];

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const horizontalPadding = { paddingX: 4 };

const NavItem = React.memo(function NavItem(
  { id, overrideIcon: OverrideIcon }: {
    id: keyof typeof Links;
    overrideIcon?: () => JSX.Element;
  },
) {
  const linkData = Links[id];
  const { pathname } = useRouter();
  const { icon: Icon, name, href } = linkData;
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
      color={isActive ? "blackAlpha.900" : "blackAlpha.700"}
      textShadow={isActive ? "1px 1px rgba(0,0,0,0.2)" : "inherit"}
      width="100%"
      align="center"
      role="group"
      cursor="pointer"
      gap={4}
      transitionDuration="100ms"
      transitionProperty="all"
      transitionTimingFunction="ease-in-out"
      _hover={{
        color: "black",
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
          {OverrideIcon && <OverrideIcon />}
          {!OverrideIcon && Icon && <Icon />}
          {name}
        </Flex>
      </Link>
    </Flex>
  );
});

const MobileNav = React.memo(function MobileNav({ onOpen }: {
  onOpen: () => void;
}) {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      py={8}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      display={{ base: "flex", md: "none" }}
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
});

const DesktopTitle = React.memo(
  function DesktopTitle({ onClose }: { onClose: () => void }) {
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        py={5}
        h={8}
      >
        <Text
          fontSize="larger"
          lineHeight={0}
          fontFamily="monospace"
          fontWeight="bold"
        >
          Bienvenido 👋🏼
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
    );
  },
);

const SidebarContent = React.memo(function SidebarContent(
  { onClose, display }: SidebarProps,
) {
  const { avatarURL } = useGetUserProfile();
  const results = useGetUserInformationQuery({
    fetchPolicy: "network-only", // Used for first execution
    nextFetchPolicy: "cache-first", // Used for subsequent executions
  });

  return (
    <Flex
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
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      display={display}
    >
      <DesktopTitle onClose={onClose} />
      <Divider borderColor="gray.400" />
      <Flex
        gap={2}
        alignItems="center"
        justifyContent="flex-start"
        flexDirection="column"
        width="100%"
        flex={1}
        onClick={onClose}
      >
        {LinkItems.map((linkName) => (
          <NavItem
            key={Links[linkName].name}
            id={linkName}
          />
        ))}
      </Flex>
      <Divider borderColor="gray.400" />
      {results.data?.super_adminsCollection?.edges.length && (
        <Flex width="100%" onClick={onClose}>
          <NavItem id="newCommunities" />
        </Flex>
      )}
      <Flex width="100%" onClick={onClose}>
        <NavItem
          id="settings"
          overrideIcon={() => <Avatar size="xs" src={avatarURL} />}
        />
      </Flex>
    </Flex>
  );
});

const ActualLayout = React.memo(
  function ActualLayout({ children }: { children: ReactNode }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const display = React.useMemo(() => ({ base: "none", md: "flex" }), []);
    return (
      <Flex
        h="100vh"
        flexDirection={"column"}
      >
        <SidebarContent
          onClose={onClose}
          display={display}
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
              onClose={onClose}
            />
          </DrawerContent>
        </Drawer>
        <MobileNav onOpen={onOpen} />
        <Flex
          bg={"gray.100"}
          flex={1}
          flexDir="column"
          ml={React.useMemo(() => ({ base: 0, md: 64 }), [])}
        >
          <Box flex={1}>
            {children}
          </Box>
          <Footer />
        </Flex>
      </Flex>
    );
  },
);

/** This is only for authenticated users */
export const AppLayout = React.memo(
  function AppLayout({ children }: { children: ReactNode }) {
    // This is an authenticated-only layout, so first we check if the user is
    // authenticated If they are not, we send them to login
    const isAuthenticated = useIsAuthenticated();
    const router = useRouter();
    if (!isAuthenticated) {
      router.push("/login");
      return <p></p>;
    }
    return <ActualLayout>{children}</ActualLayout>;
  },
);
