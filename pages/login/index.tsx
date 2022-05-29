import FullScreenLayout from "@/components/ApplicationLayouts/FullScreenLayout";
import { TextInput } from "@/components/Form/TextInput";
import { ArrowLeftIcon, GithubIcon, MagicWandIcon } from "@/components/Icons";
import {
  useIsAuthenticated,
  useLoginWithEmail,
  useLoginWithGithub,
} from "@/features/Auth/supabase";
import {
  Button,
  FormControl,
  Heading,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LayoutGroup, motion } from "framer-motion";
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
      <FormControl isInvalid={Boolean(errors.email)}>
        <Stack
          as="form"
          width="100%"
          onSubmit={handleSubmit(async (values) => {
            await login({ email: values.email });
          })}
        >
          <Stack gap={3}>
            <Stack gap={0}>
              <TextInput
                name="email"
                autoFocus
                placeholder="Ingresa tu correo"
                errors={errors}
                register={register("email", {
                  required: "Ingresa un correo válido",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Ingresa un correo válido",
                  },
                })}
              />
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
        </Stack>
      </FormControl>

      <Text fontSize="large" lineHeight={0}>
        o
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
        Ingresa con Github
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
      <IconButton
        position="absolute"
        variant="ghost"
        aria-label="Call Sage"
        fontSize="20px"
        icon={<ArrowLeftIcon />}
        top={4}
        left={4}
        onClick={() => setInternalRoute("login")}
      />
      <Heading size="2xl" as="h1">
        Enviado! 📨
      </Heading>
      <Text align="center" fontSize="xl">
        Revisa tu bandeja de correo, haz click en el link, y listo!
      </Text>
    </>
  );
};

const AnimatedStack = motion(Stack);
export default function Login() {
  // TODO: Handle UI for isSubmitSuccessful
  const [internalRoute, setInternalRoute] = useState<InternalRouteStates>(
    "login",
  );
  return (
    <LayoutGroup id="login">
      <AnimatedStack
        layout="position"
        spacing={0}
        gap={10}
        bg="gray.50"
        width="100%"
        maxWidth={520}
        borderRadius="md"
        padding={16}
        shadow="2xl"
        margin={2}
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        {internalRoute === "login" && (
          <LoginFormElement setInternalRoute={setInternalRoute} />
        )}
        {internalRoute === "magic_email_response" && (
          <MagicEmailFormElement setInternalRoute={setInternalRoute} />
        )}
      </AnimatedStack>
    </LayoutGroup>
  );
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <FullScreenLayout>{page}</FullScreenLayout>;
};
