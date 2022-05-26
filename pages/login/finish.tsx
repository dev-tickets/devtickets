import FullScreenLayout from "@/components/PageLayouts/FullScreenLayout";
import { useIsAuthenticated } from "@/features/Auth/supabase";
import { Spinner, Stack } from "@chakra-ui/react";
import Router from "next/router";
import React, { ReactElement } from "react";

export default function Finish() {
  const isTheUserAuthenticated = useIsAuthenticated();
  React.useEffect(() => {
    if (isTheUserAuthenticated) {
      Router.replace("/");
    }
  }, [isTheUserAuthenticated]);
  return (
    <Stack
      spacing={0}
      gap={10}
      bg="gray.50"
      width="100%"
      maxWidth={520}
      borderRadius="md"
      padding={10}
      minHeight={400}
      alignItems="center"
      justifyContent="center"
    >
      <Spinner
        thickness="4px"
        speed="0.45s"
        emptyColor="gray.200"
        color="red.500"
        size="xl"
      />
    </Stack>
  );
}

Finish.getLayout = function getLayout(page: ReactElement) {
  return <FullScreenLayout>{page}</FullScreenLayout>;
};
