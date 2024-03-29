import { Page } from "@/components/PageLayouts/Page";
import { ApolloError } from "@apollo/client";
import { Flex, Skeleton } from "@chakra-ui/react";
import React from "react";
import EventCard from "../../Components/EventCard/EventCard";
import { GetMyEventsQuery, useGetMyEventsQuery } from "./getMyEvents.generated";

type Props = {};

const EventsSkeleton = () => {
  const fakeArray = new Array(3).fill(0);
  return (
    <>
      {fakeArray.map((a, i) => {
        return (
          <Skeleton
            key={i}
          >
            <EventCard
              slug="blankEvent"
              backgroundImage="https://source.unsplash.com/random/?conference"
              logo=""
              description=""
              name=""
              communityName=""
              start_date={undefined}
              end_date={undefined}
            />
          </Skeleton>
        );
      })}
    </>
  );
};

const EventContent = (
  { data, error }: { data?: GetMyEventsQuery; error?: ApolloError },
) => {
  return (
    <>
      {data?.eventsCollection?.edges?.map((event) => {
        if (event?.node) {
          return (
            <EventCard
              slug={event.node.slug}
              key={event.node?.id}
              backgroundImage={"https://source.unsplash.com/random/?conference"}
              logo={"https://source.unsplash.com/random/150x150/?face"}
              description={event.node.description}
              name={event.node.name}
              start_date={event.node.start_date}
              end_date={event.node.end_date}
              communityName={event.node?.communities?.name}
            />
          );
        }
      }).filter(Boolean)}
    </>
  );
};

export const MyEvents = (props: Props) => {
  const results = useGetMyEventsQuery();
  return (
    <Page title="Mis eventos">
      <Flex gap={9} flexWrap="wrap">
        {results.loading
          ? <EventsSkeleton />
          : <EventContent data={results.data} error={results.error} />}
      </Flex>
    </Page>
  );
};
