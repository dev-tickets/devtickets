import { useIsAuthenticated } from "@/features/Auth/supabase";
import { ReactNode } from "react";
import { TopBarLayout } from "../TopBarLayout";

/** This is only for authenticated users */
export function ConditionalAppLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = useIsAuthenticated();
  if (isAuthenticated) {
    return <TopBarLayout>{children}</TopBarLayout>;
  } else {
    return <>{children}</>;
  }
}
