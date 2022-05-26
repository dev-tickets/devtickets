import { Flex, FormErrorMessage, Input } from "@chakra-ui/react";
import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { LabelWithPopover, LabelWithPopoverProps } from "./LabelWithPopover";

type TextInputProps =
  & Omit<React.ComponentProps<typeof Input>, "name">
  & Pick<LabelWithPopoverProps, "label" | "popover">
  & {
    register: UseFormRegisterReturn;
    errors: Record<string, FieldError>;
  };

export const TextInput = (
  props: TextInputProps,
) => {
  const { label, popover, register, errors, ...rest } = props;
  return (
    <Flex direction={"column"} gap={2}>
      {label && (
        <LabelWithPopover
          label={label}
          popover={popover}
          elementName={register.name}
        />
      )}
      <Input
        id={register.name}
        borderRadius="lg"
        w="100%"
        size="lg"
        bg="white"
        {...rest}
        {...register}
      />
      <FormErrorMessage pl={1}>
        {errors[register.name]?.message}
      </FormErrorMessage>
    </Flex>
  );
};
