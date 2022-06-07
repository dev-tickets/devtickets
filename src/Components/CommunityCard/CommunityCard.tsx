import {
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

export default function CommunityCard(
  { logo, backgroundImage, name, description, slug }: {
    logo: string;
    backgroundImage: string;
    name: string;
    description: string;
    slug: string | undefined;
  },
) {
  const href = `/communities/${slug}`;

  return (
    <Center>
      <Flex
        height={450}
        flexDir="column"
        w={333}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"xl"}
        rounded={"md"}
        overflow={"hidden"}
        position="relative"
      >
        <Box
          h={"210px"}
          bg={useColorModeValue("black", "gray.100")}
          pos={"relative"}
          overflow="hidden"
        >
          <Box
            opacity={0.7}
          >
            <Image
              objectFit="cover"
              alt=""
              src={backgroundImage}
            />
          </Box>
        </Box>

        <Box p={6} pt={16} position="relative">
          <Flex
            position="absolute"
            width="fit-content"
            top={"-33%"}
            left="0"
            right="0"
            flexDir="column"
            p={1}
            borderRadius="full"
            justifyContent="center"
            marginLeft="auto"
            marginRight="auto"
            alignItems="center"
            bg={useColorModeValue("white", "gray.900")}
          >
            <Avatar
              size="xl"
              src={logo}
            />
          </Flex>
          <Stack>
            <Link href={href} passHref>
              <Heading
                as="a"
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                {name}
              </Heading>
            </Link>
            <Text color={"gray.500"}>
              {description}
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Center>
  );
}
