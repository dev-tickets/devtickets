import { JSConfChileIcon } from "@/components/Icons";
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
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode, Suspense } from "react";
import { dashboardMainURL } from "src/config";
import { DesktopNavContent } from "./DesktopNavigation";
import { useGeTopBarUserInformationQuery } from "./geTopBarUserInformation.generated";
import { useGetUserProfile } from "./hooks";
import { MobileNavContent } from "./MobileNav";
import { settingsMenuLinks, unauthenticatedSettingsMenuLinks } from "./routes";
import { SubMenuTrigger } from "./subMenu";

const ActualLayout = (
  { children, isAuthenticated }: {
    children: ReactNode;
    isAuthenticated: boolean;
  },
) => {
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
  const { avatarURL } = useGetUserProfile();
  const results = useGeTopBarUserInformationQuery({
    fetchPolicy: "network-only", // Used for first execution
    nextFetchPolicy: "cache-only", // Used for subsequent executions
  });

  const canSeeAdminSection = React.useMemo(() => {
    return true;
  }, []);

  return (
    <>
      <chakra.header
        position="sticky"
        top={0}
        zIndex={100}
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        bg="jsconfBlack"
        borderWidth={0}
        w="full"
      >
        <chakra.div h="5rem" mx="auto" maxW="1200px">
          <Flex
            w="full"
            h="full"
            px="6"
            alignItems="center"
            justifyContent="space-between"
          >
            <Link
              href={dashboardMainURL}
              passHref
            >
              <Flex as="a" align="flex-start">
                <JSConfChileIcon w={7} h={7} />
              </Flex>
            </Link>

            <SubMenuTrigger
              buttonContent={<Avatar size="xs" src={avatarURL} />}
              subMenuItems={isAuthenticated
                ? settingsMenuLinks
                : unauthenticatedSettingsMenuLinks}
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
    return (
      // <Suspense fallback={null}>
      <ActualLayout isAuthenticated={isAuthenticated}>{children}</ActualLayout>
      // </Suspense>
    );
  },
);
