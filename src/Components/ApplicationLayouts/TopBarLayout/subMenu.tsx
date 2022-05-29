import {
  Divider,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  ResponsiveValue,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { SubMenuButtonOrLink, TopLevelButtonOrLink } from "./Components";
import { SubMenuItemType } from "./sharedTypes";

export const SubMenu = (props: {
  columns?: ResponsiveValue<number>;
  subMenuItems: Array<
    SubMenuItemType
  >;
  footer?: React.ReactNode;
}) => {
  return (
    <React.Fragment>
      <PopoverBody
        p={0}
      >
        <>
          <SimpleGrid
            columns={props.columns ? props.columns : 1}
            pos="relative"
            gap={{ base: 6, sm: 2 }}
            p={{ sm: 4 }}
          >
            {props.subMenuItems.map((sectionItem, sid) => {
              if (sectionItem === "divider") {
                return <Divider key={sid} />;
              }
              if (typeof sectionItem === "function") {
                return (
                  <React.Fragment key={sid}>{sectionItem()}</React.Fragment>
                );
              }

              return (
                <SubMenuButtonOrLink
                  key={sid}
                  {...sectionItem}
                />
              );
            })}
          </SimpleGrid>
          {props.footer && props.footer}
        </>
      </PopoverBody>
    </React.Fragment>
  );
};

export const SubMenuTrigger = (
  props: {
    buttonContent: React.ReactNode;
    subMenuItems: Array<SubMenuItemType>;
  },
) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Popover
      computePositionOnMount
      closeDelay={1000}
      closeOnBlur={true}
      closeOnEsc={true}
      returnFocusOnClose={false}
      isLazy
      lazyBehavior="unmount"
    >
      <PopoverTrigger>
        {props.buttonContent && (
          <TopLevelButtonOrLink
            title={props.buttonContent}
            hasSubMenu
          />
        )}
      </PopoverTrigger>
      <Portal>
        <PopoverContent
          tabIndex={-1}
          _focus={{
            outline: "none",
          }}
        >
          <PopoverArrow />
          <SubMenu subMenuItems={props.subMenuItems} />
        </PopoverContent>
      </Portal>
    </Popover>
  );
};
