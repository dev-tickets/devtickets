import { createClient, User } from "@supabase/supabase-js";
import React from "react";
import { useRouter } from "next/router";

const dashboardMainURL = "http://localhost:3000";
const loginCallbackURL = dashboardMainURL + "/login/finish";
export const supabase = createClient(
  "https://vetbymkdqqpzhirmibar.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZldGJ5bWtkcXFwemhpcm1pYmFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTEzNDc1NDksImV4cCI6MTk2NjkyMzU0OX0.RUCLr3_QKg3WlIluhx_SB6NvIuJVQoBLE-izIHcD8l0"
);

export const useLoginWithEmail = () => {
  return React.useCallback(async ({ email }: { email: string }) => {
    const { user, error, session } = await supabase.auth.signIn(
      {
        email: email.trim(),
      },
      {
        redirectTo: loginCallbackURL,
      }
    );

    console.log({ user, error, session });
    debugger;
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
      }
    );
    console.log({ user, error, session });
    debugger;
  }, []);
};

const Context = React.createContext<{
  user: User | null;
  login: ({ email }: { email: string }) => void;
  logout: () => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = React.useState(supabase.auth.user());

  React.useEffect(() => {
    const getUserProfile = async () => {
      try {
        const sessionUser = await supabase.auth.user();
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
      }
    );
  }, []);

  const logout = React.useCallback(async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/login");
  }, [router]);

  const exposed = React.useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [login, logout, user]
  );

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useAuthContext = () => React.useContext(Context);

export const useUser = () => {
  const { user } = React.useContext(Context);
  return user!;
};
export const useIsAuthenticated = () => {
  const { user } = React.useContext(Context);
  return Boolean(user);
};
