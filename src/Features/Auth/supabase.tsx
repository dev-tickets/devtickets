import { createClient, User } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import React from "react";

const dashboardMainURL =
  process.env.NEXT_PUBLIC_APP_ENV === "staging" && typeof window !== "undefined"
    ? // IF this is "staging" it means we are on a pages.dev env.
      window.location.origin
    : process.env.NEXT_PUBLIC_APP_HOST!;
const loginCallbackURL = dashboardMainURL + "/login/finish";
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_API_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_API_TOKEN!,
);

export const useLoginWithEmail = () => {
  return React.useCallback(({ email }: { email: string }) => {
    return supabase.auth.signIn(
      {
        email: email.trim(),
      },
      {
        redirectTo: loginCallbackURL,
      },
    );
  }, []);
};

export const useLoginWithGithub = () => {
  return React.useCallback(async () => {
    const { user, error, session } = await supabase.auth.signIn(
      {
        provider: "github",
      },
      {
        redirectTo: loginCallbackURL,
      },
    );
  }, []);
};

const Context = React.createContext<{
  user: User | null;
  login: ({ email }: { email: string }) => void;
  logout: () => void;
  accessToken?: string;
}>({
  user: null,
  login: () => {},
  logout: () => {},
  accessToken: undefined,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = React.useState(supabase.auth.user());
  const [accessToken, setAccessToken] = React.useState(
    supabase.auth.session()?.access_token,
  );

  React.useEffect(() => {
    const getUserProfile = async () => {
      try {
        const sessionUser = await supabase.auth.user();
        const sessionAccessToken = supabase.auth.session()?.access_token;
        if (sessionUser) {
          const { data: profile } = await supabase
            .from("profile")
            .select("*")
            .eq("id", sessionUser.id)
            .single();

          setUser({
            ...sessionUser,
            ...profile,
          });
        }
        if (sessionAccessToken) {
          setAccessToken(sessionAccessToken);
        }
      } catch (e) {
        console.error(e);
      } finally {
      }
    };

    getUserProfile();

    supabase.auth.onAuthStateChange(() => {
      getUserProfile();
    });
  }, []);

  const login = React.useCallback(async ({ email }: { email: string }) => {
    await supabase.auth.signIn(
      {
        email: email.toLowerCase().trim(),
      },
      {
        redirectTo: loginCallbackURL,
      },
    );
  }, []);

  const logout = React.useCallback(async () => {
    await supabase.auth.signOut();
    setUser(null);
    setAccessToken(undefined);
    router.push("/login");
  }, [router]);

  const exposed = React.useMemo(
    () => ({
      user,
      login,
      logout,
      accessToken,
    }),
    [login, logout, user, accessToken],
  );

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useAuthContext = () => React.useContext(Context);

export const useUser = () => {
  const { user } = React.useContext(Context);
  return user;
};
export const useIsAuthenticated = () => {
  const { user } = React.useContext(Context);
  return Boolean(user);
};
