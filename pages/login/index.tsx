import FullScreenLayout from "@/components/ApplicationLayouts/FullScreenLayout";
import { GithubIcon, MagicWandIcon } from "@/components/Icons";
import {
  useIsAuthenticated,
  useLoginWithGithub,
} from "@/features/Auth/supabase";
import { useLoginWithEmail } from "@/features/Auth/supabase";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Router from "next/router";
import React, { ReactElement, useState } from "react";
import { useForm } from "react-hook-form";

type InternalRouteStates = "login" | "magic_email_response";

const LoginFormElement = ({
  setInternalRoute,
}: {
  setInternalRoute: React.Dispatch<React.SetStateAction<InternalRouteStates>>;
}) => {
  const login = useLoginWithEmail();
  const loginWithGithub = useLoginWithGithub();
  const isTheUserAuthenticated = useIsAuthenticated();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<{ email: string }>();
  React.useEffect(() => {
    if (isTheUserAuthenticated) {
      Router.push("/");
    }
  }, [isTheUserAuthenticated]);

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      setInternalRoute("magic_email_response");
    }
  }, [isSubmitSuccessful, setInternalRoute]);

  return (
    <>
      <Heading size="2xl" as="h1">
        Hello! 👋🏼
      </Heading>
      <Stack
        as="form"
        width="100%"
        onSubmit={handleSubmit(async (values) => {
          await login({ email: values.email });
        })}
      >
        <FormControl isInvalid={Boolean(errors.email)}>
          <Stack gap={3}>
            <Stack gap={0}>
              <Input
                borderRadius="lg"
                placeholder="hi@devtickets.cl"
                w="100%"
                size="lg"
                type="email"
                bg="white"
                {...register("email", {
                  required: "Ingresa tu correo",
                })}
              />
              <FormErrorMessage pl={1}>
                {errors?.email?.message}
              </FormErrorMessage>
            </Stack>
            <Button
              transitionDuration="250ms"
              transitionProperty="all"
              borderRadius="lg"
              transitionTimingFunction="ease-in-out"
              background={"linear-gradient(90.81deg, #F56565 0%, #ED64A6 100%);"}
              _hover={{
                background:
                  "linear-gradient(90.81deg, #F56565 0%, #ED64A6 100%)",
              }}
              _active={{
                background:
                  "linear-gradient(90.81deg, #F56565 0%, #ED64A6 100%)",
              }}
              color="white"
              leftIcon={<MagicWandIcon />}
              w="100%"
              variant="solid"
              h="fit-content"
              p={18}
              // h={10}
              type="submit"
              isLoading={isSubmitting}
            >
              Enviar Magic Link
            </Button>
          </Stack>
        </FormControl>
      </Stack>

      <Text fontSize="2xl" lineHeight={0} fontWeight="bold">
        or
      </Text>
      <Button
        isDisabled={isSubmitting}
        borderRadius="lg"
        h="fit-content"
        p={18}
        variant="outline"
        borderStyle="solid"
        borderWidth="thin"
        borderColor="black"
        w="100%"
        leftIcon={<GithubIcon />}
        onClick={loginWithGithub}
      >
        Logeate con Github
      </Button>
    </>
  );
};

const MagicEmailFormElement = ({
  setInternalRoute,
}: {
  setInternalRoute: React.Dispatch<React.SetStateAction<InternalRouteStates>>;
}) => {
  return (
    <>
      <Heading size="2xl" as="h1">
        Enviado! 📨
      </Heading>
      <Text align="center" fontSize="xl">
        Solo revisa tu bandeja de correo, haz click en el link, y listo!
      </Text>
      <Text align="center" fontSize="2xl" lineHeight={0} fontWeight="bold">
        o
      </Text>

      <Button
        borderRadius="lg"
        h="fit-content"
        p={18}
        variant="outline"
        borderStyle="solid"
        borderWidth="thin"
        borderColor="black"
        w="100%"
        leftIcon={<GithubIcon />}
        onClick={() => setInternalRoute("login")}
      >
        Intenta con otro método
      </Button>
    </>
  );
};

export default function Login() {
  // TODO: Handle UI for isSubmitSuccessful
  const [internalRoute, setInternalRoute] = useState<InternalRouteStates>(
    "login",
  );
  return (
    <Stack
      spacing={0}
      gap={10}
      bg="gray.50"
      width="100%"
      maxWidth={520}
      borderRadius="md"
      padding={10}
      alignItems="center"
      justifyContent="center"
    >
      {internalRoute === "login" && (
        <LoginFormElement setInternalRoute={setInternalRoute} />
      )}
      {internalRoute === "magic_email_response" && (
        <MagicEmailFormElement setInternalRoute={setInternalRoute} />
      )}
    </Stack>
  );
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <FullScreenLayout>{page}</FullScreenLayout>;
};
