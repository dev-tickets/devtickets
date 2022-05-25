import React from "react";
import type { NextPage } from "next";
import { useAuthContext } from "@/features/Auth/supabase";

const Logout: NextPage = () => {
  const { logout } = useAuthContext();
  React.useEffect(() => {
    logout();
  }, [logout]);
  return <div></div>;
};

export default Logout;
