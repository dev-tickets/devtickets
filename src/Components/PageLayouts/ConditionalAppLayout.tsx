import Router from "next/router";
import { ReactNode } from "react";
import { useIsAuthenticated } from "@/features/Auth/supabase";
import { AppLayout } from "./AppLayout";

/** This is only for authenticated users */
export function ConditionalAppLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = useIsAuthenticated();
  if (isAuthenticated) {
    return <AppLayout>{children}</AppLayout>;
  } else {
    return <>{children}</>;
  }
}
