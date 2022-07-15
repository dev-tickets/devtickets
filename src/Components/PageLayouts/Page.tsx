import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Page = (props: Props) => {
  return (
    <Flex
      w="full"
      alignItems="center"
      justifyContent={"center"}
    >
      <Flex
        maxW="1200px"
        px="6"
        width="100%"
        direction={"column"}
      >
        {props.children}
      </Flex>
    </Flex>
  );
};
