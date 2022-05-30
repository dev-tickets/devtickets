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
  onSubMenuItemClicked: () => void;
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
            {props.subMenuItems.map((subMenuItem, sid) => {
              if (subMenuItem === "divider") {
                return <Divider key={sid} />;
              }
              if (typeof subMenuItem === "function") {
                return (
                  <React.Fragment key={sid}>{subMenuItem()}</React.Fragment>
                );
              }
              return (
                <SubMenuButtonOrLink
                  key={sid}
                  onEveryClick={props.onSubMenuItemClicked}
                  {...subMenuItem}
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
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      computePositionOnMount
      closeDelay={1000}
      closeOnBlur={true}
      closeOnEsc={true}
      isLazy
      returnFocusOnClose
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
          <SubMenu
            onSubMenuItemClicked={onClose}
            subMenuItems={props.subMenuItems}
          />
        </PopoverContent>
      </Portal>
    </Popover>
  );
};
