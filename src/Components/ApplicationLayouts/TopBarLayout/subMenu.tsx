import { GenericIconComponentType } from "@/components/Icons";
import {
  Box,
  Button,
  chakra,
  Flex,
  forwardRef,
  Icon,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const CommunitiesFooter = () => {
  const hbg = useColorModeValue("gray.50", "brand.400");
  const hbgh = useColorModeValue("gray.100", "brand.500");
  const tcl = useColorModeValue("gray.900", "gray.50");
  return (
    <Box px={{ base: 5, sm: 8 }} py={5} bg={hbg} display={{ sm: "flex" }}>
      <Stack direction={{ base: "row" }} spacing={{ base: 6, sm: 10 }}>
        <Box display="flow-root">
          <Link
            m={-3}
            p={3}
            display="flex"
            alignItems="center"
            rounded="md"
            fontSize="md"
            color={tcl}
            _hover={{ bg: hbgh }}
          >
            <Icon
              flexShrink={0}
              h={6}
              w={6}
              color="gray.400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </Icon>
            <chakra.span ml={3}>Watch Demo</chakra.span>
          </Link>
        </Box>
        <Box display="flow-root">
          <Link
            m={-3}
            p={3}
            display="flex"
            alignItems="center"
            rounded="md"
            fontSize="md"
            color={tcl}
            _hover={{ bg: hbgh }}
          >
            <Icon
              flexShrink={0}
              h={6}
              w={6}
              color="gray.400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </Icon>
            <chakra.span ml={3}>Contact Sales</chakra.span>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export const TopLevelButtonOrLink = forwardRef((
  props: {
    title: React.ReactNode;
    href?: string;
    onClick?: () => void;
    hasSubMenu?: boolean;
  },
  ref,
) => {
  const bg = useColorModeValue("white", "gray.800");
  const cl = useColorModeValue("gray.800", "white");
  const buttonOrLinksProps = React.useMemo(() => {
    const someProps: Record<string, any> = {};
    if (props.href) {
      someProps.href = props.href;
      someProps.as = "a";
    } else if (props.onClick) {
      someProps.as = "button";
      someProps.onClick = props.onClick;
    }
    return someProps;
  }, [props.href, props.onClick]);
  return (
    <Button
      bg={bg}
      color="gray.500"
      display="inline-flex"
      alignItems="center"
      fontSize="md"
      _hover={{ color: cl }}
      rightIcon={props.hasSubMenu ? <IoIosArrowDown /> : undefined}
      ref={ref}
      {...buttonOrLinksProps}
    >
      {props.title}
    </Button>
  );
});

const Section = (
  props: SubMenuItem,
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
    <Link
      p={4}
      display="flex"
      alignItems="flex-start"
      gap={4}
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
  );
};

export type SubMenuItem = {
  title: string;
  icon: GenericIconComponentType;
  description?: string;
  href: string;
  onClick?: never;
} | {
  title: string;
  icon: GenericIconComponentType;
  description?: string;
  href?: never;
  onClick: () => void;
};

const SubMenu = (props: {
  h?: any;
  subMenuItems: Array<
    SubMenuItem
  >;
}) => {
  return (
    <React.Fragment>
      <PopoverBody p={0}>
        <SimpleGrid
          columns={props?.h ? { base: 1, md: 3, lg: 5 } : 1}
          pos="relative"
          gap={{ base: 6, sm: 8 }}
          p={{ sm: 8 }}
        >
          {props.subMenuItems.map((sectionItem, sid) => (
            <Section
              key={sid}
              {...sectionItem}
            />
          ))}
        </SimpleGrid>
        {/* <CommunitiesFooter /> */}
      </PopoverBody>
    </React.Fragment>
  );
};

export const SubMenuTrigger = (
  props: { buttonText: React.ReactNode; subMenuItems: Array<SubMenuItem> },
) => {
  const bg = useColorModeValue("white", "gray.800");
  const cl = useColorModeValue("gray.800", "white");

  return (
    <Popover
      isLazy
      lazyBehavior="keepMounted"
    >
      <PopoverTrigger>
        <TopLevelButtonOrLink
          title={props.buttonText}
          hasSubMenu
        />
      </PopoverTrigger>
      {/* <Portal> */}
      <PopoverContent
        w="100vw"
        maxW="md"
        _focus={{ boxShadow: "md" }}
      >
        <PopoverArrow />
        <SubMenu subMenuItems={props.subMenuItems} />
      </PopoverContent>
      {/* </Portal> */}
    </Popover>
  );
};
