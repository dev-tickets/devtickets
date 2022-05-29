import { useIsAuthenticated } from "@/features/Auth/supabase";
import {
  Avatar,
  Button,
  chakra,
  CloseButton,
  Flex,
  HStack,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Logo } from "@choc-ui/logo";
import { useViewportScroll } from "framer-motion";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { AiFillHome, AiOutlineInbox } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { useGetUserInformationQuery } from "./getUserInformation.generated";
import { useGetUserProfile } from "./hooks";
import { adminMenulinks, communitiesMenuLinks } from "./routes";
import { SettingsMenu } from "./settingsMenu";
import { SubMenuTrigger, TopLevelButtonOrLink } from "./subMenu";

const MobileNavContent = (
  { mobileNavDisclosure }: {
    mobileNavDisclosure: ReturnType<typeof useDisclosure>;
  },
) => {
  const bg = useColorModeValue("white", "gray.800");
  return (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNavDisclosure.isOpen ? "flex" : "none"}
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
        onClick={mobileNavDisclosure.onClose}
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
};

const ActualLayout = ({ children }: { children: ReactNode }) => {
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
              <SubMenuTrigger
                buttonText={"Communities"}
                subMenuItems={communitiesMenuLinks}
              />

              <TopLevelButtonOrLink
                href="/tickets"
                title={"Mis Tickets"}
              />
              <TopLevelButtonOrLink
                href="/events"
                title={"Eventos"}
              />

              <SubMenuTrigger
                buttonText={"Admin"}
                subMenuItems={adminMenulinks}
              />
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
                <SettingsMenu mobileNavDisclosure={mobileNav} />
              </PopoverContent>
            </Popover>
          </Flex>
        </Flex>
        <MobileNavContent mobileNavDisclosure={mobileNav} />
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
