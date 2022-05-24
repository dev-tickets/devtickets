import React from "react";
import type { NextPage } from "next";
import { Button, Stack, Heading, Center } from "@chakra-ui/react";
import {
  useIsAuthenticated,
  useLoginWithGithub,
} from "../../src/Features/Auth/supabase";
import { useLoginWithEmail } from "../../src/Features/Auth/supabase";
import Router from "next/router";
import { MailIcon, GithubIcon } from "../../src/Components/Icons";

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
    <Center h="100vh" minH={"300px"}>
      <Stack spacing={6}>
        <Heading size="3xl" as="h1">
          LOGIN!
        </Heading>
        <Button
          leftIcon={<MailIcon />}
          onClick={() => login({ email: "felipe.torressepulveda@gmail.com" })}
        >
          With Magic email
        </Button>
        <Button leftIcon={<GithubIcon />} onClick={loginWithGithub}>
          Login with github
        </Button>
      </Stack>
    </Center>
  );
};

export default Login;
