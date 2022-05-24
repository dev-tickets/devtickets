import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "next/router";
import React from "react";
import {
  AuthProvider,
  useUser,
  useIsAuthenticated,
} from "../src/Features/Auth/supabase";
import DefaultTemplate from "../src/Components/PageTemplates/DefaultTemplate";
import "../src/Features/Sentry";
import { Provider } from "urql";
import { useURQLClient } from "../src/Features/URQL";

const unauthedPaths = new Set(["/login", "/login/finish"]);
const authedOnlyPaths = new Set(["/logout"]);

console.log("NEXT_PUBLIC_APP_ENV", process.env.NEXT_PUBLIC_APP_ENV);

const AfterAuthComponent = ({ Component, pageProps, router }: AppProps) => {
  const user = useUser();
  const isAuthenticated = useIsAuthenticated();
  const { urlqlClient } = useURQLClient();
  const [isMounted, setIsMounted] = React.useState(false);
  const currentPath = ((router as any)?.state?.pathname as string) || "";
  React.useEffect(() => {
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

  if (!isMounted) {
    // TODO: Set "Loading" UI here
    return null;
  }
  return (
    <DefaultTemplate>
      <Provider value={urlqlClient}>
        <Component {...pageProps} />
      </Provider>
    </DefaultTemplate>
  );
};

function MyApp(props: AppProps) {
  return (
    <>
      <ChakraProvider>
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
