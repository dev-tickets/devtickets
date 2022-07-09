import { Page } from "@/components/PageLayouts/Page";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import React from "react";
import { Get } from "type-fest";
import { CommunityQuery, useCommunityQuery } from "./getCommunity.generated";
interface CommunityContentProps {
  community: Get<CommunityQuery, "community.edges[0].node">;
}

const CommunityContent = (props: CommunityContentProps) => {
  let { community } = props;

  return (
    <div>
      <Heading
        as="h1"
        color={useColorModeValue("gray.700", "white")}
        fontSize={"2xl"}
        fontFamily={"body"}
      >
        {community?.name}
      </Heading>
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
            objectFit="fill"
            alt="cover"
            src={community?.image || ""}
          />
        </Box>
      </Box>
      <Text fontSize={"md"}>{community?.description}</Text>
      <Text fontSize={"md"} color={"gray.500"}>
        Creada en{" "}
        {format(parseISO(community?.created_at.toString()), "dd/MM/yyyy")}
      </Text>
    </div>
  );
};

interface CommunityProps {
  slug: string;
}

export const Community = (props: CommunityProps) => {
  const result = useCommunityQuery({ variables: { slug: props.slug } });

  const edges = result.data?.community?.edges || [];
  const community = edges?.at(0)?.node;

  return (
    <Page title="Comunidad">
      <Flex gap={9} flexWrap="wrap">
        {community && <CommunityContent community={community} />}
      </Flex>
    </Page>
  );
};
