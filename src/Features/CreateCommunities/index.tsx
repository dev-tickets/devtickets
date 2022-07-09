import { ImageSelectionField } from "@/components/Form/ImageSelectionField";
import { TextArea } from "@/components/Form/TextArea";
import { TextInput } from "@/components/Form/TextInput";
import { InformationIcon } from "@/components/Icons";
import { Alert, AlertIcon, Button, Flex, FormControl } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import slugify from "slugify";
import { useCreateCommunityMutation } from "./createCommunity.generated";

type FormInputs = {
  name: string;
  description: string;
  slug: string;
  image_url: string;
};

const handleCommunitySlug = (unParsed: string) => {
  return slugify(unParsed.toLowerCase());
};

const CreateCommunity = () => {
  const [createCommunityMutation] = useCreateCommunityMutation();
  const {
    handleSubmit,
    register,
    setError,
    setValue,
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
        onSubmit={handleSubmit(React.useCallback(async (data) => {
          const response = await createCommunityMutation({
            variables: {
              communitiesInsertInput: {
                description: data.description,
                slug: handleCommunitySlug(data.slug),
                name: data.name,
                image: data.image_url,
              },
            },
          });
          if (response.errors) {
            response.errors?.forEach(error => {
              if (
                error.message
                  === "duplicate key value violates unique constraint \"unique_slug_names\""
              ) {
                setError("slug", {
                  type: "custom",
                  message: "Slug is already used!",
                }, { shouldFocus: true });
              }
            });
          } else {
            reset();
          }
        }, [createCommunityMutation, reset, setError]))}
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

        <ImageSelectionField
          autoFocus
          label="Cover para la página de tu comunidad"
          errors={errors}
          previewImageURL={watch("image_url", "")}
          onImageSelected={(imageUrl) =>
            setValue("image_url", imageUrl, {
              shouldValidate: true,
              shouldDirty: true,
              shouldTouch: true,
            })}
          register={register("image_url", {
            required: "Selecciona una imágen para la Comunidad",
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
                handleCommunitySlug(watch("slug", "") || "")
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
          label="Descripción"
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
