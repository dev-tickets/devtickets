import "@fontsource/work-sans/400.css"; // Weight 400.
import "@fontsource/work-sans/700.css"; // Weight 700.

import "@fontsource/work-sans/variable-italic.css"; // Italic variant.
import "@fontsource/work-sans/variable.css"; // Contains ONLY variable weights and no other axes.

import { useApolloClient } from "@/features/Apollo";
import { AuthProvider } from "@/features/Auth/supabase";
import "@/features/Sentry";
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import React from "react";
import { theme } from "../src/Styling/theme";

type NextPageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// eslint-disable-next-line react/display-name
const AfterAuthComponent = ({
  getLayout,
  pageProps,
  Component,
}: {
  getLayout: (page: ReactElement) => ReactNode;
  Component: NextPageWithLayout;
  pageProps: any;
}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // TODO: Set "Loading" UI here
    return <></>;
  }

  return <>{getLayout(<Component {...pageProps} />)}</>;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const { apolloClient } = useApolloClient();
  return (
    <ChakraProvider
      theme={theme}
      colorModeManager={{
        ssr: true,
        type: "localStorage",
        set: () => "dark",
        get: () => "dark",
      }}
    >
      <CSSReset />
      <AuthProvider>
        <ApolloProvider client={apolloClient}>
          {typeof window === "undefined"
            ? null
            : (
              <AfterAuthComponent
                pageProps={pageProps}
                getLayout={Component.getLayout}
                Component={Component}
              />
            )}
        </ApolloProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
