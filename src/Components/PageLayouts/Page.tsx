import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

type Props = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export const Page = (props: Props) => {
  return (
    <Flex
      direction={"column"}
      padding={10}
      gap={10}
    >
      <Heading size={"2xl"}>{props.title}</Heading>
      {props.children}
    </Flex>
  );
};
