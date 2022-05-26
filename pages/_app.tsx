import "@fontsource/work-sans/400.css"; // Weight 400.
import "@fontsource/work-sans/700.css"; // Weight 700.

import "@fontsource/work-sans/variable-italic.css"; // Italic variant.
import "@fontsource/work-sans/variable.css"; // Contains ONLY variable weights and no other axes.

import {
  AuthProvider,
  useIsAuthenticated,
  useUser,
} from "@/features/Auth/supabase";
import "@/features/Sentry";
import { useURQLClient } from "@/features/URQL";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Router from "next/router";
import { ReactElement, ReactNode, useEffect, useMemo, useState } from "react";
import { Provider } from "urql";
import { theme } from "../src/Styling/theme";

const unauthedPaths = new Set(["/login", "/login/finish"]);
const authedOnlyPaths = new Set(["/logout"]);

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const AfterAuthComponent = ({
  Component,
  pageProps,
  router,
}: AppPropsWithLayout) => {
  const { urlqlClient } = useURQLClient();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // TODO: Set "Loading" UI here
    return <></>;
  }

  return (
    <>
      {Component.getLayout!(
        <Provider value={urlqlClient}>
          <Component {...pageProps} />
        </Provider>,
      )}
    </>
  );
};

function MyApp(props: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <AuthProvider>
          {typeof window === "undefined"
            ? null
            : <AfterAuthComponent {...props} />}
        </AuthProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
