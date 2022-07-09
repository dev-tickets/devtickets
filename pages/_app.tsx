import "@fontsource/work-sans/400.css"; // Weight 400.
import "@fontsource/work-sans/700.css"; // Weight 700.

import "@fontsource/work-sans/variable-italic.css"; // Italic variant.
import "@fontsource/work-sans/variable.css"; // Contains ONLY variable weights and no other axes.

import { AuthProvider } from "@/features/Auth/supabase";
import { useApolloClient } from "@/features/Data";
import "@/features/Sentry";
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import React from "react";
import { theme } from "../src/Styling/theme";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const AfterAuthComponent = ({
  Component,
  pageProps,
}: AppPropsWithLayout) => {
  const { apolloClient } = useApolloClient();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getLayout = React.useMemo(() => {
    return Component.getLayout!;
  }, [Component.getLayout]);

  if (!isMounted) {
    // TODO: Set "Loading" UI here
    return <></>;
  }

  return (
    <ApolloProvider client={apolloClient}>
      {getLayout(<Component {...pageProps} />)}
    </ApolloProvider>
  );
};

function MyApp(props: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <AuthProvider>
        {typeof window === "undefined"
          ? null
          : <AfterAuthComponent {...props} />}
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
