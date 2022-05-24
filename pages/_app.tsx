import "@fontsource/work-sans/400.css"; // Weight 400.
import "@fontsource/work-sans/700.css"; // Weight 700.

import "@fontsource/work-sans/variable.css"; // Contains ONLY variable weights and no other axes.
import "@fontsource/work-sans/variable-italic.css"; // Italic variant.

import type { AppProps } from "next/app";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Router from "next/router";
import { ReactElement, ReactNode, useEffect, useMemo, useState } from "react";
import {
  AuthProvider,
  useUser,
  useIsAuthenticated,
} from "../src/Features/Auth/supabase";
import "../src/Features/Sentry";
import { Provider } from "urql";
import { useURQLClient } from "../src/Features/URQL";
import type { NextPage } from "next";
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
  const user = useUser();
  const isAuthenticated = useIsAuthenticated();
  const { urlqlClient } = useURQLClient();
  const [isMounted, setIsMounted] = useState(false);
  const currentPath = ((router as any)?.state?.pathname as string) || "";
  useEffect(() => {
    if (isAuthenticated) {
      //allow rendering
      setIsMounted(true);
      return;
    } else {
      if (unauthedPaths.has(currentPath)) {
        //allow rendering
        setIsMounted(true);
        return;
      }
    }
    Router.push("/login");
  }, [currentPath, isAuthenticated, user]);

  const getLayout = useMemo(
    () => Component.getLayout ?? ((page: any) => page),
    [Component.getLayout]
  );

  if (!isMounted) {
    // TODO: Set "Loading" UI here
    return null;
  }

  return getLayout(
    <Provider value={urlqlClient}>
      <Component {...pageProps} />
    </Provider>
  );
};

function MyApp(props: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <AuthProvider>
          {typeof window === "undefined" ? null : (
            <AfterAuthComponent {...props} />
          )}
        </AuthProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
