import { Center } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const FullScreenLayout = (props: Props) => {
  return (
    <Center h="100vh" w="100vw">
      {props.children}
    </Center>
  );
};

export default FullScreenLayout;
