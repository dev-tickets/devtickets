import {
  Flex,
  FormErrorMessage,
  Textarea as ChakraTextArea,
} from "@chakra-ui/react";
import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { LabelWithPopover, LabelWithPopoverProps } from "./LabelWithPopover";

type TextAreaProps =
  & Omit<React.ComponentProps<typeof ChakraTextArea>, "name">
  & Pick<LabelWithPopoverProps, "label" | "popover">
  & {
    register: UseFormRegisterReturn;
  };

export const TextArea = (
  props: TextAreaProps,
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
      <ChakraTextArea
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
