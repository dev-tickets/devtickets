import React from "react";
import { Auth0Client, User } from "@auth0/auth0-spa-js";

const dashboardMainURL = "http://localhost:3000";
const loginCallbackURL = dashboardMainURL + "/login/finish";
// const logoutCallbackURL = dashboardMainURL + "/logout";
const auth0 = new Auth0Client({
  domain: "fforres.auth0.com",
  client_id: "cT9hPy1I7Z8OESCLC8ZaTFYOJibwlOJP",
  redirect_uri: loginCallbackURL,
  cacheLocation: "localstorage",
});

export const useIsAuthenticated = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [user, setUser] = React.useState<User | null>(null);
  React.useEffect(() => {
    const start = async () => {
      if (isLoading) {
        return;
      }
      setIsLoading(true);
      try {
        const isit = await auth0.isAuthenticated();
        if (isit) {
          const auth0User = await auth0.getUser();
          if (auth0User) {
            setUser(auth0User);
          }
        }
      } catch (e) {
        setError(true);
        setErrorMessage((e as Error).message);
        setUser(null);
      } finally {
        setIsLoading(false);
        setError(false);
        setErrorMessage("");
      }
    };
    start();
  }, []);
  return { isLoading, error, errorMessage, user };
};

export const useEnsureAuthentication = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    const start = async () => {
      if (isLoading) {
        return;
      }
      try {
        setIsLoading(true);
        await auth0.getTokenSilently();
      } catch (e) {
        if ((e as { error: string }).error === "login_required") {
          await auth0.loginWithRedirect();
        }
        // todo: handle the other errors
      } finally {
        setIsLoading(false);
      }
    };
    start();
  }, []);
  return { isLoading };
};

export const useTriggerLogin = () => {
  return React.useMemo(
    () => ({
      login: () => auth0.loginWithRedirect(),
    }),
    []
  );
};

export const useTriggerLogout = () => {
  return React.useMemo(
    () => ({
      logout: () =>
        auth0.logout({
          returnTo: dashboardMainURL,
        }),
    }),
    []
  );
};

export const useHandleCallback = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const start = async () => {
      if (isLoading) {
        return;
      }
      setIsLoading(true);
      try {
        const asd = await auth0.handleRedirectCallback();
        console.log(asd);
        debugger;
        const auth0User = await auth0.getUser();
        if (auth0User) {
          setUser(auth0User);
        }
        debugger;
        // TODO: save user information on our DB.
        // Save token locally
      } catch (e) {
        setError(true);
        setErrorMessage((e as Error).message);
        setUser(null);
      } finally {
        setIsLoading(false);
        setError(false);
        setErrorMessage("");
      }
    };
    start();
  }, [isLoading]);
  return {
    isLoading,
    error,
    errorMessage,
    user,
  };
};
