import { useUnsplashSearch } from "@/features/Unsplash";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Kbd,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Skeleton,
  Spinner,
  Text,
  useDisclosure,
  VisuallyHiddenInput,
} from "@chakra-ui/react";
import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { Basic } from "unsplash-js/dist/methods/photos/types";
import { SearchIcon, VerticalThreeDotsIcon } from "../Icons";
import { LoadImagesIllustration } from "../Ilustrations";
import { LabelWithPopover, LabelWithPopoverProps } from "./LabelWithPopover";

type OnImageSelected = (text: string) => void;

type UnsplashButtonProps =
  & Omit<React.ComponentProps<typeof VisuallyHiddenInput>, "name">
  & Pick<LabelWithPopoverProps, "label" | "popover">
  & {
    register: UseFormRegisterReturn;
    errors: Record<string, FieldError | undefined>;
    helperText?: string;
    previewImageURL: string;
    onImageSelected: OnImageSelected;
  };

const LoaderAndImage = (
  { photo, onImageSelected }: {
    photo: Basic;
    onImageSelected: (arg: string) => void;
  },
) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <Skeleton isLoaded={isLoaded}>
      <Box
        height={150}
        width={200}
        key={photo.id}
        borderRadius="base"
        position="relative"
        cursor={"pointer"}
        overflow={"hidden"}
        onClick={() => {
          onImageSelected("");
          onImageSelected(photo.urls.regular);
        }}
        boxShadow="xl"
        background={"gray.400"}
      >
        <Image
          _hover={{
            transform: "scale(1.2)",
          }}
          transitionProperty={"transform"}
          transitionDuration={"5000ms"}
          transitionTimingFunction={"ease-out"}
          height={"full"}
          onLoad={() => setIsLoaded(true)}
          width="full"
          src={photo.urls.thumb}
          alt={photo.alt_description || "no description"}
        />
        <Box
          background="blackAlpha.600"
          p={1}
          px={2}
          opacity={0.8}
          borderRadius="base"
          position={"absolute"}
          bottom={0}
          color="white"
          right={0}
        >
          <Text fontSize="smaller" fontWeight="bold">
            by: {photo.user.first_name}
          </Text>
        </Box>
      </Box>
    </Skeleton>
  );
};

const UnsplashSearch = (
  { onImageSelected }: { onImageSelected: OnImageSelected },
) => {
  const [text, setText] = React.useState("");
  const [results, nextPage] = useUnsplashSearch(text);

  const hasResults = results.results.length > 0;
  return (
    <>
      <ModalBody paddingY={8}>
        <Flex
          maxH="60vh"
          height="fit-content"
          minH={300}
          gap={8}
          flexDir="column"
          justifyContent={"space-between"}
        >
          <InputGroup>
            <InputLeftElement pt={2} fontSize="xl" pointerEvents="none">
              {results.fetching
                ? <Spinner color="purple" />
                : <SearchIcon color="gray.300" />}
            </InputLeftElement>
            <InputRightElement pt={2} mr={4} fontSize="xl" pointerEvents="none">
              <Kbd>esc</Kbd>
            </InputRightElement>
            <Input
              size="lg"
              type={"search"}
              placeholder="Busca en unsplash..."
              onChange={(e) => setText(e.target.value)}
            />
          </InputGroup>
          <Flex
            justifyContent={"center"}
            alignItems="flex-start"
            flexWrap={"wrap"}
            overflow={"scroll"}
            flex={1}
            gap={5}
          >
            {!hasResults && (
              <Flex
                width={"50%"}
                opacity={0.8}
                height={"100%"}
                gap={10}
                flexDir="column"
                justifyContent={"center"}
                alignItems="center"
              >
                <LoadImagesIllustration />
                <Heading display={"inline-flex"} fontSize="xl">
                  No Images Found
                </Heading>
              </Flex>
            )}
            {results.results.map(photo => {
              return (
                <LoaderAndImage
                  key={photo.id}
                  photo={photo}
                  onImageSelected={onImageSelected}
                />
              );
            })}
          </Flex>
          {hasResults && (
            <Flex height={"fit-content"} justifyContent={"center"}>
              <Button isLoading={results.fetching} onClick={nextPage}>
                Cargar Más
              </Button>
            </Flex>
          )}
        </Flex>
      </ModalBody>
    </>
  );
};

export const ImageSelectionField = (
  props: UnsplashButtonProps,
) => {
  const {
    label,
    popover,
    register,
    helperText,
    errors,
    setValue,
    previewImageURL,
    onImageSelected,
    ...rest
  } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [uploadModal, setUploadModal] = React.useState<
    "none" | "unsplash" | "file-upload"
  >("none");
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
        <VisuallyHiddenInput
          id={register.name}
          borderRadius="lg"
          {...rest}
          {...register}
        />

        <Box
          boxShadow="base"
          borderRadius="lg"
          width="100%"
          height="290"
          overflow="hidden"
          position="relative"
        >
          <Menu
            autoSelect={false}
            flip
            gutter={8}
            placement="left"
          >
            <MenuButton
              position="absolute"
              bottom={4}
              right={4}
              as={IconButton}
              aria-label="Image upload options"
              icon={<VerticalThreeDotsIcon />}
              variant="solid"
            >
            </MenuButton>
            <MenuList
              padding={2}
            >
              <MenuItem
                borderRadius={"base"}
                onClick={() => {
                  setUploadModal("unsplash");
                  onOpen();
                }}
              >
                Select from unsplash
              </MenuItem>
            </MenuList>
          </Menu>
          <Box
            height="full"
            width={"full"}
            backgroundImage={previewImageURL}
            backgroundPosition="center"
            backgroundSize={"cover"}
          />
        </Box>

        {!hasError && <FormHelperText>{helperText}</FormHelperText>}
        {hasError && (
          <FormErrorMessage pl={1}>
            {errors[register.name]?.message}
          </FormErrorMessage>
        )}
        <Modal
          isCentered
          isOpen={isOpen}
          onClose={onClose}
          onEsc={onClose}
          // onOverlayClick={onClose}
        >
          <ModalOverlay />
          <ModalContent width={"90vw"} maxW="1000px">
            {/*  */}
            {uploadModal === "unsplash" && (
              <UnsplashSearch
                onImageSelected={(text) => {
                  onImageSelected(text);
                  onClose();
                }}
              />
            )}
          </ModalContent>
        </Modal>
      </Flex>
    </FormControl>
  );
};
