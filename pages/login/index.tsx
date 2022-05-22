import React from "react";
import type { NextPage } from "next";
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
      <h1>LOGIN!</h1>
      <button
        onClick={() => login({ email: "felipe.torressepulveda@gmail.com" })}
      >
        click here to login
      </button>
      <br />
      <button onClick={loginWithGithub}>LOGIN WITH GITHUB HERE</button>
    </div>
  );
};

export default Login;
