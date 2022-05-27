import { TextArea } from "@/components/Form/TextArea";
import { TextInput } from "@/components/Form/TextInput";
import { InformationIcon } from "@/components/Icons";
import { Alert, AlertIcon, Button, Flex, FormControl } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import slugify from "slugify";

import React from "react";
import { useCreateCommunityMutation } from "./createCommunity.generated";

type FormInputs = { name: string; description: string; slug: string };

type Props = {};

const CreateCommunity = (props: Props) => {
  const [createCommunity, createCommunityMutation] =
    useCreateCommunityMutation();
  const {
    handleSubmit,
    register,
    setError,
    watch,
    reset,
    formState: {
      errors,
      isSubmitSuccessful,
      isSubmitting,
    },
  } = useForm<FormInputs>();
  const hasErrors = Boolean(Object.keys(errors).length);
  return (
    <FormControl isInvalid={hasErrors}>
      <Flex
        onSubmit={handleSubmit(async (data) => {
          const response = await createCommunityMutation({
            communitiesInsertInput: {
              description: data.description,
              slug: slugify(data.slug),
              name: data.name,
            },
          });
          if (response.error) {
            if (
              response.error?.name === "CombinedError"
              && response.error.graphQLErrors
            ) {
              response.error.graphQLErrors.forEach(graphqlError => {
                if (
                  graphqlError.message
                    === "duplicate key value violates unique constraint \"unique_slug_names\""
                ) {
                  setError("slug", {
                    type: "custom",
                    message: "Slug is already used!",
                  }, { shouldFocus: true });
                }
              });
            }
          } else {
            reset();
          }
        })}
        as="form"
        bg="white"
        w="100%"
        p={6}
        direction="column"
        gap={6}
        borderRadius={6}
      >
        {isSubmitSuccessful && (
          <Alert status="success">
            <AlertIcon />
            Community Created Successfully
          </Alert>
        )}

        <TextInput
          autoFocus
          placeholder="Por ej: JSConf Chile"
          label="Nombre de la comunidad"
          errors={errors}
          register={register("name", {
            required: "Ingresa un Nombre para la Comunidad",
          })}
        />
        <TextInput
          register={register("slug", {
            required: "Ingresa un slug para la comunidad",
          })}
          label="Slug de la Comunidad"
          errors={errors}
          popover={{
            popoverHeader: "Id url-friendly",
            popoverBody:
              `El id para la URL de tu comunidad.\n Así aparecerá en el sitio: \n https://nuestra_url.com/comunidad/${
                slugify(watch("slug", "") || "")
              }`,
            popoverIcon: InformationIcon,
          }}
          helperText={`
          El id para la URL de tu comunidad, \n Por Ejemplo: https://nuestra_url.com/comunidad/${
            slugify(watch("slug", "") || "")
          }
          `}
        />

        <TextArea
          label="Nombre de la comunidad"
          minHeight={200}
          resize="none"
          errors={errors}
          register={register("description", {
            required: "Ingresa una descripción para la comunidad",
          })}
        />
        <Flex justifyContent="flex-end">
          <Button
            isDisabled={hasErrors}
            isLoading={isSubmitting}
            type="submit"
            variant="solid"
          >
            Crear
          </Button>
        </Flex>
      </Flex>
    </FormControl>
  );
};

export default CreateCommunity;
