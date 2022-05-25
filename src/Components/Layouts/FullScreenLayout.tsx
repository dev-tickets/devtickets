import { Center } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const FullScreenLayout = ({ children }: Props) => {
  return (
    <Center h="100vh" w="100vw">
      {children}
    </Center>
  );
};

export default FullScreenLayout;
