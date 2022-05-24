import React, { ReactElement } from "react";
import {
  Button,
  Stack,
  Heading,
  Text,
  Input,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import {
  useIsAuthenticated,
  useLoginWithGithub,
} from "../../src/Features/Auth/supabase";
import { useLoginWithEmail } from "../../src/Features/Auth/supabase";
import Router from "next/router";
import { MagicWandIcon, GithubIcon } from "../../src/Components/Icons";
import FullScreenLayout from "../../src/Components/Layouts/FullScreenLayout";

export default function Login() {
  const login = useLoginWithEmail();
  const loginWithGithub = useLoginWithGithub();
  const isTheUserAuthenticated = useIsAuthenticated();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isSubmitted, isSubmitSuccessful },
  } = useForm<{ email: string }>();

  console.log({ isSubmitSuccessful, isSubmitted });
  // TODO: Handle UI for isSubmitSuccessful
  React.useEffect(() => {
    if (isTheUserAuthenticated) {
      Router.push("/");
    }
  }, [isTheUserAuthenticated]);
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
              background={
                "linear-gradient(90.81deg, #F56565 0%, #ED64A6 100%);"
              }
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
    </Stack>
  );
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <FullScreenLayout>{page}</FullScreenLayout>;
};
