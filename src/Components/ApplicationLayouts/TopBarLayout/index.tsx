import { HamburgerMenuIcon } from "@/components/Icons";
import { useIsAuthenticated } from "@/features/Auth/supabase";
import {
  Avatar,
  Button,
  chakra,
  Flex,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { DesktopNavContent } from "./DesktopNavigation";
import { useGetUserInformationQuery } from "./getUserInformation.generated";
import { useGetUserProfile } from "./hooks";
import { MobileNavContent } from "./MobileNav";
import { settingsMenuLinks } from "./routes";
import { SubMenuTrigger } from "./subMenu";

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
  const mobileNavDisclosure = useDisclosure();
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
              <Button
                variant="ghost"
                display={{ base: "initial", md: "none" }}
                onClick={mobileNavDisclosure.onOpen}
              >
                <HamburgerMenuIcon />
              </Button>
            </Flex>
            <Flex>
              <MobileNavContent
                canSeeSuperAdminSection={canSeeSuperAdminSection}
                canSeeAdminSection={canSeeAdminSection}
                mobileNavDisclosure={mobileNavDisclosure}
              />

              <DesktopNavContent
                canSeeSuperAdminSection={canSeeSuperAdminSection}
                canSeeAdminSection={canSeeAdminSection}
              />
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
