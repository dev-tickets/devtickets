import {
  Button,
  chakra,
  Flex,
  forwardRef,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import NextJSLink from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { SubMenuItemsLinksType } from "./sharedTypes";

const NextJSLinkWrapper = (
  { children, href, extraStyles = {}, onClick }: {
    children: React.ReactNode;
    href?: string;
    extraStyles?: any;
    onClick?: () => void;
  },
) => {
  return (Boolean(href) && typeof href === "string")
    ? (
      <NextJSLink
        legacyBehavior={false}
        onClick={() => {
          onClick?.();
        }}
        passHref
        href={href}
        style={extraStyles}
      >
        {children}
      </NextJSLink>
    )
    : <React.Fragment>{children}</React.Fragment>;
};

export const TopLevelButtonOrLink = forwardRef((
  props: {
    title: React.ReactNode;
    href?: string;
    onClick?: () => void;
    hasSubMenu?: boolean;
    extrastyles?: any;
    onEveryClick?: () => void;
  },
  ref,
) => {
  const bg = useColorModeValue("white", "gray.800");
  const cl = useColorModeValue("gray.800", "white");

  const buttonOrLinksProps = React.useMemo(() => {
    const someProps: Record<string, any> = {};
    if (props.href) {
      someProps.as = "a";
      someProps.href = props.href;
    } else if (props.onClick) {
      someProps.as = "button";
      someProps.onClick = props.onClick;
    }
    return someProps;
  }, [props.href, props.onClick]);
  return (
    <NextJSLinkWrapper
      extraStyles={props.extrastyles}
      href={props.href}
      onClick={props?.onEveryClick}
    >
      <Button
        bg={bg}
        color="gray.500"
        display="inline-flex"
        alignItems="center"
        fontSize="md"
        _hover={{ color: cl }}
        rightIcon={props.hasSubMenu ? <IoIosArrowDown /> : undefined}
        ref={ref}
        {...(props.extrastyles ?? {})}
        {...buttonOrLinksProps}
      >
        {props.title}
      </Button>
    </NextJSLinkWrapper>
  );
});

export const SubMenuButtonOrLink = (
  props: SubMenuItemsLinksType,
) => {
  const ic = useColorModeValue("brand.600", "brand.50");
  const hbg = useColorModeValue("gray.50", "brand.400");
  const tcl = useColorModeValue("gray.900", "gray.50");
  const dcl = useColorModeValue("gray.500", "gray.50");
  const buttonOrLinksProps = React.useMemo(() => {
    const someProps: Record<string, any> = {};
    if (props.href) {
      someProps.as = "a";
      someProps.href = props.href;
    } else if (props.onClick) {
      someProps.as = "button";
      someProps.onClick = props.onClick;
    }
    return someProps;
  }, [props.href, props.onClick]);
  return (
    <NextJSLinkWrapper onClick={props?.onEveryClick} href={props.href}>
      <Link
        p={2}
        display="flex"
        alignItems="flex-start"
        gap={4}
        width={{ base: "100%", md: "initial" }}
        rounded="lg"
        tabIndex={1}
        _hover={{ bg: hbg }}
        {...buttonOrLinksProps}
      >
        <props.icon
          flexShrink={0}
          h={6}
          w={6}
          color={ic}
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <Flex gap={1} flexDir="column">
          <chakra.p fontSize="sm" fontWeight="700" color={tcl}>
            {props.title}
          </chakra.p>
          {props.description && (
            <chakra.p fontSize="sm" color={dcl}>
              {props.description}
            </chakra.p>
          )}
        </Flex>
      </Link>
    </NextJSLinkWrapper>
  );
};
