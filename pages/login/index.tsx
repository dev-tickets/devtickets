import React from "react";
import type { NextPage } from "next";
import { Button, H1 } from "@blueprintjs/core";
import {
  useIsAuthenticated,
  useLoginWithGithub,
} from "../../src/Auth/supabase";
import { useLoginWithEmail } from "../../src/Auth/supabase";
import Router from "next/router";

const Login: NextPage = () => {
  const login = useLoginWithEmail();
  const loginWithGithub = useLoginWithGithub();
  const isTheUserAuthenticated = useIsAuthenticated();
  React.useEffect(() => {
    if (isTheUserAuthenticated) {
      Router.push("/");
    }
  }, [isTheUserAuthenticated]);
  return (
    <div>
      <H1>LOGIN!</H1>
      <Button
        intent="primary"
        icon="envelope"
        onClick={() => login({ email: "felipe.torressepulveda@gmail.com" })}
      >
        With Magic email
      </Button>
      <Button intent="primary" onClick={loginWithGithub}>
        Login with github
      </Button>
    </div>
  );
};

export default Login;
