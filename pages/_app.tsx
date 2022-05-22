import { globalStyles } from "../src/theme";
import type { AppProps } from "next/app";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import Router from "next/router";
import React from "react";
import {
  AuthProvider,
  useUser,
  useIsAuthenticated,
} from "../src/Auth/supabase";

const unauthedPaths = new Set(["/login", "/login/finish"]);
const authedOnlyPaths = new Set(["/logout"]);

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
    return null;
  }
  return <Component {...pageProps} />;
};

function MyApp(props: AppProps) {
  return (
    <>
      {globalStyles}
      <AuthProvider>
        {typeof window === "undefined" ? null : (
          <AfterAuthComponent {...props} />
        )}
      </AuthProvider>
    </>
  );
}

export default MyApp;
