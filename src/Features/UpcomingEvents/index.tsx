import { ApolloError } from "@apollo/client";
import { Flex, Skeleton } from "@chakra-ui/react";
import React from "react";
import CommunityCard from "../../Components/CommunityCard/CommunityCard";
import { GetEventsQuery, useGetEventsQuery } from "./getEvents.generated";

type Props = {};

const CommunitiesSkeleton = () => {
  const fakeArray = new Array(3).fill(0);
  return (
    <>
      {fakeArray.map((a, i) => {
        return (
          <Skeleton
            key={i}
          >
            <CommunityCard
              backgroundImage="https://source.unsplash.com/random/?conference"
              logo=""
              description=""
              name=""
              slug=""
            />
          </Skeleton>
        );
      })}
    </>
  );
};

const CommunitiesContent = (
  { data, error }: { data?: GetEventsQuery; error?: ApolloError },
) => {
  return (
    <>
      {data?.eventsCollection?.edges?.map((community) => {
        if (community?.node) {
          return (
            <CommunityCard
              key={community.node?.id}
              backgroundImage={"https://source.unsplash.com/random/?conference"}
              logo={"https://source.unsplash.com/random/150x150/?face"}
              description={community.node.description!}
              name={community.node.name}
              slug=""
            />
          );
        }
      }).filter(Boolean)}
    </>
  );
};

export const UpcomingEvents = (props: Props) => {
  const results = useGetEventsQuery();
  return (
    <Flex gap={9} flexWrap="wrap">
      {results.loading
        ? <CommunitiesSkeleton />
        : <CommunitiesContent data={results.data} error={results.error} />}
    </Flex>
  );
};
