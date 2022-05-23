import React from "react";
import type { NextPage } from "next";
import { useAuthContext } from "../../src/Features/Auth/supabase";

const Logout: NextPage = () => {
  const { logout } = useAuthContext();
  return (
    <div>
      <h1>LOGOUT!!!!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;
