import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Textarea as ChakraTextArea,
} from "@chakra-ui/react";
import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { LabelWithPopover, LabelWithPopoverProps } from "./LabelWithPopover";

type TextAreaProps =
  & Omit<React.ComponentProps<typeof ChakraTextArea>, "name">
  & Pick<LabelWithPopoverProps, "label" | "popover">
  & {
    register: UseFormRegisterReturn;
    errors: Record<string, FieldError | undefined>;
    helperText?: string;
  };

export const TextArea = (
  props: TextAreaProps,
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
        <ChakraTextArea
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
