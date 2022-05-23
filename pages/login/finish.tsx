import React from "react";
import type { NextPage } from "next";
import { useIsAuthenticated } from "../../src/Features/Auth/supabase";
import Router from "next/router";

const Finish: NextPage = () => {
  const isTheUserAuthenticated = useIsAuthenticated();
  React.useEffect(() => {
    if (isTheUserAuthenticated) {
      Router.replace("/");
    }
  }, [isTheUserAuthenticated]);
  return <div>👍</div>;
};

export default Finish;
