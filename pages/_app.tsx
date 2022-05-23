import "../src/theme/styles.css";
import { GlobalStyles } from "../src/theme";
import type { AppProps } from "next/app";
import Router from "next/router";
import React from "react";
import {
  AuthProvider,
  useUser,
  useIsAuthenticated,
} from "../src/Features/Auth/supabase";
import DefaultTemplate from "../src/Components/PageTemplates/DefaultTemplate";
import "../src/Features/Sentry";

const unauthedPaths = new Set(["/login", "/login/finish"]);
const authedOnlyPaths = new Set(["/logout"]);

console.log("APP_ENV", process.env.APP_ENV);

const AfterAuthComponent = ({ Component, pageProps, router }: AppProps) => {
  const user = useUser();
  const isAuthenticated = useIsAuthenticated();
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
      <Component {...pageProps} />
    </DefaultTemplate>
  );
};

function MyApp(props: AppProps) {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        {typeof window === "undefined" ? null : (
          <AfterAuthComponent {...props} />
        )}
      </AuthProvider>
    </>
  );
}

export default MyApp;
