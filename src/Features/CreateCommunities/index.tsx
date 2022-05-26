import { TextArea } from "@/components/Form/TextArea";
import { TextInput } from "@/components/Form/TextInput";
import { InformationIcon } from "@/components/Icons";
import { Button, Flex, FormControl } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import slugify from "slugify";

import React from "react";

type FormInputs = { name: string; description: string; slug: string };

type Props = {};

const CreateCommunity = (props: Props) => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormInputs>();

  return (
    <FormControl isInvalid={Boolean(Object.keys(errors).length)}>
      <Flex
        onSubmit={handleSubmit(async (data) => {
          await console.log("ads", data);
        })}
        as="form"
        bg="white"
        w="100%"
        p={6}
        direction="column"
        gap={5}
        borderRadius={6}
      >
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
                slugify(watch("slug", ""))
              }`,
            popoverIcon: InformationIcon,
          }}
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

        <Button type="submit" variant="solid">Crear</Button>
      </Flex>
    </FormControl>
  );
};

export default CreateCommunity;
