import { HStack } from "@chakra-ui/react";
import React from "react";
import { TopLevelButtonOrLink } from "./Components";
import { adminMenulinks, communitiesMenuLinks } from "./routes";
import { SubMenuTrigger } from "./subMenu";

export const DesktopNavContent = ({
  canSeeAdminSection,
}: {
  canSeeAdminSection: boolean;
}) => {
  return (
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
    </HStack>
  );
};
