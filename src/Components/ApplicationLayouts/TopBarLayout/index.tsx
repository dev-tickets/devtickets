import {
  Avatar,
  Box,
  BoxProps,
  Button,
  chakra,
  CloseButton,
  Divider,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import React from "react";

import NextLink from "next/link";

import { Logo } from "@choc-ui/logo";
import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

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

import { useRouter } from "next/router";
import { ReactNode } from "react";
import { IconType } from "react-icons";
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

const ActualLayout = ({ children }: { children: ReactNode }) => {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue("white", "gray.800");
  const ref = React.useRef<HTMLElement>();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current
    ? ref.current!.getBoundingClientRect()
    : {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const cl = useColorModeValue("gray.800", "white");
  const mobileNav = useDisclosure();

  const executed = React.useRef<boolean>(false);
  const { avatarURL } = useGetUserProfile();
  const [results, executeQuery] = useGetUserInformationQuery({
    requestPolicy: "cache-first",
    pause: true,
  });

  React.useEffect(() => {
    if (executed.current) {
      return;
    }
    executeQuery();
    executed.current = true;
  }, [executeQuery]);

  const Section = (
    props: { title: string; children: React.ReactNode; icon: string },
  ) => {
    const ic = useColorModeValue("brand.600", "brand.50");
    const hbg = useColorModeValue("gray.50", "brand.400");
    const tcl = useColorModeValue("gray.900", "gray.50");
    const dcl = useColorModeValue("gray.500", "gray.50");
    return (
      <Link
        m={-3}
        p={3}
        display="flex"
        alignItems="start"
        rounded="lg"
        _hover={{ bg: hbg }}
      >
        <Icon
          flexShrink={0}
          h={6}
          w={6}
          color={ic}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d={props.icon} />
        </Icon>
        <Box ml={4}>
          <chakra.p fontSize="sm" fontWeight="700" color={tcl}>
            {props.title}
          </chakra.p>
          <chakra.p mt={1} fontSize="sm" color={dcl}>
            {props.children}
          </chakra.p>
        </Box>
      </Link>
    );
  };

  const sections = [
    {
      title: "Analytics",
      icon:
        "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      description:
        "Get a better understanding of where your traffic is coming from.",
    },
    {
      title: "Engagement",
      icon:
        "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
      description: "Speak directly to your customers in a more meaningful way.",
    },
    {
      title: "Security",
      icon:
        "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      description: "Your customers&#039; data will be safe and secure",
    },
    {
      title: "Integrations",
      icon:
        "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
      description:
        "Connect with third-party tools that you&#039;re already using.",
    },
    {
      title: "Automations",
      icon:
        "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
      description:
        "Build strategic funnels that will drive your customers to convert",
    },
  ];

  const Features = (props: { h?: any }) => {
    const hbg = useColorModeValue("gray.50", "brand.400");
    const hbgh = useColorModeValue("gray.100", "brand.500");
    const tcl = useColorModeValue("gray.900", "gray.50");
    return (
      <React.Fragment>
        <SimpleGrid
          columns={props?.h ? { base: 1, md: 3, lg: 5 } : 1}
          pos="relative"
          gap={{ base: 6, sm: 8 }}
          px={5}
          py={6}
          p={{ sm: 8 }}
        >
          {sections.map(({ title, icon, description }, sid) => (
            <Section title={title} icon={icon} key={sid}>
              {description}
            </Section>
          ))}
        </SimpleGrid>
        <Box px={{ base: 5, sm: 8 }} py={5} bg={hbg} display={{ sm: "flex" }}>
          <Stack direction={{ base: "row" }} spacing={{ base: 6, sm: 10 }}>
            <Box display="flow-root">
              <Link
                m={-3}
                p={3}
                display="flex"
                alignItems="center"
                rounded="md"
                fontSize="md"
                color={tcl}
                _hover={{ bg: hbgh }}
              >
                <Icon
                  flexShrink={0}
                  h={6}
                  w={6}
                  color="gray.400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </Icon>
                <chakra.span ml={3}>Watch Demo</chakra.span>
              </Link>
            </Box>
            <Box display="flow-root">
              <Link
                m={-3}
                p={3}
                display="flex"
                alignItems="center"
                rounded="md"
                fontSize="md"
                color={tcl}
                _hover={{ bg: hbgh }}
              >
                <Icon
                  flexShrink={0}
                  h={6}
                  w={6}
                  color="gray.400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </Icon>
                <chakra.span ml={3}>Contact Sales</chakra.span>
              </Link>
            </Box>
          </Stack>
        </Box>
      </React.Fragment>
    );
  };

  const SettingsMenu = () => {
    return (
      <React.Fragment>
        <HStack spacing="5" display={{ base: "none", md: "flex" }}>
          <Button colorScheme="brand" variant="ghost" size="sm">
            Sign in
          </Button>
          <Button colorScheme="brand" variant="ghost" size="sm">
            Sign up
          </Button>
        </HStack>
        <IconButton
          size="md"
          fontSize="lg"
          aria-label={`Switch to ${text} mode`}
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
          onClick={mobileNav.onOpen}
        />
      </React.Fragment>
    );
  };

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
        Dashboard
      </Button>
      <Button
        w="full"
        variant="solid"
        colorScheme="brand"
        leftIcon={<AiOutlineInbox />}
      >
        Inbox
      </Button>
      <Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
        Videos
      </Button>
    </VStack>
  );
  return (
    <chakra.header
      // ref={ref}
      shadow={y > height ? "sm" : undefined}
      transition="box-shadow 0.2s"
      bg={bg}
      borderTop="6px solid"
      borderTopColor="transparent"
      // borderTopColor="brand.400"
      w="full"
      overflowY="hidden"
      borderBottomWidth={2}
      borderBottomColor={useColorModeValue("gray.200", "gray.900")}
    >
      <chakra.div h="4.5rem" mx="auto" maxW="1200px">
        <Flex
          w="full"
          h="full"
          px="6"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex align="flex-start">
            <Link href="/">
              <HStack>
                <Logo />
              </HStack>
            </Link>
          </Flex>
          <Flex>
            <HStack spacing="5" display={{ base: "none", md: "flex" }}>
              <Popover>
                <PopoverTrigger>
                  <Button
                    bg={bg}
                    color="gray.500"
                    display="inline-flex"
                    alignItems="center"
                    fontSize="md"
                    _hover={{ color: cl }}
                    _focus={{ boxShadow: "none" }}
                    rightIcon={<IoIosArrowDown />}
                  >
                    Features
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  w="100vw"
                  maxW="md"
                  _focus={{ boxShadow: "md" }}
                >
                  <Features />
                </PopoverContent>
              </Popover>
              <Button
                bg={bg}
                color="gray.500"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{ color: cl }}
                _focus={{ boxShadow: "none" }}
              >
                Blog
              </Button>
              <Button
                bg={bg}
                color="gray.500"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{ color: cl }}
                _focus={{ boxShadow: "none" }}
              >
                Pricing
              </Button>
            </HStack>
          </Flex>
          <Flex justify="flex-end" align="center" color="gray.400">
            <Popover>
              <PopoverTrigger>
                <Button
                  bg={bg}
                  color="gray.500"
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{ color: cl }}
                  _focus={{ boxShadow: "none" }}
                  rightIcon={<IoIosArrowDown />}
                >
                  <Avatar size="xs" src={avatarURL} />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                w="100vw"
                maxW="md"
                _focus={{ boxShadow: "md" }}
              >
                <SettingsMenu />
              </PopoverContent>
            </Popover>
          </Flex>
        </Flex>
        {MobileNavContent}
      </chakra.div>
    </chakra.header>
  );
};
/** This is only for authenticated users */
export const TopBarLayout = React.memo(
  function TopBarLayout({ children }: { children: ReactNode }) {
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
