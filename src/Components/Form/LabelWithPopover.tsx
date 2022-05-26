import {
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
} from "@chakra-ui/react";
import React from "react";

type PopoverType = {
  popoverIcon: () => JSX.Element;
  popoverHeader?: React.ReactNode;
  popoverBody: React.ReactNode;
};

export type LabelWithPopoverProps = {
  label?: React.ReactNode;
  popover?: PopoverType;
  elementName?: string;
};

const LabelPopover = ({
  popoverIcon: PopoverIcon,
  popoverHeader,
  popoverBody,
}: PopoverType) => {
  return (
    <Popover trigger="click" placement="right">
      <PopoverTrigger>
        <Flex cursor="pointer" justifyContent="center" alignItems="center">
          <PopoverIcon />
        </Flex>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          {popoverHeader && <PopoverHeader>{popoverHeader}</PopoverHeader>}
          <PopoverBody>
            {popoverBody}
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export const LabelWithPopover = ({
  label,
  popover,
  elementName,
}: LabelWithPopoverProps) => {
  return (
    <Flex direction={"row"} gap={2} alignItems="center">
      <>
        <label htmlFor={elementName}>
          <Text fontSize="large">{label}</Text>
        </label>
        {popover && <LabelPopover {...popover} />}
      </>
    </Flex>
  );
};
