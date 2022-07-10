import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import Link from "next/link";

export default function EventCard(
  {
    slug,
    name,
    description,
    communityName,
    start_date,
    end_date,
  }: {
    slug: string;
    logo: string;
    backgroundImage: string;
    name: string;
    description?: string | null;
    communityName?: string;
    start_date?: Date;
    end_date?: Date;
  },
) {
  const href = `/events/${slug}`;

  return (
    <Center py={6}>
      <Link href={href} passHref>
        <Flex
          as="a"
          w={"333px"}
          h={"450px"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
          flexDir={"column"}
        >
          <Image
            alt=""
            src={"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}
            boxSize={"100%"}
            fit={"cover"}
            flex={1}
          />
          <Flex flexDir={"column"} flex={1} p={6}>
            <Stack flex={1}>
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                Evento
              </Text>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                {name}
              </Heading>
              <Box>
                {description
                  ? (
                    <Text
                      noOfLines={2}
                      color={"gray.500"}
                    >
                      {description}
                    </Text>
                  )
                  : (
                    <Text
                      noOfLines={2}
                      color={"gray.400"}
                      fontStyle={"italic"}
                    >
                      Esta comunidad aún no ha agregado una descripción<Text
                        as={"span"}
                        fontStyle={"normal"}
                      >
                        😞
                      </Text>
                    </Text>
                  )}
              </Box>
            </Stack>
            <VStack spacing={2} align="stretch">
              <Text fontStyle={"italic"}>
                Creado por{" "}
                <Text fontWeight={600} as={"span"}>{communityName}</Text>
              </Text>
              {start_date && end_date
                ? (
                  <Text color={"gray.500"}>
                    {format(parseISO(start_date.toString()), "dd/MM/yyyy")} -
                    {" "}
                    {format(parseISO(end_date.toString()), "dd/MM/yyyy")}
                  </Text>
                )
                : (
                  <Text color={"gray.500"} fontStyle={"italic"}>
                    no hay fechas
                  </Text>
                )}
            </VStack>
          </Flex>
        </Flex>
      </Link>
    </Center>
  );
}
