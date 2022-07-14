import { JSConfChileIcon } from "@/components/Icons";
import { useIsAuthenticated } from "@/features/Auth/supabase";
import { Avatar, chakra, Flex } from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import Link from "next/link";
import React from "react";
import { dashboardMainURL } from "src/config";
import { useGetUserProfile } from "./hooks";
import { settingsMenuLinks, unauthenticatedSettingsMenuLinks } from "./routes";
import { SubMenuTrigger } from "./subMenu";

const ActualLayout = () => {
  const isAuthenticated = useIsAuthenticated();
  const ref = React.useRef<HTMLElement>();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current
    ? ref.current!.getBoundingClientRect()
    : {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const { avatarURL } = useGetUserProfile();

  return (
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
  );
};

export default ActualLayout;
