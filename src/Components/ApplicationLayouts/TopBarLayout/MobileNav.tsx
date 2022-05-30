import {
  CloseButton,
  Collapse,
  Divider,
  Flex,
  Portal,
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { SubMenuButtonOrLink, TopLevelButtonOrLink } from "./Components";
import {
  adminMenulinks,
  communitiesMenuLinks,
  superAdminMenulinks,
} from "./routes";
import { SubMenuItemType } from "./sharedTypes";

const MobileLinkSection = (
  { text, listOfLinks, onNavigationLinksClicked }: {
    text: React.ReactNode;
    listOfLinks: Array<SubMenuItemType>;
    onNavigationLinksClicked: () => void;
  },
) => {
  const { isOpen, onToggle } = useDisclosure({
    defaultIsOpen: false,
  });

  return (
    <>
      <TopLevelButtonOrLink
        onClick={onToggle}
        title={text}
        hasSubMenu
        extrastyles={{
          width: "100%",
          justifyContent: "flex-start",
        }}
      />

      <Collapse style={{ width: "100%" }} in={isOpen} animateOpacity>
        <Flex
          flexDir="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          width="100%"
          p={1}
          gap={4}
        >
          {listOfLinks.map((subMneuItem, sid) => {
            if (subMneuItem === "divider") {
              return <Divider key={sid} />;
            }
            if (typeof subMneuItem === "function") {
              return <React.Fragment key={sid}>{subMneuItem()}</React.Fragment>;
            }
            return (
              <SubMenuButtonOrLink
                key={sid}
                onEveryClick={onNavigationLinksClicked}
                {...subMneuItem}
              />
            );
          })}
        </Flex>
      </Collapse>
    </>
  );
};

export const MobileNavContent = (
  { mobileNavDisclosure, canSeeSuperAdminSection, canSeeAdminSection }: {
    mobileNavDisclosure: ReturnType<typeof useDisclosure>;
    canSeeSuperAdminSection: boolean;
    canSeeAdminSection: boolean;
  },
) => {
  const bg = useColorModeValue("white", "gray.800");
  const [is768orWider] = useMediaQuery("(min-width: 767px)");

  React.useEffect(() => {
    if (is768orWider && mobileNavDisclosure.isOpen) {
      mobileNavDisclosure.onClose();
    }
  }, [is768orWider, mobileNavDisclosure]);

  // TODO. Add animations here
  return (
    <>
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
              text="Explora"
              listOfLinks={communitiesMenuLinks}
              onNavigationLinksClicked={mobileNavDisclosure.onClose}
            />

            <TopLevelButtonOrLink
              href="/tickets"
              title={"Mis Tickets"}
              extrastyles={{
                width: "100%",
                justifyContent: "flex-start",
              }}
              onEveryClick={mobileNavDisclosure.onClose}
            />
            <TopLevelButtonOrLink
              href="/events"
              title={"Eventos"}
              extrastyles={{
                width: "100%",
                justifyContent: "flex-start",
              }}
              onEveryClick={mobileNavDisclosure.onClose}
            />
            <MobileLinkSection
              text="Admin"
              listOfLinks={adminMenulinks}
              onNavigationLinksClicked={mobileNavDisclosure.onClose}
            />

            <MobileLinkSection
              text="Super Admin"
              listOfLinks={superAdminMenulinks}
              onNavigationLinksClicked={mobileNavDisclosure.onClose}
            />
          </Flex>
        </Portal>
      )}
    </>
  );
};
