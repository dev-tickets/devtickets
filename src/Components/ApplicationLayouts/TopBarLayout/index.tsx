import { useIsAuthenticated } from "@/features/Auth/supabase";
import {
  Avatar,
  Box,
  Button,
  chakra,
  CloseButton,
  Collapse,
  Flex,
  HStack,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Portal,
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
import { TopLevelButtonOrLink } from "./Components";
import { useGetUserInformationQuery } from "./getUserInformation.generated";
import { useGetUserProfile } from "./hooks";
import {
  adminMenulinks,
  communitiesMenuLinks,
  settingsMenuLinks,
  superAdminMenulinks,
} from "./routes";
import { SubMenuItemType } from "./sharedTypes";
import { SubMenuTrigger } from "./subMenu";

const MobileLinkSection = (
  { text, listOfLinks }: {
    text: React.ReactNode;
    listOfLinks: Array<SubMenuItemType>;
  },
) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button
        variant="ghost"
        width="full"
        justifyContent="flex-start"
        onClick={onToggle}
        // ADD ICON
      >
        {text}
      </Button>

      <Collapse in={isOpen} animateOpacity>
        <Flex
          flexDir="column"
          gap={4}
          pl={8}
          rounded="md"
          shadow="md"
        >
          {listOfLinks.map((link, index) => {
            return (
              <Flex
                shadow="md"
                p={6}
                bg="gray.100"
                rounded="md"
                key={index}
              >
                {JSON.stringify(link)}
              </Flex>
            );
          })}
        </Flex>
      </Collapse>
    </>
  );
};
const MobileNavContent = (
  { mobileNavDisclosure }: {
    mobileNavDisclosure: ReturnType<typeof useDisclosure>;
  },
) => {
  const bg = useColorModeValue("white", "gray.800");
  const [currentText, setCurrentText] = React.useState("aaaa");
  return (
    <>
      <Button {...mobileNavDisclosure.getButtonProps()} variant="ghost">
        {currentText}
      </Button>

      {mobileNavDisclosure.isOpen && (
        <Portal>
          <Flex
            pos="absolute"
            top={0}
            alignItems="center"
            left={0}
            height="100vh"
            width="100vw"
            overflow="scroll"
            display={mobileNavDisclosure.isOpen ? "flex" : "none"}
            flexDirection="column"
            p={4}
            bg={bg}
            gap={3}
            rounded="sm"
            shadow="sm"
          >
            <CloseButton
              aria-label="Close menu"
              justifySelf="self-start"
              onClick={mobileNavDisclosure.onClose}
            />
            <MobileLinkSection
              text="Communities"
              listOfLinks={communitiesMenuLinks}
            />

            <TopLevelButtonOrLink
              href="/tickets"
              title={"Mis Tickets"}
            />
            <TopLevelButtonOrLink
              href="/events"
              title={"Eventos"}
            />
            <MobileLinkSection text="Admin" listOfLinks={adminMenulinks} />

            <MobileLinkSection
              text="Super Admin"
              listOfLinks={superAdminMenulinks}
            />
          </Flex>
        </Portal>
      )}
    </>
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
  const mobileNav = useDisclosure();
  const executed = React.useRef<boolean>(false);
  const { avatarURL } = useGetUserProfile();
  const [results, executeQuery] = useGetUserInformationQuery({
    requestPolicy: "cache-and-network",
    pause: true,
  });

  React.useEffect(() => {
    if (executed.current) {
      return;
    }
    executeQuery();
    executed.current = true;
  }, [executeQuery]);

  const length = results.data?.super_adminsCollection?.edges.length;
  const canSeeSuperAdminSection = React.useMemo(() => {
    return length !== undefined && length > 0;
  }, [length]);

  const canSeeAdminSection = React.useMemo(() => {
    return false;
  }, []);

  return (
    <>
      <chakra.header
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        borderTop="6px solid"
        borderTopColor="transparent"
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
                asd
              </Link>
            </Flex>
            <Flex>
              <MobileNavContent mobileNavDisclosure={mobileNav} />

              <HStack spacing="5" display={{ base: "none", md: "flex" }}>
                <SubMenuTrigger
                  buttonContent={"Explora"}
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

                {canSeeAdminSection && (
                  <SubMenuTrigger
                    buttonContent={"Admin"}
                    subMenuItems={adminMenulinks}
                  />
                )}
                {canSeeSuperAdminSection && (
                  <SubMenuTrigger
                    buttonContent={"Super Admin"}
                    subMenuItems={superAdminMenulinks}
                  />
                )}
              </HStack>
            </Flex>
            <SubMenuTrigger
              buttonContent={<Avatar size="xs" src={avatarURL} />}
              subMenuItems={settingsMenuLinks}
            />
          </Flex>
        </chakra.div>
      </chakra.header>
      {children}
    </>
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
