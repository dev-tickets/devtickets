import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

type Props = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export const Page = (props: Props) => {
  return (
    <Flex
      direction={"column"}
      padding={{
        base: 10,
        md: 16,
      }}
      gap={10}
    >
      <Heading size={"xl"}>{props.title}</Heading>
      {props.children}
    </Flex>
  );
};
