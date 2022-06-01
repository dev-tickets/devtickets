import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

type Props = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export const Page = (props: Props) => {
  return (
    <Flex
      width="100%"
      alignItems="center"
      justifyContent={"center"}
    >
      <Flex
        padding={{
          base: 10,
          md: 16,
        }}
        width="100%"
        maxWidth="container.lg"
        direction={"column"}
        gap={10}
      >
        <Heading size={"xl"}>{props.title}</Heading>
        {props.children}
      </Flex>
    </Flex>
  );
};
