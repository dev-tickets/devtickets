import { TextArea } from "@/components/Form/TextArea";
import { TextInput } from "@/components/Form/TextInput";
import { InformationIcon } from "@/components/Icons";
import { Alert, AlertIcon, Button, Flex, FormControl } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import React from "react";
import { useCreateEventMutation } from "./createCommunity.generated";

type FormInputs = {
  address: string;
  city: string;
  community_id: string;
  description: string;
  map_link: string;
  name: string;
  status: string;
  end_date: Date;
  start_date: Date;
  country: number;
};

const CreateEvent = () => {
  const [, createEventMutation] = useCreateEventMutation();
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
        onSubmit={handleSubmit(React.useCallback(async (data) => {
          // const response = await createEventMutation({
          //   eventInsertInput: {
          //     description: data.description,
          //     name: data.name,
          //   },
          // });
          // if (response.error) {
          //   if (
          //     response.error?.name === "CombinedError"
          //     && response.error.graphQLErrors
          //   ) {
          //     response.error.graphQLErrors.forEach(graphqlError => {
          //       if (
          //         graphqlError.message
          //           === "duplicate key value violates unique constraint \"unique_slug_names\""
          //       ) {
          //         setError("slug", {
          //           type: "custom",
          //           message: "Slug is already used!",
          //         }, { shouldFocus: true });
          //       }
          //     });
          //   }
          // } else {
          //   reset();
          // }
        }, [createEventMutation, reset, setError]))}
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
          label="Nombre del evento"
          errors={errors}
          register={register("country", {
            required: "Ingresa un Nombre paral evento",
          })}
        />
        <TextInput
          register={register("address", {
            required: "Ingresa un slug paral evento",
          })}
          label="Slug del evento"
          errors={errors}
          popover={{
            popoverHeader: "Id url-friendly",
            popoverBody:
              `El id para la URL de tu comunidad.\n Así aparecerá en el sitio: \n https://nuestra_url.com/comunidad/`,
            popoverIcon: InformationIcon,
          }}
          helperText={`El id para la URL de tu comunidad, \n Por Ejemplo: https://nuestra_url.com/comunidad/`}
        />

        <TextArea
          label="Descripción del evento"
          minHeight={200}
          resize="none"
          errors={errors}
          register={register("description", {
            required: "Ingresa una descripción paral evento",
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

export default CreateEvent;
