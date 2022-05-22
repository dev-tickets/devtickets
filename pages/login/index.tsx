import React from "react";
import type { NextPage } from "next";
import {
  supabase,
  useIsAuthenticated,
  useLoginWithGithub,
  useUser,
} from "../../src/Auth/supabase";
import { useLoginWithEmail } from "../../src/Auth/supabase";
import Router from "next/router";

const Login: NextPage = () => {
  const login = useLoginWithEmail();
  const loginWithGithub = useLoginWithGithub();
  const isit = useIsAuthenticated();
  React.useEffect(() => {
    if (isit) {
      Router.push("/");
    }
  }, [isit]);
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
