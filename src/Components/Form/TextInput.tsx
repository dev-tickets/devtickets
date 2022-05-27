import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { LabelWithPopover, LabelWithPopoverProps } from "./LabelWithPopover";

type TextInputProps =
  & Omit<React.ComponentProps<typeof Input>, "name">
  & Pick<LabelWithPopoverProps, "label" | "popover">
  & {
    register: UseFormRegisterReturn;
    errors: Record<string, FieldError>;
    helperText?: string;
  };

export const TextInput = (
  props: TextInputProps,
) => {
  const { label, popover, register, helperText, errors, ...rest } = props;
  const hasError = Boolean(errors[register.name]);
  return (
    <FormControl
      isRequired={register.required}
      label={label}
      isDisabled={register.disabled}
      isInvalid={hasError}
    >
      <Flex direction={"column"} gap={0}>
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
        {!hasError && <FormHelperText>{helperText}</FormHelperText>}
        {hasError && (
          <FormErrorMessage pl={1}>
            {errors[register.name]?.message}
          </FormErrorMessage>
        )}
      </Flex>
    </FormControl>
  );
};
