import { useAuthContext } from "@/features/Auth/supabase";
import type { NextPage } from "next";
import React from "react";

const Logout: NextPage = () => {
  const { logout } = useAuthContext();
  React.useEffect(() => {
    logout();
  }, [logout]);
  return <div></div>;
};

export default Logout;
