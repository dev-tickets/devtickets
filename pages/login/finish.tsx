import React from "react";
import type { NextPage } from "next";
import { useIsAuthenticated } from "../../src/Auth/supabase";
import Router from "next/router";

const Finish: NextPage = () => {
  const is = useIsAuthenticated();
  React.useEffect(() => {
    if (is) {
      Router.replace("/");
    }
  }, [is]);
  return <div>👍</div>;
};

export default Finish;
